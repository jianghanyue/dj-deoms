import React, { Component } from 'react'
import './Home.css'
import Settle from '../Settle/Settle'

class Home extends Component {
  state={
    commodity:[
      {
        id:'1',
        cake:'巧克力蛋糕',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1096913955,3118444622&fm=27&gp=0.jpg',
        compeled:false,
        jiage:45,
        shuliang:1
      },
      {
        id:'2',
        cake:'千层蛋糕',
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2155789937,1728819049&fm=27&gp=0.jpg',
        compeled:false,
        jiage:38,
        shuliang:1
      },
      {
        id:'3',
        cake:'提拉米苏',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=767493038,3682388703&fm=27&gp=0.jpg',
        compeled:false,
        jiage:66,
        shuliang:1
      }
    ],
    zongjia:''
  }
  buy = (t) => {
    if(t){
      return '已购'
    }else{
      return '购买'
    }
  }
  handleClick = (t) => {
    let newcommodity = this.state.commodity
    newcommodity.find(re => re.id==t.id).compeled=true
    this.setState({
      commodity:newcommodity
    })
    this.jisuanzongjia(t.jiage)
  }
  suanClick = (text,t,n) => {
    let newcommodity = this.state.commodity

    if(text=='-'){
      if(t.shuliang>0){
        newcommodity.find(re => re.id==t.id).shuliang--
        this.setState({
          commodity:newcommodity
        })
        this.jisuanzongjia(n,text)
      }
    }else{
      newcommodity.find(re => re.id==t.id).shuliang++
      this.setState({
        commodity:newcommodity
      })
      this.jisuanzongjia(n)
    }

  }
  jisuanzongjia = (n,text) => {
    if(text=='-'){
      this.setState({
        zongjia:Number(this.state.zongjia)-Number(n)
      })
    }else{
      this.setState({
        zongjia:Number(this.state.zongjia)+Number(n)
      })
    }
    console.log(n);
  }
  render() {
    const list = this.state.commodity.map(t => (
      <div key={t.id} className='shape'>
        <div style={{backgroundImage:`url(${t.img})`}}>
        </div>
        <span
          onClick={() => this.handleClick(t)}
          className={t.compeled&&'yigou'}>{this.buy(t.compeled)}</span>
      </div>
    ))
    return (
      <div className="home">
        <div className="shangpin">
          {list}
        </div>
        <Settle commodity={this.state.commodity} suanClick={this.suanClick} jisuanzongjia={this.jisuanzongjia}
          zongjia={this.state.zongjia}/>
      </div>
    )
  }
}

export default Home
