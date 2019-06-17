import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import store from './store'
import TodoListView from './TodoListView'


export default class App extends Component {
  render() {
    return (
      <Provider todolist={store.todoList}>
        <TodoListView />
      </Provider>
    );
  }
}