
import React from "react";

import Button from "./Button";
import inputBg from './img/input-bg.svg';
import './Input.css';



const Input = (props) => {

    // useState-1 inorder to store numbers
   
    const stylesheet = {
        "backgroundImage":`url(${inputBg})`,
        "backgroundRepeat":"no-repeat",
        "backgroundPosition":"center",
        // "background-size":""
    }
    function handleCloseTextEve(){
        var displeObj = document.getElementById('coverDisplayText');
        var textObj = document.getElementById
        ('addAfterEffect');
        var textEdit = document.getElementById('textEditIcon');
        var tArea = document.getElementById(props.inputId);
        var dArea = document.getElementById('dispTextArea');
        dArea.innerText = "";
       
        // var textArea = document.getElementById('inputBox');
        textObj.style.transform = 'scale(0)'; 
        textEdit.style.display = 'block'; 

       
        dArea.innerText = tArea.value;
       
        displeObj.append(dArea);
    }



  
   

    return (
        <>
        <div id="addAfterEffect">
        <Button onWriteBtnClick = {handleCloseTextEve} H = "30px" W = "47px" C = "black" value = "done" buttonId = "closeTextBtn"/>
        <textarea spellCheck="false" placeholder="write......" style={stylesheet} defaultValue = " there are million place in this world but your heart is the only safe space I know"  id={props.inputId} ></textarea>
        </div>
        </>
    )
}
export default Input;


