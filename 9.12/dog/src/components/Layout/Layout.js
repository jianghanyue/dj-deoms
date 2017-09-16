import React, { Component } from 'react';
import './Layout.css';
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
        <div className="layout">
          <div className="header">
          </div>
          {this.props.children}
          <footer></footer>
        </div>
    );
  }
}

export default Layout;
