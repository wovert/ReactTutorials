import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillReceiveProps() {
  //   console.log('child [componentWillReceiveProps]');
  // }
  // componentWillMount() {
  //   console.log('child componentWillMount');
  // }
  // componentDidMount() {
  //   console.log('child componentDidMount');
  // }

  /**
   * nextProps 接下来变化的prosp
   * nextState 接下来变化的state 
   */
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('child shouldComponentUpdate');
    console.log('nextProps.content:' + nextProps.content);
    console.log('this.props.content:' + this.props.content);
    if(nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }
  // componentWillUpdate() {
  //   console.log('child componentWillUpdate');
  // }
  // componentDidUpdate() {
  //   console.log('child componentDidUpdate');
  // }  
  // componentWillUnmount() {
  //   console.log('child [componentWillUnmount]');
  // }
  render(){
    console.log('child render');
    const { content, test } = this.props;
    return (
      <li 
        key={this.props.index}
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{__html: test + '-' +　content}}
      />
    );
  }

  handleClick(e) {
    const { deleteItem, index } = this.props;
    // 调用父组件
    deleteItem(index);
    
    // this.props.deleteItem(this.props.index);
    // console.log(this.props.index);
  }
}

// 校验父组件传递的数据类型
TodoItem.propTypes = {
  // string or number
  // arrayOf(元素类型,元素类型)
  // content: PropTypes.arrayOf(PropTypes.string, PropTypes.number),

  // content内容为string or number
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.string,
  // 父组件没有传入不检查
  //test: PropTypes.string,
  test: PropTypes.string.isRequired
}

// 父组件传递的默认值
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;