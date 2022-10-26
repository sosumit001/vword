import React from "react";
import './Home.css';

// import vWordLogo from '../components/img/vwordlogoo.svg';
import Button from "./Button";
import Input from "./Input";
import { useRef } from "react";

import NavigateArrow from '../components/icons/arrow_right_alt.svg'

import { TextControl } from "./textControl";

const Home = () => {
   
    
    const createRef = useRef();

    // function handlePubishPage(){
    //     var Header = document.querySelector('.Header');
    
    //     createRef.current.style.display= 'block';
    //     if(Header) Header.style.display = 'none';
    // }

    return (
        <div id="Home">
        <div id="vwordIntroPage">
        </div>
        <div ref={createRef} id="createPageContainer">
            <TextControl/>
            <div id="createWriteDisplay">
            <Input/>
            <Button value = "next" W="60px" H="40px" />
            </div>
        </div>
        </div>
    )
}



export default Home;