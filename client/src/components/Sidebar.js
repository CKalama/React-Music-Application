/** @jsxImportSource @emotion/react */
import React from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css'
//Because we are using Webpack, it does not matter what you name this logo. Could be anything. 
import logo from "../assets/musicReactLogo.png"

const Sidebar = () => {
    return ( 
    <ul className="Sidebar" css={sidebarCSS}>
        
        <img src={logo} />

        <button>
        <a href="https://www.youtube.com/" target="_blank">Click</a>
        </button>

    </ul>

    )}
    



    
    //New Way of writng CSS with Emotion/core, Now I can even use classNames to invoke CSS below and just do all CSS styling below 
const sidebarCSS = css `
    width: 170px;
    height: 850px;
    background: green;
    padding: 15px;

    img {
        height:100px;
        margin-left:10px;
    }

    button {
    width:100px;
    text-align:center;
    margin-left:25px;
    border-color:red;
    font-family: 'Roboto Slab', serif; 
    }
`


export default Sidebar