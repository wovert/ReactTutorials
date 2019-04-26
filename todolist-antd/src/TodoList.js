import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'

class TodoList extends Component {

  constructor (props) {
    super(props)

    // 从getStore获取 state
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)

    // 监听 store 数据根性（reducer改变数据触发）
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)

    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render () {
    return (
      <div 
        style={{
          marginTop: '10px',
          marginLeft: '10px',
          marginRight: '10px'
        }}
      >
        <div>
          <Input 
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder='todo info'
            style={{
              width: '300px',
              marginRight: '10px'
            }} 
          />
          <Button 
            onClick={this.handleBtnClick}
            type="primary"
          >
            提交
          </Button>
        </div>
        <List
          style={{
            marginTop: '10px',
            width:'300px'
          }}
          bordered
          dataSource={this.state.list}
          renderItem={
            item => (
              <List.Item>{item}</List.Item>
            )
          }
        />
      </div>
    )
  }

  handleInputChange (e) {
    // 创建action
    const action = {
      type: 'change_input_value', // 描述事情
      value: e.target.value
    }

    // action 传给 store 的 reducer
    store.dispatch(action)
  }
  
  /**
   * 监听函数
   */
  handleStoreChange () {
    // 重新获取 store 数据同步到 state
    console.log(store.getState())
    this.setState(store.getState())
  }

  
  /**
   * 按钮事件
   */
  handleBtnClick (e) {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
}

export default TodoList