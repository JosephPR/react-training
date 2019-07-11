import React, { Component } from 'react'
import './cat-item.css'
import '../../App.css'
// import CatForm from './cat-form';

export default class CatItem extends Component {


/*handleUpdate = (id) => {
  return () => {
  const catgie = this.props.todos.find(todo => todo.id == id)
  this.props.setEditedCat()
  }

}*/


render() {
  return(
    <React.Fragment>

        <div className="cat-card-container">
        <h1 id="name"> <span>Breed:</span> {this.props.name}</h1>
        <img className="cat-pics" src={this.props.image} alt="pics" /><br />
        <h4>{this.props.content}</h4>
        <button id="delete" onClick= { () => this.props.deleteCat(this.props.id)}>Delete</button>
      {/*<button id="update" onClick= {() => this.handleUpdate(this.props.id)}>Update</button>*/}
          </div>
    </React.Fragment>
  )
  }
}
