/** @jsxImportSource @emotion/react */
import React from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css' 

const Playbar = ({children}) => (
    <div
    className= "Playbar"
    //Second way of Writing CSS with Emotion/Core. This allows you to write CSS within the HTML tags <> 
    //Absolute, meaning that it will be the same part of the screen no matter what
    //High z index value because it will always be in the front of the screen. 
    css= {css `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65px;
    background: #282828;
    z-index: 99;
    padding: 20px;
    `}
    >
        {children}

    </div>
)

export default Playbar
