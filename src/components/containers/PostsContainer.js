import React, { Component } from 'react';
import Posts from '../stateless/Posts'
import { connect } from 'react-redux';

class PostsContainer extends Component {
  render() {

    return (
      <Posts posts={this.props.posts}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(PostsContainer)
