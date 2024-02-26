import PropTypes from 'prop-types';

export const Item = ({ id, done, description, onDeleteTodo, emitToogleTodo }) => {

    const emitDeleteTodo = (todo) => {
        console.log('[ITEM]', todo);
        onDeleteTodo(todo);
    }
    return (
        <li className="list-group-item d-flex justify-content-between" key={id}>
            <span onClick={() => emitToogleTodo({ id, done, description })}
                className={`align-self-center ${(done) ? 'text-decoration-line-through' : ''}`} style={{'cursor':'pointer'}}>{description}</span>
            <button
                className="btn btn-danger"
                onClick={() => emitDeleteTodo({ id, done, description })}
            >Borrar</button>
        </li>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    emitToogleTodo: PropTypes.func.isRequired,
}

