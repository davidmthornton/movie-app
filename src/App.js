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

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange (e) {
    e.preventDefault();
    axios.get('http://www.omdbapi.com/?t=' + this.input.value + '&apikey=cac7c78e')
    .then(response => this.setState({movieDetails: response.data}))
  }



      PosterImage() {
        if(this.state.movieDetails !== "") { 
          return <img src={this.state.movieDetails.Poster} alt="Movie poster"/>;
        }else{
          return <p></p>;
        }
      }

    render () {
    return (
      <div className="App">
          <h1>Search by movie title</h1><br />
          <form onChange={this.handleChange}>
            <input type="text" ref={(input) => this.input = input}></input>
          </form>
          <div class="results">
            <h1>Film details</h1>
              <h3>Title: {this.state.movieDetails.Title}</h3>
              <h3>Year: {this.state.movieDetails.Year}</h3>
              <h3>Rating: {this.state.movieDetails.Rated}</h3>
              <h3>{this.state.movieDetails.Plot}</h3>
              {this.PosterImage()}
              
          </div>
      </div>
    );
  }
}

export default App;
