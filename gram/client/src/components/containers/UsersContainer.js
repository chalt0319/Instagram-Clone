import React, { Component } from 'react';
import Users from '../stateless/Users'
import { connect } from 'react-redux';
import Instagram from './Instagram'

class UsersContainer extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('api/users')
      .then(response => response.json())
      .then(data => {this.setState({users: data})})
  }

  componentDidUpdate() {
    fetch('api/users')
      .then(response => response.json())
      .then(data => {this.setState({users: data})})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Instagram />
        </header>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postComments: state.postComments
  }
}

export default connect(mapStateToProps)(UsersContainer)
