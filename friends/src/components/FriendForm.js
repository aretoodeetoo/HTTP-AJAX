import React from 'react';
import './Friend.css';

function FriendForm(props){

    function handleSubmit(e){
        e.preventDefault();
        if (props.isUpdating) {
            props.updateFriend();
        } else {
            props.addFriend();
        }
    }
    return(
    <div>
        <h3>{props.isUpdating ? "Update Friend" : "Add New Friend"}</h3>
    <form onSubmit={handleSubmit}>
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
        <button type="submit">{props.isUpdating ? "Edit Friend" : "Add New Friend"}</button>
        </div>
    </form>
    </div>
    );
}

export default FriendForm;