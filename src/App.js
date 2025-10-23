import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Projects from './components/Projects';
import About from './components/About';
import Now from './components/Now';
import Uses from './components/Uses';
import Changelog from './components/Changelog';
import Resources from './components/Resources';
import Footer from './components/Footer';
import PullToRefresh from './components/PullToRefresh';
import './App.css';

function App() {
  const handleRefresh = async () => {
    // Simulate refresh - in a real app, this would reload data
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main id="main-content" className="main-content">
          <PullToRefresh onRefresh={handleRefresh}>
            <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/post/:id" element={<BlogPost />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/uses" element={<Uses />} />
              <Route path="/now" element={<Now />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </PullToRefresh>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
