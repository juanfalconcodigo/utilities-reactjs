
import { Form } from "../components/Form";
import { List } from "../components/List";
import { useTodos } from "../hooks/useTodo";



export const PageReducer = () => {

    const {todos,onAddTodo,onDeleteTodo,onToogleTodo,todosCount,pendingTodosCount } = useTodos();

    return (
        <>
            <h1>PageReducer</h1>

             <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <List todos={todos} onDeleteTodo={onDeleteTodo} onToogleTodo={onToogleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <Form onEmitValueForm={onAddTodo} />
                </div>

            </div>
        </>
    )
}
