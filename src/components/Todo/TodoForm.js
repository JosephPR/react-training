import React, { Component } from 'react'
import '../../App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Input from '@material-ui/core/Input';

export default class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      content: '',
    }
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      const newTodo = this.state
      event.preventDefault()
      this.props.postTodos(newTodo)
      this.setState({
  name: '',
  image: '',
  content: '',
})
    }



  render(){
    return(
      <Router>
        <React.Fragment>
          <h1> Doggie Directory </h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <label htmlFor='name'>Name: </label>
                <Input name="name" id="name" onChange={(event) => this.handleChange(event)} value={this.state.name} />
              <label htmlFor='image'>Image: </label>
                <Input name="image" id="image" onChange={(event) => this.handleChange(event)} value={this.state.image} />
              <label htmlFor='content'>Content: </label>
                <Input name="content" id="content" onChange={(event) => this.handleChange(event)} value={this.state.content} />
              <button>Submit</button>
            </form>
        </React.Fragment>
      </Router>
    )
  }
}
