import React from 'react';
import {css, jsx} from "@emotion/react";

const TopBar = ({children}) => (
    <div
    className="TopBar"
    csx={css `
    position:absolute;
    top:0;
    height:50px;
    background: #070707;
    left:200px;
    width: calc(100% - 200px);
    padding: 20px;
    `}
    >
        {children}
        
    </div>
)


export default Topbar
