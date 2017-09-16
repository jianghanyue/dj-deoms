import React, { Component } from 'react'
import './Main.css'
import a from './images/yushou_03.png'
import b from './images/ditu_07.jpg'
import c from './images/bichu_07.jpg'

class Main extends Component {
  state={
  count:1,
  clas:false,
  index: 0,
  index2: 0,
  size: [
    {size: "XXS"},
    {size: "XS"},
    {size: "S"},
    {size: "M"},
    {size: "L"},
    {size: "XL"},
    {size: "XXL"}
  ],
  iphonesizes: [
    {size: "iphone 5"},
    {size: "iphone 6"},
    {size: "iphone 6+"}
  ]
}
handsChlick=()=>{
  this.setState({
    count:this.state.count+1
  })
}
jianClick=()=>{
  if(this.state.count>1){
    this.setState({
      count:this.state.count-1
    })
  }
}

bianseClick=(i)=>{
    this.setState({
      index:i
    })
}
bianseClick2=(i,item)=>{
    this.setState({
      index2:i
    })
    console.log(item);
}
  render () {
    const list = this.state.size.map((item,i)=>(
      <a className={this.state.index === i ? "cor" : ""}
        onClick={()=>this.bianseClick(i)} href="javascript:;" key={i}>{item.size}</a>
    ))
    const list2 = this.state.iphonesizes.map((item,i) => (
      <a className={this.state.index2 === i ? "cor" : ""}
        onClick={()=>this.bianseClick2(i,item)} href="javascript:;" key={i}>{item.size}</a>
    ))
    return (
      <section className="clearfix">
        <aside className="clearfix">
          <img src={a}/>
          <h1>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h1>
          <div className="daojishi">
            <span>距离预售结束</span>
            <div className="jishi">
              <span><span className="day">05</span> </span>:
              <span><span className="hour">15</span> </span>:
              <span><span className="minutes">35</span> </span>:
              <span><span className="seconds">55</span> </span>
              <i>天</i>
              <i>时</i>
              <i>分</i>
              <i>秒</i>
            </div>
            <span>
              <span>注</span>：商品将于<span>2016/10/5</span>统一发货!</span>
          </div>
        </aside>
        <article className="clearfix">
          <div className="dingjin clearfix">
            <span>定金</span>
            <b>￥ <b>500.00</b></b><br/>
            <span>全款金额：￥150.00</span>
          </div>
          <div className="kuanshi clearfix">
            <span>款式</span>
            {list2}
          </div>
          <div className="chima clearfix">
            <span>尺码</span>
            {list}
          </div>
          <div className="shuliang clearfix">
            <span>数量</span>
            <a onClick={this.jianClick} className="jian" href="javascript:;">-</a>
            <span className="shu">{this.state.count}</span>
            <a onClick={this.handsChlick} className="jia" href="javascript:;">+</a>
          </div>
        </article>
        <div className="anniu">
          <a className="yuding" href="jiarugouwuche.html">立即预定</a>
        </div>
        <div className="bichu">
          <img className="ditu" src={b}/>
          <img className="buchuc" src={c} alt=""/>
        </div>
      </section>
        )
        }
        }
export default Main
