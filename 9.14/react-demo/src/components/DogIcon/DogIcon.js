import React, { Component } from 'react'
import './DogIcon.css'
import {
  BrowserRouter as Router,
  Route,Link
 } from 'react-router-dom'
 import axios from 'axios'


class DogIcon extends Component {
  handleClick = () => {
    console.log("222");
    axios.delete(`http://localhost:3015/dogs/${this.props.id}`).then(res => {
      this.props.removeDog(this.props.dog.id)
    })
  }
  render() {
    const { dog } = this.props
    console.log(dog.imgUrl);
    return (
      <div className="dog-icon">
        <span
          onClick={this.handleClick}>×</span>
        <Link to={`/dog/${dog.id}`}>
          <div
            style={{
              backgroundImage: `url(${dog.imgUrl})`
            }}
          className='dog-img'>
          </div>
        </Link>
      </div>
    );
  }
}

export default DogIcon;
