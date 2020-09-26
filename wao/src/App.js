import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//      <h1>Bismillah hir rehman e reheem  ths is uhk</h1>
//     </div>
//   );
// }


class Header extends React.Component{
  render(){
    return(
      <div className="header">
      <h1>This is Header</h1>
      </div>
    )
  }
}
class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
      <h1>This is Footer</h1>
      </div>
    )
  }
}


class App extends React.Component{
  render(){
    // let wao=[{test:1},{test:2},{test:4},{test:5},{test:6}];
    // let name= "uhk";
  return(
    <div  className="main">
      <Header/>
     {/* <h1>Bismillah hir rehman e reheem  ths is uhk</h1>
<h1>{`this is  me ${name} abd ${name}`}</h1>
 <h1>{wao}</h1> */}
 
   {/* <ul>
     {wao.map((item,index)=>{
      return <li key={index}>{`this is num ${index} of ${item.test}`}</li> 
     })}
   </ul> */}
   <h1>Main Component</h1>
 
 

 <Footer/>    </div>
  )
}}

export default App;
