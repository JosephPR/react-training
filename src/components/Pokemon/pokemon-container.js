import React from 'react';
import PokemonItem from './pokemon-item'

export default function PokemonContainer (props) {
  console.log(props)
  const sprites = props.sprites.map((sprite) => {
    return <PokemonItem
    key={sprite}
    sprite={sprite.name} />
  })
  return (
    <>
    <div className="pokemon-card-list"> {sprites} </div>
    </>
  )
}
