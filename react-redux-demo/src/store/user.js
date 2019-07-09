import { SET_NAME, ADD_AGE } from './actions'

// 1. 创建存储
// 状态state改变时会自动执行此函数
// state=初始化state
function user(state={ name: 'wovert', age: 1 }, action) {
  console.log(action)

  // 必须返回新的 state
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      }
    case ADD_AGE:
      {
        return {
          ...state,
          age: state.age + action.age
        }
      }
    default:
      return state;
  }
}
export default user