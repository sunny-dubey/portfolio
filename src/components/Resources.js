import React from 'react';
import { trackResourceClick } from '../utils/analytics';

const Resources = () => {
  // Resources data - easy to add new entries
  const resources = [
    {
      title: "Techmeme",
      url: "https://www.techmeme.com/",
      description: "website to actually know whats going in tech world",
      category: "websites"
    },
    {
      title: "Hacker News",
      url: "https://news.ycombinator.com/",
      description: "community-driven tech news and discussions from developers, entrepreneurs, and tech enthusiasts",
      category: "websites"
    }
  ];

  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {});

  // Category display names
  const categoryNames = {
    websites: "Websites & Tools",
    papers: "Research Papers",
    tools: "Development Tools",
    articles: "Articles & Blogs",
    misc: "Miscellaneous"
  };

  const handleResourceClick = (resourceTitle) => {
    trackResourceClick(resourceTitle);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>resources & links</h1>
        <p className="page-description">
          curated collection of useful websites, research papers, and cool finds from the internet
        </p>
      </div>

      <div className="resources-content">
        {Object.keys(groupedResources).length === 0 ? (
          <div className="live-soon">
            <h1>Live Soon</h1>
            <p>This page is under construction. Check back soon for my curated collection of resources!</p>
          </div>
        ) : (
          Object.entries(groupedResources).map(([category, categoryResources]) => (
            <div key={category} className="resource-category">
              <h2 className="resource-category-title">
                {categoryNames[category] || category}
              </h2>
              <div className="resource-list">
                {categoryResources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <h3 className="resource-title">
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="resource-link"
                        onClick={() => handleResourceClick(resource.title)}
                      >
                        {resource.title}
                      </a>
                    </h3>
                    <p className="resource-description">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;
