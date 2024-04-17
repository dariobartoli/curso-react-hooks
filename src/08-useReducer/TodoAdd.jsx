import { useState } from "react"
import { useForm } from '../hooks/useForm'


const TodoAdd = ( {onNewTodo} ) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo(newTodo)
        onResetForm()
    }

    

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="description" id="" placeholder="¿Que hay que hacer?" value={description} onChange={onInputChange}/>
                <button type="submit">Agregar</button>
            </form>
        </>
    )
}

export default TodoAdd