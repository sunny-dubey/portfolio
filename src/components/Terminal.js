import React, { useState, useEffect } from 'react';

const terminalContent = [
  '$ whoami',
  'sunny@portfolio:~$',
  '',
  '$ cat about.txt',
  'Name: Sunny Dubey',
  'Role: Backend Developer & Software Engineer',
  'Experience: 5 years in distributed systems',
  'Location: San Francisco, CA',
  'Status: Available for opportunities',
  '',
  '$ ls skills/',
  'Languages: Python, Go, JavaScript, TypeScript, Java',
  'Frameworks: Django, FastAPI, Node.js, React, Express',
  'Databases: PostgreSQL, MongoDB, Redis, Cassandra',
  'Tools: Docker, Kubernetes, AWS, GCP, Terraform',
  'Concepts: Microservices, Event-Driven, CQRS, DDD',
  '',
  '$ cat experience.txt',
  'Senior Backend Engineer @ TechCorp (2021-Present)',
  '- Built event-sourcing system handling 10M events/day',
  '- Designed microservices architecture for payments',
  '- Reduced API latency by 60% through optimization',
  '',
  'Backend Developer @ StartupXYZ (2019-2021)',
  '- Developed RESTful APIs serving 1M+ users',
  '- Implemented caching strategy reducing DB load by 40%',
  '- Migrated monolith to microservices architecture',
  '',
  '$ git log --oneline -5',
  'f3a9c2b feat: Added state management blog post',
  '8d4e1a7 feat: Built e-commerce platform project',
  'c2f5b3e refactor: Improved API performance metrics',
  'a1d8f4c docs: Updated portfolio with new skills',
  '7e2c9f1 feat: Initial portfolio deployment',
  '',
  '$ contact --show',
  '📧 Email: sunny.dubey@example.com',
  '🔗 LinkedIn: linkedin.com/in/sunny-dubey',
  '🐙 GitHub: github.com/sunny-dubey',
  '🐦 Twitter: @sunny_codes',
  '💼 Portfolio: sunny-dubey.dev',
  '',
  '$ projects --list',
  '[1] Distributed Task Queue System',
  '    Scale: 100K tasks/min | Tech: Go, Redis, gRPC',
  '',
  '[2] Real-time Analytics Dashboard',
  '    Scale: 50K events/sec | Tech: Python, Kafka, TimescaleDB',
  '',
  '[3] API Gateway Service',
  '    Scale: 10M requests/day | Tech: Node.js, Nginx, Docker',
  '',
  '$ blog --recent',
  '→ State Management Patterns in Distributed Systems',
  '  Deep dive into event sourcing and CQRS patterns',
  '',
  '→ Building Scalable Microservices with Go',
  '  Architecture decisions and trade-offs',
  '',
  '→ Database Sharding Strategies',
  '  Horizontal scaling approaches for PostgreSQL',
  '',
  'sunny@portfolio:~$ _'
];

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (isOpen && currentLine < terminalContent.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => {
          const currentText = terminalContent[currentLine];
          if (currentText === '') {
            return prev + '\n';
          }
          return prev + (prev ? '\n' : '') + currentText;
        });
        setCurrentLine(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, currentLine]);

  // Add Escape key support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setCurrentLine(0);
        setDisplayedText('');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleTerminalClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setCurrentLine(0);
      setDisplayedText('');
    }
  };

  const handleCloseTerminal = () => {
    setIsOpen(false);
    setCurrentLine(0);
    setDisplayedText('');
  };

  const handleMinimizeTerminal = () => {
    // For now, just close the terminal (minimize functionality can be added later)
    setIsOpen(false);
    setCurrentLine(0);
    setDisplayedText('');
  };

  const handleMaximizeTerminal = () => {
    // Toggle between normal and maximized size
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalWindow.classList.toggle('maximized');
    }
  };

  return (
    <>
      {/* Terminal Icon */}
      <div className="terminal-icon" onClick={handleTerminalClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 8L10 12L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Terminal Popup */}
      {isOpen && (
        <div className="terminal-overlay" onClick={handleTerminalClick}>
          <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
            <div className="terminal-header">
              <div className="terminal-controls">
                <div className="terminal-control close" onClick={handleCloseTerminal}></div>
                <div className="terminal-control minimize" onClick={handleMinimizeTerminal}></div>
                <div className="terminal-control maximize" onClick={handleMaximizeTerminal}></div>
              </div>
              <div className="terminal-title">terminal</div>
            </div>
            <div className="terminal-body">
              <pre className="terminal-content">
                {displayedText}
                <span className="terminal-cursor">█</span>
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal;
