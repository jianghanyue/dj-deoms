import React, { Component } from 'react'
import './Settle.css'

class Settle extends Component {
  state={
    commodity:[],
    zongjia:'00.0'
  }


  componentWillMount = () => {
    // const commodity = this.props.commodity.filter(t => t.compeled==true)
    this.setState({
      commodity:this.props.commodity.filter(t => t.compeled==true)
    })
  }
  render() {
  const commodity = this.props.commodity.filter(t => t.compeled==true)
    const liList = commodity.map(t => (
      <li key={t.id}>
        <div className="tupian"
          style={{backgroundImage:`url(${t.img})`}}
        ></div>
        <div className="jia">
          <span>{t.cake}</span>
          <span>{`$ ${t.jiage}`}</span>
        </div>
        <div className="shuliang">
          <a href="javascript:;" className="j"
            onClick={()=> this.props.suanClick('-',t,t.jiage)}
          >-</a>
          <span>{t.shuliang}</span>
          <a href="javascript:;" className="j"
            onClick={()=>this.props.suanClick('+',t,t.jiage)}
          >+</a>
        </div>
      </li>
    ))
    return (
      <div className="settle">
        <span>{`${this.props.zongjia ? this.props.zongjia : '0.00'} 元`}</span>
        <ul>
          {liList}
        </ul>
      </div>
    )
  }
}

export default Settle
