import React, { Component } from 'react'
import '../../App.css'
import DogForm from './dog-form'
import DogContainer from './dog-container'

export default class Dog extends Component {
  constructor(){
    super()
    this.state = {
      dogs: ''
    }
  }
  componentDidMount(){
    this.fetchDogs()
  }


  fetchDogs = () => {
    let url = "https://training-backend.herokuapp.com/api/v1/dogs"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({dogs: result}))
  }

  deleteDog = (id) => {
    let url = `https://training-backend.herokuapp.com/api/v1/dogs/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchDogs())
}

/*setEditedDog = dog => {
  this.state.updateTodo = dog
}*/

updateTodo = (id) => {
    console.log(id)
    let newObj = { title: "JOEY", content: "newContent" }
    let url = `https://training-backend.herokuapp.com/api/v1/dogs/${id}`
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'applicatiion/json',
        'Accept': 'application/json'
      }
    })
}

  postDog = (newDog) => {
    let url = "https://training-backend.herokuapp.com/api/v1/dogs"
    // let newTodos =  [...this.state.todos, newTodo]
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newDog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then(result => this.fetchDogs())
  }




    render() {
      return (
    <div className='App'>

        <React.Fragment>
          <DogForm postDog={this.postDog} updateTodo={this.updateTodo}  />
    {this.state.dogs
      ? <DogContainer updateTodo={this.updateTodo} deleteDog={this.deleteDog} dogs={this.state.dogs} />
    : <img src="https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif?cid=790b76115d265b8b4539484f591f3537&rid=giphy.gif" alt="corgry" />
    }
        </React.Fragment>
    </div>
  );
}
}
