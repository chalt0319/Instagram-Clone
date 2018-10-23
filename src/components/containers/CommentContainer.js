import React, { Component } from 'react';
import Comments from '../stateless/Comments'
import { connect } from 'react-redux';
import Instagram from './Instagram'

class LikesContainer extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Instagram />
        </header>
        <Comments comments={this.props.comments}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
}

export default connect(mapStateToProps)(LikesContainer)
