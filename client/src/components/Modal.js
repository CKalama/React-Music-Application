/** @jsxImportSource @emotion/react */
import React from "react"
import { css, jsx } from "@emotion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


//children is when you want a component to display on the page before knowing what's in it! 
const Modal = ({ children, show, close }) => {
    if(!show) return null

return (
    //Since modal-content is a child of Modal div, it will receive all of the css edits in @emotion
    <div className="Modal" css={CSS}>
        <div className="modal-content">
    <FontAwesomeIcon icon="backspace" className="modal-icon" onClick={close}/>
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

.modal-icon {
    cursor:crosshair;
    position:absolute;
    top:15px;
    right:35px;
}
 `


export default Modal
 