import React from 'react';
import './Friend.css';

function FriendForm(props){
    return(
    <div>
        <h3>Add a New Friend!</h3>
    <form>
        <input 
        type="text"
        placeholder="Add Your Friend's Name"
        />
        <input 
        type="text"
        placeholder="Add Your Friend's Age"
        />
        <input 
        type="text"
        placeholder="Add Your Friend's Email"
        />
        <div className="formButtons">
        <button type="submit">Add Your Friend</button>
        </div>
    </form>
    </div>
    );
}

export default FriendForm;