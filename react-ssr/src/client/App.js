import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'


class App extends Component {
  render () {
    return (
      <Fragment>
        <h1>React SSR showing!</h1>
        <h2>Header 222</h2>
      </Fragment>
    )
  }
}

export default hot(App)