import React from 'react';

const withConditionalRender = FirstComp => SecondComp => 
    class WithConditionalRender extends React.Component {
        
        
        
        render() {
            if(this.props.loggedIn) {
                return <FirstComp {...this.props} loggedIn={this.props.loggedIn} handleClick={this.props.handleLogOut} currentUser={this.props.currentUser}/>;
            } else {
                return <SecondComp />;
            }
        }
    };

    export default withConditionalRender;