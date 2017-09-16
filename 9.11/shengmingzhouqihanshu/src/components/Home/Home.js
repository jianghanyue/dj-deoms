import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios'

class Home extends Component {
  state = {
    pots:[]
  }
  componentDidMount = () => {
    axios.get('http://localhost:3008/posts').then(res => {
      console.log(res)
      this.setState({
        pots:res.data
      })
    })
  }
  render() {
    const potsList=this.state.pots.map((t,i)=>(
    <Link key={i} to={`/post/${t.id}`}>{t.title}</Link>
    ))
    return (
          <div className="sss">
            {potsList}
          </div>
    );
  }
}

export default Home;
