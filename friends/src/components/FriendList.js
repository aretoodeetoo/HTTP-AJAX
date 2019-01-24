import React from 'react';
import Friend from './Friend';
import { NavLink } from 'react-router-dom';

function FriendList(props){
    return (
        <div className="friendContainer">
        {props.friends.map(friend => {
           return( 
           <Friend 
            friends={props.friends}
            friend={friend}
            friendId={friend.id}
            key={friend.id}
            deleteFriend={props.deleteFriend}
            />
        )})} 
        <NavLink to="/">Return Home</NavLink>
        </div>
    );
}

export default FriendList;