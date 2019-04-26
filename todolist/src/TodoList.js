import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import axios from 'axios'
import TodoItem from './TodoItem'
import './index.css'

export default class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['english','math'],
      show: false
    }

    // this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            // onChange={this.handleInputChange.bind(this)}
            onChange={this.handleInputChange}
            ref={(input) => { this.input = input }}
          />
          {/* <button onClick={this.handleBtnClick.bind(this)}>提交</button> */}
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
        >
          <ul ref={(ul) => { this.ul = ul }}>
            { this.getTodoItem() }
          </ul>
        </CSSTransition>
      </Fragment>
    )
  }

  componentDidMount () {
    axios.get('/api/todolist')
      .then((res) => {
        this.setState(() => ({
          list: [...res.data]
        }))
      })
      .catch(() => {alert('error')})
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          index={index}
          content={item}
          // name={item}
          // deleteItem={this.handleItemDelete.bind(this)}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }
  handleInputChange = (e)  => {
    // this.setState({
    //   inputValue: e.target.value
    // })

    // e.target 指向DOM节点
    // console.log(e.target)
    const value = e.target.value
    // ({}): 外城()表示return
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick (e) {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue]
    // })
    // prevState == this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      show: true,
      inputValue: '' 
    }), () => {
      // setState异步执行完成之后执行以下代码
      console.log(this.ul.querySelectorAll('li').length) 
    })

    // console.log(this.ul.querySelectorAll('li').length) // 比预计的少一个，因为setState异步执行
  }

  handleItemDelete (index) {
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}
