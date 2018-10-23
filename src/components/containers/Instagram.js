import React, { Component } from 'react';
import SearchInput from './SearchInput'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Instagram extends Component {

  state = {
    searchText: ""
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + 'funny' + '&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {this.props.dispatch({type: 'ADD_POST', posts: data['data']})})
  }

  searchBar = (word) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + word + '&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {this.props.dispatch({type: 'ADD_POST', posts: data['data']})})
  }

  render() {

    return (
      <div>
      <Link to='/'>
        <img id="home" src='http://images.clipartpanda.com/stick-family-clipart-black-and-white-white-house-md.png' alt="Home"/>
      </Link>
      <Link to='/likes'>
        <img id="heart" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' alt="Heart"/>
      </Link>
      <Link to='/comments'>
        <img id="comment" src='http://www.clker.com/cliparts/e/D/y/m/U/t/speech-bubble-hi.png' alt="Comment"/>
      </Link>

      <SearchInput searchBar={this.searchBar}/>
      </div>
    );
  }
}



export default connect()(Instagram)
