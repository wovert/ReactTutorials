import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cmp1 extends Component {
  fn () {
    // this.props.name = '张三' // Error
  }
  render() {
    return (
      <div>
        in Cmp1 componets: name={this.props.name}
        <input type="button" value="try" onClick={this.fn.bind(this)} />
      </div>
    )
  }
}

export default connect((state, props)=>{
  return state
})(Cmp1)