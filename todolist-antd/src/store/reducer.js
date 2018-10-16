
/**
 * 笔记本
 * defaultState 默认笔记本
 * state 书籍信息
 * action
 */
// 默认数据
const defaultState = {
  inputValue: 'alice',
  list: [1,2]
};

// reducer 可以接受state，但绝对不能修改state
export default (state = defaultState, action) => {
  switch(action.type) {
    case 'change_input_value':
      
      // 深拷贝
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue= action.value
      
      // state.inputValue = action.value;
      return newState;

    case 'add_todo_item':
      const newState2 = JSON.parse(JSON.stringify(state))
      if(newState2.inputValue == '') {
        return newState2;
      }
      newState2.list.push(newState2.inputValue)
      newState2.inputValue = ''

      return newState2

    default:
      return state;
  }
}