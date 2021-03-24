import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/mypost">My Posts</NavLink></li>
        </ul>
    </div>
   )

 }

export default Navbar