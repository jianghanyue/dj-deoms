import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    username: '',
    avatar: ''
  }
  componentDidMount = () => {
    axios.get('https://api.github.com/users/jianghanyue').then(res => {
      console.log(res.data)
      this.setState({
        username: res.data.login,
        avatar: res.data.avatar_url
      })
    })
  }
  render() {
    return (
      <div className="App">
        <img src={this.state.avatar} alt='avatar'/>
        <h1>
          {this.state.username}
      </h1>
      </div>
    );
  }
}

export default App;
