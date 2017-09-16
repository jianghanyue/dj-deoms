import React, { Component } from 'react';
import './Dog.css';
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
 import axios from 'axios'

class Dog extends Component {
  state = {
    dogs:[],
    input:'5555',
    input2:'',
    xiugai: false,
    gai:'修改'
  }
  handleClick = () => {
    this.setState({
      xiugai:!this.state.xiugai
    })
    if(this.state.xiugai===false){
      this.setState({
        gai:"确定"
      })
    }else{
      this.setState({
        gai:"修改",
        leixing:this.state.dogs.leixing=this.state.input,
        age:this.state.dogs.age=this.state.input2
      })
      console.log(this.state.dogs.leixing)
      console.log(this.state.input)
      const data = this.state.dogs
      const {id} = this.props.match.params
      axios.put(`http://localhost:3010/dogs/${id}`,data).then(
        res => {
          console.log(res.data)
        }
      )
    }

  }
  handleSubmit = (e) => {
    if(this.state.xiugai){
      this.setState({
        input:e.target.value
      })
    }
  }
  handleSubmit2 = (e) => {
    if(this.state.xiugai){
      this.setState({
        input2:e.target.value
      })
    }
  }
  componentDidMount = () => {
    const {id} = this.props.match.params
    axios.get(`http://localhost:3010/dogs/${id}`).then(res => {
      this.setState({
        dogs:res.data
      })
      this.setState({
        input:this.state.dogs.leixing,
        input2:this.state.dogs.age
      })
    })
  }
  render() {
    const {imgUrl,leixing,age} = this.state.dogs
    return (
      <div className="dog">
        <div><img src={imgUrl} alt="imgUrl"/></div>
        <div className='bd'>
        <span>种类: </span>
        <input value={this.state.input} onChange={this.handleSubmit} className={this.state.xiugai ? '' :'out' } type="text"/>
        <span>年龄: </span>
        <input value={this.state.input2} onChange={this.handleSubmit2} className={this.state.xiugai ? '' :'out' } type="text"/>
        </div>
        <button onClick={this.handleClick}>{this.state.gai}</button>
        <Link className='fanhui' to='/'>返回首页</Link>
      </div>
    );
  }
}

export default Dog;
