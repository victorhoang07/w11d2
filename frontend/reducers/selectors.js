
// import TodoList from "../components/todos/todo_list"

const allTodos = state => {
    return {
        todos: Object.values(state.todos)
    }

};

export default allTodos;
