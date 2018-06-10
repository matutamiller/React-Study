import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username: "KikaTyger"
  }
  inputChangeNameHandler = (event) => {
    this.setState ({username: event.target.value}) 
  }

  render() {
    return (
      <div className="App">
        <UserInput changed = {this.inputChangeNameHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
      </div>
    );
  }
}

export default App;
