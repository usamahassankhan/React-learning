import React, { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';
import person from './person/person';

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
class App extends React.Component{
  state={
        person:[{
          name:"usama",
          age:"21"
        }]
      }
  render(){
    return( 
      
      <Person name={this.state.person[0].name}>nice work</Person>
      
    );
  }
}

export default App;
