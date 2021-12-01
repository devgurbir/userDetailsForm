import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
import Timer from "./timer/Timer"

function App(){
  const [showTimer, setShowTimer] = useState(true);
  const toggleTimer = () => {
    setShowTimer(!showTimer)
  }

  return (
    <>
    {showTimer && <Timer init = {0} end = {10} />}
    <button onClick = {toggleTimer}>{showTimer ? "Hide Timer" : "Show Timer"}</button>
    </>
  )
}

export default App