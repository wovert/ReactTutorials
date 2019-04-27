import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// 引入笔记本
import reducer from './reducer'

// 创建store并reducer
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
)

const store = createStore(
  reducer,
  enhancer
)

export default store
