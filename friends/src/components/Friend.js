import React from 'react';
import './Friend.css';

function Friend(props){
    const friend = props.friend;
      
    return(
        <div className="friendWrapper">
        <h3>Hello, I'm {props.friend.name}!</h3>
        <div className="middleDiv">I am {props.friend.age} years old.</div>
        <div>You can contact me at {props.friend.email}.</div>
        <button onClick={e => props.deleteFriend(e, friend.id)}>Delete Friend</button>
        </div>
    );
}

export default Friend;