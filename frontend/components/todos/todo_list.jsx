import React from "react";
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";


 const TodoList = (props) => {

    return (
        <div>
            <h3>Todo List goes here!</h3>
            
            <ul>
                {
                    props.todos.todos.map(todo => {
                        return ( 
                            <TodoListItem key={todo.id} todo={todo} receiveTodo = {props.receiveTodo} removeTodo={props.removeTodo}/>
                        )
                    })
                }
            </ul>

            <TodoForm receiveTodo={props.receiveTodo}/>
        </div>
    )
 }
 
 export default TodoList