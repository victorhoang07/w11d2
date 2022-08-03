import React from "react"
import { uniqueId } from "../../util/util"

class TodoForm extends React.Component {

    constructor (props) {
        super(props)
        this.state ={
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    updateTitle (e) {
        this.setState({title: e.target.value})
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveTodo(this.state)

        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        })
    }

    render () {
       return (
       <form onSubmit={this.handleSubmit}>
            <h1>Add a todo!</h1>

            <label>Title
                <input type="text" value={this.state.title} onChange={this.updateTitle}/>
            </label>
            <br /> <br />

            <label>Body
                <input type="text" value={this.state.body} onChange={this.updateBody} />
            </label>
            <br /><br />

            <input type="submit" value="Add Todo"/>
        </form>
        
       )
    }


}

export default TodoForm;
            // <div>
            //     <label>Done
            //         <input type="checkbox" name="radio" value="true" />
            //     </label>
            //     <label>Not Done
            //         <input type="checkbox" name="radio" value="false" />
            //     </label>
            
            // </div>
            // <br />