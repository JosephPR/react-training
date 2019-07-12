import React, { Component } from 'react'
import '../../App.css'
import './ram.css'


export default class RamItem extends Component {



render() {
  return(
    <React.Fragment>

        <div className="ram-card-container">
        <h1 id="name"> {this.props.name}</h1>
        <img className="ram-pics" src={this.props.image} alt="pics" /><br />
        <h3><u>Status:</u>  {this.props.status}</h3>
        <h3><u>Species:</u> {this.props.species}</h3>
        <h3><u>Origin:</u> {this.props.origin}</h3>
          </div>
    </React.Fragment>
  )
  }
}
