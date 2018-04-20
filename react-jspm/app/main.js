'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui/semantic.min.css!';
import CommentBox from './comment/CommentBox';

var comments = [
  {
    "author": "张三",
    "date": "5 分钟前",
    "text": "天气不错呀!"
  },
  {
    "author": "李四",
    "date": "3 分钟前",
    "text": "出去玩呀!"
  }
];

ReactDOM.render(
  <CommentBox url="app/comments.json" />,
  document.getElementById('app')
);
