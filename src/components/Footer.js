import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <p>&copy; 2025 Sunny Dubey. All rights reserved.</p>
        </div>
        <div className='footer-social'>
          <a
            href='https://github.com/sunny-dubey'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <span className='separator'>·</span>
          <a
            href='https://www.linkedin.com/in/sunny-dubey-5018ab267/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <span className='separator'>·</span>
          <a href='mailto:sunnydub2502@gmail.com'>Email</a>
          <span className='separator'>·</span>
          <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            Resume
          </a>
        </div>
        <div className='disclaimer'>
          <p>
            All opinions expressed here are my own and do not represent my
            employer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
