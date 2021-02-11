/** @jsxImportSource @emotion/react */
import React, {useContext} from "react";
import {StoreContext} from "./MusicPlayer"
import {css ,jsx} from "@emotion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


//This component has children, it is a Containment concept (https://reactjs.org/docs/composition-vs-inheritance.html) from React. It allows you to put children before and within the div tags when you are not sure what children you will need ahead of time. This is typically common in a Sidebar Component! 

//Keep in mind with width:calc -- This calc is a cool way to tell CSS how to measure width. We know the flexbox is 200px so we subtract what % by 200px. It didnt seem to work tho lol, may have to reconfigure with normal css. 
const Content = () => {

    const { state, dispatch } = useContext(StoreContext)
    const currentPlaylist = state.currentPlaylist
    //const sample = console.log(state.playlists[currentPlaylist])
    //writing JS const to grab songs from playlist. When using Sets(), we need to convert to Array before displaying. 
    const songIds = Array.from(state.playlists[currentPlaylist])

    return (
        <div className="Content" css={CSS}>
        <div className="playlist-title">{currentPlaylist}</div>

        {/* Ternary Operator to Show empty playlists! If songIds.length is less than or equal to 0, it will display that paragraph, using if else with ? and :*/}
        {songIds.length <=0 ? (
            <p>Your Playlist is Empty!</p>
        ) : (

        <table>
                <thead>
                <tr>
                    <td />
                    <td>Title</td>
                    <td>Artist</td>
                    <td>Length</td>
                </tr>
                </thead>

                <tbody>
                    {songIds.map(songInfo => {
                        const {title, artist, length} = state.media[songInfo]
                        //.has is used with the new Set() JS logic. 
                        const isFavorite = state.playlists.favorites.has(songInfo)

                        return (
                        
                            <tr key={songInfo}>
                                <td>
                                {isFavorite ? (
                                    <FontAwesomeIcon icon="check-circle"
                                    onClick={() => {
                                        dispatch({
                                            type:"REMOVE_FAVORITE", songIds:songInfo
                                        })
                                    }} />
                                ) : (
                                    <FontAwesomeIcon icon="heart" id="heart-icon" 
                                    onClick={() => {
                                        dispatch({type: 'ADD_FAVORITE', songIds: songInfo })
                                    }} />
                                )}
                                </td>
                                <td>{title}</td>
                                <td>{artist}</td>
                                <td>{length}</td>
                            </tr>
                            
                        )
                    })}
                </tbody>
        </table>
        )}
    </div>
    )
}

const CSS  = css`
width:100%;
padding:20px;
background:#121212;
padding-top:100px;
text-transform: capitalize;
overflow-y:scroll;

.playlist-title {
    font-family: 'Roboto Slab', serif;
    font-size: 17px;
}

::-webkit-scrollbar {
    width:15px;
}

table {
    margin-top: 5px;
    width: 100%;
    border-collapse: collapse:
    font-family: 'Roboto Slab', serif;
};

td {
    border-bottom: 2px solid black;
    font-family: 'Roboto Slab', serif;
    font-size:12px;
};

#heart-icon {
    color:red;
}
`

export default Content 