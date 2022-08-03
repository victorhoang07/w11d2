// import allTodos from "../../reducers/selectors";
import { connect } from "react-redux";
import { removeTodo } from "../../actions/todo_actions"
import TodoDetailView from "../todo_list/todo_detail_view"

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView);