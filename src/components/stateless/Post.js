import React, { Component } from 'react';

export default class Post extends Component {

  render() {

    return (
      <div className="image-feed">
        <img src={this.props.post.images.original.url} alt={this.props.post.slug}/>
      </div>
    );
  }
}
