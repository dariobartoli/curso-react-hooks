import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (number) => {
    for (let index = 0; index < number; index++) {
        console.log('Ahi vamos..');
    }

    return `${number} iteraciones realizadas`
}

const MemorizeHook = () => {
    const { counter, increment } = useCounter(4000)
    const [show, setShow] = useState(true)

    //memorizamos el valor de heavyStuff, para que solo se vuelva a disparar la funcion cuando counter cambie, y no siempre que cambie
    //cualquier otra parte del componente padre
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{memorizedValue}</h4>
            <button onClick={() => increment(1)}>+1</button>

            <button onClick={() => setShow(!show)}>Show/hide: {JSON.stringify(show)}</button>
        </>
    )
}

export default MemorizeHook