/** @jsxImportSource @emotion/react */
import React, {Reducer, useContext} from 'react'
import {css, jsx} from '@emotion/react'
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Playbar from "./Playbar";

const DEFAULT_PLAYLIST = "home";

export const initialState = {
    currentPlaylist: DEFAULT_PLAYLIST,
    playlists: {
        home: new Set(),
        favorites: new Set(),
        easyToLearn: new Set(),
    }
};


//At some point, you may need to throw all the components into a MusicPlayer folder. So Taking all the components and storing them within the MusicPlayer component folder.
const MusicPlayer  = () => (
    <div className="MusicPlayer" css={CSS}>
        <Topbar />
        <Sidebar />
        <Content />
        <Playbar />
        
    </div>
)

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
