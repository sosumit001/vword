import React from "react";
import './Header.css'




import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";



// iconse



const Header = () => {

    const [vMenuClick,setVMenuclicked] = useState(false);
    const refBar = useRef();


    

 
   const linkStyle = {
    "textDecoration":"none",
    "color":"#111",
   }

   function handleSideBar(e){
    var bars = document.querySelectorAll('#vwordMenu div');
    if(!vMenuClick)
    {
        refBar.current.style.cssText = "left:-25%";
        bars.forEach((e,k)=>{
           e.removeAttribute('class');
           e.setAttribute('class','menu-bars-')
        })

        setTimeout(() => {
            setVMenuclicked(true)
        }, 200);
    }
    else
    {
        refBar.current.style.cssText = "left:-450%";
        bars.forEach((e,k)=>{
            e.removeAttribute('class');
            e.setAttribute('class','menu-bars')
         })

        setTimeout(() => {
            setVMenuclicked(false)
        }, 200);
    }
   }
  

  
  

    
    // function downloadImg(){
    //     const postElement = document.getElementById('textDisplayContainer');
    //     html2canvas(postElement,{allowTaint: true}).then((canvasImg)=>{
    //         var aTag = document.createElement('a');
    //         aTag.download = `jpgImg ${Math.floor(Math.random(110))}.jpg`
    //         aTag.href = canvasImg.toDataURL('img/png',0.1);
    //         console.log(aTag.href);  
            
    //     })
    //    }

    return <>
    <ul className="Header">
        <div ref = {refBar} id="vwordSideBar">
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/'><h3 onClick={handleSideBar} >Home</h3></Link></div>
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/profile'><h3 onClick={handleSideBar} >Profile</h3></Link></div>
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/about'><h3>About</h3></Link></div>
        </div>
        <div  id="WINDOWvwordSideBar">
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/'><h3 onClick={handleSideBar}>Home</h3></Link></div>
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/profile'><h3 onClick={handleSideBar}>Profile</h3></Link></div>
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/about'><h3 onClick={handleSideBar}>About</h3></Link></div>
        </div>
        <div onClick={handleSideBar} id="vwordMenu">
            <div className="menu-bars"></div>
            <div className="menu-bars"></div>
            <div className="menu-bars"></div>
        </div>

    </ul>
    </>
}




export default Header;
