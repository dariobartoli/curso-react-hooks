import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    
    const todo = [{
        id: 1,
        description: 'Piedra del alma',
        done: false
    }]

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks())

    test('Debe de mostrar el todo pendiente de completar', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        //podria evaluar los classname pero no estoy usando, para hacer referencia al span podria agregarle un aria-label o idtest
        expect(liElement).toBeTruthy()

    })

    test('Debe de mostrar el todo completado', () => { 

        todo.done = true

        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement).toBeTruthy()
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.style._values).toMatchObject({ 'text-decoration': 'underline' })

    })

    test('button debe llamar el deletetodo', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    })
})