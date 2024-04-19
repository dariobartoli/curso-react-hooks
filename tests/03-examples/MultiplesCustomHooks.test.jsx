import { render, screen } from "@testing-library/react"
import MultiplesCustomHooks from '../../src/03-examples/MultiplesCustomHooks'
import { useFecth } from "../../src/hooks/useFecth"

jest.mock("../../src/hooks/useFecth")

describe('Pruebas en <MultiplesCustomHooks/>', () => { 

    test('Debe mostrar el componente por defecto', () => {
        
        useFecth.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultiplesCustomHooks/>)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de pokemon'))
        expect(screen.getByText('Anterior'))
        expect(screen.getByText('Siguiente'))
        /* screen.debug() */

    })

    test('Debe de mostrar un Quote', () => {
        
        useFecth.mockReturnValue({
            data: [{ id: 5, name: 'Charmander', sprites: {front_default:'abc', front_shiny: 'aaa', back_default: 'fff', back_shiny: 'asdasds'}}],
            isLoading: true,
            hasError: null
        })

        render( <MultiplesCustomHooks/>)
    })

    
})