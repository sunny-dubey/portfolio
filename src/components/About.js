import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="about-content">
        <div className="about-hero">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Profile"
            />
          </div>
          <div className="about-text">
            <h1 className="about-hero-title">
              Hi, I'm Sunny
            </h1>
            <p className="about-hero-subtitle">
              I'm a passionate backend developer and software engineer with expertise in building scalable, 
              high-performance systems. I love solving complex technical challenges and creating robust solutions 
              that power modern applications.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">APIs Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-sections">
          <div className="about-section">
            <h2>My Journey</h2>
            <p>
              My journey in software engineering began with a fascination for how systems work behind the scenes. 
              I started by building simple scripts and gradually moved to developing complex backend architectures 
              that handle millions of requests.
            </p>
            <p>
              I specialize in designing and implementing scalable backend systems, optimizing database performance, 
              and building robust APIs. My experience spans from microservices architecture to monolithic applications, 
              always focusing on code quality, performance, and maintainability.
            </p>
          </div>

          <div className="about-section">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React & Next.js</li>
                  <li>JavaScript & TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>PostgreSQL & MongoDB</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Others</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS & Vercel</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>What I Do</h2>
            <div className="services-grid">
              <div className="service">
                <h3>Web Development</h3>
                <p>Building responsive, modern web applications using the latest technologies and best practices.</p>
              </div>
              <div className="service">
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and beautiful user interfaces that provide exceptional user experiences.</p>
              </div>
              <div className="service">
                <h3>Consulting</h3>
                <p>Helping businesses optimize their digital presence and improve their online performance.</p>
              </div>
            </div>
          </div>

          <div className="about-section contact-section">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'd love to hear from you!
            </p>
            <div className="contact-links">
              <a href="mailto:john@example.com" className="contact-link">
                john@example.com
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="contact-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
