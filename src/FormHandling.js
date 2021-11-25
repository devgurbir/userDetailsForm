import React, {useState, useRef} from 'react';

function FormHandling() {

    const [formState, setFormState] = useState({
      name: "",
      gender: "",
      maritalStatus: false
    })
  
    const handleChange = (e) => {
      const {name, value, type, checked} = e.target;
      const val = type === 'checkbox' ? checked : value
      setFormState({...formState, [name]: val })
    }
  
    const imageRef = useRef(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setFormState({...formState, [e.target.name]: file })
    }
  
    const inputRef = useRef(null);
  
    const focusOnInput = () => {
      if(inputRef.current){
        inputRef.current.focus();
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  
    return (
      <div>
        <form onSubmit = {handleSubmit} >
          <div>
            <label>Name</label>
            <input ref = {inputRef} value={formState.name} onChange = {handleChange} name="name" />
          </div>
  
          <div>
            <label>Gender</label>
            <select onChange = {handleChange} value={formState.gender} name="gender">
              <option key="m">M</option>
              <option key="f">F</option>
            </select>
          </div>
  
          <div>
            <label>Marital Status</label>
            <input onChange = {handleChange} checked={formState.maritalStatus} type="checkbox" name="maritalStatus" />
          </div>
  
          <div>
            <label>Profile Picture</label>
            <input ref = {imageRef} onChange = {handleImageChange} type="file" name="image" />
          </div>
  
          <div>
          <input  />
          <button onClick = {focusOnInput}>Focus</button>
            </div>
          <input type="submit" />
        </form>
      </div>
    )
  }
  
  export default FormHandling;
  
  // function App() {
  //   const [value, setValue] = useState(0);
  //   const timerRef = useRef(null)
  
  //   const startTimer = () => {
  //     if(timerRef.current === null){
  //       timerRef.current = setInterval( () => {
  //         setValue( prev => prev + 1)
  //     }, 1000)
  //     }
      
  //   }
  
  //   const pauseTimer = () => {
  //     clearInterval(timerRef.current)
  //     timerRef.current = null;
  //   }
  
  //   const resetTimer = () => {
  //     pauseTimer();
  //     setValue(0);
  //   }
  
  //   return (
  //     <div className="App">
  //       <h1>Timer</h1>
  //       <h3>{value}</h3>
  //       <button onClick = {startTimer}>Start</button>
  //       <button onClick = {pauseTimer}>Pause</button>
  //       <button onClick = {resetTimer}>Reset</button>
  //     </div>
  //   );
  // }