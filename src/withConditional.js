import React from 'react';
import hash from "./hash";
import axios from 'axios';



const withConditionalRender = FirstComp => SecondComp => 
    class WithConditionalRender extends React.Component {
        state = {
            token: null,
            loading: false
        }
        
        componentDidMount() {
            this.setState({loading: true})

            let _token = hash.access_token;
            if (_token) {
              // Set token
              axios.defaults.headers['Authorization'] = "Bearer " + _token;
              this.setState({token: _token});
              localStorage.setItem("spotify", _token);
            }
        }

        toggleToken = event => {
            if(localStorage.getItem('spotify')) localStorage.removeItem('spotify');
        
        }
        
        render() {
            if(localStorage.getItem("spotify")) {
                console.log("logged in")
                return <FirstComp {...this.props} toggleToken={this.toggleToken()} token={this.state.token}/>;
            } else {
                console.log("logged out")
                return <SecondComp {...this.props}/>;
            }
        }
    };

    export default withConditionalRender;