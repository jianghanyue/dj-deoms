import React, { Component } from 'react';
import Home from '../Home/Home'
import './App.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'

class App extends Component {
  render() {
    return (
        <Router>
          <Layout>
            <Main />
          </Layout>
        </Router>
    );
  }
}

export default App;
