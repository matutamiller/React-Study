import React, { Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor (props) {
        super(props);
        this.inputElement = React.createRef();

    }
    componentDidMount () {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }
    render () {
        return (
    <Aux>
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input 
        ref={this.inputElement}
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name}/>
    </Aux>
    
        );
    }

};

export default withClass(Person, classes.Person);