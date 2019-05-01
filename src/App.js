import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      movieDetails: ''
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    const searchTerm = document.getElementById("searchTerm").value
    console.log("Searching for: " + searchTerm)
    axios.get('http://www.omdbapi.com/?t=' + searchTerm + '&apikey=cac7c78e')
    .then(response => this.setState({movieDetails: response.data}))
  }

  render () {
    return (
      <div className="App">
          <h1>Search by movie title</h1><br />
          <input type="text" id="searchTerm"></input>
          <button onClick={this.handleClick}>Search</button>
          
          <div class="results">
            <h1>Film details</h1>
              <h3>Title: {this.state.movieDetails.Title}</h3>
              <h3>Year: {this.state.movieDetails.Year}</h3>
              <h3>Rating: {this.state.movieDetails.Rated}</h3>
              <h3>{this.state.movieDetails.Plot}</h3>
              <img src={this.state.movieDetails.Poster} />
          </div>
      </div>
    );
  }
}

export default App;
