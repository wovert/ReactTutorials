import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import { counter, addGun, removeGun, addGunAsync } from './index.redux';

const store = createStore(counter, applyMiddleware(thunk, logger));

function render() {
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, document.getElementById('root'));
}
render();

// 状态变换时渲染
store.subscribe(render);