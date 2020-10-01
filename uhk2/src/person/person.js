import React from 'react';


var person=(props)=>{
    return(
<div>
<h1>this is nice function form {props.name}</h1>
<input type ="text" onChange={props.namechng}></input>
</div>
    );
}
export default person;
