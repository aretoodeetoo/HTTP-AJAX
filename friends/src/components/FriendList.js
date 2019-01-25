import React from 'react';
import Friend from './Friend';

function FriendList(props){
    return (
        <div className="friendContainer">
        {props.friends.map(friend => {
            return <Friend 
            friend={friend}
            key={friend.id}
            deleteFriend={props.deleteFriend}
            populateForm={props.populateForm}
            updateFriend={props.deleteFriend}
            />;
        })} 
        </div>
    );
}

export default FriendList;