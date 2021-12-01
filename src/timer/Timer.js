import React, { useState, useEffect, useRef } from "react";

export default function Timer({init, end}) {
    const [time, setTime] = useState(init);
  const idRef = useRef(null);
  const timeRef = useRef(null);
  useEffect(() => {
    return () => clearInterval(idRef.current);
  }, []);

  if(timeRef.current && timeRef.current.textContent == end - 1){
        clearInterval(idRef.current);
  }

  const startTimer = () => {
    if (!idRef.current) {
      idRef.current = setInterval(() => {
        return setTime((t) => t + 1);
      }, 500);
    }
  };

  const pauseTimer = () => {
    clearInterval(idRef.current);
    idRef.current = null;
    console.log(idRef.current);
  };

  const resetTimer = () => {
    clearInterval(idRef.current);
    setTime(init);
  };

  return (
    <div className="Timer">
      <h3 ref={timeRef}>{time}</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
