import React from 'react';
import Terminal from './Terminal';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Sunny Dubey. All rights reserved.</p>
          <Terminal />
        </div>
        <div className="disclaimer">
          <p>All opinions expressed here are my own and do not represent my employer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
