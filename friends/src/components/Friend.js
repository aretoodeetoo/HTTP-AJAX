import React from 'react';
import './Friend.css';

function Friend(props){
    const friend = props.friends.find(
        friend => `${friend.id}` === props.match.params.friendId
    );

    if (!friend) return <h2>You have no friends... sorry, friendless</h2>
      
    return(
        <div className="friendWrapper">
        <h3>Hello, I'm {friend.name}!</h3>
        <div className="middleDiv">I am {friend.age} years old.</div>
        <div>You can contact me at {friend.email}.</div>
        <button onClick={e => props.deleteFriend(e, friend.id)}>Delete Friend</button>
        </div>
    );
}

export default Friend;