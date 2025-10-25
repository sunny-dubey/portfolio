import React, { useState, useRef } from 'react';
import WeatherTooltip from './WeatherTooltip';

const About = () => {
  const [showWeatherTooltip, setShowWeatherTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const locationRef = useRef(null);

  // Calculate dynamic experience from when I started earning my own bread
  const calculateExperience = () => {
    const startDate = new Date('2024-01-02');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);

    if (years > 0) {
      return `${years}+ years`;
    } else if (months > 0) {
      return `${months}+ months`;
    } else {
      return '1+ month';
    }
  };

  const handleLocationMouseEnter = e => {
    if (locationRef.current) {
      const rect = locationRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth <= 768;

      setTooltipPosition({
        x: isMobile
          ? rect.left + rect.width / 2
          : rect.left + rect.width / 2 - 100,
        y: rect.bottom + 10, // Position below the text
      });
      setShowWeatherTooltip(true);
    }
  };

  const handleLocationMouseLeave = () => {
    setShowWeatherTooltip(false);
  };

  const handleLocationTouch = e => {
    e.preventDefault();
    handleLocationMouseEnter(e);

    // Auto-hide after 3 seconds on mobile
    setTimeout(() => {
      setShowWeatherTooltip(false);
    }, 3000);
  };

  return (
    <div className='container'>
      <div className='about-content'>
        {/* Hero Section */}
        <div className='about-hero'>
          <div className='about-text'>
            <div className='about-hero-subtitle'>
              <div className='subtitle-item'>
                <div className='subtitle-content'>
                  <span className='subtitle-label'>Role</span>
                  <span className='subtitle-value'>Backend Engineer</span>
                </div>
              </div>

              <div className='subtitle-separator'></div>

              <div className='subtitle-item'>
                <div className='subtitle-content'>
                  <span className='subtitle-label'>Education</span>
                  <span className='subtitle-value'>
                    <a
                      href='https://www.iiitn.ac.in/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='college-link'
                      title='Visit IIIT Nagpur website'
                    >
                      IIIT Nagpur CSE (2020-2024)
                    </a>
                  </span>
                </div>
              </div>

              <div className='subtitle-separator'></div>

              <div className='subtitle-item'>
                <div className='subtitle-content'>
                  <span className='subtitle-label'>Location</span>
                  <span className='subtitle-value'>
                    <span
                      ref={locationRef}
                      className='location-link'
                      onMouseEnter={handleLocationMouseEnter}
                      onMouseLeave={handleLocationMouseLeave}
                      onTouchStart={handleLocationTouch}
                      title='Hover to see current weather in Bangalore'
                    >
                      Bangalore
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <p className='about-hero-intro'>
              I build scalable backend systems and APIs that power modern
              applications. Currently working as a Backend Engineer at a
              fast-growing startup, solving real-world problems with clean,
              efficient code.
            </p>

            {/* Quick Stats */}
            <div className='about-stats'>
              <div className='stat'>
                <span className='stat-number'>{calculateExperience()}</span>
                <span className='stat-label'>Working</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className='skills-showcase'>
              <h3>Current Tech Stack</h3>
              <div className='tech-stack-list'>
                <div className='tech-item'>
                  <div className='tech-icon'>
                    <img src='/icons/django.svg' alt='Django' />
                  </div>
                  <div className='tech-content'>
                    <span className='tech-name'>Django</span>
                    <span className='tech-description'>Main web framework</span>
                  </div>
                </div>
                <div className='tech-item'>
                  <div className='tech-icon'>
                    <img src='/icons/python.svg' alt='Python' />
                  </div>
                  <div className='tech-content'>
                    <span className='tech-name'>Python</span>
                    <span className='tech-description'>Backend language</span>
                  </div>
                </div>
                <div className='tech-item'>
                  <div className='tech-icon'>
                    <img src='/icons/postgresql.svg' alt='PostgreSQL' />
                  </div>
                  <div className='tech-content'>
                    <span className='tech-name'>PostgreSQL</span>
                    <span className='tech-description'>Database</span>
                  </div>
                </div>
                <div className='tech-item'>
                  <div className='tech-icon'>
                    <img src='/icons/go.svg' alt='Golang' />
                  </div>
                  <div className='tech-content'>
                    <span className='tech-name'>Golang</span>
                    <span className='tech-description'>Backend language</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Tools */}
            <div className='skills-showcase'>
              <h3>Daily Tools</h3>
              <div className='tools-list'>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <svg
                      className='text-foreground'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 90 22'
                    >
                      <g fill='currentColor' clipPath='url(#a)'>
                        <path d='M19.162 5.452 10.698.565a.88.88 0 0 0-.879 0L1.356 5.452a.74.74 0 0 0-.37.64v9.853a.74.74 0 0 0 .37.64l8.464 4.887a.879.879 0 0 0 .879 0l8.464-4.886a.74.74 0 0 0 .37-.64V6.091a.74.74 0 0 0-.37-.64Zm-.531 1.035L10.46 20.639c-.055.095-.201.056-.201-.055v-9.266a.52.52 0 0 0-.26-.45L1.975 6.237c-.096-.056-.057-.202.054-.202h16.34c.233 0 .378.252.262.453Zm11.057-.555h3.602v1.984h-3.48c-1.877 0-3.342 1.083-3.342 3.372 0 2.29 1.465 3.373 3.342 3.373h3.48v1.984h-3.754c-3.144 0-5.372-1.847-5.372-5.356 0-3.51 2.38-5.357 5.524-5.357Zm5.432 0h2.227v6.546c0 1.633.748 2.396 2.503 2.396 1.755 0 2.503-.763 2.503-2.396V5.932h2.228v7.004c0 2.38-1.511 3.892-4.731 3.892-3.22 0-4.73-1.526-4.73-3.907v-6.99Zm21.106 3.036c0 1.19-.687 2.106-1.602 2.503v.03c.961.138 1.45.825 1.465 1.756l.045 3.388h-2.228l-.045-3.022c-.015-.671-.412-1.083-1.206-1.083h-3.708v4.105h-2.228V5.932h6.15c2.014 0 3.357 1.022 3.357 3.037Zm-2.243.306c0-.916-.489-1.42-1.404-1.42h-3.632v2.839h3.662c.84 0 1.374-.504 1.374-1.42Zm10.67 4.242c0-.763-.489-1.083-1.221-1.144l-2.472-.229c-2.137-.198-3.251-1.038-3.251-3.068 0-2.03 1.374-3.143 3.342-3.143h5.463v1.922h-5.31c-.763 0-1.252.397-1.252 1.16 0 .763.504 1.13 1.267 1.19l2.518.214c1.908.168 3.159 1.038 3.159 3.083s-1.328 3.144-3.205 3.144h-5.707v-1.923h5.494c.717 0 1.175-.488 1.175-1.205Zm8.751-7.768c3.357 0 5.479 2.152 5.479 5.524 0 3.373-2.213 5.555-5.57 5.555-3.358 0-5.479-2.182-5.479-5.555 0-3.372 2.213-5.524 5.57-5.524Zm3.174 5.54c0-2.26-1.312-3.587-3.22-3.587-1.908 0-3.22 1.328-3.22 3.587 0 2.258 1.312 3.585 3.22 3.585 1.908 0 3.22-1.327 3.22-3.585Zm13.362-2.32c0 1.19-.686 2.106-1.602 2.503v.03c.962.138 1.45.825 1.465 1.756l.046 3.388h-2.228l-.045-3.022c-.016-.671-.413-1.083-1.206-1.083h-3.71v4.105h-2.227V5.932h6.15c2.014 0 3.357 1.022 3.357 3.037Zm-2.242.306c0-.916-.489-1.42-1.404-1.42h-3.632v2.839h3.662c.839 0 1.374-.504 1.374-1.42Z' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path
                            fill='currentColor'
                            d='M.988.447h88.954V21.59H.988z'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>Cursor</span>
                    <span className='tool-description'>Code editor</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <rect
                        x='2'
                        y='2'
                        width='20'
                        height='20'
                        rx='4'
                        fill='#2C2C2C'
                        stroke='#666'
                        stroke-width='1'
                      />
                      <text
                        x='12'
                        y='16'
                        text-anchor='middle'
                        fill='#00FF00'
                        font-family='monospace'
                        font-size='12'
                        font-weight='bold'
                      >
                        $
                      </text>
                      <rect x='14' y='13' width='2' height='6' fill='#00FF00' />
                    </svg>
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>iTerm2</span>
                    <span className='tool-description'>Terminal</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <img src='/icons/github.svg' alt='GitHub' />
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>GitHub</span>
                    <span className='tool-description'>Version control</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <img src='/icons/amazonwebservices.svg' alt='AWS' />
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>AWS</span>
                    <span className='tool-description'>Cloud platform</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <img src='/icons/googlecloud.svg' alt='GCP' />
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>GCP</span>
                    <span className='tool-description'>Cloud platform</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <img src='/icons/postman.svg' alt='Postman' />
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>Postman</span>
                    <span className='tool-description'>API testing</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <img src='/icons/slack.svg' alt='Slack' />
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>Slack</span>
                    <span className='tool-description'>Team communication</span>
                  </div>
                </div>
                <div className='tool-item'>
                  <div className='tool-icon'>
                    <img src='/icons/tableplus.png' alt='TablePlus' />
                  </div>
                  <div className='tool-content'>
                    <span className='tool-name'>TablePlus</span>
                    <span className='tool-description'>
                      Database management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Sections */}
        <div className='about-sections'>
          {/* About Me */}
          <div className='about-section'>
            <h2>My Journey</h2>
            <p>
              I'm a passionate backend engineer who recently graduated with a
              Computer Science degree from IIIT Nagpur (2020-2024). What started
              as curiosity about how websites work has evolved into a career
              focused on building robust, scalable systems that handle
              real-world challenges.
            </p>
            <p>
              My expertise spans Python, Django, and Go, with a strong focus on
              API design, database optimization, and system architecture. I
              enjoy the puzzle-solving aspect of backend development - whether
              it's designing efficient database schemas, debugging performance
              bottlenecks, or architecting microservices.
            </p>
          </div>

          {/* Current Focus */}
          <div className='about-section'>
            <h2>Current Focus</h2>
            <p>
              At my current startup, I'm leading backend development for a
              platform that serves thousands of users daily. My work involves
              designing RESTful APIs, optimizing database performance, and
              ensuring system reliability through robust monitoring and error
              handling.
            </p>
            <p>
              I'm continuously exploring new technologies and best practices in
              backend development. Currently diving deeper into distributed
              systems, containerization with Docker, and implementing
              comprehensive testing strategies to build more resilient
              applications.
            </p>
          </div>
        </div>
      </div>

      <WeatherTooltip
        isVisible={showWeatherTooltip}
        position={tooltipPosition}
      />
    </div>
  );
};

export default About;
