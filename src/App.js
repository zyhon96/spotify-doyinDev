import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react'
import { getTokenFromUrl } from './Spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player.js';
import { useDataLayerValue } from './DataLayer'

function App() {

  const spotify = new SpotifyWebApi();

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log("man", user)
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }


  }, [])
  console.log("i have token ", token);
  return (
    <div className="app">
      { token? (<Player />) : (<Login />) }
    </div>
  );
}

export default App;
