import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css';


class TodoList extends Component {
  
  constructor(props) {
    super(props);
    // 在组件的状态中定义数据
    this.state = {
      inputValue: '',
      list: ['English','React']
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }


  render(){
    console.log('TodoList render');
    return (
      <Fragment>
        <div>
          {/* 多行注释 */}
          {
            // 单行注释 input属性for与jsfor语句冲突，所以使用htmlFor属性
          }
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
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
              index={index}
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
    const value = e.target.value;
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
    }));


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