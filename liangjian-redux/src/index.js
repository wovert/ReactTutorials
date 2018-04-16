import React, {Component} from 'react';  
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// 多页应用
import { BrowserRouter, Route, Link } from 'react-router-dom';


import App from './App';
// import { counter, addGun, removeGun, addGunAsync } from './index.redux';
import { counter } from './index.redux';
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(counter, compose(
  applyMiddleware(thunk, logger),
  reduxDevtools
));

// function render() {
//   ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, document.getElementById('root'));
// }
// render();

// // 状态变换时渲染
// store.subscribe(render);

function Erying() {
  return <h2>二营</h2>
}
function Qibinglian() {
  return <h2>骑兵连</h2>
}

class Test extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <h2>测试组件{this.props.match.params.location}</h2>
    );
  }
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
            <li>
              <Link to="/">一营</Link>
            </li>
            <li>
              <Link to="/erying">二营</Link>
            </li>
            <li>
              <Link to="/qibinglian">骑兵连</Link>
            </li>                    
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/erying" component={Erying}></Route>
        <Route path="/qibinglian" component={Qibinglian}></Route>
        <Route path="/:location" component={Test}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);