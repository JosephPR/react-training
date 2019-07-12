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
        <h3>{this.props.status}</h3>
          </div>
    </React.Fragment>
  )
  }
}
