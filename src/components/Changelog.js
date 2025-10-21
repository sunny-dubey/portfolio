import React from 'react';

const Changelog = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>changelog</h1>
        <p className="page-description">
        keeping track of what's new and what's coming next
        </p>
      </div>

      <div className="changelog-content">
        <div className="changelog-entry">
          <div className="changelog-date">January 25, 2025</div>
          <div className="changelog-changes">
            <h3>Version 1.0.0 - Production "Live Soon" Release</h3>
            <ul className="changelog-list">
              <li>shipped this website thanks to cursor AI and a bunch of prompts</li>
              <li>just basic header and footer</li>
            </ul>
          </div>
        </div>
        <div className="changelog-future">
          <h2>Future Plans</h2>
          <ul className="changelog-list">
            <li>take live all the sections of the website</li>
            <li>add terminal with more interactive commands and real-time data</li>
            <li>implement a search functionality for blog posts if need arises</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Changelog;