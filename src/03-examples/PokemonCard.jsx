import React from 'react'

const PokemonCard = ({id, name, sprites}) => {
  return (
    <>
        <h2>#{id} - {name}</h2>
        <div>
            {
                sprites.map( sprite => (
                    <img key={sprite} src={sprite} alt={name} />
                ))
            }
        </div>
    </>
  )
}

export default PokemonCard