import React, { Component, Fragment } from 'react';
import axios from 'axios';

import TodoItem from './TodoItem';
// import Test from './Test';
import './style.css';


class TodoList extends Component {
  
  constructor(props) {
    super(props);
    // 在组件的状态中定义数据
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }
  componentDidMount() {
    console.log('componentDidMount');
    // 调用接口
    axios.get('/api/todolist')
      .then((res)=>{ 
        console.log(res.data); 
        // this.setState(()=>{
        //   return {
        //     list: res.data
        //   }
        // });
        this.setState(()=>({
          list: [...res.data]
        }));
      })
      .catch(()=>{ alert('faire')  });
  }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }  
  render(){
    console.log('parent render');
    return (
      <Fragment>
        <div>
          {/* 多行注释 */}
          {
            // 单行注释 input属性for与jsfor语句冲突，所以使用htmlFor属性
          }
          <label htmlFor="insertArea">输入内容</label>
          {/* this.input指向当前input元素对象 */}
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
        {/* <Test content={this.state.inputValue} /> */}
      </Fragment>
    );
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        // __html: item 不转移HTML内容
        return (
          <Fragment key={index}>
            <TodoItem
              content={item}
              index={item}
              deleteItem={this.handleItemDelete}
            />
            {/*<li 
            key={index} 
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
          ></li>*/}
          </Fragment>
        )
      })
    );
  }

  /**
   * 输入框内容更改
   */
  handleInputChange(e) {
    // 不能直接修改状态值
    //this.state.inputValue = e.target.value;

    // 使用方法修改状态值
    // 旧方法
    // this.setState({
    //   inputValue : e.target.value
    // });

    // 新方法1
    // this.setState(()=>{
    //   return {
    //     inputValue: e.target.value
    //   }
    // });

    // 新方法2: ES6简写
    // e.target是元素DOM节点对象
    //const value = e.target.value;

    // 引用ref直接使用DOM元素，推荐数据驱动获取DOM元素值
    const value = this.input.value;
    // 异步
    this.setState(()=>({
      inputValue: value
    }));

    //console.log(e.target.value);
  }

  /**
   * 提交按钮
   */
  handleBtnClick(e) {
    // this.setState({
    //   // 以前数据展开之后再次拼接
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // });

    // prevState 修改之前的数据等价于this.state
    this.setState((prevState)=>({
      // 以前数据展开之后再次拼接
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // setSate函数执行之后回掉函数
      console.log(this.ul.querySelectorAll('li').length);      
    });

    // 获取list的DOM节点li元素数量，结果长度总是少一个
    // 因为setState 是异步函数，setState执行之前console.log()运行
    // 解决方案：在setState函数的回掉函数里调用
    // console.log(this.ul.querySelectorAll('li').length);


  }

  /**
   * 删除列表项
   */
  handleItemDelete(index) {

    //this.state.list.splice(index, 1);

    // 复制List数据
    // const list = [...this.state.list];
    // list.splice(index, 1);

    // this.setState({
    //   list: list
    // });
    this.setState((preveState)=>{
      const list = [...preveState.list];
      list.splice(index, 1);
      return {list}
    });


    //console.log(index);
  }
  
  
}

export default TodoList;