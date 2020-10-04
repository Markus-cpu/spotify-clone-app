import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import {getTokenFromUrl} from "./spotify";

function App() {
    const [token, setToken] = useState(null)
    //Run code based on a given condition
    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token;
        if(_token) {
            setToken(_token)
        }
        console.log('I have a token: ', token)
    }, [])

  return (
    <div className="app">
        {
            token ? (
                <h1>I am Logged in!</h1>
                ) : (
                <Login />
                )
        }
    </div>
  );
}

export default App;
