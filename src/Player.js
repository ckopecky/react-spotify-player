import React from "react";
import "./Player.css";

class Player extends React.Component {
  
  

  render() {

    return (
      <div className="App">
          <iframe title="spotify-playist" src={this.props.url} width="900" height="1240" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }
}

export default Player;
