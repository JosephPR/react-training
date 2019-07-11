import React from 'react'
import DogItem from './dog-item'
import './dog-item.css'

export default function DogContainer(props) {
  console.log(props)
  const dogs = props.dogs.map((dog) => {
    // console.log(item.id)
    return <DogItem
       key={dog.id}
       deleteDog={props.deleteDog}
         id={dog.id} name={dog.name}
          content={dog.content}
          image={dog.image_url} />
  })

  return(
    <React.Fragment>
      <div  className="dog-card-list">{dogs}</div>



    </React.Fragment>
  )
}
