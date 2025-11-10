import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='container'>
      <ul>
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/articles" className="nav-link">Articole</NavLink></li>
        <li><NavLink to="/revista" className="nav-link">Revista</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
