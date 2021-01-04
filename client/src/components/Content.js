/** @jsxImportSource @emotion/react */
import React from "react";
//import '../App.css';
import {css ,jsx} from "@emotion/react"


//This component has children, it is a Containment concept (https://reactjs.org/docs/composition-vs-inheritance.html) from React. It allows you to put children before and within the div tags when you are not sure what children you will need ahead of time. This is typically common in a Sidebar Component! 
const Content = ({ children }) => (
    <div className="Content"
    css={css `
        width:calc(100% - 200px);
        padding:20px;
        background:#121212;
        `}
    >
        {children}
    </div>
)

export default Content 