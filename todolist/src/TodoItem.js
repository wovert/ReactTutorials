import React from 'react'

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) // 提高性能
  }
  render () {
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