import React, { Component } from 'react';
import CommentForm from '../containers/CommentForm'
import { connect } from 'react-redux';


class Comment extends Component {

  showComments = (post) => {
    if (this.props.comments !== []) {
      const comments = this.props.comments.filter(function (comment) {
        return comment.postId === post.id
      })
      return comments.map(function (comment) {
        return <li key={comment.id} className='comment-li'>{comment.text}</li>
      })
    }
  }


  render() {

    return (
      <span className='comment-form'>
        <CommentForm post={this.props.post}/>
        <ul>
          {this.showComments(this.props.post)}
        </ul>
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
