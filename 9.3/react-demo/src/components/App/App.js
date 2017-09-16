import React, { Component } from 'react';
import Login from '../login/login'
import Sigup from '../Sigup/Sigup'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Sigup/>
      </div>
    );
  }
}

export default App;
