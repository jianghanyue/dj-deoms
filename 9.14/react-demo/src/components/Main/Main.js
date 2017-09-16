import React, { Component } from 'react'
import './Main.css'
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
import Home from '../Home/Home'
import Dog from '../Dog/Dog'

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Route exact path='/' component={Home} />
        <Route path='/Dog' component={Dog} />
      </div>
    );
  }
}

export default Main;
