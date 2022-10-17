import React from "react";
import './Home.css';

import vWordLogo from '../components/img/vwordlogoo.svg';
import Button from "./Button";
import Input from "./Input";
import { useRef } from "react";

import NavigateArrow from '../components/icons/arrow_right_alt.svg'

import { TextControl } from "./textControl";

const Home = () => {
   
    
    const createRef = useRef();

    function handlePubishPage(){
        var Header = document.querySelector('.Header');
    
        createRef.current.style.display= 'block';
        if(Header) Header.style.display = 'none';
    }

    return (
        <div id="Home">
        <div id="vwordIntroPage">
       <object id="vWordLG"  type="image/svg+xml" data= {vWordLogo} width="36%">
        <img src={vWordLogo} alt="vword" />
      </object>
       <div id="vWordSlogn">
        
<span id="vwordWritePost">
<Button onWriteBtnClick = {handlePubishPage} bgColor="rgba(12, 12, 12, 0)"  value = "write"  C = "#111" W = "70px" H = "40px"/>
</span>
       </div>
        </div>
        <div ref={createRef} id="createPageContainer">
            <div id="c_pageNavigator"> 
                <span> <img style={{"transform":"rotate(180deg)"}} width={'40px'} src={NavigateArrow} alt="left "/></span>
                <h3>Compose</h3>
                <span> <img width={'40px'} src={NavigateArrow} alt="left "/></span>
            </div>
            <TextControl/>
            <div id="createWriteDisplay">
            <Input/>
            </div>
        </div>
        </div>
    )
}



export default Home;