import React from 'react'

export const TodoItem = ( {todo, onDeleteTodo, onToggleTodo})  => {
  return (
    <>
        <li >
            <span 
              onDoubleClick={() => onToggleTodo(todo.id)}
              style={{ textDecoration: todo.done ? 'underline' : 'none' }}
              aria-label='span'
              >
                {todo.description}
            </span>
            <button onClick={() => onDeleteTodo(todo.id)}>borrar</button>
        </li>
    </>
  )
}
