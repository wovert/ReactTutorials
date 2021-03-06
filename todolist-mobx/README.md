# MobX

> one more time one more chance

MobX 用于简单、可扩展的状态管理。通常搭配 React 使用，但不只限于 React。如何你厌烦了 Redux 繁杂的模板代码和 API，那么可以尝试下 MobX。网上好像流传： Redux 是谁用谁加班

## 状态管理库的区别

网上某位大牛的 ppt, 链接有机会再补上。此处的**自己**为库的**开发者**，**别人**是指库的**使用者**，也就是我等码农。

1. MobX 恶心自己，成全别人
2. Redux 成全自己，恶心别人
3. Rxjs 恶心自己，也恶心别人

> 用一句话概括 MobX: 追踪你的改变，并为之做出响应。

## 开发环境搭建

Step 1: `npx create-react-app mobx-todo-list` 创建项目

Step 2: `npm install -S mobx mobx-react` 安装 mobx 的相关依赖

Step 3: 使 `create-react-app` 创建的项目支持装饰器语法

```sh
npm run eject
npm install --save-dev @babel/plugin-proposal-decorators
```

Step 4: 修改配置文件 `package.json`

```js
"babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ],
    "presets": [
        "react-app"
    ]
}
```

## 创建 App 的 store

Mobx 中创建 `store` 的常见关键字如下： `observable computed action`。
`observable` 用来声明**可观察的数据**、`computed`是声明可**观察数据的演变数据**，和   `observable` 具有同等地位，`action` 用来**改变 observable 数据**，但是 `action` 不是必须的，可以认为其是较好的约定，最好遵循。在 mobx 程序中使用 class、装饰器是最佳实践，因此我们的代码也使用装饰器实现。

```js
import {observable, computed, action} from 'mobx'

class Todo {
    // 定义一个 TODO 项目的类，id 是随机数，没有使用@observable 装饰可以理解为是只读的
    id = Math.random();
    // todo 的 title 及完成状态 finished 是可被观察及更新的，同时 finished 的初始状态为 false
    @observable title;
    @observable finished = false;
    // 构造函数接收tile
    constructor(title) {
        this.title = title;
    }
}

// TODO List 类
class TodoList {
    // 可被观察的待办项 todos
    @observable todos = [];
    // 计算属性，重可观察属性 todos 衍生出来，返回没有完成的待办项的个数
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    // 动作用来更新 todos 属性的值，添加待办项
    @action
    addTodo = title => {
        if (!title) return;
        this.todos.push(new Todo(title));
    }
}

// 我们创建TodoList 对象，在手动的添加两个待办项，此处的 store 对象可以理解为是一个单例，在将其引用暴露出去
const store = new TodoList();
store.todos.push(new Todo('Get Coffee'), new Todo('Write blog'));
store.todos[0].finished = true;

export default store;
```

## 实现监听数据的组件

`Provider、observer、inject` 均为是mobx-react提供。

`Provider` 以组件的形式存在，用来包裹最外层组件节点，并且传入 `store`（通过）context 传递给后代组件。

使用 `@observer` 装饰的 react 组件将转换成一个监听者，当 `@observable` 修饰的数据变化，react 组件就会重新渲染。

`@inject` 为了使被装饰的组件以 `props` 的形式获取到 `Provider` 传递过来的数据。

```js
import {observer, inject} from 'mobx-react';
const TodoView = ({todo}) => (
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            // 此处的 onChange 并未遵循 action 的约定，进一步证明了直接更新 store 的数据也是可行的
            onChange={() => {todo.finished = !todo.finished;}}
        />
        {todo.title}
    </li>
)

@inject('todolist')
@observer
export default class TodoListView extends Component {
    state = {
        title: ''
    }
    changeTitle = e => {
        let title = e.target.value;
        this.setState({title});
    }
    // 调用 store 中的 addTodoaction 更新 store 里面的数据
    submit = () => {
        this.props.todolist.addTodo(this.state.title);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.title} onChange={this.changeTitle} />
                <button onClick={this.submit}>submit</button>
                <ul>
                    {this.props.todolist.todos.map(todo => (
                        <TodoView todo={todo} key={todo.id} />
                    ))}
                </ul>
                Tasks left: {this.props.todolist.unfinishedTodoCount}
            </div>
        );
    }
}
```

## 通过 Provider 将数据传递给组件树

```js
import TodoListView from './TodoListView'
import store from './store'
import {Provider} from 'mobx-react'

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
```