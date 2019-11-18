import React, { Component } from "react";
import withConditionalRender from "./withConditional";
import Player from "./Player";
import NotLoggedIn from "./NotLoggedIn.js";
import "./App.css";

const DynamicComp = withConditionalRender(Player)(NotLoggedIn);

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      loggedIn: false
    };
  }
  
  toggle = event => {
    if(localStorage.getItem('spotify')) {
    localStorage.removeItem('spotify');
    this.setState({ loggedIn: false });
    } else {
    localStorage.setItem('spotify', true);
    this.setState({ loggedIn: true });
    }
}
  
  render() {
      return (
        <DynamicComp toggle={this.toggle} />
      )
  }
}

export default App;
