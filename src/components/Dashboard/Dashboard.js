import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        currentUser: null,
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {this.props.currentUser.displayName}
                </div>
            );
        } else {
            console.log(this.props);            

            return (
                <div>Error</div>
            )
        }
    }
}

export default Dashboard;