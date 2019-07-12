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
  const pikachu ='https://pokeapi.co/api/v2/pokemon/pikachu/'

  fetch (pikachu)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          pikachuImage: imageUrl,
        })
      })
  const squirtle ='https://pokeapi.co/api/v2/pokemon/squirtle/'

  fetch (squirtle)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          squirtleImage: imageUrl,
        })
      })
  const lopunny ='https://pokeapi.co/api/v2/pokemon/lopunny/'

  fetch (lopunny)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          lopunnyImage: imageUrl,
        })
      })
  const gengar ='https://pokeapi.co/api/v2/pokemon/gengar/'

  fetch (gengar)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          gengarImage: imageUrl,
        })
      })
  const greninja ='https://pokeapi.co/api/v2/pokemon/greninja/'

  fetch (greninja)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          greninjaImage: imageUrl,
        })
      })
  const vulpix ='https://pokeapi.co/api/v2/pokemon/vulpix/'

  fetch (vulpix)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          vulpixImage: imageUrl,
        })
      })
  const blaziken ='https://pokeapi.co/api/v2/pokemon/blaziken/'

  fetch (blaziken)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          blazikenImage: imageUrl,
        })
      })


  const jigglypuff ='https://pokeapi.co/api/v2/pokemon/jigglypuff/'

  fetch (jigglypuff)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          jigglypuffImage: imageUrl,
        })
      })

  const charizard ='https://pokeapi.co/api/v2/pokemon/charizard/'

  fetch (charizard)
      .then(response => response.json())
      .then(response => {
        const imageUrl = response.sprites.front_default
        this.setState({
          charizardImage: imageUrl,

        })
      })

      const bulbasaur ='https://pokeapi.co/api/v2/pokemon/bulbasaur/'

      fetch (bulbasaur)
          .then(response => response.json())
          .then(response => {
            const bulbasaurUrl = response.sprites.front_default
            this.setState({
              bulbasaurImage: bulbasaurUrl
            })
          })

          const palkia = 'https://pokeapi.co/api/v2/pokemon/palkia'

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
