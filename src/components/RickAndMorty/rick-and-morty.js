import React, { Component } from 'react';

export default class RickAndMorty extends Component {
  constructor(){
    super ()
    this.state = {
        characters: ""
    }
  }

  componentDidMount () {
    const characters = "https://rickandmortyapi.com/api/character/134"

    fetch (characters)
      .then(response => response.json())
      .then(response => this.setState({
          characters: response
        })
      )
  }

  render (){

    return (
      <div>
      <h1>{this.state.characters.name}</h1>
      <img src={this.state.characters.image} alt="rick" />
      <h3>{this.state.characters.species}</h3>
      <h3>{this.state.characters.status}</h3>
      </div>

    )
  }
}
