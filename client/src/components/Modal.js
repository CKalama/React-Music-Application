/** @jsxImportSource @emotion/react */
import React from "react"
import { css, jsx } from "@emotion/react"

//children is when you want a component to display on the page before knowing what's in it! 
const Modal = ({ children }) => {


return (
    <div className="Modal" css={CSS}>
        <div className="modal-content">

    {children}

        </div>

    </div>


)   
}


const CSS = css `
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.75);
    position:absolute;
    top:0;
    left:0;

 `


export default Modal
 