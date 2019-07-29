import React, { Component } from 'react';
import './megaman.css'

export default class MegamanItem extends Component {

  render(){
    return(
      <React.Fragment>
      <div className="megaman-card-container">
      <h2>{this.props.name}</h2>
      <img className="image" src={this.props.sprite1} alt="megaman" />
      <p><b>Weapon:</b>  {this.props.weapon}</p>
      <p><b>Weakness:</b>  {this.props.weakness}</p>
      </div>
      </React.Fragment>
    )
  }
}
