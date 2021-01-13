/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css'
//Because we are using Webpack, it does not matter what you name this logo. Could be anything. 
import logo from "../assets/musicReactLogo.png"

const Sidebar = () => {
    //Setting up setState for   
    const [playlistState, setPlaylist] = useState({
        currentPlaylist: "home", 
        playlists: {
            home: null,
            favorites: null, 
            easyToLearn: null,
        }
    })
    
    //keys -Will give us an array of just the keys in the hook above. 
    const playlist = Object.keys(playlistState.playlists) 

    return ( 
    <ul className="Sidebar" css={sidebarCSS}>   
    <img src={logo} />


        {/* .map will loop through all the playlists in the state. you can name the parameter anything once you call map. I will name it something dumb for learning purposes */}
        {playlist.map(listInState => (
        <li key={listInState}
                // Ternary Operator, If currentPlaylist is the className, it will hit the css pseudoclass below.
            className={listInState === playlistState.currentPlaylist ? 'active' : ''}
            onClick={() => {
                //...state is whatever state is in the component. 
                setPlaylist({ ...playlistState, currentPlaylist: listInState })
            }}
               
            
            >
            {listInState}
            </li>
        ))}


    </ul>

    )
}


    //New Way of writng CSS with Emotion/core, Now I can even use classNames to invoke CSS below and just do all CSS styling below 
    //list-style-type: square;
const sidebarCSS = css `
    margin-top:0;
    width: 170px;
    height: 850px;
    background: #000000;
    padding: 15px;
    
    img {
        height:100px;
        
        padding-bottom: 25px;
    }

    li {
        font-family: 'Roboto Slab', serif;
        padding:10px
        margin-left:15px;
        margin-bottom: 10px; 
        text-transform: capitalize;
        font-weight:bold;
        cursor:pointer;   
        list-style-type:none;     
    }

    li.active {
        border-left:2px solid white; 
        padding-left: 18px;
        
    }

`


export default Sidebar



{/* <button>
        <a href="https://www.youtube.com/" target="_blank" css={css ` {
    width:100px;
    text-align:center;
    margin-left:25px;
    border-color:red;
    font-family: 'Roboto Slab', serif;
    ` 
    }
    >Click
    </a> </button> */}