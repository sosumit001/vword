import React from "react";
import './Header.css'

import homeF from './navicons/homeFront.svg';
import homeB from './navicons/homeBack.svg';

import profileF from './navicons/profileFront.svg';
import profileB from './navicons/profileBack.svg';

import { useState,useRef } from "react";
import { Link } from "react-router-dom";


// iconse

const HeaderStyleSheet = {
 
    height:'24px',
    // backgroundColor:' #111',
    justifyContent:'center',
    zIndex:'250',
    display:'flex',
    alignItems:'center',
}

const Header = () => {
    
    const [isHClicked,setHClicked] = useState(true);
    const [isBCliced,setIsBClicked] = useState(false);
    

    const buildRef = useRef();
    const toggleClass =['upper-build-part','lower-build-part']
 
    function handleBuildIcon(){
      
        var buildIcons = document.querySelectorAll('#build-part');
        if(!isBCliced)
        {
          
            buildIcons.forEach((e,i)=>{
                e.style = 'margin-left:0%'
                e.setAttribute('class',toggleClass[i]);
            })
           setTimeout(() => {
            setIsBClicked(true)
            setHClicked(false);
           }, 100);
        }
        if(isBCliced)
        {
          
            buildIcons.style = 'margin-left:45%';
            buildIcons.forEach((e,i)=>{
                e.style = 'margin-left:45%'
                e.removeAttribute('class')
            }) 
            setTimeout(() => {
                setIsBClicked(false)
                setHClicked(true);
            }, 100);
        }
    }

    return <>
    <ul style={HeaderStyleSheet} className="Header">
        <li> <img src={(isHClicked)?homeB:homeF} alt="home" title="home" /> </li>
       <li onClick={handleBuildIcon}>
        <Link to = {(!isBCliced)?'/build':'/'} >
        <div ref={buildRef}  className = 'build-icon'>
  <div id = 'build-part'></div>
    <div className = 'middle-build-part'></div>
  <div id = 'build-part'></div>
 </div>
 </Link>
       </li>
       <li>
        <Link  to = '/profile'>
        <img src={profileB} alt="profile" title="profile" /> 
        </Link>
       </li>
    </ul>
    </>
}




export default Header;
