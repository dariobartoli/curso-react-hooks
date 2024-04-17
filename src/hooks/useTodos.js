import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])

    }, [todos])



    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }

    const todosCount = todos.length

    const pendingTodosCount = todos.filter(todo => !todo.done).length

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,
        todosCount,
        pendingTodosCount

    }
}
