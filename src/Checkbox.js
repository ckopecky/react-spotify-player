import React from 'react';

class Checkbox extends React.Component {
    state = {
        checked: false
    }

    render() {
        return (
        <label>
        <input onClick={(e) => this.setState({ checked: !this.state.checked})} name="checked" value={this.state.checked}type="checkbox"/>
          <br />
          Hi, Dustin!
      </label>
        );
    }
}

export default Checkbox;