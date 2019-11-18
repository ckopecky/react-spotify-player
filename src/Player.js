import React from "react";
import "./Player.css";
import axios from 'axios';
import EmbeddedPlayer from "./EmbeddedPlayer";

class Player extends React.Component {
  state = {
    dropdownOpen: false,
    loading: true
  }

  componentDidMount() {
    // Set token
      this.getCurrentPlaylists(this.props.token);
  }

  getEmbeddedLink = (type, id) => {
    let startURL = 'https://open.spotify.com/embed/';
    let URL = `${startURL}${type}/${id}`;
    console.log(URL)
    this.setState({url: URL});
  }

  getCurrentPlaylists = (token) => {
    axios.get("https://api.spotify.com/v1/me/playlists")
    .then(response => {
      this.setState({
        data: response.data, 
        playlists: response.data.items, token,
        loading: false
      }, () => {
        console.log(this.state, "state")
      });
    })
    .catch(err => {
      console.info(err);
    });    
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen})
  }

  

  render() {
    if(this.state.loading) {
      if(!localStorage.getItem('spotify')) {
        return (
          <h1>...Loading</h1>
        )
      } else {
        return (
          <EmbeddedPlayer playlists={this.state.playlists} embeddedLink={this.getEmbeddedLink} dropdownOpen={this.state.dropdownOpen} toggle={this.toggle} toggleToken={this.props.toggleToken} url={this.state.url}/>
        )
      }
    }

    if(!this.state.loading) {
      return (
        //DropDown with playlist selectors
        <EmbeddedPlayer playlists={this.state.playlists} embeddedLink={this.getEmbeddedLink} dropdownOpen={this.state.dropdownOpen} toggle={this.toggle} toggleToken={this.props.toggleToken} url={this.state.url}/>
      )
       
    }
  }
}

export default Player;
