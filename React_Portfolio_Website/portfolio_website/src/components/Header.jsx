import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Portfolio Manager</div>
      <nav className="nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <Link to = '/'><button className='out-btn'>Sign Out</button></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;