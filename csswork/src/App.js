import React from 'react';
import logo from './logo.svg';
import './App.css';
import Radium from 'radium';

class  App  extends React.Component {
  
  render(){
  const style={

    backgroundColor:'red',
    ':hover':
    {
      backgroundColor:'orange'
    }
  };
  let classes=['bold','italic','red'].join('');

  return (
    
    
   <p className={classes}>this is nice</p>
 
  );
  }
}
export default Radium(App);
