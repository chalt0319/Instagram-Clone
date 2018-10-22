import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instagram from './components/containers/Instagram'
import SearchInput from './components/containers/SearchInput'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchInput />
        </header>

        <Instagram />
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
