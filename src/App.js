import React, { Component } from 'react';
import './App.css';
import Film from './containers/Film/Film'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Film/>
      </div>
    );
  }
}

export default App;
