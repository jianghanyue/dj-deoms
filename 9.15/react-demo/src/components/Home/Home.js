import React, { Component } from 'react'
import './Home.css'
import h from './add.svg'
import r from './dui.svg'

class Home extends Component {
  state = {
    post:[
      {
        text:'吃饭',
        compet:false,
        id:'1'
      },
      {
        text:'睡觉',
        compet:false,
        id:'2'
      },
      {
        text:'打豆豆',
        compet:false,
        id:'3'
      }
    ],
    sub:'',
    wancheng:false
  }
  handlesubmit = (e) => {
    this.setState({
      sub: e.target.value
    })
  }
  handleClick = () => {
    this.setState({
      post: [...this.state.post,{text:this.state.sub,compet:false,id:this.state.post.length+1}],
      sub:''
    })
  }
  handleLi = (dd) => {
    let newpost = this.state.post
    newpost.find(pos => pos.id===dd).compet=true
    this.setState({
      post:newpost
    })
  }
  handleYi = () => {
    this.setState({
      wancheng:true
    })
  }
  handleEr = () => {
    this.setState({
      wancheng:false
    })
  }
  render() {
    const list = this.state.post.map((t,i) => (
      <div className='li' key={i} onClick={()=>this.handleLi(t.id)}>
        <span className={`${t.compet&&'huaxian'} ${this.state.wancheng&&'xiaoshi'}`}>{t.text}</span>
        <span key={i} className={t.compet&&'block'}><img src={r} alt=""/></span>
      </div>
    )
    )
    return (
      <div className="home">
        <div className="chuangkou">
          <h1>JiangHanYue</h1>
          <div className="ul">
            {list}
          </div>
          <div className="input">
            <input type="text"  value={this.state.sub} onChange={this.handlesubmit}/>
            <div className='add' onClick={this.state.sub.trim()&&this.handleClick}>
              <img src={h} alt=""/>
            </div>
          </div>
          <div className="anniu">
            <button onClick={this.handleEr}>显示全部</button>
            <button onClick={this.handleYi}>已完成</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
