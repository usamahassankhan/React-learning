import React from 'react';
import logo from '../logo.svg';

import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends React.Component{
  state={
    persons:[{
      name:"uhk",age:"14",
    }]
  }
  render(){
    return(
      <>
      <Person name={this.state.persons[0].name}/>
      <h1>nice man</h1>
      </>
    );
  }
}

export default App;
