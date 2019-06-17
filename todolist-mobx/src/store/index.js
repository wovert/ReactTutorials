import TodoList from "./TodoList"
// import Timer from "./timer"

class Stores {
  constructor() {
    // 我们创建TodoList 对象，在手动的添加两个待办项，此处的 store 对象可以理解为是一个单例，在将其引用暴露出去
    this.todoList = new TodoList()
    this.todoList.addTodo('Get Coffee')
    this.todoList.addTodo('Write blog')
    // this.timer = new Timer()
  }
}

export default new Stores()