
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>

    <div className="footer">
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <p className="credit">Muhammad Murtaza</p>
    </div>
    </footer>
  );
}

export default Footer;