import React from 'react'
import { useFecth } from '../hooks/useFecth'
import { useCounter } from '../hooks/useCounter'
import PokemonCard from './PokemonCard'
import LoadingMessage from './LoadingMessage'

const MultiplesCustomHooks = () => {
    const { counter, increment, decrement} = useCounter(1)
    const { data, hasError, isLoading } = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
            <h1>Información de pokemon</h1>
            <hr/>

            {isLoading 
            ? <LoadingMessage/>
            : (
                <PokemonCard 
                    id={data.id} 
                    name={data.name}
                    sprites= {[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />
            )
            }

            <button onClick={() => counter>1? decrement() : null}>Anterior</button>
            <button onClick={() => increment()}>Siguiente</button>
        </>
    )
}

export default MultiplesCustomHooks