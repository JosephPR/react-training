import React from 'react'
import CatItem from './cat-item'
import './cat-item.css'

export default function CatContainer(props) {
  console.log(props)
  const cats = props.cats.map((cat) => {
    // console.log(item.id)
    return <CatItem
       key={cat.id}
       deleteCat={props.deleteCat}
         id={cat.id} name={cat.name}
          content={cat.content}
          image={cat.image_url} />
  })

  return(
    <React.Fragment>
      <div  className="cat-card-list">{cats}</div>



    </React.Fragment>
  )
}
