import React, { Component } from 'react';
import BeerContainer from './beer-container';

export default class Beer extends Component {
  constructor(){
  super()
    this.state = {
      beers: ''
    }
  }

  componentDidMount() {
    const pageNumber = Math.floor(Math.random() * 7)
    const beerApi = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=50`

    fetch (beerApi)
      .then(response => response.json())
      .then(response => this.setState({
        beers: response
    }))
  }

  render() {
    return(
      <div className='App'>
        <h1>Beers from around the Country</h1>
        <React.Fragment>
        {this.state.beers
          ? <BeerContainer beers={this.state.beers} />
          : <h1>Not Loaded</h1>
      }
      </React.Fragment>

      <h1>Yup</h1>
      </div>
    )
  }
}
