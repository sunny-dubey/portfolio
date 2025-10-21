import React from 'react';

const Changelog = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Changelog</h1>
        <p className="page-description">
          Track of all the updates, improvements, and changes made to this portfolio.
        </p>
      </div>

      <div className="changelog-content">
        <div className="changelog-entry">
          <div className="changelog-date">2025-01-20</div>
          <div className="changelog-changes">
            <h3>Terminal Feature & Blog Organization</h3>
            <ul className="changelog-list">
              <li>Added interactive terminal feature to footer</li>
              <li>Separated blog posts into individual files for better organization</li>
              <li>Fixed terminal window controls (close, minimize, maximize)</li>
              <li>Added Escape key support for closing terminal</li>
              <li>Improved dark/light theme color scheme</li>
              <li>Added professional disclaimer to footer</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">2025-01-15</div>
          <div className="changelog-changes">
            <h3>Portfolio Launch</h3>
            <ul className="changelog-list">
              <li>Launched new portfolio website</li>
              <li>Added 5 initial technical blog posts</li>
              <li>Implemented professional color scheme</li>
              <li>Added responsive design for mobile devices</li>
              <li>Created About page with skills and experience</li>
              <li>Added Projects section with sample work</li>
              <li>Implemented dark/light mode with system preference detection</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">2025-01-10</div>
          <div className="changelog-changes">
            <h3>Design System Implementation</h3>
            <ul className="changelog-list">
              <li>Established consistent typography system</li>
              <li>Implemented CSS variables for theming</li>
              <li>Added smooth transitions and hover effects</li>
              <li>Created reusable component structure</li>
              <li>Optimized for performance and accessibility</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">2024-12-20</div>
          <div className="changelog-changes">
            <h3>Initial Development</h3>
            <ul className="changelog-list">
              <li>Started portfolio development</li>
              <li>Designed initial layout and structure</li>
              <li>Set up React project with routing</li>
              <li>Created basic component architecture</li>
              <li>Implemented initial styling system</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">2024-12-01</div>
          <div className="changelog-changes">
            <h3>Planning Phase</h3>
            <ul className="changelog-list">
              <li>Researched modern portfolio designs</li>
              <li>Defined content strategy and structure</li>
              <li>Selected technology stack (React, CSS)</li>
              <li>Created initial wireframes and mockups</li>
              <li>Established development workflow</li>
            </ul>
          </div>
        </div>

        <div className="changelog-future">
          <h2>Upcoming Features</h2>
          <div className="changelog-entry">
            <div className="changelog-date">Planned</div>
            <div className="changelog-changes">
              <h3>Future Enhancements</h3>
              <ul className="changelog-list">
                <li>Add newsletter signup functionality</li>
                <li>Implement blog post search and filtering</li>
                <li>Add RSS feed for blog posts</li>
                <li>Create case studies section</li>
                <li>Add speaking/talks section</li>
                <li>Implement contact form</li>
                <li>Add analytics dashboard</li>
                <li>Create open source contributions showcase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
