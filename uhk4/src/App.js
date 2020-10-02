import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends React.Component{
state={
person:[
  {name:"uhk1",age:"16"},
   {name:"uhk2",age:"17"},
    {name:"uhk3",age:"18"},
  ]

  }
  dltbtn=(personindex)=>{
    const persons=[...this.state.person];
    persons.splice(personindex,1);
    this.setState({person:persons});

  }
  
render(){

   return(  this.state.person.map((person,index)=>{
    return(<Person  name={person.name}  age={person.age} 
         click={()=>this.dltbtn(index)} />);
  }));

        }

                                  }


export default App;
