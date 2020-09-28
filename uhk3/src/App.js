import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';
// function App() {
//   return (
//     <>
//      <p>  wao its nice</p> 
//   <div>its cool</div>
// </>
//    );
  
// }
// class App extends React.Component{
  // state={
  //   person:[{name:"uhkharry",age:"23"}],
  //   person2:"nice"
  // }

  
  
   
  // }
  // its hook
  const App=(props)=>{
   
  const [personState,newpersonState]=useState({
    person:[{name:"uhkharry",age:"23"}],
    person2:"nice"
  });
   const btnHandler =()=>{
    newpersonState({
      person:[{name:"uhkharry1",age:"232"}],
      person2:"wll",
    });

  }
  return( 
  
 <>  
    <h1>{personState.person[0].name}</h1>
    <button onClick={btnHandler}>btnn</button>
    <Person/>
    </> );

  }
export default App;

