import React, { Component } from 'react'
import './todoItem.css'
import '../../App.css'
import TodoForm from './TodoForm';

export default class TodoItem extends Component {

state = {
  showUpdateForm: false
}

handleUpdate = (id) => {
  this.props.updateTodo(id)
  this.setState({showUpdateForm: true})
}


render() {
  return(
    <React.Fragment>
      {this.state.showUpdateForm &&
        <TodoForm />
      }
        <div className="card">
        <h1 id="name">{this.props.name}</h1>
        <img src={this.props.image} alt="pics" /><br />
        <h4>{this.props.content}</h4>
        <button id="delete" onClick= { () => this.props.deleteTodo(this.props.id)}>Delete</button>
      <button id="update" onClick= {() => this.handleUpdate(this.props.id)}>Update</button>
          </div>
          <hr />
    </React.Fragment>
  )
  }
}
