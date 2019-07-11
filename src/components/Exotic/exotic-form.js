import React, { Component } from 'react'
import '../../App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Input from '@material-ui/core/Input';
// import Todo from './TodoContainer'

export default class ExoticForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image_url: '',
      content: '',
    }
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      const newExotic = this.state
      event.preventDefault()
      this.props.postExotic(newExotic)
      this.setState({
  name: '',
  image_url: '',
  content: '',
})
    }



  render(){
    return(
      <Router>
        <React.Fragment>
          <h1> Exotic Specs </h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <label htmlFor='name'>Name: </label>
                <Input name="name" id="name" onChange={(event) => this.handleChange(event)} value={this.state.name} />
              <label htmlFor='image_url'>Image: </label>
                <Input name="image_url" id="image_url" onChange={(event) => this.handleChange(event)} value={this.state.image_url} />
              <label htmlFor='content'>About: </label>
                <Input name="content" id="content" onChange={(event) => this.handleChange(event)} value={this.state.content} />
              <button>Submit</button>
            </form>

        </React.Fragment>

      </Router>
    )
  }
}
