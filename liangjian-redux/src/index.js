import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Yiying from './Yiying';
import Qibinglian from './Qibinglian';
import Test from './Test';
import { counter } from './index.redux';

const store = createStore(counter, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
  )
);
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">团部</Link></li>
          <li><Link to="/yiying">一营</Link></li>
          <li><Link to="/qibinglian">骑兵连</Link></li>
        </ul>
        <Switch>
          {/*Switch: 只渲染第一个Route*/}
          <Route path="/" exact component={App}></Route>
          <Route path="/yiying" component={Yiying} boss="张大喵"></Route>
          <Route path="/qibinglian" component={Qibinglian} boss="孙德胜"></Route>
          <Route path="/:location" component={Test}></Route>
          {/*不管访问什么页面都会跳转到首页*/}
          {/* <Redirect to='/'></Redirect> */}
        </Switch>
      </nav>
    </BrowserRouter> 
  </Provider>), 
  document.getElementById('root')
);