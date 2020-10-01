import React, { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './person/person';


// function App() {
//   return (
//     <div className="App">
//       <h1>this is me  practice</h1>
//     </div>
//   );
// }
// function App(){
//   state={
//     person:[{
//       name:"usama",
//       age:"21"
//     }]
//   }
//   return (
   
// // {/* <Person name="uhk"/> */}

// <Person name={this.state.person[0].nam}e>nice work</Person>

//   );
// }
// class App extends React.Component{
//   state={
//         person:[{
//           name:"usama",
//           age:"21"
//         }]
//       }
//   render(){
//     return( 
      
//       <Person name={this.state.person[0].name}>nice work</Person>
      
//     );
//   }
// }


class App extends React.Component{
  state={
    persons:[{
    name:"uhkstate",age:25
  }]}
  btnhandler=()=>{
    this.setState({
      persons:[{  
      name:"uhkstatechange",age:27
    }]
  })}
  render(){
    return (
    <div>
   <Person name={this.state.persons[0].name}/>
<button onClick={this.btnhandler}>wO</button>
</div>
   );
  }
}
 export  default App;
