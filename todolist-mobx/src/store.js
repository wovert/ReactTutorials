import {
  observable,
  computed,
  action
} from 'mobx'

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

export default store