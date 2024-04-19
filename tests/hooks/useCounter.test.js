import { renderHook } from "@testing-library/react"
import { useCounter } from '../../src/hooks/useCounter'
import { act } from "react-dom/test-utils";

describe('Pruebas en useCounter', () => { 

    test('Debe de retornar los valores por defecto', () => { 

        //renderhook de testing library react para renderizar hooks
        const { result } = renderHook(() => useCounter());
        //console.log(result);
        const { counter, increment, decrement, reset} = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any(Function));
        expect( increment ).toEqual( expect.any(Function));
        expect( reset).toEqual( expect.any(Function));
    })

    test('Debe de retornar el counter con valor 100', () => {
        
        const value = 100
        const { result } = renderHook(() => useCounter(value));

        const { counter} = result.current;

        expect( counter ).toBe(100);
    })

    test('Debe de incrementar el contador', () => {
        
        const { result } = renderHook(() => useCounter());
        const { counter, increment} = result.current;
        act( () => {
            increment(1)
        })
        // no pasamos counter porque no se actualiza, me daria 10, por eso tomamos el valor actual
        expect(result.current.counter).toBe(11)
    })

    test('Debe de disminuir el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement} = result.current;
        act( () => {
            decrement(3)
        })
        expect(result.current.counter).toBe(7)
    })

    test('Debe de resetear el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { reset, decrement} = result.current;
        act( () => {
            decrement(3)
            reset()
        })
        expect(result.current.counter).toBe(10)
    })
})