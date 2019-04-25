import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) // 提高性能
  }
  render () {
    const { content, name } = this.props
    return (
      <li 
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{__html: content + name}}
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
