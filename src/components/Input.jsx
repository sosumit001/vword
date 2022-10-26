
import React from "react";



import './Input.css';



const Input = (props) => {

    // useState-1 inorder to store numbers
   

    return (
        <>
        <div id="addAfterEffect">
        <textarea ref={props.inRef} spellCheck="false" placeholder="write......"   id={props.inputId} ></textarea>
        </div>
        </>
    )
}
export default Input;


