import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos"

jest.mock("../../src/hooks/useTodos")


describe('Pruebas en <TodoApp />', () => { 

    //hacemos un mock de useTodos, para crear la informacion
    useTodos.mockReturnValue({
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn(), 
        todos: [
            {id: 1, description: 'todo 1', done: false},
            {id: 2, description: 'todo 2', done: false},
            {id: 3, description: 'todo 3', done: true},
        ], 
        todosCount: 3, 
        pendingTodosCount: 2
    })

    test('debe de mostrar el componente correctamente', () => { 
        render( <TodoApp/>)
        //screen.debug()
        expect( screen.getByText('todo 1')).toBeTruthy()
        expect( screen.getByText('todo 2')).toBeTruthy()
        expect( screen.getByText('todo 3')).toBeTruthy()
    })
})