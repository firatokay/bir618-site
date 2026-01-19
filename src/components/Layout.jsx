import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = ({ children, language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect language from URL to ensure consistency
  // Check for '/tr' exactly or '/tr/' prefix (not just startsWith('/tr') which would match '/training')
  const currentLang = (location.pathname === '/tr' || location.pathname.startsWith('/tr/')) ? 'tr' : 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync language state with URL
  useEffect(() => {
    if (language !== currentLang) {
      setLanguage(currentLang);
    }
  }, [currentLang, language, setLanguage]);

  const navItems = {
    en: {
      home: 'Home',
      training: 'Training',
      advisory: 'Advisory',
      approach: 'Approach',
      about: 'About',
      contact: 'Contact'
    },
    tr: {
      home: 'Ana Sayfa',
      training: 'Eğitim',
      advisory: 'Danışmanlık',
      approach: 'Yaklaşım',
      about: 'Hakkımızda',
      contact: 'İletişim'
    }
  };

  const nav = navItems[currentLang];

  // Helper function to check if a path is active
  const isActive = (path) => {
    const targetPath = createPath(path);
    return location.pathname === targetPath;
  };

  // Helper function to create proper paths based on URL
  const createPath = (path) => {
    if (currentLang === 'en') {
      return path === '/' ? '/' : path;
    }
    // Map English paths to Turkish paths
    const pathMap = {
      '/': '/tr',
      '/training': '/tr/egitim',
      '/advisory': '/tr/danismanlik',
      '/approach': '/tr/yaklasim',
      '/about': '/tr/hakkimizda',
      '/contact': '/tr/iletisim'
    };
    return pathMap[path] || '/tr';
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    setLanguage(newLang);

    // Map current route to new language
    const currentPath = location.pathname;
    let newPath = '/';

    if (currentLang === 'en') {
      // Switching to Turkish
      if (currentPath === '/') newPath = '/tr';
      else if (currentPath === '/training') newPath = '/tr/egitim';
      else if (currentPath === '/advisory') newPath = '/tr/danismanlik';
      else if (currentPath === '/approach') newPath = '/tr/yaklasim';
      else if (currentPath === '/about') newPath = '/tr/hakkimizda';
      else if (currentPath === '/contact') newPath = '/tr/iletisim';
    } else {
      // Switching to English
      if (currentPath === '/tr') newPath = '/';
      else if (currentPath === '/tr/egitim') newPath = '/training';
      else if (currentPath === '/tr/danismanlik') newPath = '/advisory';
      else if (currentPath === '/tr/yaklasim') newPath = '/approach';
      else if (currentPath === '/tr/hakkimizda') newPath = '/about';
      else if (currentPath === '/tr/iletisim') newPath = '/contact';
    }

    navigate(newPath);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPath('/')} className="text-2xl font-light tracking-tight hover:opacity-70 transition-opacity">
              bir618
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to={createPath('/')} className={`text-sm font-light transition-opacity ${isActive('/') ? 'text-amber-600' : 'hover:opacity-70'}`}>
                {nav.home}
              </Link>
              <Link to={createPath('/training')} className={`text-sm font-light transition-opacity ${isActive('/training') ? 'text-amber-600' : 'hover:opacity-70'}`}>
                {nav.training}
              </Link>
              <Link to={createPath('/advisory')} className={`text-sm font-light transition-opacity ${isActive('/advisory') ? 'text-amber-600' : 'hover:opacity-70'}`}>
                {nav.advisory}
              </Link>
              <Link to={createPath('/approach')} className={`text-sm font-light transition-opacity ${isActive('/approach') ? 'text-amber-600' : 'hover:opacity-70'}`}>
                {nav.approach}
              </Link>
              <Link to={createPath('/about')} className={`text-sm font-light transition-opacity ${isActive('/about') ? 'text-amber-600' : 'hover:opacity-70'}`}>
                {nav.about}
              </Link>
              <Link to={createPath('/contact')} className={`text-sm font-light transition-opacity ${isActive('/contact') ? 'text-amber-600' : 'hover:opacity-70'}`}>
                {nav.contact}
              </Link>
              <button
                onClick={toggleLanguage}
                className="text-sm font-light px-3 py-1 border border-gray-300 hover:border-gray-900 transition-colors"
              >
                {currentLang === 'en' ? 'TR' : 'EN'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="text-sm font-light px-3 py-1 border border-gray-300"
              >
                {currentLang === 'en' ? 'TR' : 'EN'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
              <Link
                to={createPath('/')}
                className={`block text-base font-light transition-opacity ${isActive('/') ? 'text-amber-600' : 'hover:opacity-70'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.home}
              </Link>
              <Link
                to={createPath('/training')}
                className={`block text-base font-light transition-opacity ${isActive('/training') ? 'text-amber-600' : 'hover:opacity-70'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.training}
              </Link>
              <Link
                to={createPath('/advisory')}
                className={`block text-base font-light transition-opacity ${isActive('/advisory') ? 'text-amber-600' : 'hover:opacity-70'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.advisory}
              </Link>
              <Link
                to={createPath('/approach')}
                className={`block text-base font-light transition-opacity ${isActive('/approach') ? 'text-amber-600' : 'hover:opacity-70'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.approach}
              </Link>
              <Link
                to={createPath('/about')}
                className={`block text-base font-light transition-opacity ${isActive('/about') ? 'text-amber-600' : 'hover:opacity-70'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.about}
              </Link>
              <Link
                to={createPath('/contact')}
                className={`block text-base font-light transition-opacity ${isActive('/contact') ? 'text-amber-600' : 'hover:opacity-70'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.contact}
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with padding for fixed nav */}
      <div className="pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3">
            <p className="text-sm font-light opacity-80">© 2026 Bir618 {currentLang === 'tr' ? 'Danışmanlık' : 'Consulting'}</p>
            <p className="text-sm font-light opacity-70">
              {currentLang === 'tr' ? '2005\'ten beri kuruluşlara hizmet veriyoruz' : 'Serving organizations since 2005'}
            </p>
            <p className="text-xs font-light opacity-50 pt-4">
              ITIL® is a registered trademark of AXELOS Limited. COBIT® is a registered trademark of ISACA. PRINCE2® is a registered trademark of AXELOS Limited.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 300;
        }

        html {
          scroll-padding-top: 100px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
