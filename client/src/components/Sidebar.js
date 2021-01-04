import React from 'react'
import {css} from "@emotion/react"
//import '../App.css'
import logo from "../assets/musicReactLogo.png"

const Sidebar = ({children}) => (
    <div
        className="Sidebar"
        css={css `
            width: 200px;
            height: 100%;
            background: green;
            padding: 15px;
        `}
    >
        <img src={logo} height={100} />
        {children}

    </div>

)

export default Sidebar