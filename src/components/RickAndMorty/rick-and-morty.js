import React, { Component } from 'react';
import RamContainer from './ram-container'
// import { SearchBox } from './SearchBox/search-box'


export default class RickAndMorty extends Component {
  constructor(){
    super ()
    this.state = {
        characters: "",
    }
  }

  componentDidMount () {
    const pageNumber = Math.floor(Math.random() * 25)
    const characters = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

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
