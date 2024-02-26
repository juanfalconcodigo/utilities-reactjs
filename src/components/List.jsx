import { Item } from "./Item"
import PropTypes from 'prop-types';

export const List = ({ todos, onDeleteTodo,onToogleTodo }) => {
    return (
        <ul>
            {todos.map((e) => {
                return (
                    <Item key={e.id} {...e} onDeleteTodo={(todo)=>onDeleteTodo(todo)} emitToogleTodo={onToogleTodo}/>
                )
            })}
        </ul>
    )
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToogleTodo: PropTypes.func.isRequired
}
