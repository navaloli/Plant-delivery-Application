import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                        <g>
                            <path d="M30 70 H70 L60 90 H40 Z" fill="#8D6E63"/>
                            <path d="M50 30 V70" stroke="#388E3C" strokeWidth="3"/>
                            <path d="M50 30 Q40 20 30 30" stroke="#388E3C" strokeWidth="3" fill="none"/>
                            <path d="M50 30 Q60 20 70 30" stroke="#388E3C" strokeWidth="3" fill="none"/>
                        </g>
                    </svg>
                    <div>
                        <span className="navbar-title">Plant Delivery</span>
                        <span className="navbar-slogan">Bringing Nature Home</span>
                    </div>
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-actions">
                    <button className="navbar-btn">Login</button>
                    <button className="navbar-btn">Signup</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;