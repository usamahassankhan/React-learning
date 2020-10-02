import React from 'react';


var Person=(props)=>{
    return(<h1 onClick={props.click}>{props.name} and {props.age} </h1>);
}
export default Person;