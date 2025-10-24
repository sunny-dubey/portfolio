import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside (debounced)
  useEffect(() => {
    let timeoutId;
    const handleClickOutside = (event) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }, 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    });
  };

  return (
    <header className="header">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">Sunny Dubey</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <Link to="/blog">blog</Link>
            <Link to="/projects">projects</Link>
            <Link to="/about">about</Link>
            <Link to="/uses">uses</Link>
            <Link to="/now">now</Link>
            <Link to="/changelog">changelog</Link>
            <Link to="/resources">resources</Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Slide-out Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={handleLinkClick}>
            <nav 
              className="mobile-menu" 
              ref={mobileMenuRef}
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <Link to="/blog" onClick={handleLinkClick}>blog</Link>
              <Link to="/projects" onClick={handleLinkClick}>projects</Link>
              <Link to="/about" onClick={handleLinkClick}>about</Link>
              <Link to="/uses" onClick={handleLinkClick}>uses</Link>
              <Link to="/now" onClick={handleLinkClick}>now</Link>
              <Link to="/changelog" onClick={handleLinkClick}>changelog</Link>
              <Link to="/resources" onClick={handleLinkClick}>resources</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
