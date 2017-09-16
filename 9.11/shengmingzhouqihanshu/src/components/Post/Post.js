import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
  state = {
    pots:[]
}
componentDidMount = () => {
  const {id} = this.props.match.params
  axios.get(`http://localhost:3008/posts/${id}`).then(res => {
    this.setState({
      pots: res.data
    })
  })
}
  render() {
    const {pots} = this.state
    // const pots = this.state.pots.find(t => t.id === id)
    return (
          <div className='Post'>
            <h1>{pots.id}</h1>
            <p>{pots.content}</p>
          </div>
    );
  }
}

export default Post;
