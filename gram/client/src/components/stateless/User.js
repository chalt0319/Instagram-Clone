import React, { Component } from 'react';

export default class Post extends Component {

  render() {

    return (
        <div className="user-box">
          <img className="user-image" src={this.props.user.pic_url} alt={this.props.user.name}/>
          <span className="username">{this.props.user.name}</span>
        </div>
    );
  }
}
