import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import { counter } from './index.redux';

// 创建状态机里传入执行中间件thunk 异步处理函数
const store = createStore(counter, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
  )
);

ReactDOM.render(
  (<Provider store={store}>
    <App /> 
  </Provider>), 
  document.getElementById('root')
);
