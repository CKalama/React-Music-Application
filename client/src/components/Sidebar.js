/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import {css, jsx} from "@emotion/react"
//import '../App.css'
//Because we are using Webpack, it does not matter what you name this logo. Could be anything. 
import logo from "../assets/musicReactLogo.png"

const Sidebar = () => {
    //Setting up setState for   
    const [playlistState, setPlaylist] = useState({
        currentPlaylist: '', 
        playlists: {
            Home: null,
            Favorites: null, 
            EasyToLearn: null,
        }
    })
    
    //keys -Will give us an array of just the keys in the hook above. 
    const playlist = Object.keys(playlistState.playlists) 


    return ( 
    <ul className="Sidebar" css={sidebarCSS}>   
    <img src={logo} />


        {/* .map will loop through all the playlists in the state. */}
        {playlist.map(list => <li key={list}>{list}</li>)}


        {/* <button>
        <a href="https://www.youtube.com/" target="_blank">Click</a>
        </button> */}

    </ul>

    )}
    




    //New Way of writng CSS with Emotion/core, Now I can even use classNames to invoke CSS below and just do all CSS styling below 
const sidebarCSS = css `
    width: 170px;
    height: 850px;
    background: green;
    padding: 15px;

    img {
        height:100px;
        margin-left:10px;
    }

    li {
        font-family: 'Roboto Slab', serif;
        margin-left: 25px; 
        list-style-type: square;
    }

    button {
    width:100px;
    text-align:center;
    margin-left:25px;
    border-color:red;
    font-family: 'Roboto Slab', serif; 
    }
`


export default Sidebar