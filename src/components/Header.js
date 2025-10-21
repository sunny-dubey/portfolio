import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">Sunny Dubey</span>
          </Link>
          <nav className="nav">
            <Link to="/blog">blog</Link>
            <Link to="/projects">projects</Link>
            <Link to="/uses">uses</Link>
            <Link to="/now">now</Link>
            <Link to="/changelog">changelog</Link>
            <Link to="/about">about</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
