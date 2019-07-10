import React, {Component} from 'react';
import { CardList } from './CardList/card-list'
import { SearchBox } from './SearchBox/search-box'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users =>
        this.setState({
        monsters: users
        })
      )
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
      <SearchBox
         placeholder="Search Monsters"
         handleChange={this.handleChange}
           />
      <CardList monsters={filteredMonsters}>

        </CardList>


      </div>
    );
  }

}
