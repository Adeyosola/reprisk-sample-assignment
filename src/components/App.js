import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Layout from './Layout.js'

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" /> 
        <Layout/>    
        
      </div>
    );
  }
}

export default App;
