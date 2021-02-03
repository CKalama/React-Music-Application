/** @jsxImportSource @emotion/react */
import React, {createContext, useReducer } from 'react'
import {css, jsx} from '@emotion/react'
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Playbar from "./Playbar";

export const StoreContext = createContext(null)

const DEFAULT_PLAYLIST = "home";

const initialState = {
    currentPlaylist: DEFAULT_PLAYLIST,
    playlists: {
        home: new Set(),
        favorites: new Set(),
        easyToLearn: new Set(),
    }
};

//Adding Reducer, with props state and action. 
const reducer = (state, action) => {
    //Need a switch statement to grab the objects.
    switch(action.type) {
        //This will see the ADD_PLAYLIST getting dispatched and provide the logic for us that we wrote on Sidebar. Ex.) {type: ADD_PLAYLIST, playlist: "Jazz"}
        case 'ADD_PLAYLIST':
            return {
                ...state,
                playlists: { ...state.playlists, [action.playlist]: new Set() } 
            }
        case 'SET_PLAYLIST':
            return { ...state, currentPlaylist: action.playlist}
    }
    return state;
}


//At some point, you may need to throw all the components into a MusicPlayer folder. So Taking all the components and storing them within the MusicPlayer component folder.
const MusicPlayer  = () => {
    //Using an array, it passes a value of whatever the state is. Which is an object. Dispatch allows us to update the state. useReducer can update and manipulate the state.
    const [state, dispatch] = useReducer()

    return (
        <StoreContext.Provider value={{state, dispatch}}>
    <div className="MusicPlayer" css={CSS}>
        <Topbar />
        <Sidebar />
        <Content />
        <Playbar />    
    </div>
        </StoreContext.Provider>
    )
}

//First way of writing CSS with emotion/core. You can call it under a const variable and call it above in JSX. 
//Display: flex; makes it so that any containers will sit side by side. 
const CSS = css `
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    color: white;
`

export default MusicPlayer
