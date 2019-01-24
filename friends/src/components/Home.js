import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home(props){
    return(
        <div>
        <h1>Welcome to Your Friends List!</h1>
        <div className="homeNavLinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends List</NavLink>
            <NavLink to="/form">Enter Friend Form</NavLink>
        </div>
        </div>
    );
}

export default Home;