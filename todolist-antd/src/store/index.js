import { createStore } from 'redux'

// 引入笔记本
import reducer from './reducer'

// 创建store并reducer
// 传入reducer之后有  inputValue: '',list: [] 数据
const store = createStore(
  reducer,
  // 如果浏览器支持devtools工具就开启调试模式
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
