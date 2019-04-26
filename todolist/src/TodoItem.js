import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) // 提高性能
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render () {
    console.log('父组件render, 子组件也会自动渲染 render')
    const { content } = this.props
    return (
      <li 
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{__html: content}}
      ></li>
    )
  }

  handleClick (e) {
    const { index, deleteItem } = this.props
    deleteItem(index)
  }
}

// 校验父组件传递的值
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string.isRequired
}

// 设置默认值
TodoItem.defaultProps = {
  name: 'default name'
}

export default TodoItem
