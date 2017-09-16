import React, { Component } from 'react'
import './From.css'
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
import Main from '../Main/Main'
import Layout from '../Layout/Layout'
import axios from 'axios'

class From extends Component {
  state = {
    imgUrl:""
  }
  handleChange = (e) => {
    this.setState({
      imgUrl: e.target.value
    })
  }
  handleClick = () => {
    const imgUrl = this.state.imgUrl
    this.props.hideFrom()
    if(!imgUrl.trim()) {
      return
    }
    axios.post('http://localhost:3015/dogs', {imgUrl}).then(res => {
      console.log(res.data);
      this.props.addDog(res.data)
    })

  }
  render() {
    return (
        <div className="from">
          <input value={this.state.imgUrl} onChange={this.handleChange} type="text" />
          <button onClick={this.handleClick}>
            添加
          </button>
        </div>
    )
  }
}

export default From;
