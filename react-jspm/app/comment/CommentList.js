'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Comment author="张三" date="5 分钟前">天气不错呀!</Comment>
          <Comment author="李四" date="2 分钟前">出去玩呀</Comment>
      </div>
    );
  }
}

export { CommentList as default };