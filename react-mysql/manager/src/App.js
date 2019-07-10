import React, { Component } from 'react'
import {connect} from 'react-redux'
import View from './pages/view'
import Add from './pages/add'
// import Dialog from './components/Dialog'
import Data from './data'
//import HelloCreate from './components/Hello'
import { INIT_ITEM } from './store/actions'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


//let Hello1=HelloCreate('你好')
//let Hello2=HelloCreate('hello')

class App extends Component {
  constructor(...args){
    super(...args)
    this.state = {
      panelShow: false
    }
  }

  async componentDidMount() {
    let {data} = await Data.get('list')
    this.props.initItem(data)
  }

  render() {
    return (
      <Router>
        <div>
          <Link className="btn btn-default glyphicon glyphicon-plus" to="/add">添加商品</Link>
          <Route path="/" exact component={View} />
          <Route path="/add" component={Add} />
        </div>
      </Router>
    )
  }
}

export default connect(function (state, props) {
  return state
}, {
  initItem(items) {
    return {
      type: INIT_ITEM,
      items
    }
  }
})(App)
