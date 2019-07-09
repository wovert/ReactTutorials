import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 引入redux
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { SET_NAME, ADD_AGE } from './actions'

import store from './store'


// 1. 创建存储
// 状态state改变时会自动执行此函数
// state=初始化state
// function reducer(state={ name: 'wovert', age: 1 }, action) {
//   console.log(action)

//   // 必须返回新的 state
//   switch (action.type) {
//     case SET_NAME:
//       return {
//         ...state,
//         name: action.name
//       }
//     case ADD_AGE:
//       {
//         return {
//           ...state,
//           age: state.age + action.age
//         }
//       }
//     default:
//       return state;
//   }
// }

// 2. 创建存储对象
// const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App name={'lingyima'} />
  </Provider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
