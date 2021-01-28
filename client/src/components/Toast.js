/** @jsxImportSource @emotion/react */
import React, {useEffect} from 'react'
import {css, jsx} from "@emotion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


//Going to pass props into Toast. 1st is toast, which is just a string value that can either be empty or a string that has some type of text content, it tells the user the playlist was made successfully. Also a close prop, this can be used where the Component is being called to alter the useState on the Sidebar.js
const Toast = ({toast, close}) => {
    useEffect(() => {
      //If not toast has no text content, then return null
    if (!toast) return null

    //Writing a function that will run the callback passed as props (which is close prop). When the Toast unmounts we want to clear the timer. 
    const closeToast = () => {
      setTimeout(() => {
        close()
      }, 2500)
    }

    closeToast()

    return () => {
      clearTimeout(closeToast)
    }
    }, [toast])

    if (!toast) return null


    return (
        <div className="toast" css={CSS}>
            {toast}
        </div>
    )
}

//You need to go back and Learn about webkit Animations and alter this so that it is your own. In the Meantime, maybe keep it so you know it works. Go back at end of Final Release and perhaps make your own.
const CSS = css `
    -webkit-animation: toast 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: toast 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  position: absolute;
  top: 0;
  left: calc(50% - 175px);
  background: white;
  color: black;
  width: 350px;
  padding: 25px;
  text-align: center;

  @-webkit-keyframes toast {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(75px);
      transform: translateY(75px);
    }
  }

  @keyframes toast {
    0% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    100% {
      -webkit-transform: translateY(75px);
      transform: translateY(75px);
    }
  }
`


export default Toast
