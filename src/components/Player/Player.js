import React from "react";
import "./Player.css";
import axios from 'axios';
import EmbeddedPlayer from "../EmbeddedPlayer/EmbeddedPlayer";

class Player extends React.Component {
  state = {
    dropdownOpen: false,
  }

  componentDidMount = () => {
      this.getCurrentPlaylists(this.props.currentUser.accessToken);
  }

  getEmbeddedLink = (type, id) => {
    let baseURL = 'https://open.spotify.com/embed';
    let URL = `${baseURL}/${type}/${id}`;
    this.setState({url: URL});
  }

  getCurrentPlaylists = (token) => {
    axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        this.setState({
          token,
          data: response.data,
          playlists: response.data.items,
          loading: false
        }, () => {
          console.log(this.state, "player state");
        })
      })
      .catch(error => {
        console.log({Error: error});
      })
  }

  toggleDropDown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen});
  }

  render() {
    return (
      <>
        <EmbeddedPlayer toggle={this.toggleDropDown} embeddedLink={this.getEmbeddedLink} url={this.state.url} playerState={this.state} currUser={this.props.currUser}/>
      </>
    )
  }
}

export default Player;
