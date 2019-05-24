import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'


class App extends Component {
  sayHello () {
    alert('hello')
  }
  render () {
    return (
      <Fragment>
        <h1>React SSR showing!</h1>
        <h2>Header</h2>
        <button onClick={this.sayHello}>button</button>
        {/* <ul>
          {
            this.props.list.map((index, item) => {
              return <li key="index">{item}</li>
            })
          }
        </ul> */}
      </Fragment>
    )
  }
}

export default hot(App)