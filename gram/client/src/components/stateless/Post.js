import React, { Component } from 'react';
import Like from './Like'
import Title from './Title'
import Comment from './Comment'

export default class Post extends Component {

  render() {

    return (
        <div className="image-box">
          <Title title={this.props.post.title}/>
          <img className="post-image" src={this.props.post.images.original.url} alt={this.props.post.slug}/>
          <span><Like post={this.props.post}/>
          <Comment post={this.props.post}/></span>
        </div>
    );
  }
}
