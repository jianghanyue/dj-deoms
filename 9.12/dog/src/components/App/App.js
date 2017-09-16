import React, { Component } from 'react';
import './App.css';
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Main />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
