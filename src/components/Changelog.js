import React from 'react';

const Changelog = () => {
  // Changelog data - easy to add new entries
  const changelogEntries = [
    {
      date: 'Oct 25, 2024',
      version: '1.6.0',
      title: 'Performance Optimization Update',
      changes: [
        'google analytics now loads after page render',
        'devicon logos are now served locally ',
        'added a LazyImage component',
      ],
    },
    {
      date: 'Oct 24, 2025',
      version: '1.4.0',
      title: 'Google Analytics is in, code is cleaner, and hello dark mode',
      changes: [
        'added google analytics - its free',
        'added linter to keep things tidy',
        'dark mode toggle',
      ],
    },
    {
      date: 'Oct 23, 2025',
      version: '1.3.0',
      title: 'A small change in mobile view',
      changes: ['you can now scroll through the website on mobile'],
    },
    {
      date: 'Oct 22, 2025',
      version: '1.1.0',
      title: 'Fixed GitHub Pages Deployment',
      changes: ['fixed github pages deployment', 'added change logs'],
    },
    {
      date: 'Oct 21, 2025',
      version: '1.0.0',
      title: 'Initial Portfolio Launch',
      changes: [
        'shipped this website thanks to cursor AI and a bunch of prompts',
        'just basic header and footer',
      ],
    },
  ];

  const futurePlans = [
    'take live all the sections of the website',
    'add terminal with more interactive commands and real-time data',
    'implement a search functionality for blog posts if need arises',
  ];

  return (
    <div className='container'>
      <div className='page-header'>
        <h1>changelog</h1>
        <p className='page-description'>
          keeping track of what's new and what's coming next
        </p>
      </div>

      <div className='changelog-content'>
        {changelogEntries.map((entry, index) => (
          <div key={index} className='changelog-entry'>
            <div className='changelog-date'>{entry.date}</div>
            <div className='changelog-changes'>
              <h3>
                Version {entry.version} - {entry.title}
              </h3>
              <ul className='changelog-list'>
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>{change}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className='changelog-future'>
          <h2>Future Plans</h2>
          <ul className='changelog-list'>
            {futurePlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
