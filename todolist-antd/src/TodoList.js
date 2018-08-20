import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// const data= [
//   '老师肯定就发生的解放了阿三地方就',
//   '阿斯利康的风景啊手机打开数码单反',
//   '文理科哦我魔鳄沃尔维吉尔',
//   '速度反馈深刻搭街坊就是看到房价凯盛家纺'
// ];

// import store from './store/index';
// import store from './store/';
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props)



    // 从getStore获取 state
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)

    // 监听 store 数据根性（reducer改变数据触发）
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)

    this.handleStoreChange = this.handleStoreChange.bind(this)

    // console.log(store.getState())
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}}>
        <div>
          <Input 
            onChange={this.handleInputChange}
            value={this.state.inputValue} placeholder='todo info' style={{width: '300px', marginRight: '10px'}} />
          <Button 
            onClick={this.handleBtnClick}
            type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width:'300px'}} 
          bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)} />
      </div>
    )
  }

  handleInputChange(e) {

    //console.log(e.target.value);

    // 创建action
    const action = {
      type: 'change_input_value', // 描述事情
      value: e.target.value
    }

    // action 传给store的reducer
    store.dispatch(action);

  }
  
  /**
   * 监听函数
   */
  handleStoreChange() {
    // 重新获取store数据同步到state
    console.log(store.getState());
    this.setState(store.getState())
    //console.log('changed');  
  }

  
  /**
   * 按钮事件
   */
  handleBtnClick(e) {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action);
  }
}

export default TodoList;