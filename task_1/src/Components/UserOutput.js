import React, { Component } from 'react';
import "./UserOutput.css";

class UserOutput extends Component {
  render() {
    return (
      <div className="tiger">
       <p>Kikuka</p>
       <p>{this.props.userName}</p>
      </div>
    );
  }
}

export default UserOutput;
