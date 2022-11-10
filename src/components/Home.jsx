import React from "react";
import './Home.css';

// import vWordLogo from '../components/img/vwordlogoo.svg';
import Button from "./Button";
import Input from "./Input";
import { useRef } from "react";
import { TextControl } from "./textControl";


const Home = () => {
   
    
    const createRef = useRef();
    const inputRef = useRef();
    const CWDisplay = useRef();

    function showPublishPage(){
       let vTxt = document.querySelector('.enableTextBoundary');
       let textValue = inputRef.current.value;

       if(textValue.length > 4)
       {
        CWDisplay.current.style.left = "-50%";
        vTxt.innerHTML = textValue;
       }
    }

    return (
        <div id="Home">
        <div id="vwordIntroPage">
        </div>
        <div ref={createRef} id="createPageContainer">
            <TextControl  />
            <div ref={CWDisplay} id="createWriteDisplay">
            <Input inRef = {inputRef} />
            <Button onWriteBtnClick = {showPublishPage} value = "next" W="60px" H="40px" />
            </div>
        </div>
        </div>
    )
}



export default Home;