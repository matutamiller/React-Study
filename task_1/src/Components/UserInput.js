import React, { Component } from 'react';



class UserInput extends Component {
  render() {

    const style = {
      padding: "15px",
      backgroundColor: "#ccc",
      border: "3px solid #000"
    }
    return (
      <div >
       <input style={style} type="text" onChange={this.props.changed} value={this.props.currentName}/>
      </div>
    );
  }
}

export default UserInput;
