import React, { Component } from 'react'
import '../../App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Input from '@material-ui/core/Input';

export default class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
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
  content: '',
})
    }



  render(){
    return(
      <Router>
        <React.Fragment>
          <h1> Todos </h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <label htmlFor='name'>Name: </label>
                <Input name="name" id="name" onChange={(event) => this.handleChange(event)} value={this.state.name} />
              <label htmlFor='content'>Content: </label>
                <Input name="content" id="content" onChange={(event) => this.handleChange(event)} value={this.state.content} />
              <button>Submit</button>
            </form>
        </React.Fragment>
      </Router>
    )
  }
}
