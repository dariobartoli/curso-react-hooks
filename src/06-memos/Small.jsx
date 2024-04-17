import { memo } from 'react'

export const Small = memo(({value}) => {
    //memorizamos el componente para que solo se renderize cuando cambie la prop y no cuando cambie algo del componente padre tambien
    console.log('Me volvi a dibujar');
    return (
        <small>{value}</small>
    )
})
