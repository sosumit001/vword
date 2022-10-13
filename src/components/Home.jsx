import React from "react";
import './Home.css';

import vWordLogo from '../components/img/vwordlogoo.svg';
import Button from "./Button";
import { useRef } from "react";
import { TextControl } from "./textControl";

const Home = () => {
    const createRef = useRef();

    return (
        <div id="Home">
        <div id="vwordIntroPage">
       <object id="vWordLG"  type="image/svg+xml" data= {vWordLogo} width="36%">
        <img src={vWordLogo} alt="vword" />
      </object>
       <div id="vWordSlogn">
        <span>
“Everyone needs a place. It shouldn't be<br></br> inside of someone else”</span>
<span id="vwordWritePost">
<Button onWriteBtnClick = {()=>{createRef.current.style.left = '0%';}} bgColor="rgba(12, 12, 12, 0)"  value = "write"  C = "#111" W = "70px" H = "40px"/>
</span>
       </div>

        </div>
        <div ref={createRef} id="createPostPage">
            <TextControl/>
        </div>
        </div>
    )
}

export default Home;