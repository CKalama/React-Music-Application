/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, jsx} from "@emotion/react";
//import "../App.css"

const Topbar = ({children}) => (
    <div
    className="Topbar"
    css={css `
    position: absolute;
    top: 0;
    height: 50px;
    background: #070707;
    left: 197px;
    width: calc(100% - 200px);
    padding: 20px;
    `}
    >
        <h1 css={css `text-align:center; color:red;`}>Play Music, Learn Music, Love Music!</h1>
        {children}
        
    </div>
)


export default Topbar
