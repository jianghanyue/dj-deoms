import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import DogIcon from '../DogIcon/DogIcon'
import From from '../From/From'
import axios from 'axios'

class Home extends Component {
  state = {
    dogs:[],
    showFrom: true
  }
  componentDidMount = () => {
    console.log(1);
  axios.get('http://localhost:3015/dogs').then(res =>{
    console.log(res.data);
    this.setState({
      dogs:res.data
    })
  })
  }
  showFrom = () => {
    this.setState({
      showFrom: true
    })
  }
  hideFrom = () => {
    this.setState({
      showFrom: false
    })
  }
  addDog = (dog) => {
    this.setState({
      dogs:[...this.state.dogs,dog]
    })
  }
  removeDog = (id) => {
    this.setState({
      dogs: this.state.dogs.filter(t => t.id !== id)
    })
  }
  render() {
console.log(this.state.dogs);
    const dogList = this.state.dogs.map(t => (
      <DogIcon key={t.id} dog={t} id={t.id} removeDog={this.removeDog}/>
    ))
    return (
      <div className="dog-list">
        <div className="from-wrap">
          {this.state.showFrom && <From hideFrom={this.hideFrom} addDog={this.addDog}/>}
        </div>
        {dogList}
        <span onClick={this.showFrom} className='add'>+</span>
      </div>
    );
  }
}

export default Home;
