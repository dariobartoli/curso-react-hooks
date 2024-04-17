import { TodoList } from "./TodoList"
import TodoAdd from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"



export const TodoApp = () => {

    const { handleDeleteTodo, handleToggleTodo, handleNewTodo, todos, todosCount, pendingTodosCount } = useTodos()

    return (
        <>
            <h1>Todo App: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
            <hr/>

            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>

            <div>
                <h4>Agregar TODO</h4>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </>
    )
}
