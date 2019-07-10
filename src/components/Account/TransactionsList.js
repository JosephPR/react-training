import React from 'react'
import Transaction from './Transaction'
import '../../App.css'

const TransactionsList = (props) => {
  const transactions = props.transactions.map(transaction => {
    return ( <Transaction key={transaction.id} posted_at={transaction.posted_at} category={transaction.category} description={transaction.description} amount={transaction.amount} />
    )
  })
  return (
    <table className="list">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {transactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
