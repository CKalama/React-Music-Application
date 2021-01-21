/** @jsxImportSource @emotion/react */
import React from "react"
import { css, jsx } from "@emotion/react"

//children is when you want a component to display on the page before knowing what's in it! 
const Modal = ({ children }) => {


return (
    <div className="Modal" css={CSS}>

    {children}

    </div>


)   
}


const CSS = css ` `


export default Modal
 