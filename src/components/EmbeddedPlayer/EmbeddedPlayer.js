import React from 'react';
import  { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import axios from 'axios';


const EmbeddedPlayer = (props) => {
  const handleEmbeddedLinkAuth = (e, token, playlist) => {
    const embedURL = props.embeddedLink(playlist.type, playlist.id);
    axios({
      method: 'GET',
      url: embedURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
  
    if(props.playerState.playlists) {
        return (
            <div>        
            <Dropdown isOpen={props.playerState.dropdownOpen} toggle={props.toggle}>
              <DropdownToggle caret>
                Playlist Menu
              </DropdownToggle>
              <DropdownMenu>
                {props.playerState.playlists.map(playlist => {
                  console.log(playlist);
                  return (
                    <DropdownItem key={playlist.name + playlist.id} onClick={(e) => handleEmbeddedLinkAuth(e, props.currUser.accessToken, playlist)}>{playlist.name}</DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
            <div className="App">
              <iframe title="spotify-playist" src={props.url} width="600" height="760" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
        );
    } else {
        return (
            <div>...loading</div>
        )
    }
}

export default EmbeddedPlayer;