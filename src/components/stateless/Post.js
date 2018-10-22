import React, { Component } from 'react';
import Like from './Like'

export default class Post extends Component {

  render() {

    return (
        <div className="image-box">
          <img className="post-image" src={this.props.post.images.original.url} alt={this.props.post.slug}/><br/>
          <Like />
        </div>
    );
  }
}
