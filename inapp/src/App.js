import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



  const App=()=>{
const [count,setCount]=useState(0);
const [count1,setCount1]=useState(50);
const handleIncrement=()=>{
  setCount(count+1);
};
const handleDecrement=()=>{
  setCount1(count1-1);
};

useEffect(()=>{
  console.log("ruse effect called");


},[count]);
return(
  <div>
    <h1>nice man {count}</h1>
    <h1>nice man {count1}</h1>
    <button type="button" onClick={handleIncrement}>increment</button>
    <button type="button" onClick={handleDecrement}>Decrement</button>
  </div>
)

  }

 
export default App;
