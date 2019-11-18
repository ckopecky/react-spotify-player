import React from "react";
import withConditionalRender from "./withConditional";
import Player from "./Player";
import NotLoggedIn from "./NotLoggedIn.js";
import "./App.css";

const DynamicComp = withConditionalRender(Player)(NotLoggedIn);

const App = () => {
  return <DynamicComp />;
};

export default App;
