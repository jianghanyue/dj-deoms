import React, { Component } from 'react';
import './Button.css'


class Button extends Component {
  state={
    count:0
  }
  handsChlick=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  jianClick=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    return (
      <div>
      <h1 onClick={this.handsChlick} className="biaoti">+1</h1>
      <h2>{this.state.count}</h2>
      <h1 onClick={this.jianClick} className="biaoti">-1</h1>
      </div>
    );
  }
}

export default Button;
