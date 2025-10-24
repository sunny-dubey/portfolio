import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PullToRefresh from './components/PullToRefresh';
import { ThemeProvider } from './context/ThemeContext';
import { pageview } from './utils/analytics';
import './App.css';

// Lazy load non-critical routes for better performance
const BlogList = React.lazy(() => import('./components/BlogList'));
const BlogPost = React.lazy(() => import('./components/BlogPost'));
const Projects = React.lazy(() => import('./components/Projects'));
const About = React.lazy(() => import('./components/About'));
const Now = React.lazy(() => import('./components/Now'));
const Uses = React.lazy(() => import('./components/Uses'));
const Changelog = React.lazy(() => import('./components/Changelog'));
const Resources = React.lazy(() => import('./components/Resources'));

// Component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className='container'>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        fontSize: 'var(--font-size-lg)',
        color: 'var(--text-secondary)',
      }}
    >
      Loading...
    </div>
  </div>
);

function App() {
  const handleRefresh = async () => {
    // Simulate refresh - in a real app, this would reload data
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  };

  return (
    <ThemeProvider>
      <Router>
        <div className='App'>
          <PageTracker />
          <Header />
          <main id='main-content' className='main-content'>
            <PullToRefresh onRefresh={handleRefresh}>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path='/' element={<BlogList />} />
                  <Route path='/blog' element={<BlogList />} />
                  <Route path='/post/:id' element={<BlogPost />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/uses' element={<Uses />} />
                  <Route path='/now' element={<Now />} />
                  <Route path='/changelog' element={<Changelog />} />
                  <Route path='/resources' element={<Resources />} />
                  <Route path='/about' element={<About />} />
                </Routes>
              </Suspense>
            </PullToRefresh>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
