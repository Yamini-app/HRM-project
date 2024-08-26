import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
       
        <nav className="navbar">
            <div className="navbar-logo">
            <img src="logo.png"/>
            HRMS
            </div>

            <div className="navbar-links">
                <a href="/login">Logout</a>
            </div>
        </nav>
    );
};

export default Navbar;

