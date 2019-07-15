import React from 'react';
import BeerItem from './beer-item'
import './beer.css'

export default function BeerContainer (props) {
  const beers  = props.beers.map((beer) => {
    return <BeerItem
              key={beer.id}
              id={beer.id}
              name={beer.name}
              abv={beer.abv}
              brewers_tips={beer.brewers_tips}
              description={beer.description}
              ibu={beer.ibu}
              tagline={beer.tagline}
              food_pairing={beer.food_pairing[1]}
           />
  })
  return (
    <React.Fragment>
    <div className="beer-card-list">{beers}</div>
    </React.Fragment>
  )
}
