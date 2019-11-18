import React from 'react';
import hash from "./hash";
import axios from 'axios';



const withConditionalRender = FirstComp => SecondComp => 
    class WithConditionalRender extends React.Component {
        
        
        componentDidMount() {
            this.setState({loading: true})

            let _token = hash.access_token;
            if (_token) {
              // Set token
              axios.defaults.headers['Authorization'] = "Bearer " + _token;
              localStorage.setItem("spotify", _token);
              console.log(_token);
            }
        }
        
        render() {
            if(localStorage.getItem("spotify")) {
                console.log("logged in")
                return <FirstComp {...this.props} token={() => localStorage.getItem("spotify")}/>;
            } else {
                console.log("logged out")
                return <SecondComp {...this.props}/>;
            }
        }
    };

    export default withConditionalRender;