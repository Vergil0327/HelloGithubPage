import React, { Component } from 'react';
import './App.css';
import Intro from '../components/Intro';

class App extends Component {

  render() {
    const config = {
  	  width: 100,
  	  widthUnit: '%',
  	  height: 100,
  	  heightUnit: 'vh'
    }
    return (
      <div className="App">
        <Intro {...config} />
      </div>
    );
  }
}

export default App;
