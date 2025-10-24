// Analytics utility functions
export const GA_TRACKING_ID = 'G-S1DT9FZJ6F';

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific events
export const trackProjectClick = (projectName) => {
  event({
    action: 'click',
    category: 'Projects',
    label: projectName,
  });
};

export const trackBlogPostView = (postTitle) => {
  event({
    action: 'view',
    category: 'Blog',
    label: postTitle,
  });
};

export const trackResourceClick = (resourceName) => {
  event({
    action: 'click',
    category: 'Resources',
    label: resourceName,
  });
};

export const trackBlogPostRead = (postTitle, readTime) => {
  event({
    action: 'read',
    category: 'Blog',
    label: postTitle,
    value: readTime,
  });
};

export const trackContactForm = () => {
  event({
    action: 'submit',
    category: 'Contact',
    label: 'Contact Form',
  });
};
