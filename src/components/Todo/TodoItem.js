import React, { Component } from 'react'
import './todoItem.css'

export default class TodoItem extends Component {



render() {
  return(
    <React.Fragment>




        <h1 id="name">{this.props.name}</h1>
        <h3>{this.props.type}</h3>
        <img src={this.props.image} alt="pics" /><br />
        <h4>{this.props.content}</h4>
        <button id="delete" onClick= { () => this.props.deleteTodo(this.props.id)}>Delete</button>
         {/*<button id="update" onClick= { () => this.props.updateTodo(this.props.id)}>Update</button>*/}
          <hr />
    </React.Fragment>
  )
  }
}
