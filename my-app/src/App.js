import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

let data = [
  {
    name: 'wovert',
    age: '10'
  },
  {
    name: 'lingyima',
    age: '18'
  }
]

let styleValue= {fontSize: '40px'}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          boolean: {true}<br />
          null: {null}<br />
          undefined: {undefined}<br />
          {
            data.map((item, index) => {
              let {name, age} = item
              return <span key={age}>{name}</span>
            })
          }
          <img src={logo} className="App-logo" alt="logo" />
          <p className='param' style={styleValue}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}
