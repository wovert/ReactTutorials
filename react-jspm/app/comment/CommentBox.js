'use strict';

import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getComments();
    setInterval(() => this.getComments(), 5000);
  }

  getComments() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: comments => {
        this.setState({
          data: comments
        });
      },
      error: (xhr, status, error) => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div className="ui comments">
        <h1>评论</h1>
        <div className="ui divider"></div>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

export { CommentBox as default };