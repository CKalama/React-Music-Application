/** @jsxImportSource @emotion/react */
import React from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css'
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
        
        <img src={logo} height={115} />
        <button>
        <a href="https://www.youtube.com/" target="_blank">Click</a>
        </button>
        {children}

    </div>

)

export default Sidebar