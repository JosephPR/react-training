import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
      this.state = ({
        transactions: "",
        filterTransactions: undefined,
      })
  }

  componentDidMount() {
    this.fetchTransactions()
  }
  fetchTransactions = () => {
    let url = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        transactions: result,
        filterTransactions: result,
      }))
  }

  searchFunction = (event) => {
    const input = event.target.value
    const filterList = this.state.transactions.filter((transaction) => {
      if (transaction.description.toLowerCase().includes(input.toLowerCase())) {
        return transaction
      } else return undefined
    })
    this.setState({filterTransactions: filterList})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Search onChange={this.searchFunction}/>
        {
          this.state.filterTransactions
          ?   <TransactionsList name="transactions" transactions={this.state.filterTransactions} onChange={(event) => this.handleChange(event)} />
        : ""
        }

      </div>
    )
  }
}

export default AccountContainer
