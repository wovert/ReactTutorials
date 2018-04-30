import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

// applyMiddleware 处理中间件
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import { counter, addGun, removeGun, addGunAsync } from './index.redux';

// 创建状态机里传入执行中间件thunk 异步处理函数
const store = createStore(counter, applyMiddleware(thunk));
function render() {
  ReactDOM.render(<App store={store} addGun={addGun} 
                    removeGun={removeGun} addGunAsync={addGunAsync} />, 
  document.getElementById('root'));
}
render();
store.subscribe(render);