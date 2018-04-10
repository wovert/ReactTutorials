import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import { counter } from './index.redux';

const store = createStore(counter);

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
render();

// 状态变换时渲染
store.subscribe(render);