import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

const Memorize = () => {
    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>
            <button onClick={() => increment(1)}>+1</button>

            <button onClick={() => setShow(!show)}>Show/hide: {JSON.stringify(show)}</button>
        </>
    )
}

export default Memorize