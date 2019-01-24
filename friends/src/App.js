import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';

const baseUrl = 'http://localhost:5000';
const baseFriend = {
  name: '',
  age: '',
  email: ''
}
class App extends Component {
  state = {
    friends: [],
    friend: baseFriend,
    isUpdating: false
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

  addFriend = () => {
    axios
    .post(`${baseUrl}/friends`, this.state.friend)
    .then(res => {
      console.log(res)
      this.setState({friends: res.data });
      this.props.history.push('/friends');
    })
    .catch(err => console.log(err));
  }

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/friends/${friendId}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push('/form');
  }

  updateFriend = () => {
    axios
      .put(`${baseUrl}/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: baseFriend
        });
        this.props.history.push('./friends');
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
      <div className="header">
      <h1>Friends! Hello, Friends!</h1>
      </div>
      <div className="bodyStyles">
      <div className="friendListContainer">
      <Route exact path="/" component={Home} />
      <Route exact path="/friends" render={props => 
      <FriendList 
      {...props}
      friends={this.state.friends}
      />}
      />
      </div>
      <Route path="/friends/:friendId" render={props =>
      <Friend {...props}
      friends={this.state.friends}
      deleteFriend={this.deleteFriend}
      populateForm={this.populateForm} /> } 
      />

      <div className="friendFormContainer">
      <Route exact path="/form" render={props => 
      <FriendForm {...props}
        addFriend={this.addFriend}
        friend={this.state.friend}
        handleChanges={this.handleChanges}
        isUpdating={this.state.isUpdating}
        updateFriend={this.updateFriend}
      /> } />
      </div>
      </div>
      </div>
    );
  }
}

export default App;