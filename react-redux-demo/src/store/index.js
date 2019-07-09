// 引入redux
import { createStore, combineReducers } from 'redux'
import user from './user'
import company from './company'

// 2. 创建存储对象
// const store = createStore(reducer)

let arr = combineReducers({
  user,
  company
})
export default createStore(arr)