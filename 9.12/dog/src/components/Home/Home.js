import React, { Component } from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
 import axios from 'axios'

class Home extends Component {
  state = {
    dogs:[],
    hover:''
  }

  componentDidMount = () => {
    axios.get('http://localhost:3010/dogs').then(
      res => {
        this.setState({
        dogs: res.data
      })
      }
    )
}
mouseEnter = (i) => {
  this.setState({
    hover: i
  })
}
mouseMove = () => {
  this.setState({
    hover: ''
  })
}
handleClick = (i) => {
  let data=this.state.dogs
  console.log(data[i])
  axios.delete(`http://localhost:3010/dogs/${data[i].id}`).then(
    res => {
      console.log(i)
    }
  )
  data.splice(i,1)
  this.mouseMove()
}
  render() {
    const list = this.state.dogs.map((t,i) => (<div className='img' key={i} onMouseEnter={()=>this.mouseEnter(i)} onMouseLeave={this.mouseMove}>
      <img src={t.imgUrl} alt='imgUrl'/>
      <div className={`hover ${this.state.hover===i&&'xxx'}`} >
        <span key={i} onClick={()=>this.handleClick(i)}>删 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除</span>
        <Link to={`/dog/${t.id}`}>查看详情</Link>
      </div>
    </div>))
    return (
        <div className="home">
          <Link to='/from'>+</Link>
          {list}
        </div>
    );
  }
}

export default Home;
