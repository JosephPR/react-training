import React, { Component } from 'react'
import '../../App.css'
import TodoForm from '../Todo/TodoForm'
import TodoContainer from '../Todo/TodoContainer'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: undefined
    }
  }
  componentDidMount(){
    this.fetchTodos()
  }

  componentWillMount(){
    this.updateTodo()
  }


  fetchTodos = () => {
    let url = "http://localhost:3000/buddyapis"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({todos: result}))
  }

  deleteTodo = (id) => {
    let url = `http://localhost:3000/buddyapis/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchTodos())
}

updateTodo = (id) => {
    let url = `http://localhost:3000/buddyapis/${id}`
    fetch(url, {
      method: "PATCH",
      headers: {
        'Content-Type': 'applicatiion/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchTodos())
}

  postTodos = (newTodo) => {
    let url = "http://localhost:3000/buddyapis"
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
      <h2>Home</h2>
      <h3>Welcome to the show</h3>
        <React.Fragment>
          <TodoForm postTodos={this.postTodos}/>
    {this.state.todos
      ? <TodoContainer deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}  todos={this.state.todos} />
    : <img src="https://media1.giphy.com/media/71CE9qn5HM8Du/giphy.webp?cid=790b76115d13ebb271364841595b1337&rid=giphy.webp" alt="megaman" />
    }
        </React.Fragment>
    </div>
  );
}
}
