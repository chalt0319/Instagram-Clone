import React, { Component } from 'react';
import User from './User'

export default class Posts extends Component {

  showUsers = () => {
    return this.props.users.map(function (user) {
      return <User key={user.name} user={user}/>
    })
  }

  render() {

    return (
      <div className="image-feed">
        <h2 id='commented-header'>All Users:</h2>
        {this.showUsers()}
      </div>
    );
  }
}
