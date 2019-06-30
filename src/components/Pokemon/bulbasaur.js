import React, {Component} from 'react'


export default class Bulbasaur extends Component {
  constructor(props) {
    super(props)
      this.state ={
        bulbasaurImage: '',
      }
    }
      componentDidMount(){
        const url ='https://pokeapi.co/api/v2/pokemon/bulbasaur/'

        fetch (url)
            .then(response => response.json())
            .then(response => {
              const bulbasaurUrl = response.sprites.front_default
              this.setState({
                bulbasaurImage: bulbasaurUrl
              })
            })
      }


        render(){
          return <div>
                  <img src={this.state.bulbasaurImage} alt="Ditto" />
                </div>
            }
  }
