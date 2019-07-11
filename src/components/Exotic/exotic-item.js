import React, { Component } from 'react'
import './exotic-item.css'
import '../../App.css'
// import ExoticForm from './exotic-form';

export default class ExoticItem extends Component {


/*handleUpdate = (id) => {
  return () => {
  const exoticgie = this.props.todos.find(todo => todo.id == id)
  this.props.setEditedExotic()
  }

}*/


render() {
  return(
    <React.Fragment>

        <div className="exotic-card-container">
        <h1 id="name"> <span>Breed:</span> {this.props.name}</h1>
        <img className="exotic-pics" src={this.props.image} alt="pics" /><br />
        <h4>{this.props.content}</h4>
        <button id="delete" onClick= { () => this.props.deleteExotic(this.props.id)}>Delete</button>
      {/*<button id="update" onClick= {() => this.handleUpdate(this.props.id)}>Update</button>*/}
          </div>
    </React.Fragment>
  )
  }
}
