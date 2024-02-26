import { useState } from 'react'
import PropTypes from 'prop-types'
export const Form = ({ onEmitValueForm }) => {
    const [todoItem, setTodoItem] = useState({ id: '', description: '', done: false });
    const { description } = todoItem;
    const handleChangeValue = (e) => {

        const { name, value } = e.target;
        setTodoItem((state) => {
            return {
                ...state,
                [name]: value
            }
        });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoItem.description.length === 0) return;
        onEmitValueForm({
            ...todoItem,
            id: new Date().getTime()
        });

        setTodoItem({
            id: '',
            description: '',
            done: false
        });
    }
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input className='form-control' type="text" name='description' value={description} onChange={handleChangeValue} />
            <button type="submit" className="btn btn-primary mt-2" style={{ 'width': '100%' }}>Agregar</button>
        </form>
    )
}
Form.propTypes = {
    onEmitValueForm: PropTypes.func.isRequired
}