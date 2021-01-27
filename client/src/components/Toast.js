/** @jsxImportSource @emotion/react */
import React, {useEffect} from 'react'
import {css, jsx} from "@emotion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


//Going to pass props into Toast. 1st is toast, which is just a string value that can either be empty or a string that has some type of text content, it tells the user the playlist was made successfully. Also a close prop, this can be used where the Component is being called to alter the useState on the Sidebar.js
const Toast = ({toast, close}) => {
    if(!toast) return null



    return (
        <div className="toast" css={CSS}>
            {toast}
        </div>
    )
}


const CSS = css `

`


export default Toast
