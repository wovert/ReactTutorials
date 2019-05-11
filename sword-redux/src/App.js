import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

@connect(
  // 要 state 什么属性放到 props
  state => ({ num: state.counter }),
  // 要什么方法，放到 props里，自动dispatch
  { addGun, removeGun, addGunAsync }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上缴武器</button>
        <button onClick={this.props.addGunAsync}>拖两天上缴武器</button>
      </div>
    );
  }
}
export default App;