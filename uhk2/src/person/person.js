import React from 'react';


var person =(props)=>{
// return(<h1>thi is me {props.name}</h1>
    return(<p>{props.children} and {props.name}</p>);

};
export default person;
