'use strict';

import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="ui reply form">
        <div className="field">
          <input type="text" placeholder="姓名" />
        </div>
        <div className="field">
          <textarea placeholder="评论"></textarea>
        </div>
        <button type="submit" className="ui blue button">添加评论</button>
      </form>
    );
  }
}

export { CommentForm as default };