import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
// import './style.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <h1  class={this.state.show ? 'show' : 'hide'}>Hello</h1>
        <button onClick={this.handleToggle}>toggle</button> */}
        
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames='fade'
        >
          <h1>Hello</h1>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>  
      </Fragment>
    )
  }

  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default App;
