import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import TodoListView from './TodoListView'
import store from './store'

export default class App extends Component {
  // 将 store 传给 Provider
  render() {
    return (
      <Provider todolist={store}>
        <TodoListView />
      </Provider>
    );
  }
}