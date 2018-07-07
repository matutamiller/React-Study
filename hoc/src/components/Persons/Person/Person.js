import React from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

const person = (props) => {
    
    return (
    <Aux>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </Aux>
)
};

export default withClass(person, classes.Person);