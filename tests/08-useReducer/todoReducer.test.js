import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]

    test('Deberia regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)

    })

    test('debe agregar un todo', () => { 

        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                description: 'new todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
    })

    test('debe eliminar un todo', () => { 

        const action = {
            type: '[TODO] remove todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0)
    })

    test('debe hacer toggle del todo', () => { 

        const action = {
            type: '[TODO] toggle todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBe( true )
    })
})