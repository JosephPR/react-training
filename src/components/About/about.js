import React, { Component } from 'react'


export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marketData: [],
    }
  }

componentDidMount(){
  let marketUrl = `https://api.worldtradingdata.com/api/v1/stock?symbol=BABA,AMD,SPOT,TWLO,TWTR&api_token=acCz10cbIPNeDpHtlNLT5jsG3J0ivtvcBeQmoOp1GoCFCNkkl9GfsXsT0Nds`

  fetch(marketUrl)
    .then(response => response.json())
    .then(response => this.setState({
      marketData: response
    })
  )
}

   render(){
  return (
    <React.Fragment>
      <h2>Stocks</h2>

          <p>Rendering Stocks loading......</p>
          <h1>{console.log(this.state.marketData)}</h1>
          <p>Objects are not valid as a React child (found: object with keys symbols_requested, symbols_returned, data). If you meant to render a collection of children, use an array instead.</p>
          </React.Fragment>
          )}
}
