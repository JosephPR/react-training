import React, {Component} from 'react'
import EditInput from '../../components/EditInput/edit-input'
import './pokemon.css'

export default class Pokemon extends Component {
  constructor(props) {
    super(props)
      this.state = {
        clickCount: 0,
        pikachuImage: "",
        bulbasaurImage: '',
          plakiaImage: '',
          charizardImage: '',

      }
  }
componentDidMount(){
  const pokemon =  Math.floor(Math.random() * 365)
  const pokemon1 =  Math.floor(Math.random() * 365)
  const pokemon2 =  Math.floor(Math.random() * 365)
  const pokemon3 =  Math.floor(Math.random() * 365)
  const pokemon4 =  Math.floor(Math.random() * 365)
  const pokemon5 =  Math.floor(Math.random() * 365)
  const pokemon6 =  Math.floor(Math.random() * 365)
  const pokemon7 =  Math.floor(Math.random() * 365)
  const pokemon8 =  Math.floor(Math.random() * 365)
  const pokemon9 =  Math.floor(Math.random() * 365)
  const pokemon10 =  Math.floor(Math.random() * 365)
  const pikachu = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  fetch (pikachu)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          pikachuImage: imageUrl,
        })
      })
  const squirtle =`https://pokeapi.co/api/v2/pokemon/${pokemon1}`

  fetch (squirtle)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          squirtleImage: imageUrl,
        })
      })
  const lopunny =`https://pokeapi.co/api/v2/pokemon/${pokemon2}`

  fetch (lopunny)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          lopunnyImage: imageUrl,
        })
      })
  const gengar =`https://pokeapi.co/api/v2/pokemon/${pokemon3}`

  fetch (gengar)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          gengarImage: imageUrl,
        })
      })
  const greninja =`https://pokeapi.co/api/v2/pokemon/${pokemon4}`

  fetch (greninja)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          greninjaImage: imageUrl,
        })
      })
  const vulpix =`https://pokeapi.co/api/v2/pokemon/${pokemon5}`

  fetch (vulpix)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          vulpixImage: imageUrl,
        })
      })
  const blaziken =`https://pokeapi.co/api/v2/pokemon/${pokemon6}`

  fetch (blaziken)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          blazikenImage: imageUrl,
        })
      })


  const jigglypuff =`https://pokeapi.co/api/v2/pokemon/${pokemon7}`

  fetch (jigglypuff)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          jigglypuffImage: imageUrl,
        })
      })

  const charizard =`https://pokeapi.co/api/v2/pokemon/${pokemon8}`

  fetch (charizard)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          charizardImage: imageUrl,

        })
      })

      const bulbasaur =`https://pokeapi.co/api/v2/pokemon/${pokemon9}`

      fetch (bulbasaur)
          .then(response => response.json())
          .then(response => {
            const bulbasaurUrl = response.sprites.front_default
            this.setState({
              bulbasaurImage: bulbasaurUrl
            })
          })

          const palkia = `https://pokeapi.co/api/v2/pokemon/${pokemon10}`

          fetch(palkia)
            .then(response => response.json())
            .then(response => {
              const palkiaUrl = response.sprites.front_default
              this.setState({
                palkiaImage: palkiaUrl
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

postPokemon = (newPokemon) => {
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
}


  render(){
    return <div>
              <div>

                <img src={this.state.pikachuImage} alt="pikachu" />

                <img src={this.state.vulpixImage} alt="vulpix" />
                <img src={this.state.greninjaImage} alt="greninja" />
                <img src={this.state.lopunnyImage} alt="lopunny" />
                <img src={this.state.gengarImage} alt="gengar" />
                <img src={this.state.blazikenImage} alt="blaziken" />
                <img src={this.state.bulbasaurImage} alt="bulbasaur" />
                <img src={this.state.charizardImage} alt="charizard" />
                <img src={this.state.palkiaImage} alt="palkia" />
                <img src={this.state.jigglypuffImage} alt="jigglypuff" />
                <img src={this.state.squirtleImage} alt="squirtle" />
              </div>
                          <EditInput />
              <p> The button was clicked {this.state.clickCount} times.</p>
              <button className="click" onClick={this.incrementCount}>CLICK ME</button> <br />
              <img src="https://www.factinate.com/wp-content/uploads/2018/02/20-24.jpg" alt="pokepic" />
                <footer>@Gotta Catchem all!&hearts;</footer>
            </div>
      }
}
