import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

// const mapStatetoProps = (state) => {
//   return {num: state};
// }
// const actionCreators = {addGun, removeGun, addGunAsync};
// App = connect(mapStatetoProps, actionCreators)(App);

@connect(
  // state 什么属性放到 props 里
  state => ({num:state}),
  // 你要什么方法，放到 props 里，自动 dispatch
  { addGun, removeGun, addGunAsync }
)

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    //const store = this.props.store;
    //const num = store.getState();
    // const num = this.props.num;
    // const addGun = this.props.addGun;
    // const removeGun = this.props.removeGun;
    // const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天给武器</button>
      </div>
    );
  }
}

export default App;
