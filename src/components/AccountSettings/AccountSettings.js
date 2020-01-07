import React, { Component } from 'react';
import "./AccountSettings.css"
class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        console.log(this.props.currentUser)
        return (
            <div className="profile-settings">
                <div className="text-container">
                    <h5>To change account settings, please see the accounts overview section in your <span><a rel="noopener noreferrer" target="_blank" href="https://www.spotify.com/us/account/overview/">Spotify</a></span> account</h5>
                </div>
            </div>
        );
    }
}

export default AccountSettings;