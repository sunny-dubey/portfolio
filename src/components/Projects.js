import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="container">
      <div className="page-hero">
        <h1 className="page-hero-title">
          My Projects
        </h1>
        <p className="page-hero-subtitle">
          A collection of my recent work and side projects. Each project represents a learning journey and a step forward in my development skills.
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

