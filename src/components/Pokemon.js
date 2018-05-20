import React from 'react'

const Pokemon = ({pokemon}) =>
    <div className="tile" key={pokemon.id}>
        <h4>{pokemon.title}</h4>
        <p>{pokemon.body}</p>
    </div>

export default Pokemon
