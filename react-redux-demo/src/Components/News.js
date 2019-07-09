import React, { Component } from 'react'
class News extends Component {

  constructor(...args) {
    super(...args)

    this.state = {
      data: 'aaa'
    }
  }

  // 参数变化时更新
  componentDidUpdate (old_props, old_state) {
    let id = this.props.match.params.id
    let old_id = old_props.match.params.id
    if (old_id !== id) {
      console.log('更新')
      this.setState({
        data: id === 1 ? 'aaa': 'bbb'
      })
    }
  }

  render () {
    return (
      <div>
        <h2>News</h2>
        <div>
          新闻参数id: {this.props.match.params.id}<br />
          {this.state.data}
        </div>
      </div>
    )
  }
}
export default News
