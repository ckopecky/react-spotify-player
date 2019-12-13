import React from 'react';
import axios from 'axios';

const currUser = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_CURR_USER : process.env.REACT_APP_DEV_CURR_USER

const withConditionalRender = FirstComp => SecondComp => 
    class WithConditionalRender extends React.Component {
        state = {
            loggedIn: false,
            currentUser: null
        }

        handleLogOut = (e) => {
            axios.get("http://localhost:5555/auth/logout")
            .then(response => {
                this.setState({loggedIn: false, currentUser: null});
                axios.defaults.headers['Authorization'] = null;
            })
        }
        
        componentDidMount = async () => {
            const res = axios.get(currUser, {withCredentials: true})
            res.then(response => {
                if(response.data._id) {
                    this.setState({loggedIn: !this.state.loggedIn, currentUser: response.data}, () => console.log(this.state));
                    

                }
            })
            .catch(err => {
                console.log(err.message)
            })

           
        }
        
        render() {
            if(this.state.loggedIn) {
                console.log("logged in")
                return <FirstComp {...this.props} loggedIn={this.state.loggedIn} handleClick={this.handleLogOut} currUser={this.state.currentUser}/>;
            } else {
                console.log("logged out")
                return <SecondComp {...this.props}/>;
            }
        }
    };

    export default withConditionalRender;