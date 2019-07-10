import React, { Component } from 'react'
import './dog-item.css'
import '../../App.css'
// import DogForm from './dog-form';

export default class DogItem extends Component {


/*handleUpdate = (id) => {
  return () => {
  const doggie = this.props.todos.find(todo => todo.id == id)
  this.props.setEditedDog()
  }

}*/


render() {
  return(
    <React.Fragment>

        <div className="dog-card-container">
        <h1 id="name"> <span>Breed:</span> {this.props.name}</h1>
        <img className="dog-pics" src={this.props.image} alt="pics" /><br />
        <h4>{this.props.adaptability}</h4>
        <button id="delete" onClick= { () => this.props.deleteTodo(this.props.id)}>Delete</button>
      {/*<button id="update" onClick= {() => this.handleUpdate(this.props.id)}>Update</button>*/}
          </div>
    </React.Fragment>
  )
  }
}
