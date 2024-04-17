import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"



export const Callback = () => {
    const [counter, setCounter] = useState(10)

    //Sirve como el useMemo pero para memorizar funciones por asi decirlo
    //que estas se guardan en distintas posiciones en memoria, por eso memo no funcionaria. objetos y funciones en espacios de memorias diferente
    const increment = useCallback(
      () => {
        //setCounter(counter +1) de está manera solamente sumaria una vez porque esta memorizado el counter dentro,
        //y pasar el counter como dependencia haria que sea siempre una funcion nueva y no tendria sentido el useCallback
        setCounter( (value) => value + 1 )
      },
      [],
    )
    

    /* const increment = () => {
        setCounter(counter +1)
    } */
    return (
        <>
            <h1>Callback hook {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </>
    )
}
