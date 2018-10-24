import React, { Component } from 'react';

class UserForm extends Component {

  state = {
    name: "",
    pic_url: ""
  }

  handleUsername = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleURL = (e) => {
    this.setState({
      pic_url: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('api/users', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => this.props.updateUsers())
    this.setState({
      name: "",
      pic_url: ""
    })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <input onChange={this.handleUsername} type="text" value={this.state.name}  placeholder="Username"></input><span> </span>
        <input onChange={this.handleURL} type="text" value={this.state.pic_url}  size="38" placeholder="Image URL"></input><span> </span>
        <input type='submit' value="Submit"></input>
      </form>
    );
  }
}

export default UserForm
