import React from "react";
import './Header.css'




import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";



// iconse



const Header = () => {

 
    const [vMenuClick,setVMenuclicked] = useState(false);
    const [vCreateClicked,setVCreateClicked] = useState(false);
    const refBar = useRef();
    const refHeader = useRef();
    const refPostIc = useRef();
    
    
 
   const linkStyle = {
    "textDecoration":"none",
     "color":"white"
   }

   function handleSideBar(e){
    var bars = document.querySelectorAll('#vwordMenu div');
    var Home = document.getElementById('Home');
    if(!vMenuClick)
    {
        if(Home) Home.style = '--HomeB:grayscale(100%)';
        refBar.current.style.cssText = "transform: rotate(0deg);"

        setTimeout(() => {
            bars.forEach((e,k)=>{
                e.removeAttribute('class');
                e.setAttribute('class','menu-bars-')
             });
            setVMenuclicked(true);
        }, 50);
    }
    else
    {
        if(Home) Home.style = '--HomeB:brightness(100%)';
        refBar.current.style.cssText = "transform: rotate(90deg);"

        setTimeout(() => {
            bars.forEach((e,k)=>{
                e.removeAttribute('class');
                e.setAttribute('class','menu-bars')
             });
            setVMenuclicked(false);
        }, 50);
    }
   }
   function createPostPage(){

    let cPageContainer = document.getElementById('createPageContainer');
    if(!vCreateClicked)
    {
        if(cPageContainer) cPageContainer.style.transform = "scale(100%)";
        refPostIc.current.style.cssText = "transform:rotate(45deg); --PICcolor:#555;";
      
        setTimeout(() => {
            setVCreateClicked(true);
        }, 300);
    }
    else
    {
        if(cPageContainer) cPageContainer.style.transform = "scale(0%)";
        refPostIc.current.style.cssText = "transform:rotate(0deg); --PICcolor:#111;";
        setTimeout(() => {
            setVCreateClicked(false);
        }, 300);
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
    <ul ref={refHeader} className="Header">
            <div ref = {refBar} id="vwordSideBar">
           
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/vword'><h3 onClick={handleSideBar} >HOME</h3></Link></div>
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/vword/profile'><h3 onClick={handleSideBar} >PROFILE</h3></Link></div>
            <div className='nav-icon-link'><Link style = {linkStyle}  to='/vword/about'><h3>ABOUT</h3></Link></div>
        </div>
      
        <div onClick={handleSideBar} id="vwordMenu">
            <div className="menu-bars"></div>
            <div className="menu-bars"></div>
            <div className="menu-bars"></div>
        </div>
        <div id="vwordMenu">
            <h2>vWord </h2>
        </div>
        <div ref={refPostIc} onClick={createPostPage} id="vWordCreatePostBtn">+</div>
        
       
    </ul>
  
    </>
}




export default Header;
