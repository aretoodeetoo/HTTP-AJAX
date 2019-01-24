import React from 'react';
import { NavLink } from 'react-router-dom';
import './Friend.css';

function FriendForm(props){
    return(
    <div>
        <h3>Add a New Friend!</h3>
    <form onSubmit={props.addFriend}>
        <input 
        type="text"
        name="name"
        value={props.friend.name}
        placeholder="Add Your Friend's Name"
        onChange={props.handleChanges}
        />
        <input 
        type="text"
        name="age"
        value={props.friend.age}
        placeholder="Add Your Friend's Age"
        onChange={props.handleChanges}
        />
        <input 
        type="text"
        name="email"
        value={props.friend.email}
        placeholder="Add Your Friend's Email"
        onChange={props.handleChanges}
        />
        <div className="formButtons">
        <button type="submit">Add Your Friend</button>
        </div>
    </form>

    <NavLink to="/">Return Home</NavLink>
    </div>
    );
}

export default FriendForm;