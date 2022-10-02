import React from "react";
import './Image.css'

export const Image = (props) => 
{
    function handleWallBg(){
        var DisplayEle = document.getElementById('textDisplayContainer');
        var prevEle = document.querySelector('.wall-rel-bg');
        if(prevEle) 
        {
            DisplayEle.removeChild(prevEle);
        }

        var img = document.createElement('img');
        img.setAttribute('class','wall-rel-bg');
        img.setAttribute('src',props.svgEle)
        img.style.cssText = 'width:100%'
        
       
        DisplayEle.appendChild(img);
        
      
    }
    return(
        <img id="wallEle" src = {props.svgEle} onClick={handleWallBg} 
        width = {props.imgWidth }alt="img" />
    )
}