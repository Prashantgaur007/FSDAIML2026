import React, { useState } from "react";

function StateHandling() {
    const [counter, setCounter] = useState(20);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    function increment() {
        setCounter(counter + 10)
    }
    function bgColor(){
        setRed(Math.random()*255)
        setGreen(Math.random()*255)
        setBlue(Math.random()*255)
    }
    return (
        <>
            <div style={{ padding: '20px', backgroundColor: `rgb(${red},${green},${blue})`, border: '2px solid white', fontSize: '40px', color: 'red', height: '500px', width: '500px', fontWeight: '700', margin: 'auto' }}>CounterApp
                <h2 style={{ color: 'blue', marginTop: '20px' }}>Counter={counter}</h2>
                <button onClick={increment} style={{ marginRight: '20px', height: '50px', fontSize: '20px' }}>IncreaseCounter</button>
                <button onClick={() => setCounter(counter - 5)} style={{ height: '50px', fontSize: '20px' }}>DecrementCounter</button>
                <button onClick={bgColor} style={{ height: '50px', fontSize: '20px',marginTop:'20px' }}>Change Color</button>
            </div>
        </>
    )
}

export default StateHandling