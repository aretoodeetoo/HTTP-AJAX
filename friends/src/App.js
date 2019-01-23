import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  };
  
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err)
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Friends! Hello, Friends!</h1>
      {this.state.friends.map(friend => (
        <p>Hello, my name is {friend.name}.</p>
      ))}
      </div>
    );
  }
}

export default App;
