import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' }
];

const Footer = ({ setCurrentPage, copyToClipboard, isDarkMode }) => {
  return (
    <footer className={`py-16 border-t ${
      isDarkMode 
        ? 'border-gray-800 bg-gray-900' 
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <h3 className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Ajay M</h3>
            </div>
            <p className={`mb-6 leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Senior Software Engineer & Data Scientist specializing in AI/ML solutions. 
              Passionate about building intelligent systems that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/ajaym10" className={`p-3 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-blue-600' 
                  : 'bg-gray-200 hover:bg-blue-500'
              }`}>
                <Linkedin size={20} className={`${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-white'
                }`} />
              </a>
              <a href="mailto:ajaymys2011@gmail.com" className={`p-3 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-red-600' 
                  : 'bg-gray-200 hover:bg-red-500'
              }`}>
                <Mail size={20} className={`${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-white'
                }`} />
              </a>
              <button className={`p-3 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-purple-600' 
                  : 'bg-gray-200 hover:bg-purple-500'
              }`}>
                <Github size={20} className={`${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-white'
                }`} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <div className="space-y-2">
              {navigationItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`block transition-colors ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Expertise</h4>
            <div className="space-y-2">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>AI/ML Development</p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Generative AI</p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Cloud Deployment</p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Data Science</p>
            </div>
          </div>
        </div>
        
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="mb-4 md:mb-0">
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              © 2025 Ajay M. Built with React and passion for AI innovation.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => copyToClipboard('ajaymys2011@gmail.com', 'Email')}
              className={`transition-colors text-sm ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Quick Email
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;