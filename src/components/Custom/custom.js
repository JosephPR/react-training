import React, { Component } from 'react'
// import { BrowserRouter as Router,  Route, Link } from "react-router-dom";

import '../../App.css'

export default class Custom extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  }

  fetchUsers() {
  // Where we're fetching data from
  fetch(`https://jsonplaceholder.typicode.com/users`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        users: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
}

componentDidMount() {
  this.fetchUsers();
}

  render() {
     const { isLoading, users, error } = this.state;
    return (
    <React.Fragment>
    <h1>Hello</h1>
    <p>This is dummy data comsumed from a third party api call jsonplaceholder.typicode.com</p>
    <img src="https://media1.giphy.com/media/n6LpfECvXciw8/giphy.gif?cid=790b76115d18da4c4f43476b4d7d34ff&rid=giphy.gif" alt="peewee" />
    <h1>Random User</h1>
   {error ? <p>{error.message}</p> : null}

   {!isLoading ? (
      users.map(user => {
        const { username, name, email,website, address } = user;
        return (
          <div key={username}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p><u>Address</u></p>
            <p> Street:{address.street}</p>
            <p>City:  {address.city}</p>
            <p>Zip:  {address.zipcode}</p>
            <p>Website:  {website}</p>
            <hr />
          </div>
        );
      })
    // If there is a delay in data, let's let the user know it's loading
    ) : (
      <h3>Loading...</h3>
    )}
    </React.Fragment>
  )}
}
