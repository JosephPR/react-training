import React, { Component } from 'react'
import '../../App.css'
import ExoticForm from './exotic-form'
import ExoticContainer from './exotic-container'

export default class Exotic extends Component {
  constructor(){
    super()
    this.state = {
      exotics: ''
    }
  }
  componentDidMount(){
    this.fetchExotics()
  }


  fetchExotics = () => {
    let url = "https://training-backend.herokuapp.com/api/v1/exotics"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({exotics: result}))
  }

  deleteExotic = (id) => {
    let url = `https://training-backend.herokuapp.com/api/v1/exotics/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchExotics())
}

/*setEditedExotic = exotic => {
  this.state.updateTodo = exotic
}*/

updateTodo = (id) => {
    console.log(id)
    let newObj = { title: "JOEY", content: "newContent" }
    let url = `https://training-backend.herokuapp.com/api/v1/exotics/${id}`
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'applicatiion/json',
        'Accept': 'application/json'
      }
    })
}

  postExotic = (newExotic) => {
    let url = "https://training-backend.herokuapp.com/api/v1/exotics"
    // let newTodos =  [...this.state.todos, newTodo]
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newExotic),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then(result => this.fetchExotics())
  }




    render() {
      return (
    <div className='App'>

        <React.Fragment>
          <ExoticForm postExotic={this.postExotic} updateTodo={this.updateTodo}  />
    {this.state.exotics
      ? <ExoticContainer updateTodo={this.updateTodo} deleteExotic={this.deleteExotic} exotics={this.state.exotics} />
    : <img src="https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif?cid=790b76115d265b8b4539484f591f3537&rid=giphy.gif" alt="corgry" />
    }
        </React.Fragment>
    </div>
  );
}
}
