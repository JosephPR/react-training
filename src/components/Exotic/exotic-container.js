import React from 'react'
import ExoticItem from './exotic-item'
import './exotic-item.css'

export default function ExoticContainer(props) {
  console.log(props)
  const exotics = props.exotics.map((exotic) => {
    // console.log(item.id)
    return <ExoticItem
       key={exotic.id}
       deleteExotic={props.deleteExotic}
         id={exotic.id} name={exotic.name}
          content={exotic.content}
          image={exotic.image_url} />
  })

  return(
    <React.Fragment>
      <div  className="exotic-card-list">{exotics}</div>



    </React.Fragment>
  )
}
