import React, { Component } from 'react'
import '../../App.css'
import '../RickAndMorty/ram.css'




export default class BreweryItem extends Component {



render() {
  return(
    <React.Fragment>
        <div className="brewery-card-container">
          <a id="brewery-name" href= {this.props.website_url}>{this.props.name}</a>
        <h3>City:  {this.props.city}</h3>
        <h3>Type:  {this.props.brewery_type}</h3>
          </div>
    </React.Fragment>
  )
  }
}
