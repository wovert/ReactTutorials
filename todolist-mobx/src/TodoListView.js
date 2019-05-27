import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'

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
@observer class TodoListView extends Component {
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

export default TodoListView