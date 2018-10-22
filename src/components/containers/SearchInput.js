import React, { Component } from 'react';

export default class SearchInput extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = () => {
    
  }

  render() {

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input><span>  </span>
        <input type="submit" value="Search"></input>
      </form>
    );
  }
}
