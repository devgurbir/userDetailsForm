import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import Table from "./Table"

function UserDetailsForm(){
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        department: "",
        salary: "",
        maritalStatus: false,
        profilePicture: ""
    })

    const imageRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null)

    const handleImageForm = () => {        
        const file = imageRef.current.files[0]
        const src = URL.createObjectURL(file);
        setPreviewImage(src);
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target
        const val = e.target.type === 'checkbox' ? e.target.checked : value;
        setFormState({...formState, [name]: val})
    }

    function fetchData(){
        return fetch(`http://localhost:3000/employeeData?_page=${currentPage}&_limit=5`)
        .then(res => res.json())
        .then(res => res)
    }

    const [userData, setUserData] = useState([])
    const [counter, setCounter] = useState(0);

    useEffect( async () => {
        const data = await fetchData();
        setUserData(data)
    }, [counter])

    const handleFetchData = async () => {
        const data = await fetchData();
        console.log(data)
    }
    
    async function submitFormData(e) {
        e.preventDefault()
        setCounter(counter + 1)
        return await fetch(`http://localhost:3000/employeeData`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(formState)
        })
    }

    const sortSalary = async () => {
        const data = await fetch("http://localhost:3000/employeeData?_sort=salary&_order=desc")
        .then(res => res.json())
        .then(res => res)
        setUserData(data)
    }

    const filterDept = async (dept) => {
        const data = await fetch(`http://localhost:3000/employeeData?department=${dept}`)
        .then(res => res.json())
        .then(res => res)
        setUserData(data)
    }

    const deleteFunction = async (e) => {
        const id = Number(e.target.name);
        const data = await fetch(`http://localhost:3000/employeeData/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        setCounter(counter + 1)
    }

    const [currentPage, setCurrentPage] = useState(1)

    const handlePagination = () => {
        console.log(userData.length)
    }


    return(
        <div className="formDiv">
            <form onSubmit={submitFormData}>
                <div>
                    <label>Name</label>
                    <input onChange={handleFormChange} value={formState.name} type="texxt" name="name" />
                </div>

                <div>
                    <label>Age</label>
                    <input onChange={handleFormChange} value={formState.age} type="number" name="age" />
                </div>

                <div>
                    <label>Department</label>
                    <select onChange={handleFormChange} value={formState.department} name="department">
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="engineering">Engineering</option>
                        <option value="operations">Operations</option>
                    </select>
                </div>

                <div>
                    <label>Salary</label>
                    <input onChange={handleFormChange} value={formState.salary} type="number" name="salary" />
                </div>

                <div>
                    <label>Marital Status</label>
                    <input onChange={handleFormChange} checked={formState.maritalStatus} type="checkbox" name="maritalStatus" /> 
                     
                </div>

                <div>
                    <label>Profile Picture</label>
                    <input onChange = {handleImageForm} ref={imageRef} type="file" name="profilePic" />
                    {previewImage && <img src={previewImage} height="100" width="100" />}
                </div>

                <div>
                <input type="submit" value="Submit" />
                </div>


            </form>

            <div>
                <Table paginate = {handlePagination} delFunc = {deleteFunction} filterFunction = {filterDept} sortFunction = {sortSalary} data = {userData} />
            </div>
        </div>
    )
}

export default UserDetailsForm