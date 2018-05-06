import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {name: "Matie", age: 32},
      {name: "Kikuka", age: 29},
      {name: "Zhyrik", age: 29}
    ]
  }
  
  switchNameHandler = (newName) => {
    //console.log("Was Clicked!");
    //Don't do this: this.state.persons[0].name = "Matuta";
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name: "Kikuka", age: 29},
        {name: "Zhyrik", age: 27}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Matie", age: 32},
        {name: "Kikuka", age: 29},
        {name: event.target.value, age: 29}
    ]
  })
  }

  render() {

    const styleBtn = {
      backgroundColor: "#eee",
      border: "1px solid blue",
      font: "inherut",
      padding: "5px",
      margin: "0 10px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style= {styleBtn} onClick={this.switchNameHandler /* doesn't work 'cause persons.name[0] was changed */}>Switch Name</button>
        <button style= {styleBtn} onClick={() => this.switchNameHandler("Tiger")}>Switch Name Method 2</button>
        <button style= {styleBtn} onClick={this.switchNameHandler.bind(this, "Pypt")}>Switch Name method 3</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: cooking </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangedHandler}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement ('h1', null, 'Hi, I\'m React App'));
  }
}

export default App;
