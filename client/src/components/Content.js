/** @jsxImportSource @emotion/react */
import React, {useContext} from "react";
import {StoreContext} from "./MusicPlayer"
import {css ,jsx} from "@emotion/react"


//This component has children, it is a Containment concept (https://reactjs.org/docs/composition-vs-inheritance.html) from React. It allows you to put children before and within the div tags when you are not sure what children you will need ahead of time. This is typically common in a Sidebar Component! 

//Keep in mind with width:calc -- This calc is a cool way to tell CSS how to measure width. We know the flexbox is 200px so we subtract what % by 200px. It didnt seem to work tho lol, may have to reconfigure with normal css. 
const Content = () => {

    const { state } = useContext(StoreContext)
    const currentPlaylist = state.currentPlaylist
    const sample = console.log(state.playlists[currentPlaylist])
    //writing JS const to grab songs from playlist. When using Sets(), we need to convert to Array before displaying. 
    const songIds = Array.from(state.playlists[currentPlaylist])

    return (
        <div className="Content" css={CSS}>
        <div className="playlist-title">{currentPlaylist}</div>

            <table>
                <thead>
                    <tr>
                    <td>Title {sample}</td>
                    <td>Artist</td>
                    <td>Length</td>
                    </tr>
                </thead>

                <tbody>
                    {songIds.map(songInfo => {
                        const {title, artist, length} = state.media[songInfo]

                        return (
                            <tr key={songInfo}>
                                <td>{title}</td>
                                <td>{artist}</td>
                                <td>{length}</td>
                            </tr>
                        )
                    })}
                </tbody>

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