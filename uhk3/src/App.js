import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';

  class App extends React{
   render(){

   
   const state={
    person:[{name:"uhkharry0",age:"23"},
    {name:"uhkharry1",age:"24"},
    {name:"uhkharry2",age:"25"}
           ],
    showpersons:false
   
  }
  let person=null;
  if(state.showpersons===true ){
   person=(<div>
  
    <div>  
       <h1>{state.person[0].name} and {state.person[0].age} </h1>
       <h1>{state.person[1].name}and {state.person[0].age}</h1>
       <h1>{state.person[2].name} and {state.person[0].age}</h1>
       
       <Person/>
       </div> 
      
      
      </div>)}
  return( 
    {person}
);
  
}
  
export default App;

