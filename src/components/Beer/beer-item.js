import React, { Component } from 'react';


export default class BeerItem extends Component {

  render(){
    return(
      <React.Fragment>
      <div className="beer-card-container">
      <h2>{this.props.name}</h2>
      <p> <b>ABV:  </b>  {this.props.abv}%</p>
      <p> <b>IBU:  </b>  {this.props.ibu}</p>
      <p><b>BREWERS TIPS:</b> {this.props.brewers_tips}</p>
      <p><b>DESCRIPTION:</b>  {this.props.description}</p>
      <p><b>Food Pairings:</b>  {this.props.food_pairing}</p>
      <p>Tagline: {this.props.tagline}</p>
      </div>
      </React.Fragment>
    )
  }
}
