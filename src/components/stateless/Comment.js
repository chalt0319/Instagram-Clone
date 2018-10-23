import React, { Component } from 'react';
import CommentForm from '../containers/CommentForm'
import { connect } from 'react-redux';


class Comment extends Component {

  showComments = () => {
    if (this.props.comments !== []) {
      return this.props.comments.map(function (comment) {
        return <p>{comment.text}</p>
      })
    }
  }


  render() {

    return (
      <span className='comment-form'>
        <CommentForm post={this.props.post}/>
        {this.showComments()}
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
}


export default connect(mapStateToProps)(Comment)
