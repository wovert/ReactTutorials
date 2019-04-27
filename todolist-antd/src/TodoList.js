import React, { Component } from 'react'
import store from './store'
import TodoListUI from './TodoListUI'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // initListAction,
  getTodoList
} from './store/actionCreators'

class TodoList extends Component {

  constructor (props) {
    super(props)

    // 从getStore获取 state
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)

    // 监听 store 数据根性（reducer改变数据触发）
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount () {
    // axios.get('/api/todolist')
    //   .then((res) => {
    //     const data = res.data
    //     const action = initListAction(data)
    //     store.dispatch(action)
    //   })
    const action = getTodoList() // action 是函数
    store.dispatch(action)
  }

  handleItemDelete (index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleInputChange (e) {
    // 创建action
    // const action = {
    //   type: CHANGE_INPUT_VALUE, // 描述事情
    //   value: e.target.value
    // }
    e.persist()
    const action = getInputChangeAction(e.target.value)
    // action 传给 store 的 reducer
    store.dispatch(action)
  }
  
  /**
   * 监听函数
   */
  handleStoreChange () {
    // 重新获取 store 数据同步到 state
    // console.log('重新获取 store 数据同步到 state:', store.getState())
    this.setState(store.getState())
  }
  
  /**
   * 按钮事件
   */
  handleBtnClick (e) {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }
}

export default TodoList