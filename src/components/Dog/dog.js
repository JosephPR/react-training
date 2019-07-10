import React, { Component } from 'react'
import '../../App.css'
import DogForm from './dog-form'
import DogContainer from './dog-container'

export default class Dog extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: undefined
    }
  }
  componentDidMount(){
    this.fetchTodos()
  }


  fetchTodos = () => {
    let url = "http://localhost:3000/todos"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({todos: result}))
  }

  deleteTodo = (id) => {
    let url = `http://localhost:3000/todos/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchTodos())
}

/*setEditedDog = dog => {
  this.state.updateTodo = dog
}*/

updateTodo = (id) => {
    console.log(id)
    let newObj = { title: "JOEY", content: "newContent" }
    let url = `http://localhost:3000/todos/${id}`
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'applicatiion/json',
        'Accept': 'application/json'
      }
    })
}

  postTodos = (newTodo) => {
    let url = "http://localhost:3000/todos"
    // let newTodos =  [...this.state.todos, newTodo]
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then(result => this.fetchTodos())
  }




    render() {
      return (
    <div className='App'>

        <React.Fragment>
          <DogForm postTodos={this.postTodos} updateTodo={this.updateTodo}  />
    {this.state.todos
      ? <DogContainer updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={this.state.todos} setEditedDog={this.state.setEditedDog} />
    : <img src="https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif?cid=790b76115d265b8b4539484f591f3537&rid=giphy.gif" alt="megaman" />
    }
        </React.Fragment>
    </div>
  );
}
}
