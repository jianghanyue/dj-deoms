import React, { Component } from 'react'
import './Layout.css'
import {Link} from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header">
          <Link to='/'>首页</Link>
        </div>
        {this.props.children}
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default Layout;
