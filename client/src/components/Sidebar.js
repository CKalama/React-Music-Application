import React from 'react'
import {css, jsx} from "@emotion/react"


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
        {children}

    </div>

)

export default Sidebar