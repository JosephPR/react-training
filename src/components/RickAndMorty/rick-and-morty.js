import React, { Component } from 'react';
import RamContainer from './ram-container'

export default class RickAndMorty extends Component {
  constructor(){
    super ()
    this.state = {
        characters: ""
    }
  }

  componentDidMount () {
    const morty = Math.floor(Math.random() * 20)
    const characters = `https://rickandmortyapi.com/api/character/?page=${morty}`

    fetch (characters)
      .then(response => response.json())
      .then(response => this.setState({
          characters: response.results
        })
      )
  }

  render (){
      return (
    <div className='App'>

        <React.Fragment>
    {this.state.characters
      ? <RamContainer  characters={this.state.characters} />
    : <img src="https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif?cid=790b76115d265b8b4539484f591f3537&rid=giphy.gif" alt="corgry" />
    }
        </React.Fragment>
    </div>
    );
  }
}
