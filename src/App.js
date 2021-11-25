import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';

function App(){

  const inputRef = useRef(null);

  const activateFocus = () => {
    inputRef.current.focus();
  }

  return (
    <div style = {{ margin: "20px" }}>
      <div>
        <input style={{display: "block"}} ref={inputRef} type="text" placeholder = "Click on button to activate focus" />
      </div>
      <br/>
      <div>
        <button style={{display: "block"}} onClick = {activateFocus}>Click To Focus</button>
    </div>
    </div>
  )
}

export default App