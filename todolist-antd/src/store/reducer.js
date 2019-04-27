import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

/**
 * 笔记本
 * defaultState 默认笔记本
 * state 书籍信息
 * action
 */
// 默认数据
const defaultState = {
  inputValue: 'alice',
  list: [1, 2]
};

// reducer 可以接受state，但绝对不能修改state
export default (state = defaultState, action) => {
  let newState
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      // 深拷贝
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      // state.inputValue = action.value;
      return newState;

    case ADD_TODO_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      if(newState.inputValue === '') {
        return newState;
      }
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState

    case DELETE_TODO_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState

    default:
      return state
  }
}