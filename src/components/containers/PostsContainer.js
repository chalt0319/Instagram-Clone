import React, { Component } from 'react';
import Posts from '../stateless/Posts'
import { connect } from 'react-redux';

class PostsContainer extends Component {
  render() {

    return (
      <div>
        <h2 id='posts-header'>All Posts:</h2>
        <Posts posts={this.props.posts}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(PostsContainer)
