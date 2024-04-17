import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

const SimpleFormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password} = formState

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr/>
            <input type="text" name="username" id="" placeholder='Username' value={username} onChange={onInputChange}/>
            <input type="email" name="email" id="" placeholder='email@asd.com' value={email} onChange={onInputChange}/>
            <input type="email" name="password" id="" placeholder='contraseña' value={password} onChange={onInputChange}/>
            <button onClick={onResetForm}>Borrar</button>
            
        </>
    )
}

export default SimpleFormWithCustomHook