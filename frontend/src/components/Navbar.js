// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🏋️ GymApp</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gyms">Gyms</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



