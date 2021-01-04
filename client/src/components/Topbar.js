/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, jsx} from "@emotion/react";
//import "../App.css"

const Topbar = ({children}) => (
    <div
    className="Topbar"
    csx={css `
    position: absolute;
    top: 0;
    height: 50px;
    background: #070707;
    left: 200px;
    width: calc(100% - 200px);
    padding: 20px;
    `}
    >
        {children}
        
    </div>
)


export default Topbar
