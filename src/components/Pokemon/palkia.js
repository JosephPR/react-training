import React, { Component } from 'react'

export default class Palkia extends Component {
  constructor () {
    super()
    this.state = {
      plakiaImage: '',
    }
  }


  componentDidMount () {
    const url = 'https://pokeapi.co/api/v2/pokemon/palkia'

    fetch(url)
      .then(response => response.json())
      .then(response => {
        const palkiaUrl = response.sprites.front_default
        this.setState({
          palkiaImage: palkiaUrl
        })
      })
  }

  render() {
    return(
      <img src={this.state.palkiaImage} alt="palkia" />
    )
  }
}
