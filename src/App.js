import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

// Life cycle methods
class App extends Component {
  constructor() {
    super(); // helps to call constructor 

    this.state = {
      monsters: [],
      searchField: ''
    };
    // creating a function that get the value of state
    // this.handleChange = this.handleChange.bind(this);
  }
  // when the data is uploaded do the next
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  // arrow functions doesn't need bind. they are binded while being created
  handleChange = (e) => {
    this.setState({searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
// destructuring
// assigning state values apart in case we need raw data