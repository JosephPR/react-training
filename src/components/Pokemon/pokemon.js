import React, {Component} from 'react'
import Bulbasaur from './bulbasaur'
import Palkia from './palkia'

export default class Pokemon extends Component {
  constructor(props) {
    super(props)
      this.state = {
        clickCount: 0,
        pokemonImage: "",

      }
  }

componentDidMount(){
  const url ='https://pokeapi.co/api/v2/pokemon/pikachu/'

  fetch (url)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          pokemonImage: imageUrl
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

  render(){
    return <div>
              <h1>HELLO!!</h1>
              <div>
                <Bulbasaur />
                <Palkia />
                <img src={this.state.pokemonImage} alt="Ditto" />
              </div>
              <p> The button was clicked {this.state.clickCount} times.</p>
              <button onClick={this.incrementCount}>CLICK ME</button>

            </div>
      }
}
