import React from 'react';
import Friend from './Friend';
import { NavLink, Link } from 'react-router-dom';

function FriendList(props){
    return (
        <div className="friendContainer">
        {props.friends.map(friend => (
            <Link to={`/friends/${friend.id}`} key={friend.id}>
            <p>{friend.name}</p>
            </Link>
        ))} 
        <NavLink to="/">Return Home</NavLink>
        </div>
    );
}

export default FriendList;