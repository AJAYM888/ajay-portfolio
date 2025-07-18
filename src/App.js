import React, { useState, useEffect } from 'react';
import { ArrowUp, CheckCircle } from 'lucide-react';

// Import components - make sure these files exist and have default exports
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import pages - make sure these files exist and have default exports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add useEffect to manage the dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 20);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToastMessage(`${label} copied to clipboard!`);
  };

  const renderCurrentPage = () => {
    const pageProps = { setCurrentPage, copyToClipboard, isDarkMode };
    
    switch (currentPage) {
      case 'home': 
        return <HomePage {...pageProps} />;
      case 'about': 
        return <AboutPage {...pageProps} />;
      case 'experience': 
        return <ExperiencePage {...pageProps} />;
      case 'projects': 
        return <ProjectsPage {...pageProps} />;
      case 'skills': 
        return <SkillsPage {...pageProps} />;
      case 'blog': 
        return <BlogPage {...pageProps} />;
      case 'contact': 
        return <ContactPage {...pageProps} />;
      default: 
        return <HomePage {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full hover:scale-105 transition-all duration-300 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {showToast && (
        <div className="fixed top-24 right-4 z-50 px-6 py-4 rounded-lg transition-all duration-300 bg-green-500 dark:bg-green-600 text-white">
          <div className="flex items-center">
            <CheckCircle size={20} className="mr-3" />
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      <div className="transition-all duration-300">
        {renderCurrentPage()}
      </div>

      <Footer setCurrentPage={setCurrentPage} copyToClipboard={copyToClipboard} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;