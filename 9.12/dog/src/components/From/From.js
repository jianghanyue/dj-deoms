import React, { Component } from 'react';
import './From.css';
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
 import axios from 'axios'

class From extends Component {
  state = {
    imgUrl:'',
    leixing:'',
    age:''
  }
  changeImgUrl = (e) => {
    this.setState({
      imgUrl:e.target.value
    })
  }
  changeLeixing = (e) => {
    this.setState({
      leixing:e.target.value
    })
  }
  changeAge = (e) => {
    this.setState({
      age:e.target.value
    })
  }
  handleSubmit = () => {
  let data = {
    imgUrl: this.state.imgUrl,
    leixing: this.state.leixing,
    age: this.state.age
  }
  axios.post('http://localhost:3010/dogs', data).then(
    res => {
      console.log(res.data)
    }
  )
  console.log(this.state)
  this.setState({
    imgUrl: '',
    leixing: '',
    age: ''
  })
}
  render() {
    console.log(this.state.imgUrl);
    return (
      <div className="from">
        <div className='bdi'>
        <span>图片: </span>
        <input value={this.state.imgUrl}
          onChange={this.changeImgUrl}
        type="text"/>
        <span>种类: </span>
        <input value={this.state.leixing}
          onChange={this.changeLeixing}
        type="text"/>
        <span>年龄: </span>
        <input value={this.state.age}
          onChange={this.changeAge}
        type="text"/>
      </div>
        <button onClick={this.handleSubmit}>添加</button>
        <Link className='fanhui' to='/'>返回首页</Link>
      </div>
    );
  }
}

export default From;
