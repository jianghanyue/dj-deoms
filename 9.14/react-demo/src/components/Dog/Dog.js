import React, { Component } from 'react'
import './Dog.css'
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'

class Dog extends Component {
  render() {
    return (
      <div className="dog">
        小狗详情
      </div>
    );
  }
}

export default Dog;
