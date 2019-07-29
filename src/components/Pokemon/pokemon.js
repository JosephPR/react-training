import React, {Component} from 'react';
import EditInput from '../../components/EditInput/edit-input';
import PokemonContainer from './pokemon-container';
import './pokemon.css';

export default class Pokemon extends Component {
  constructor() {
    super()
      this.state = {
        clickCount: 0,
        sprites: [],

      }
  }
componentDidMount(){


  const pokemon = `https://pokeapi.co/api/v2/pokemon`

  fetch (pokemon)
      .then(response => response.json())
      .then(response => {
        this.setState({
          sprites: response.results,
        })
      })

}


incrementCount = () => {
  this.setState(state => {
    return {
        clickCount: state.clickCount + 1
    }
  })
}

/*postPokemon = (newPokemon) => {
  let url = "http://localhost:3000/api/v1/pokemon"
  // let newTodos =  [...this.state.todos, newTodo]
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newPokemon),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
  .then(result => this.fetchPokemons())
}*/


  render(){

    return (
      <div>
        <h1>POKEMON</h1>
        {this.state.sprites
          ? <PokemonContainer sprites={this.state.sprites} />
        : <h2>Loading</h2>
        }
        <div>

          <img src={this.state.pokemonImage} alt="pokemon" />
        </div>
          <EditInput />
      <p> The button was clicked {this.state.clickCount} times.</p>
        <button className="click" onClick={this.incrementCount}>CLICK ME</button> <br />
        <img src="https://www.factinate.com/wp-content/uploads/2018/02/20-24.jpg" alt="pokepic" />
        s<footer>@Gotta Catchem all!&hearts;</footer>
      </div>
    )
      }
}
