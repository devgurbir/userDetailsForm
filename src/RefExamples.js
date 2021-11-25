import React, {useState, useRef} from 'react';

function RefExamples() {
    const [value, setValue] = useState(0);
    const timerRef = useRef(null)
  
    const startTimer = () => {
      if(timerRef.current === null){
        timerRef.current = setInterval( () => {
          setValue( prev => prev + 1)
      }, 1000)
      }
      
    }
  
    const pauseTimer = () => {
      clearInterval(timerRef.current)
      timerRef.current = null;
    }
  
    const resetTimer = () => {
      pauseTimer();
      setValue(0);
    }

    const scrollRef = useRef(null);

    const scrollToTop = () => {
        scrollRef.current.scrollTop = 0;
    }

    const [imageSrc, setImageSrc] = useState(null);
    const imageRef = useRef(null);
    
    const onImageChange = (e) => {
        let file = imageRef.current.files[0];       
        const imageURL = URL.createObjectURL(file)
        setImageSrc(imageURL)
    }

    

  
    return (
      <div className="App">
          <div>
        <h1>Timer</h1>
        <h3>{value}</h3>
        <button onClick = {startTimer}>Start</button>
        <button onClick = {pauseTimer}>Pause</button>
        <button onClick = {resetTimer}>Reset</button>
        </div>

        {/* Overflow container */};
        <div>
            <div ref={scrollRef} style={{maxHeight:200, border:"1px solid black", overflow: "auto"}}>
                <div  style={{height:1000, width: 300, border:"1px solid green"}}>
                
                </div>
            </div>
            <button onClick = {scrollToTop}>Scroll To Top</button>
        </div>

        {/* Form to preview image*/}
        <div>
            <form>
                <input ref={imageRef} onChange = {onImageChange} type="file" />
            </form>
            {imageSrc && <img src={imageSrc} />}
        </div>

      </div>
    );
  }

  export default RefExamples