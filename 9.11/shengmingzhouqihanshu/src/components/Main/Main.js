import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../Home/Home'
import Post from '../Post/Post'

class Main extends Component {
  render() {
    return (
  <div className='main'>
    <Route exact path='/' component={Home} />
    <Route path='/post/:id' component={Post} />
  </div>
    );
  }
}

export default Main;
