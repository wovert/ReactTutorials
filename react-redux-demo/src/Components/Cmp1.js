import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SET_NAME, ADD_AGE } from '../store/actions'

class Cmp1 extends Component {
  fn () {
    this.props.setName('微明')
  }
  addAge () {
    this.props.addAge(10)
  }
  render() {
    return (
      <div>
        <h2>Cmp1</h2>
        <div className="App">
          <input type="button" value="changeName" onClick={this.fn.bind(this)} />
          <input type="button" value="+10" onClick={this.addAge.bind(this)} /><br />
          姓名：{this.props.name}<br />
          年龄：{this.props.age}<br />
          <hr />
        </div>
      </div>
    )
  }
}

export default connect((state, props)=>{
  return state.user
}, {
  // 这里是action
  setName(name) {
    return {
      type: SET_NAME,
      name
    }
  },
  addAge(age) {
    return {
      type: ADD_AGE,
      age
    }
  }
})(Cmp1)