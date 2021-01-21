/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import {css, jsx} from "@emotion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import Modal from "./Modal"

//import '../App.css'
//Because we are using Webpack, it does not matter what you name this logo. Could be anything. 
import logo from "../assets/musicReactLogo.png"

const Sidebar = () => {
    //Setting up setState for   
    const [playlistState, setPlaylist] = useState({
        currentPlaylist: "home",
        modal: false, 
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
    <li className="library">Library</li>

        {/* .map will loop through all the playlists in the state. you can name the parameter anything once you call map. I will name it something dumb for learning purposes */}
        {playlist.map(listInState => (
        <li 
            key={listInState}
                // Ternary Operator, If currentPlaylist is the className, it will hit the css pseudoclass below.
                //SO, you weren't supposed to use a pseudoclass active with this because it will change in the inspect but it wont last because it needs to stay clicked!! It is a CLASS named active, meaning in css it would be li.active 
            className={listInState === playlistState.currentPlaylist ? 'active' : ''}
            onClick={() => {
                //...state is whatever state is in the component.
                //Needed to write this in JSX. That's why you need ... 
                //setPlaylist is the second part of the UseState hook. In this example it is being wrapped in jsx with the ... to grab the currentPlaylist inside the hook but also being called through the ClassName
                setPlaylist({ ...playlistState, currentPlaylist: listInState })
            }}
               
            
            >
            {listInState}
            </li>
        ))}

        <li className="new-playlist">
        <FontAwesomeIcon icon="plus-circle" />
            <span>New Playlist</span>
        </li>

        <Modal>
            This is a Modal!!!!!!!
        </Modal>


    </ul>

    )
}


    //New Way of writng CSS with Emotion/core, Now I can even use classNames to invoke CSS below and just do all CSS styling below 
    //list-style-type: square;
    // i {
    //     margin-right:5px;
    //     transform:translateY(1px);

    //     &before {
    //         font-size:20px;
    //     }
    // }
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

    li.library {
        cursor:unset;
        color:#999;
        text-transform: uppercase;
        font-weight:normal;
    }

    li {
        font-family: 'Roboto Slab', serif;
        padding-left:20px;
        margin-bottom: 10px; 
        text-transform: capitalize;
        font-weight:bold;
        cursor:crosshair;   
        list-style-type:none;     
    }

    li.active {
        border-left:2px solid white; 
        padding-left: 18px;
        color:blue; 
    }

    li.new-playlist {
        position: absolute;
        left:0
        
                
    }

    span {
        color:#999;
        font-weight:300;
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