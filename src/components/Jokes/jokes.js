import React, {Component} from 'react'
import './jokes.css'

export default class Jokes extends Component {
  constructor() {
    super()
    this.state = {
      jokesData: '',
      jokesData2: '',
    }
  }
componentDidMount(){
  const jokes = 'https://api.chucknorris.io/jokes/random'

  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      const jokeValue = response.value
      this.setState({
        jokesData: jokeValue
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      const jokeValue = response.value
      this.setState({
        jokesData2: jokeValue
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      const jokeValue = response.value
      this.setState({
        jokesData3: jokeValue
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      const jokeValue = response.value
      this.setState({
        jokesData4: jokeValue
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      const jokeValue = response.value
      this.setState({
        jokesData5: jokeValue
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      const jokeValue = response.value
      this.setState({
        jokesData6: jokeValue
      })
    })
}



  render () {
    return (
    <div>
    <h1 className="jokes"><u>Chuck Norris Jokes That Kick Ass Like Chuck Norris</u></h1>
    <h2>{this.state.jokesData}</h2><br />
    <h2>{this.state.jokesData2}</h2><br />
    <h2>{this.state.jokesData3}</h2><br />
    <h2>{this.state.jokesData4}</h2><br />
    <h2>{this.state.jokesData5}</h2><br />
    <h2>{this.state.jokesData6}</h2><br />
    </div>

    )
  }
}
