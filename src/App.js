import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instagram from './components/containers/Instagram'
import SearchInput from './components/containers/SearchInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            <SearchInput />
            <Instagram />
          </p>
        </header>
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
