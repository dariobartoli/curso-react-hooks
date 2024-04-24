import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp />', () => { 

    test('debe de mostrar el homepage', () => { 

        render( 
            <MemoryRouter>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('Main App')).toBeTruthy()
        //screen.debug()
    })

    test('debe de mostrar el loginpage', () => { 

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('LoginPage')).toBeTruthy()
    })

    test('debe de mostrar el aboutpage', () => { 

        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('AboutPage')).toBeTruthy()
    })

    test('debe de mostrar el homepage', () => { 

        render( 
            <MemoryRouter initialEntries={['/']}>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('HomePage')).toBeTruthy()
    })

    test('debe de mostrar el homepage ante cualquier ruta no coincidente', () => { 

        render( 
            <MemoryRouter initialEntries={['/asd']}>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('HomePage')).toBeTruthy()
    })
})