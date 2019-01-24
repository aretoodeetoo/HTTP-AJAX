import React from 'react';
import Friend from './Friend';
import { NavLink } from 'react-router-dom';

function FriendList(props){
    return (
        <div className="friendContainer">
        {props.friends.map(friend => {
            return <Friend 
            friend={friend}
            key={friend.id}
            />;
        })} 
        <NavLink to="/">Return Home</NavLink>
        </div>
    );
}

export default FriendList;