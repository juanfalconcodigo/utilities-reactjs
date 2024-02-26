import { useReducer } from "react"
import { INITIAL_STATE, todoReducer } from "../reducer/reducer";

export const useTodos = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, INITIAL_STATE);
    const onAddTodo = (emitValue) => {
        dispatchTodo({ type: '[ADD]', payload: emitValue })
    }
    const onDeleteTodo = (todo) => {
        dispatchTodo({ type: '[DELETE]', payload: todo });
    }

    const onToogleTodo = (todo) => {
        dispatchTodo({ type: '[TOOGLE]', payload: todo });
    }
    return {
        todos,
        onAddTodo,
        onDeleteTodo,
        onToogleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((e) => !e.done).length
    }
}