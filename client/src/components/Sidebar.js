import React from 'react'
import {css, jsx} from "@emotion/react"
import logo from "../assets/musicReactLogo.png"

const Sidebar = ({children}) => (
    <div
        className="Sidebar"
        css={css `
            width:200px;
            height:100%;
            background: green;
            padding: 20px;
        `}
    >
        <img src={logo} height={150} />
        {children}

    </div>

)

export default Sidebar