import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Me volvi a generar');
    return (
        <>
            <button onClick={() => {increment()}}>
                +1
            </button>
        </>
    )
})
