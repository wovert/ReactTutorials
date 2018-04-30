import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import reducer  from './reducer';
import Auth from './Auth.js';
import Dashboad from './Dashboard.js';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  )
);

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Auth}></Route>
        <Route path="/dashboard" component={Dashboad}></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
    </BrowserRouter> 
  </Provider>), 
  document.getElementById('root')
);