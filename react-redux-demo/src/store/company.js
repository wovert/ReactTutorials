import { SET_NAME, ADD_AGE } from './actions'

function company(state={ name: 'wovert2', age: 2 }, action) {
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

export default company