import React from "react";
import ListItem from "./ListItem";

import homeF from './navicons/homeFront.svg';
import profileF from './navicons/profileFront.svg';
import build from './navicons/build.svg'

// iconse

const HeaderStyleSheet = {
    maxWidth:'664px',
    height:'50px',
    backgroundColor:' #111',
    position:'sticky',
    display:'flex',
    top:'80%',
    
    justifyContent:'space-evenly',
    paddingTop:'15px',
    margin:'auto',
    borderRadius:'8px',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    zIndex:'250'
   
  
}

const Header = () => {


    return <>
    <ul style={HeaderStyleSheet} className="Header">
        <ListItem imgSrc = {homeF} type = 'home'></ListItem>
        <ListItem type = 'search'></ListItem>
        <ListItem imgSrc = {build} type = 'build'></ListItem>
        <ListItem type = 'notification'></ListItem>
        <ListItem imgSrc = {profileF} type = 'profile'></ListItem>
        
    </ul>
    </>
}

export default Header;
