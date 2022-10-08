import React from "react";
import './Header.css'

import homeB from './navicons/homeFront.svg';
import homeF from './navicons/homeBack.svg';


import profileB from './navicons/profileBack.svg';
import profileF from './navicons/profileFront.svg'

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
    const [isPClicked,setIsPClicked] = useState(false);
    

    const buildRef = useRef();
    const toggleClass =['upper-build-part','lower-build-part']
 
   
  
    function handleHomeIcon(){
        if(!isHClicked)setHClicked(true)
        if(isPClicked) setIsPClicked(false);
        if(isBCliced) setIsBClicked(false)
        var buildIcons = document.querySelectorAll('#build-part');
        buildIcons.forEach((e,i)=>{
            e.style = 'margin-left:45%'
            e.removeAttribute('class')
        }) 
    }
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
            setIsPClicked(false);
          
           }, 300);
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
               

            }, 300);
        }
    }
    function handleProfileIcon(){
        if(!isPClicked) setIsPClicked(true);
        if(isHClicked) setHClicked(false);

        if(isBCliced) setIsBClicked(false)
        var buildIcons = document.querySelectorAll('#build-part');
        buildIcons.forEach((e,i)=>{
            e.style = 'margin-left:45%'
            e.removeAttribute('class')
        }) 
    }

    return <>
    <ul style={HeaderStyleSheet} className="Header">
        <li onClick={handleHomeIcon}> 
            <Link to={'/'}>
            <img src={(isHClicked)?homeF:homeB} alt="home" title="home" /> 
            </Link>
        </li>
       <li onClick={handleBuildIcon}>
        <div style={(isBCliced)?{"background":"white"}:{"background":"#D9D9D9"}} ref={buildRef}  className = 'build-icon'>
  <Link to= {(!isBCliced)?'/build':'/'} >
  <div id = 'build-part'></div>
    <div className = 'middle-build-part'></div>
  <div id = 'build-part'></div>
  </Link>
 </div>
       </li>
       <li>
        <Link  to = '/profile'>
        <img onClick={handleProfileIcon} src={(!isPClicked)?profileB:profileF} alt="profile" title="profile" /> 
        </Link>
       </li>
    </ul>
    </>
}




export default Header;
