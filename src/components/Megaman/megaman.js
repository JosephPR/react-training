import React, { Component } from 'react';
import MegamanContainer from './megaman-container'

export default class Megaman extends Component {
  constructor(){
    super()
    this.state = {
      bosses: ''
    }
  }

  componentDidMount() {
/*  const pageNumber = Math.floor(Math.random() * 7)*/
    const megamanApi = `https://megaman-robot-masters.herokuapp.com/`

    fetch(megamanApi)
      .then(response => response.json())
      .then(response => this.setState({
        bosses: response
      }))
  }

  render() {
    return(
      <div>
      <h1>Megaman Bosses</h1>
      <>
      {this.state.bosses
        ? <MegamanContainer bosses={this.state.bosses} />
        : <h1>Not Loaded</h1>
      }
      </>
      </div>
    )
  }
}
