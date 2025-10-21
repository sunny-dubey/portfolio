import React from 'react';

const Uses = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>What I Use</h1>
        <p className="page-description">
          Hardware, software, and tools I use daily for development and productivity.
        </p>
      </div>

      <div className="uses-content">
        <div className="uses-category">
          <h2>Hardware</h2>
          <div className="uses-grid">
            <div className="uses-item">
              <h3>MacBook Pro M2</h3>
              <p>16GB RAM, 512GB SSD - My primary development machine</p>
            </div>
            <div className="uses-item">
              <h3>Dell 27" 4K Monitor</h3>
              <p>UltraSharp U2720Q - Perfect for coding and design work</p>
            </div>
            <div className="uses-item">
              <h3>Keychron K2 Mechanical Keyboard</h3>
              <p>Brown switches - Tactile feedback for long coding sessions</p>
            </div>
            <div className="uses-item">
              <h3>Logitech MX Master 3</h3>
              <p>Wireless mouse with excellent ergonomics and precision</p>
            </div>
            <div className="uses-item">
              <h3>AirPods Pro</h3>
              <p>For calls, music, and focus during deep work</p>
            </div>
            <div className="uses-item">
              <h3>Standing Desk</h3>
              <p>Adjustable height desk for better posture and health</p>
            </div>
          </div>
        </div>

        <div className="uses-category">
          <h2>Development Environment</h2>
          <div className="uses-grid">
            <div className="uses-item">
              <h3>VS Code</h3>
              <p>Primary editor with custom theme and essential extensions</p>
              <div className="uses-tags">
                <span className="tag">Editor</span>
                <span className="tag">Extensions</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>iTerm2 + Zsh</h3>
              <p>Terminal with Oh My Zsh framework and custom configuration</p>
              <div className="uses-tags">
                <span className="tag">Terminal</span>
                <span className="tag">Shell</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>Docker Desktop</h3>
              <p>Containerization for development and deployment</p>
              <div className="uses-tags">
                <span className="tag">Containers</span>
                <span className="tag">DevOps</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>Postman</h3>
              <p>API testing and documentation</p>
              <div className="uses-tags">
                <span className="tag">API Testing</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>GitHub Desktop</h3>
              <p>Git GUI for complex merges and repository management</p>
              <div className="uses-tags">
                <span className="tag">Version Control</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>TablePlus</h3>
              <p>Database management and query tool</p>
              <div className="uses-tags">
                <span className="tag">Database</span>
              </div>
            </div>
          </div>
        </div>

        <div className="uses-category">
          <h2>Tech Stack</h2>
          <div className="uses-grid">
            <div className="uses-item">
              <h3>Languages</h3>
              <p>Python, Go, JavaScript, TypeScript, SQL</p>
              <div className="uses-tags">
                <span className="tag">Python</span>
                <span className="tag">Go</span>
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>Backend Frameworks</h3>
              <p>Django, FastAPI, Express.js, Gin</p>
              <div className="uses-tags">
                <span className="tag">Django</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Express</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>Frontend</h3>
              <p>React, Next.js, HTML5, CSS3</p>
              <div className="uses-tags">
                <span className="tag">React</span>
                <span className="tag">Next.js</span>
                <span className="tag">CSS</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>Databases</h3>
              <p>PostgreSQL, Redis, MongoDB</p>
              <div className="uses-tags">
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>DevOps & Cloud</h3>
              <p>Docker, Kubernetes, AWS, Vercel</p>
              <div className="uses-tags">
                <span className="tag">Docker</span>
                <span className="tag">Kubernetes</span>
                <span className="tag">AWS</span>
              </div>
            </div>
            <div className="uses-item">
              <h3>Monitoring</h3>
              <p>Prometheus, Grafana, Sentry</p>
              <div className="uses-tags">
                <span className="tag">Monitoring</span>
                <span className="tag">Observability</span>
              </div>
            </div>
          </div>
        </div>

        <div className="uses-category">
          <h2>Productivity Apps</h2>
          <div className="uses-grid">
            <div className="uses-item">
              <h3>Notion</h3>
              <p>Note-taking, project management, and documentation</p>
            </div>
            <div className="uses-item">
              <h3>Spotify</h3>
              <p>Music and podcasts for focus and relaxation</p>
            </div>
            <div className="uses-item">
              <h3>1Password</h3>
              <p>Password management and secure credential storage</p>
            </div>
            <div className="uses-item">
              <h3>Raycast</h3>
              <p>Mac productivity launcher and automation tool</p>
            </div>
            <div className="uses-item">
              <h3>CleanMyMac X</h3>
              <p>System maintenance and optimization</p>
            </div>
            <div className="uses-item">
              <h3>Rectangle</h3>
              <p>Window management and organization</p>
            </div>
          </div>
        </div>

        <div className="uses-category">
          <h2>VS Code Extensions</h2>
          <div className="uses-list">
            <div className="uses-item">
              <h3>Essential Extensions</h3>
              <ul>
                <li><strong>Python</strong> - Python language support</li>
                <li><strong>Go</strong> - Go language support</li>
                <li><strong>ES7+ React/Redux/React-Native snippets</strong> - React snippets</li>
                <li><strong>GitLens</strong> - Git supercharged</li>
                <li><strong>Prettier</strong> - Code formatter</li>
                <li><strong>ESLint</strong> - JavaScript linting</li>
                <li><strong>Thunder Client</strong> - API testing</li>
                <li><strong>Docker</strong> - Docker support</li>
                <li><strong>Material Icon Theme</strong> - File icons</li>
                <li><strong>One Dark Pro</strong> - Dark theme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;
