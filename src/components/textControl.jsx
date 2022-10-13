import React,{useEffect,useState,useRef} from "react";

import { Link } from "react-router-dom";
import '../components/textControl.css'

import Input from "./Input";
import Button from "./Button";
import { Image } from "./Image";

// background
import black_1 from './wallpapers/t-black-1.png'
import white_2 from './wallpapers/t-white-2.png'
import white_3 from './wallpapers/t-white-3.png'
import night_1 from './wallpapers/t-night-1.jpg';
//icons

import textEditIcon from './icons/text-edit.svg';


 const TextControl = () => {

 
    
    const [defaltFontSyle,setFontStyle] = useState({color:'rgb(231, 220, 220)',size:16});
    const textEditIconRef = useRef();
    const coverDisplayText = useRef();

   
    useEffect(()=>{  
   
            
    },[])

    let _displayFontStyle = {
        fontSize:defaltFontSyle.size,
        color:defaltFontSyle.color,
    }
    

    //handle text movement
   function handleTextMovement(){

    function removeTextMovement(){
        coverDisplayText.current.style.border ="none";
        document.removeEventListener('mousemove',moveTextContainer);
        document.removeEventListener('mouseup',removeTextMovement);
        document.removeEventListener('touchmove',moveTextContainer);
        document.removeEventListener('touchend',removeTextMovement);

    }
  
    document.addEventListener('mousemove',moveTextContainer);
    document.addEventListener('mouseup',removeTextMovement)
    document.addEventListener('touchmove',moveTextContainer);
    document.addEventListener('touchend',removeTextMovement);
   
    function moveTextContainer({movementY}){
        coverDisplayText.current.style.border =" 1px solid grey";
        let getStyle = window.getComputedStyle(coverDisplayText.current);

       
        var top = parseInt(getStyle.top);
       
      
        coverDisplayText.current.style.top = `${movementY + top}px`;

    }
    
   }
    // handle post text
   function handleTextDisplay(){
    var textContainer = document.getElementById('addAfterEffect');

    textContainer.style.transform = "scale(1)";

  
   }

 

    return (
       

        <> {/* input Box  */}
        
       
        <div id="writePostPage">
             {/* <Button value = 'download' onWriteBtnClick= {downloadImg} /> */}
        <Input inputId = "inputBox"></Input>
        {/* <Button onWriteBtnClick = {downloadImg} W = '80px' value = 'download'/> */}
        <div className="inputStylecontainer">
        <TextPropsContainer setFontS = {setFontStyle}/>
        </div>

    <div onClick={()=>{textEditIconRef.current.style.display = 'none'}} id="textDisplayContainer" >

    <img alt="defaultImg" className="wall-rel-bg" src={night_1} style={{"width": "100%"}} />
         <div onMouseLeave={()=>{
            textEditIconRef.current.style.display = 'none';
         }} onMouseOver={()=>{textEditIconRef.current.style.display = 'flex'}} ref={coverDisplayText} id="coverDisplayText"    onTouchStart={handleTextMovement} onMouseDown={handleTextMovement}>

            <span style={_displayFontStyle}  className="enableTextBoundary" id="dispTextArea">
            there are million place in this world<br></br>
but your heart is the only safe space I know</span>

           <div ref={textEditIconRef} id ="tControlIcons">
            <img  id="textEditIcon" style={{"display":"none"}} onClick={handleTextDisplay} width='30' src={textEditIcon} alt="edit" />
            </div>
         </div>
    </div>

        </div>
        </>
    )
}


const TextPropsContainer = (props) => {

    const fontFamilyT = [
        'Amatic SC',
        'Cormorant Upright',
        'Crete Round',
        'Fenix',
        'Pacifico',
        'Patrick Hand SC'
    ]

    
    const textContainerRef = useRef();
    const wallSapce = useRef();
    const textSpace = useRef();
    const displaySRef = useRef();
    const fontFRef = useRef();


    function handleWallD(e){
        
        textSpace.current.style.display = 'none';
        document.querySelector('.fontFamilyWrapper').style.display = 'none';
        wallSapce.current.style.display = 'flex';
        displaySRef.current.style = '--leftS:50%; --tContent: "wallpaper"'
        
    }
    function handleTextD(){
        textSpace.current.style.display = 'flex';
        wallSapce.current.style.display = 'none';
        displaySRef.current.style = '--leftS:0%; --tContent:"text"';
        
    }
   return(
    <div ref={textContainerRef} id="textControlContainer">

         <div ref={displaySRef} className="displayStyles">
         <Button  onWriteBtnClick = {handleTextD}  W = {"50%"} C = "white" H = {"100%"} bgColor="rgba(12,12,12,0)" value = "text" buttonId = "textStyleBtn"/>
         <Button  onWriteBtnClick = {handleWallD}  W = {"50%"} C = "white" H = {"100%"} bgColor="rgba(12,12,12,0)" value = "wallpaper" buttonId = "wallpaperStyleBtn"/>
         </div>

    <TextSpace tRef = {textSpace} setFontS = {props.setFontS}/>
    <WallpaperSpace wRef = {wallSapce} />
    <div ref = {fontFRef}  className="fontFamilyWrapper">
        <div onClick={()=>{
            textSpace.current.style.display = 'flex';
            fontFRef.current.style.display = 'none';
        }} className="fontReturnArrow">
        <Arrow/>
        </div>
    <div>
      {
        fontFamilyT.map((i) => (
          <FontFamily Aa = {i[0] + i[1]} value = {i} />
        ))
      }
    </div>
    </div>
    </div>
   )
}


const TextSpace = (props) => {
    
    //handleTextStyle
  function handleFontResize(e){
   let inputValue = parseInt(e.target.value)+2;
   if(inputValue%2 === 0){
      props.setFontS((prevS)=>{
       return { ...prevS,size:inputValue}
      })
   }
  }
  function handlefontColor(e){
   let inputValue = e.target.value;
   props.setFontS(prevC=>{
       return{...prevC,color:inputValue};
   })
}
function displayFontF(){
    props.tRef.current.style.display = 'none';
    document.querySelector('.fontFamilyWrapper').style.display = 'block';
}
  return (
    <div ref={props.tRef} className="textSpace">
   
    <div onClick={displayFontF} className="t-font-family">
        fontStyle
    </div>
    <div className="t-text-control-picker">
        <input onChange={handlefontColor} type="color" name="" id="" />
        <div className="t-resize-box">
            <input onChange={handleFontResize}  type="range" min="16" max = "24"   id="t-scale" />
        </div>
    </div>
</div>
  )
}
const WallpaperSpace = (props) => {

    return (
        <div ref = {props.wRef} className="wallpaperSpace">
       
        <div className="img-gallery">
            
            <Image imgWidth = '60px' svgEle = {night_1}></Image>
            <Image imgWidth = '60px' svgEle = {black_1}></Image>
            <Image imgWidth = '60px' svgEle = {white_2}></Image>
            <Image imgWidth = '60px' svgEle = {white_2}></Image>
            <Image imgWidth = '60px' svgEle = {white_3}></Image>
            <Image imgWidth = '60px' svgEle = {white_3}></Image>
            
        </div>
    </div>
    )
}

const Arrow = (props) => {

    return (
        <Link to={props.To}>
        <div  className = 'goToHome'>
  <div className = 'arrow-head'>
    <div></div>
    <div></div>
  </div>
  <div className = 'arrow-line'>
    
  </div>
</div>
        </Link>
    )
}

const FontFamily = (props) => {

    const style =  {
        fontFamily : `${props.value}`
    }

    function addFontF(){
        document.getElementById('coverDisplayText').style = `font-family:${props.value}`;
    }

    return (
        <div onClick = {addFontF} className="displayFontFamily">
            <span  style={style} className="fontFamilyIcon">{props.Aa}</span>
           { props.value}
        </div>
    )
}





export {
    TextControl,
  
};

