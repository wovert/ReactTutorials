import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// 无状态组件
const TodoListUI = (props) => {
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
          onChange={props.handleInputChange}
          value={props.inputValue}
          placeholder='todo info'
          style={{
            width: '300px',
            marginRight: '10px'
          }} 
        />
        <Button 
          onClick={props.handleBtnClick}
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
        dataSource={props.list}
        renderItem={
          (item, index) => (
            <List.Item 
              onClick={ () => { props.handleItemDelete(index) } }
            >
              {item}
            </List.Item>
          )
        }
      />
    </div>
  )
}

export default TodoListUI