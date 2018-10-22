import React, { Component } from 'react';
import Posts from '../stateless/Posts'
import { connect } from 'react-redux';

class PostsContainer extends Component {
  render() {

    return (
      <Posts addPost={this.props.addPost}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addPost: (post) => dispatch({ type: 'ADD_POST', post}),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
