import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

export default class TodoListUI extends React.Component {
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
            onChange={this.props.handleInputChange}
            value={this.props.inputValue}
            placeholder='todo info'
            style={{
              width: '300px',
              marginRight: '10px'
            }} 
          />
          <Button 
            onClick={this.props.handleBtnClick}
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
          dataSource={this.props.list}
          renderItem={
            (item, index) => (
              <List.Item 
                onClick={ (index) => { this.props.handleItemDelete(index) } }
              >
                {item}
              </List.Item>
            )
          }
        />
      </div>
    )
  }
}