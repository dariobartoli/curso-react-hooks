import React, { useEffect, useState } from 'react'
import MessageApp from './MessageApp'


const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Pablo',
        email: 'pablo@gmail.com'
    })
    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

/*     useEffect(() => {
        console.log('useEffect called!');
    }, [])

    useEffect(() => {
        console.log('formState changed!');
    }, [ formState ])

    useEffect(() => {
        console.log('email changed!');
    }, [ email ]) */
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>
            <input type="text" name="username" id="" placeholder='Username' value={username} onChange={onInputChange}/>
            <input type="email" name="email" id="" placeholder='email@asd.com' value={email} onChange={onInputChange}/>
            {
                (username === 'martin') && <MessageApp/>
            }
            
        </>
    )
}

export default SimpleForm