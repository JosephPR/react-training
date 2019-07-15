import React, { Component } from 'react';
import BreweryContainer from './brewery-container'


export default class Brewery extends Component {
  constructor(){
    super()
    this.state = {
      breweries: '',
    }
  }

  componentDidMount() {
    const pageNumber = Math.floor(Math.random() * 10)

    const breweryApi = `https://api.openbrewerydb.org/breweries?page=${pageNumber}&per_page=50&by_state=colorado`

    fetch (breweryApi)
      .then(response => response.json())
      .then(response => this.setState({
        breweries: response
      })
      )
  }

  render(){
    return(
      <div className='App'>
        <h1>Breweries In Colorado</h1>
          <React.Fragment>
      {this.state.breweries
        ? <BreweryContainer  breweries={this.state.breweries} />
      : <img src="https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif?cid=790b76115d265b8b4539484f591f3537&rid=giphy.gif" alt="corgry" />
      }
          </React.Fragment>
      </div>
    )
  }
};
