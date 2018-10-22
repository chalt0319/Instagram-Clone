import React, { Component } from 'react';
import SearchInput from './SearchInput'
import { connect } from 'react-redux';

class Instagram extends Component {

  state = {
    searchText: ""
  }

  arrayIfy = (object) => {
    console.log(object)
    return object['data']
  }

  searchBar = (word) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + word + '&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {this.props.dispatch({type: 'ADD_POST', post: this.arrayIfy(data)})})
  }

  render() {

    return (
      <div>
      <SearchInput searchBar={this.searchBar}/>
      </div>
    );
  }
}



export default connect()(Instagram)
