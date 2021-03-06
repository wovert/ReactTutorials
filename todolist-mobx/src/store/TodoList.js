import {
  observable,
  computed,
  action
} from 'mobx'

// 定义一个 TODO 项目的类
class Todo {
  // id 是随机数，没有使用 @observable 装饰可以理解为是只读的
  id = Math.random()

  // todo 的 title 及完成状态 finished 是可被观察及更新的
  @observable title

  // finished 的初始状态为 false
  @observable finished = false

  constructor(title) {
    this.title = title
  }
}

// TODO List 类
export default class TodoList {

  // 可被观察的待办项 todos
  @observable todos = []

  // 计算属性，重可观察属性 todos 衍生出来，返回没有完成的待办项的个数
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  // 动作用来更新 todos 属性的值，添加待办项
  @action addTodo = title => {
    if (!title) return
    this.todos.push(new Todo(title))
  }
}