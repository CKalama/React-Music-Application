/** @jsxImportSource @emotion/react */
import React, {useContext} from "react";
import {StoreContext} from "./MusicPlayer"
import {css ,jsx} from "@emotion/react"


//This component has children, it is a Containment concept (https://reactjs.org/docs/composition-vs-inheritance.html) from React. It allows you to put children before and within the div tags when you are not sure what children you will need ahead of time. This is typically common in a Sidebar Component! 

//Keep in mind with width:calc -- This calc is a cool way to tell CSS how to measure width. We know the flexbox is 200px so we subtract what % by 200px. It didnt seem to work tho lol, may have to reconfigure with normal css. 
const Content = () => {

    const { state } = useContext(StoreContext)
    const currentPlaylist = state.currentPlaylist

    return (
        <div className="Content" css={CSS}>
        <div className="playlist-title">{currentPlaylist}</div>

            <table>
                <thead>
                    <tr>Title</tr>
                    <tr>Artist</tr>
                    <tr>Length</tr>
                </thead>
            </table>
        
    </div>
    )
}

const CSS  = css`
width:100%;
padding:20px;
background:#121212;
padding-top:120px;
text-transform: capitalize;
`

export default Content 