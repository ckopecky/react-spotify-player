import React from 'react';
import  { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

const EmbeddedPlayer = (props) => {
    if(props.playlists) {
        return (
            <div>
            <button class="btn" onClick={() => props.toggleToken()}>Logout</button>
        
            <Dropdown isOpen={props.dropdownOpen} toggle={props.toggle}>
              <DropdownToggle caret>
                Playlist Menu
              </DropdownToggle>
              <DropdownMenu>
                {props.playlists.map(playlist => {
                  return (
                    <DropdownItem onClick={() => props.embeddedLink(playlist.type, playlist.id)}>{playlist.name}</DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
            <div className="App" toggle={props.toggleToken}>
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