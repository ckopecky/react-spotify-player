import React from "react";
import "./Player.css";
import axios from 'axios';
import EmbeddedPlayer from "../EmbeddedPlayer";

class Player extends React.Component {
  state = {
    dropdownOpen: false,
  }

  render() {
    return (
      <div onClick={this.props.handleClick}>LOGOUT</div>
    )
  }
}

export default Player;
