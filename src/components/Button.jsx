import React from "react";

const Button = (props) => {

    function handleButtonStructure(C,W,H){
        const bStyleSheet = {
            
            "width":W,
            "height":H,
            "backgroundColor":C,
        }
        return bStyleSheet;
    }
    
    return(
        <>
        <button disabled = {props.btnDisable}  onClick={props.onWriteBtnClick} id={props.buttonId} style={handleButtonStructure(props.bgColor,props.W,props.H)}>{props.value}</button>
        </>
    )
}

export default Button;