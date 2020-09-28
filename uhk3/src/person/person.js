import React from 'react';


// class Person extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>this is components</h1>
    
//        </> );
//     }

// }
var Person=(props)=>{

  return(
  <><h1>{props.name}</h1>
    <h2> {props.children}</h2>
    </>);
  
}



export default Person;