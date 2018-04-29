import React, { Component } from 'react';
import Yiying from './Yiying';
import Qibinglian from './Qibinglian';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '军队要时刻准备投入战争，随带待命。'
    }
  }
  combatOrder() {
    this.setState({
      message: this.refs.messageInput.value
    });
  }

  render() {
    const boss = '李云龙';
    return (
      <div>
        <h1>独立团，{boss}</h1>
        <input type="text" ref="messageInput" />
        <button onClick={ () => { this.combatOrder() }}>团部作战命令</button>
        <Yiying boss="张大喵" message={this.state.message} />
        <Qibinglian boss="孙德胜" message={this.state.message} />
      </div>
    );
  }
}
export default App;