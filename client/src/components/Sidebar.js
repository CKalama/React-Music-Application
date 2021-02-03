/** @jsxImportSource @emotion/react */
import React, {useState, useRef, useContext} from 'react'
import {css, jsx} from "@emotion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import Modal from "./Modal"
import Toast from "./Toast"
//Importing StoreContext from MusicPlayer
import {StoreContext} from "./MusicPlayer"

//import '../App.css'
//Because we are using Webpack, it does not matter what you name this logo. Could be anything. 
import logo from "../assets/musicReactLogo.png"

const Sidebar = () => {
    //Setting up setState for   
    const [playlistState, setPlaylist] = useState({
        // currentPlaylist: "home",
        modal: false, 
        // playlists: {
        //     home: new Set(),
        //     favorites: new Set(), 
        //     easyToLearn: new Set(),
            
        // },
        toast:""
    })

    //Destructuring the StoreContext. In video, he had to  change his hook from state because it was named the same const state. We avoided this by making the state hook unique name.
    const { state, dispatch } = useContext(StoreContext)

    //Calling useRef to be used for the current value inside of the submit box in the modal. For small forms its easier to grab small values. Usually, we would have to create another State (like in GoogleBooks Project) and make it a useState([]). So the array would grab the value. Now with the useRef Hook we can interface with the DOM directly. 
    const playlistRef = useRef(null)
    
    //keys -Will give us an array of just the keys in the hook above. 
    //Needed to change it from playlistState to state so that it would hook up to the store on the MusicPlayer.js
    const playlist = Object.keys(state.playlists) 

    //writing function that will grab the current value in the submit box of the modal. Will need useRef Hook to interface with the DOM(https://flaviocopes.com/react-hook-useref/). 
    const addPlaylist = e => {
        e.preventDefault() 
        const data = playlistRef.current.value
        //checking for bugs ot see if current value shows up.
        console.log(data)

        //Commented out playlists in SetPlaylist below because our dispatch will now take care of it.
        dispatch({ type: 'ADD_PLAYLIST', playlist: data })
    
        setPlaylist ({
            ...playlistState,
            modal:false,
            //Need to change the playlists in the useState hook above. With new Set() (a Javascript function)we will be able to manipulate it above. However, we will need to change the original playlists from NULL to new Set()
            //playlists: {...playlistState.playlists, [data]: new Set() }, 
            toast: "Your Playlist Was Made Successfully!"
        })
        console.log("this is a console logggggg", playlistState.toast)
    }

    //This is a function that we can replace all the logic in the close prop on some components and HTML tags
    const handleModal = () => setPlaylist({ ...playlistState, modal: !playlistState.modal })

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
            className={listInState === state.currentPlaylist ? 'active' : ''}
            onClick={() => {
                //...state is whatever state is in the component.
                //Needed to write this in JSX. That's why you need ... 
                //setPlaylist is the second part of the UseState hook. In this example it is being wrapped in jsx with the ... to grab the currentPlaylist inside the hook but also being called through the ClassName
                //setPlaylist({ ...playlistState, currentPlaylist: listInState })
                dispatch({type: 'SET_PLAYLIST', playlist: listInState })
            }}
               
            
            >
            {listInState}
            </li>
        ))}



 
        <li className="new-playlist" onClick={() => {
            setPlaylist({...playlistState, modal:true })
        }}>
        <FontAwesomeIcon icon="plus-circle" />
            <span>New Playlist</span>
        </li>



        <Modal 
        show={playlistState.modal} 
        close= {() => {
            //passing props
            setPlaylist({...playlistState, modal: false })
        }}
        >
            <form onSubmit={addPlaylist}>
            <div className="new-playlist-title">New Playlist</div>

            <div className="new-playlist-content">
            <input 
                className="new-playlist-input-box"
                type="text"
                placeholder="Add New Playlist"
                ref={playlistRef}
                />
                    <br />
                <button type="submit" className="new-playlist-button">Create</button>
                
            </div>    
            </form>
        </Modal>

        <Toast 
        toast={playlistState.toast} 
        close={() => {
            setPlaylist({...playlistState, toast:""})
        }}
        />

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
        margin-bottom: 15px;
        border: 2px solid white;
        border-radius: 75px;
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

    .new-playlist-title {
        font-family: 'Roboto Slab', serif;
        font-size:25px;
        margin-bottom:15px;
        margin-left: 25px;
        text-align:center;
        
    }

    .new-playlist-input-box {
        text-align:center;
        width:400px;
        padding:10px;
        border-bottom: 3px solid green;
        border-radius:25px;
        font-family: 'Roboto Slab', serif;
    }

    .new-playlist-button {
        position:relative;
        margin-left:175px;
        margin-top:10px;
        border:none;
        border-radius: 15px;
        padding:12px;
        background-color:green;
        color: white;
        font-family: 'Roboto Slab', serif;
        text-transform: uppercase;
        
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