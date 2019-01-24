import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

const baseUrl = 'http://localhost:5000';
class App extends Component {
  state = {
    friends: [],
    friend: {
      name: '',
      age: '',
      email: ''
    }
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

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addFriend = friend => {
    axios
    .post(`${baseUrl}/friends`, this.state.friend)
    .then(res => {
      console.log(res)
      this.setState({friends: res.data });
      this.props.history.push('/friends');
    })
    .catch(err => console.log(err));
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
      <FriendForm
      addFriend={this.addFriend}
      friend={this.state.friend}
      handleChanges={this.handleChanges}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;