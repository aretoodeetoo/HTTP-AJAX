import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';


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
      console.log('Friends cannot render!')
    });
  }

  render() {
    return (
      <div className="App">
      <div className="header">
      <h1>Friends! Hello, Friends!</h1>
      </div>
      <div className="bodyStyles">
      <div className="friendListContainer">
      <FriendList
      friends={this.state.friends} />
      </div>
      <div className="friendFormContainer">
      <FriendForm />
      </div>
      </div>
      </div>
    );
  }
}

export default App;