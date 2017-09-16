import React, { Component } from 'react';
import './Main.css';
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'
import Home from '../Home/Home'
import From from '../From/From'
import Dog from '../Dog/Dog'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Route exact path="/" component={Home}/>
        <Route path="/from" component={From}/>
        <Route path="/Dog/:id" component={Dog}/>
      </div>
    );
  }
}

export default Main;
