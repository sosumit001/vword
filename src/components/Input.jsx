
import React, { useState } from "react";
import { useRef } from "react";




import './Input.css';



const Input = (props) => {
    const [tLen,setTLen] = useState(0);
    const tele = useRef();
    // useState-1 inorder to store numbers
    function handleChangeEves(e){
        let len = e.target.value.length;
        (len >= 1)? tele.current.style.transform = "scale(1)":
        tele.current.style.transform = "scale(0)"
        if(len <= 250)
        {
            setTLen(len);
        }
        
        
    }
  
    return (
        <>
        <div id="addAfterEffect">
        <textarea maxLength={250} onChange={handleChangeEves} ref={props.inRef} spellCheck="false" placeholder="write......"   id={props.inputId} ></textarea>
        <div ref={tele} id="textScale">
        <span>{tLen}/250</span>
        </div>
        </div>
        </>
    )
}
export default Input;


