import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.todo.id,
            title: this.props.todo.title,
            body: this.props.todo.body,
            done: this.props.todo.done
        }
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.buttonChanger = this.buttonChanger.bind(this)
    };

    handleClick(e) {
        e.preventDefault();
        this.props.removeTodo({ id: this.props.todo.id }); //{id : this.props.todo.id }
    };
    handleDoneClick(e){
        e.preventDefault();

        if (!this.state.done) {
            this.state.done = true;
            this.props.receiveTodo(this.state);
        } else {
            this.state.done = false
            this.props.receiveTodo(this.state);
        }
    };

    buttonChanger() {
        if (this.state.done === true) return "Undo"
        if (this.state.done === false) return "Done"
    }



    render() {
        return (
            <div>
                <li>Todo: {this.props.todo.title} 
                <button onClick={this.handleDoneClick}>{this.buttonChanger()}</button></li>
               
            </div>
        )
    };
};

export default TodoListItem;

{/* <button onClick={this.handleClick}>DELETE</button> */}