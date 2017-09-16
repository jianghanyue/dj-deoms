import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
import Main from '../Main/Main'
import Layout from '../Layout/Layout'

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
