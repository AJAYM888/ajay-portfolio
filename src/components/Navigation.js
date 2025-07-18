import React from 'react';
import { Home, User, Briefcase, FolderOpen, Layers, MessageCircle, Sun, Moon, Menu, X } from 'lucide-react';

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'contact', label: 'Contact', icon: MessageCircle }
];

const Navigation = ({ currentPage, setCurrentPage, isScrolled, isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? isDarkMode 
          ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-xl border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            onClick={() => setCurrentPage('home')}
            className={`cursor-pointer text-2xl font-bold hover:text-blue-400 transition-colors flex items-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <div className="w-8 h-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            Ajay M
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : isDarkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent size={18} className="mr-2" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden backdrop-blur-xl border-t ${
          isDarkMode 
            ? 'bg-black/95 border-gray-800' 
            : 'bg-white/95 border-gray-200'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : isDarkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent size={20} className="mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;