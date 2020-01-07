import React from "react";
import withConditionalRender from "./withConditional";
import { Spinner } from 'reactstrap';
import Player from "./components/Player/Player";
import NotLoggedIn from "./components/NotLoggedIn/NotLoggedIn.js";
import "./App.css";
import { withRouter, Switch, Route } from 'react-router-dom';
import AccountSettings from "./components/AccountSettings/AccountSettings";
import Navbar from "./components/Player/Navbar";
import NavbarLoggedOut from "./components/NotLoggedIn/Navbar";
import axios from 'axios';
import Dashboard from "./components/Dashboard/Dashboard";

const currUser = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_PROD_CURR_USER : process.env.REACT_APP_DEV_CURR_USER;

const logOutEndpoint = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_LOGOUT : process.env.REACT_APP_DEV_LOGOUT;
const DynamicComp = withConditionalRender(Player)(NotLoggedIn);
const DynamicNavBar = withRouter(withConditionalRender(Navbar)(NavbarLoggedOut));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      currentUser: null,
      loading: true
    }
  }


  handleLogOut = (e, props) => {
    axios.get(logOutEndpoint)
    .then(response => {
      console.log(response);
        this.setState({loggedIn: false, currentUser: null});
        axios.defaults.headers['Authorization'] = null;
    })
    props.history.push('/')
  }


componentDidMount = () => {
  const res = axios.get(currUser, {withCredentials: true})
  res.then(response => {
      if(response.data._id) {
        console.log(response.data);
          this.setState({loggedIn: !this.state.loggedIn, currentUser: response.data, loading: false}, () => console.log(this.state));
          

      }
  })
  .catch(err => {
      console.log(err.message)
  })

 
}

  render() {
      if(!this.state.loading) {
        return (
          <>
          <DynamicNavBar loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} handleLogOut={this.handleLogOut}/>
          <Switch>
            <Route exact path="/" render={(props) => <DynamicComp {...props} loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} handleLogOut={this.handleLogOut}/>} />
            <Route path="/account" render={(props) => <AccountSettings {...props}  currentUser={this.state.currentUser} />} />
            <Route path="/dashboard" render={(props) => <Dashboard {...props} loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}  handleLogOut={this.handleLogOut}/>} />
          </Switch>
          </>
        )
      }
      else {
        return (
          <>
            <DynamicNavBar loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} handleLogOut={this.handleLogOut}/>
            <Spinner width="400"/>
          </>
        )
      }
  }
}










export default App;
