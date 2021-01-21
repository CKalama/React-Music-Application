/** @jsxImportSource @emotion/react */
import React from "react"
import { css, jsx } from "@emotion/react"

//children is when you want a component to display on the page before knowing what's in it! 
const Modal = ({ children }) => {


return (
    //Since modal-content is a child of Modal div, it will receive all of the css edits in @emotion
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
    align-items:center;
    display:flex;
    justify-content:center;

.modal-content {
    position:relative;
    width:400px;
    background:#211f27;
    border-radius:50px;
    padding:55px;
}
 `


export default Modal
 