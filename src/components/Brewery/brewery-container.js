import React from 'react'
import BreweryItem from './brewery-item'
import './brewery.css'

export default function RamContainer(props) {
  console.log(props)
  const brews = props.breweries.map((brewery) => {
    // console.log(item.id)
    return <BreweryItem
       key={brewery.id}
         id={brewery.id}
          name={brewery.name}
          city={brewery.city}
          brewery_type={brewery.brewery_type}
        website_url={brewery.website_url}
          />

  })

  return(
    <React.Fragment>
      <div  className="brewery-card-list">{brews}</div>



    </React.Fragment>
  )
}
