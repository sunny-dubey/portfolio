import React from 'react';

const Now = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>What I'm Doing Now</h1>
        <p className="page-description">
          This is what I'm currently focused on, learning, and working on. 
          Last updated: January 20, 2025
        </p>
      </div>

      <div className="now-content">
        <div className="now-section">
          <h2>Currently Working On</h2>
          <div className="now-item">
            <h3>Distributed Task Queue System</h3>
            <p>Building a high-performance task queue using Go and Redis for handling background jobs at scale. Focus on reliability, monitoring, and horizontal scaling.</p>
            <div className="now-tags">
              <span className="tag">Go</span>
              <span className="tag">Redis</span>
              <span className="tag">Microservices</span>
            </div>
          </div>
          
          <div className="now-item">
            <h3>Portfolio Website</h3>
            <p>Continuously improving this portfolio with new features, better performance, and enhanced user experience.</p>
            <div className="now-tags">
              <span className="tag">React</span>
              <span className="tag">CSS</span>
              <span className="tag">Design</span>
            </div>
          </div>
        </div>

        <div className="now-section">
          <h2>Learning & Reading</h2>
          <div className="now-item">
            <h3>Rust Programming</h3>
            <p>Exploring systems programming with Rust, focusing on memory safety and performance for backend services.</p>
            <div className="now-tags">
              <span className="tag">Rust</span>
              <span className="tag">Systems Programming</span>
            </div>
          </div>
          
          <div className="now-item">
            <h3>Designing Data-Intensive Applications</h3>
            <p>Reading Martin Kleppmann's book on building reliable, scalable, and maintainable applications.</p>
            <div className="now-tags">
              <span className="tag">Architecture</span>
              <span className="tag">Distributed Systems</span>
            </div>
          </div>
        </div>

        <div className="now-section">
          <h2>Availability</h2>
          <div className="now-item">
            <h3>Open to Opportunities</h3>
            <p>Currently available for:</p>
            <ul>
              <li>Backend engineering roles</li>
              <li>Technical consulting projects</li>
              <li>Speaking opportunities</li>
              <li>Open source collaborations</li>
            </ul>
          </div>
        </div>

        <div className="now-section">
          <h2>Recent Achievements</h2>
          <div className="now-item">
            <h3>This Month</h3>
            <ul>
              <li>Launched new portfolio website</li>
              <li>Published 5 technical blog posts</li>
              <li>Completed microservices architecture course</li>
              <li>Contributed to 3 open source projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
