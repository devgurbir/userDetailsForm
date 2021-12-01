import React, {useState} from 'react'
import TableItem from "./TableItem"

function Table({data, sortFunction, filterFunction, delFunc, paginate}){
    const [selectedDept, setSelectedDept] = useState("")
    
    paginate();
    
    const handleSelectedDept = (e) => {
        const {name, value} = e.target;
        filterFunction(value)
    }
    return (
        <>
        <div>
            <p>Filter by department</p>
            <input onChange = {handleSelectedDept} type="radio" id="marketing" name="fav_language" value="marketing" />
            <label for="html">Marketing</label><br/>
            <input onChange = {handleSelectedDept} type="radio" id="sales" name="fav_language" value="sales" />
            <label for="css">Sales</label><br/>
            <input onChange = {handleSelectedDept} type="radio" id="operations" name="fav_language" value="operations" /> 
            <label for="javascript">Operations</label>
        </div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th onClick={sortFunction}>Salary</th>
                <th>Marital Status</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                { data.map( (el) => (<TableItem key={el.id} singleData = {el} deleteFunction = {delFunc} />)    ) }
            </tbody>
            
            
        </table>
        </>
    )
}

export default Table