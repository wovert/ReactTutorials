import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'


class App extends Component {
  render () {
    return (
      <Fragment>
        <h1>React SSR showing!</h1>
        <h2>Header</h2>
        <ul>
          {
            this.props.list.map(item => {
              return <li>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default hot(App)