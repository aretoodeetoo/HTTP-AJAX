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
    },
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

  deleteFriend = friendID => {
    axios
      .delete(`${baseUrl}/friends/${friendID}`)
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data })
        this.props.history.push('/friends')
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = () => {
    axios
      .put(`${baseUrl}/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: {
            name: '',
            age: '',
            email: ''
          }
        });
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      })
  }

  populateForm = id => {
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push('/friends');
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
      friends={this.state.friends}
      deleteFriend={this.deleteFriend}
      populateForm={this.populateForm}
      updateFriend={this.updateFriend} />
      </div>
      <div className="friendFormContainer">
      <FriendForm
      addFriend={this.addFriend}
      friend={this.state.friend}
      handleChanges={this.handleChanges}
      isUpdating={this.state.isUpdating}
      updateFriend={this.updateFriend}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;