import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Apply theme to body
const savedTheme = localStorage.getItem('theme');
const isDarkMode = savedTheme ? savedTheme === 'dark' : true; // Default to dark
document.body.className = isDarkMode ? 'dark' : 'light';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
