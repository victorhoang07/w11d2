import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo} from "./actions/todo_actions";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";
document.addEventListener("DOMContentLoaded", () => {

    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;

    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;

    const store = configureStore();
    window.store = store;    


})