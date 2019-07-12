import React from 'react'
import RamItem from './ram-item'
import './ram.css'

export default function RamContainer(props) {
  console.log(props)
  const chars = props.characters.map((character) => {
    // console.log(item.id)
    return <RamItem
       key={character.id}
         id={character.id} name={character.name}
          image={character.image}
          status={character.status}
          species={character.species}
          type={character.type}
          origin={character.origin.name}
          />

  })

  return(
    <React.Fragment>
      <div  className="character-card-list">{chars}</div>



    </React.Fragment>
  )
}
