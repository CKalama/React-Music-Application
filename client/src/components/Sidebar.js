/** @jsxImportSource @emotion/react */
import React from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css'
//Because we are using Webpack, it does not matter what you name this logo. Could be anything. 
import logo from "../assets/musicReactLogo.png"

const Sidebar = ({children}) => (
    <div
        className="Sidebar"
        css={css `
            width: 170px;
            height: 875px;
            background: green;
            padding: 15px;
            `}
        
    >
        
        <img src={logo} 
        css={css `
            height:100px;
            margin-left:10px;
            
            `
            } 
        />

        <button css={buttonCSS}>
        <a href="https://www.youtube.com/" target="_blank">Click</a>
        </button>
        {children}

    </div>

)

const buttonCSS = css `
width:100px;
text-align:center;
margin-left:25px;
border-color:red;

`

export default Sidebar