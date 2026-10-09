import React, { useState } from "react";
import pic from '../images/prashant.png'
function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(200);
    const [catWidth, setCatWidth] = useState(200);
    const [catRotate, setCatRotate] = useState(0);
    const [divmar, setDivMar] = useState(0);

    function setCH() {
        setCatHeight(catHeight + 10);
    }
    function setWH() {
        setCatWidth(catWidth + 10);
    }
    function DsetCH() {
        setCatHeight(catHeight - 10);
    }
    function DsetWH() {
        setCatWidth(catWidth - 10);
    }
    function setR() {
        setCatRotate(catRotate + 90);
    }
    function setRM() {
        setDivMar(divmar - 10);
    }
    function setLM() {
        setDivMar(divmar + 10);
    }
    return (
        <div>
            <h2 style={{ color: 'red', backgroundColor: 'green' }}>ImageManipulation</h2>
            <div style={{ border: '2px solid white', height: '400px', width: '400px', marginRight: `${divmar}px`, marginLeft: `${divmar}px`, backgroundColor: 'white' }}>
                <img src={pic} height={catHeight} width={catWidth} style={{ transform: `rotate(${catRotate}deg)` }}></img>
            </div>

            <div>
                <button onClick={setCH}>Enhance Height</button>
                <button onClick={setWH}>Enhance Width</button>
                <button onClick={DsetCH}>Dec Height</button>
                <button onClick={DsetWH}>Dec Width</button>
                <button onClick={setR}>Rotate</button>
                <button onClick={setRM}>RightMargin</button>
                <button onClick={setLM}>LeftMargin</button>
            </div>
        </div>
    )
}
export default ImageManipulation