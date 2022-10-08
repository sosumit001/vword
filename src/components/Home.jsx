import React from "react";
import './Home.css';
import vWordLogo from '../components/img/vwordlogoo.svg'

const Home = () => {

    return (
        <div id="Home">
        <img id="vWordLogo" alt = "v-word" src={vWordLogo} width = '300px'  />
        </div>
    )
}

export default Home;