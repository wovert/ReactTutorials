import React from 'react'
import ReactDOM from 'react-dom'
import qs from 'qs'
import './static/less/index.less'

// import './index.css';
import App from './App'
// import * as serviceWorker from './serviceWorker'

console.log(qs.parse('name=wovert&age=10&type=10'))


// JSX 元素渲染到页面中
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
