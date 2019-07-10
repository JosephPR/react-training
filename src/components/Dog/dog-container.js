import React from 'react'
import DogItem from './dog-item'
import './dog-item.css'

export default function DogContainer(props) {
  const listItems = props.todos.map((item) => {
    // console.log(item.id)
    return <DogItem
       key={item.id}
       deleteTodo={props.deleteTodo}
        setEditedDog = {props.setEditedDog}
         id={item.id} name={item.name}
          adaptability={item.adaptability}
          image={item.image} />
  })

  return(
    <React.Fragment>
      <div  className="dog-card-list">{listItems}</div>



    </React.Fragment>
  )
}
