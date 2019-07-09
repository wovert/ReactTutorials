import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Cmp1 from './Components/Cmp1'
import { SET_NAME, ADD_AGE } from './store/actions'

class App extends Component {
  fn () {
    this.props.setName('微明')
  }
  addAge () {
    this.props.addAge(10)
  }
  render () {
    return (
      <div className="App">
        <input type="button" value="changeName" onClick={this.fn.bind(this)} /><br />
        <input type="button" value="addAge" onClick={this.addAge.bind(this)} /><br />
        姓名：{this.props.name}<br />
        年龄：{this.props.age}<br />
        <Cmp1 />
      </div>
    )
  }
}

// export default App

// state：来自于 index.js 的 state
// props: 来自于 index.js 的 App组件传递的参数
export default connect((state, props) => {
  // console.log(state)
  // console.log(props)
  // return state
  return {
    ...state,
    name: [state.name, props.name]
  }
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
})(App)

