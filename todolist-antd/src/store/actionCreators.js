import { 
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from './actionTypes'
import { getListApi } from './api'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getListDataAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getInitListAction = () => {
  return async (dispatch) => {
    try {
      const result = await getListApi()
      const data = result.data
      const action = getListDataAction(data)
      dispatch(action)
    } catch (e) {
      console.log(e)
    }
    
      // getListApi().then((res) => {
      //   const data = res.data
      //   const action = getListDataAction(data)
      //   dispatch(action)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
  }  
}
