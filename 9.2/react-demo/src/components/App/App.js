import React, { Component } from 'react';
import './app.css';
import Top from '../Top/Top'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import './reset.css'

class App extends Component {
  render() {
    return (
      <div className="wrap">
    		<Top />
        <Main />
        <Footer />
      </div>
        );
        }
        }

export default App;
