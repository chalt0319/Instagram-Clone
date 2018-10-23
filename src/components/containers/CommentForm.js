import React, { Component } from 'react';
import Comments from '../stateless/Comments'
import { connect } from 'react-redux';

class CommentForm extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type: 'ADD_COMMENT', comment: this.state.text, post: this.props.post})
  }

  render() {

    return (
      <span>
        <input onChange={this.handleChange} type="text"></input>
        <input type='image' className='comment' src='http://www.clker.com/cliparts/e/D/y/m/U/t/speech-bubble-hi.png'></input>
      </span>
    );
  }
}

export default connect()(CommentForm)
