import React, { useRef } from 'react'

const FocusScreen = () => {
    const inputRef = useRef()

    const onFocus = () => {
        inputRef.current.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input type="text" name="" id="" placeholder='ingrese su nombre' ref={inputRef}/>
            <button onClick={onFocus}>Set focus</button>
        </>
    )
}

export default FocusScreen