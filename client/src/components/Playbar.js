/** @jsxImportSource @emotion/react */
import React from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css' 

const Playbar = ({children}) => (
    <div
    className= "Playbar"
    //Second way of Writing CSS with Emotion/Core. This allows you to write CSS within the HTML tags <> 
    css= {css `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: #282828;
    z-index: 99;
    padding: 20px;
    `}
    >
        {children}

    </div>
)

export default Playbar
