'use strict';

import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';


class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ui comments">
        <h1>评论</h1>
        <div className="ui divider"></div>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export { CommentBox as default };