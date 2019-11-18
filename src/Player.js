import React from "react";
import "./Player.css";
import axios from 'axios';
import  { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

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
      return (
        <h1>...Loading</h1>
      )
    }

    if(!this.state.loading) {
      return (
        //DropDown with playlist selectors
        <>
        <button class="btn" onClick={() => this.props.toggle()}>Logout</button>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Playlist Menu
          </DropdownToggle>
          <DropdownMenu>
            {this.state.playlists.map(playlist => {
              return (
                <DropdownItem onClick={() => this.getEmbeddedLink(playlist.type, playlist.id)}>{playlist.name}</DropdownItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
        <div className="App" toggle={this.props.toggle}>
          <iframe title="spotify-playist" src={this.state.url} width="600" height="760" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        </>
      );
    }
  }
}

export default Player;
