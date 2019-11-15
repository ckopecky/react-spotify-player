import React, { Component } from "react";
import axios from 'axios';
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms:0,
      },
      is_playing: "Paused",
      progress_ms: 0
    };
  }
  componentDidMount() {
    // Set token

    let _token = hash.access_token;
    if (_token) {
      // Set token
      axios.defaults.headers['Authorization'] = "Bearer " + _token;
      localStorage.setItem("spotify", _token);
      this.getCurrentPlaylists(_token);
      }
    }

    getEmbeddedLink = (type, id) => {
      let startURL = 'https://open.spotify.com/embed/';
      let URL = `${startURL}${type}/${id}`;
      console.log(URL)
      return URL;
    }

    getCurrentPlaylists = (token) => {
      axios.get("https://api.spotify.com/v1/me/playlists")
      .then(response => {
        let type = response.data.items[2].type;
        let id = response.data.items[2].id;
        let url = this.getEmbeddedLink(type, id);
        this.setState({
          data: response.data, 
          items: response.data.items,
          url, token
        });
      })
      .catch(err => {
        console.info(err);
      });    
    }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          { !this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          
           {localStorage.getItem('spotify') && (
            <Player
              data={this.state.data}
              items={this.state.items}
              url={this.state.url}

            />
          )}

            {/* <Checkbox /> */}
        </header>
      </div>
    );
  }
}

export default App;
