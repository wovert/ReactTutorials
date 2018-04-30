import React from 'react';
import { addGun, removeGun } from './index.redux';
export default class App extends React.Component {
  render() {
    const store = this.props.store;
    const num = store.getState();

    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
        <button onClick={()=>store.dispatch(removeGun())}>上缴武器</button>
      </div>
    );
  }
}