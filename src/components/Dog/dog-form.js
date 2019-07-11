import React, { Component } from 'react'
import '../../App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Input from '@material-ui/core/Input';
// import Todo from './TodoContainer'

export default class DogForm extends Component {

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
      const newDog = this.state
      event.preventDefault()
      this.props.postDog(newDog)
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
          <h1> Dog Specs </h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <label htmlFor='name'>Breed: </label>
                <Input name="name" id="name" onChange={(event) => this.handleChange(event)} value={this.state.name} />
              <label htmlFor='image_url'>Image: </label>
                <Input name="image_url" id="image_url" onChange={(event) => this.handleChange(event)} value={this.state.image_url} />
              <label htmlFor='content'>About: </label>
                <Input name="content" id="content" onChange={(event) => this.handleChange(event)} value={this.state.content} />
              <button>Submit</button>
            </form>
          <br/>
        </React.Fragment>

      </Router>
    )
  }
}
