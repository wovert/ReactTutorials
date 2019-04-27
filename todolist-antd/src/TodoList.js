import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitListAction
} from './store/actionCreators'

class TodoList extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const { inputValue, list, handleBtnClick, handleInputChange, handleItemDelete} = this.props
    return (
      <TodoListUI 
        inputValue={inputValue}
        list={list}
        handleBtnClick={handleBtnClick}
        handleInputChange={handleInputChange}
        handleItemDelete={handleItemDelete}
      />
    )
  }

  componentDidMount () {
    const { handleInit } = this.props
    handleInit()
  }

  // handleItemDelete (index) {
  //   // const action = {
  //   //   type: DELETE_TODO_ITEM,
  //   //   index
  //   // }
  //   // const action = getDeleteItemAction(index)
  //   // store.dispatch(action)
  // }
 
}

// todoList与 store 链接， store的state和当前组件的props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.displatch 挂载到 props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange (e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleBtnClick () {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleItemDelete (index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    },
    handleInit () {
      const action = getInitListAction()
      dispatch(action)
    }
  }
}

// react-redux 链接 todoList
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)