import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo} from "./actions/todo_actions";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";

import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import allTodos from "./reducers/selectors";


document.addEventListener("DOMContentLoaded", () => {

    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;

    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;

    window.allTodos = allTodos
    
    const store = configureStore();
    window.store = store;    

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);




})