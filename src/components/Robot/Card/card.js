import React from 'react';
import './card.css'

 const Card = (props) => {
  return(
    <div className="card-container">
     <img alt="monster" src={`https://robohash.org/${props.monster.id}?bgset=bg1&size=180x180`} />
     <h2> {props.monster.name} </h2>
     <p> {props.monster.email}</p>
    </div>

  )

}

export default Card
