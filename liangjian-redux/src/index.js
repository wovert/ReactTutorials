import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import { counter, addGun, removeGun, addGunAsync } from './index.redux';

const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(counter, compose(
  applyMiddleware(thunk, logger),
  reduxDevtools
));

function render() {
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, document.getElementById('root'));
}
render();

// 状态变换时渲染
store.subscribe(render);