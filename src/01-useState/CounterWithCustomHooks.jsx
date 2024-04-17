import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHooks = () => {

    const { counter, increment, decrement, reset} = useCounter();

    return (
        <> 
            <h1>Counter with hooks: {counter}</h1>
            <button onClick={() => increment()}>+1</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => decrement(2)}>-1</button>
        </>
    )
}

export default CounterWithCustomHooks