import React, { Component } from 'react';
import Post from './Post'

export default class Comments extends Component {

  showPosts = () => {
    return this.props.postComments.map(function (post) {
      return <Post key={post.id} post={post}/>
    })
  }

  render() {

    return (
      <div className="image-feed">
        {this.showPosts()}
      </div>
    );
  }
}
