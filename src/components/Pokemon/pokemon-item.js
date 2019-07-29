import React from 'react';


export default function PokemonItem (props) {
  console.log(props)
  return (
    <>
    <div className='pokemon-card-container'>
    <h2>{props.sprite}</h2>
    </div>
    </>
  )
}
