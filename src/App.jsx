import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Training from './pages/Training';
import Advisory from './pages/Advisory';
import Approach from './pages/Approach';
import About from './pages/About';
import Contact from './pages/Contact';
import WebinarLanding from './pages/WebinarLanding';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// Component to detect language from URL and sync state
const LanguageSync = ({ setLanguage }) => {
  const location = useLocation();

  useEffect(() => {
    // Check for '/tr' exactly or '/tr/' prefix (not just startsWith('/tr') which would match '/training')
    const isTurkish = location.pathname === '/tr' || location.pathname.startsWith('/tr/');
    setLanguage(isTurkish ? 'tr' : 'en');
  }, [location.pathname, setLanguage]);

  return null;
};

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguageSync setLanguage={setLanguage} />
      <Routes>
        {/* Standalone Landing Pages (no Layout) */}
        <Route path="/webinar" element={<WebinarLanding language="en" />} />
        <Route path="/tr/webinar" element={<WebinarLanding language="tr" />} />

        {/* Main Site Pages (with Layout) */}
        <Route path="/*" element={
          <Layout language={language} setLanguage={setLanguage}>
            <Routes>
              {/* English Routes */}
              <Route path="/" element={<Home language="en" />} />
              <Route path="/training" element={<Training language="en" />} />
              <Route path="/advisory" element={<Advisory language="en" />} />
              <Route path="/approach" element={<Approach language="en" />} />
              <Route path="/about" element={<About language="en" />} />
              <Route path="/contact" element={<Contact language="en" />} />

              {/* Turkish Routes */}
              <Route path="/tr" element={<Home language="tr" />} />
              <Route path="/tr/egitim" element={<Training language="tr" />} />
              <Route path="/tr/danismanlik" element={<Advisory language="tr" />} />
              <Route path="/tr/yaklasim" element={<Approach language="tr" />} />
              <Route path="/tr/hakkimizda" element={<About language="tr" />} />
              <Route path="/tr/iletisim" element={<Contact language="tr" />} />

              {/* Fallback - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
