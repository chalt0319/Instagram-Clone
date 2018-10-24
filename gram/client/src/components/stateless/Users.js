import React, { Component } from 'react';
import User from './User'
import UserForm from '../containers/UserForm'

export default class Posts extends Component {

  showUsers = () => {
    return this.props.users.map(function (user) {
      return <User key={user.id} user={user}/>
    })
  }

  render() {

    return (
      <div className="image-feed">
        <h2 id='commented-header'>All Users:</h2>
        <UserForm updateUsers={this.props.updateUsers}/>
        {this.showUsers()}
      </div>
    );
  }
}
