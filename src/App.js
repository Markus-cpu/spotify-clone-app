import React, { useEffect } from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Components/Player/Player";
import {useDataLayerValue} from "./DataLayer";
import {SET_DISCOVER_WEEKLY, SET_PLAYLISTS, SET_TOKEN, SET_USER} from "./types";

const spotify = new SpotifyWebApi()

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue()

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token;
        if(_token) {
            dispatch({
                type: SET_TOKEN,
                token: _token
            })
            spotify.setAccessToken(_token)
            spotify.getMe().then((user) => {
                dispatch({
                    type: SET_USER,
                    user: user,
                })
            })
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: SET_PLAYLISTS,
                    playlists: playlists,
                })
            })
            spotify.getPlaylist('1ZvyewGc0aU6LWz8edCODQ')
                .then(response => {
                    dispatch({
                        type: SET_DISCOVER_WEEKLY,
                        discover_weekly: response,
                    })
                })
        }
        // eslint-disable-next-line
    }, [])

    return (
      <div className="app">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
    );
}

export default App;
