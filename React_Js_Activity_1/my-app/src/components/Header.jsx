import React from "react";
import "./Header.css";
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import { Link } from "react-router-dom";
// import AboutPage from './AboutPage';

function Header() {
  return (
    <div className="header">
      <h1 className="logo">My Website</h1>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </div>

  );
}

export default Header;