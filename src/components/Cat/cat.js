import React, { Component } from 'react'
import '../../App.css'
import CatForm from './cat-form'
import CatContainer from './cat-container'

export default class Cat extends Component {
  constructor(){
    super()
    this.state = {
      cats: ''
    }
  }
  componentDidMount(){
    this.fetchCats()
  }


  fetchCats = () => {
    let url = "http://localhost:3000/api/v1/cats"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({cats: result}))
  }

  deleteCat = (id) => {
    let url = `http://localhost:3000/api/v1/cats/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchCats())
}

/*setEditedCat = cat => {
  this.state.updateCat = cat
}*/

updateCat = (id) => {
    console.log(id)
    let newObj = { title: "JOEY", content: "newContent" }
    let url = `http://localhost:3000/api/v1/${id}`
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'applicatiion/json',
        'Accept': 'application/json'
      }
    })
}

  postCat = (newCat) => {
    let url = "http://localhost:3000/api/v1/cats"
    // let newCats =  [...this.state.todos, newCat]
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newCat),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then(result => this.fetchCats())
  }




    render() {
      return (
    <div className='App'>

        <React.Fragment>
          <CatForm postCat={this.postCat} updateCat={this.updateCat}  />
    {this.state.cats
      ? <CatContainer updateCat={this.updateCat} deleteCat={this.deleteCat} cats={this.state.cats} />
    : <img src="https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif?cid=790b76115d265b8b4539484f591f3537&rid=giphy.gif" alt="corgry" />
    }
        </React.Fragment>
    </div>
  );
}
}
