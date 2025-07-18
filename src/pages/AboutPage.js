import React from 'react';
import { MapPin, Phone, Mail, Linkedin, ExternalLink, Target, Shield, BookOpen } from 'lucide-react';

const AboutPage = ({ copyToClipboard, isDarkMode }) => {
  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Passionate about leveraging AI to solve complex problems and create meaningful impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className={`p-8 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Journey</h2>
              <div className={`space-y-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  I'm a Senior Software Engineer and Data Scientist at Robert Bosch, where I lead AI initiatives 
                  that transform manufacturing processes through intelligent automation and predictive analytics.
                </p>
                <p>
                  My expertise spans the entire AI lifecycle - from data preprocessing and model development 
                  to deployment and monitoring in production environments. I specialize in building robust, 
                  scalable AI systems that deliver measurable business value.
                </p>
                <p>
                  With a strong foundation in both traditional machine learning and cutting-edge generative AI, 
                  I'm passionate about pushing the boundaries of what's possible with artificial intelligence.
                </p>
              </div>
            </div>
            
            <div className={`p-8 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Core Values</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="text-blue-400 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Innovation First</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Always seeking new ways to solve problems with emerging technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="text-green-400 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ethical AI</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Building responsible AI systems with transparency and fairness</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="text-purple-400 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Continuous Learning</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Staying ahead of the curve in the rapidly evolving AI landscape</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className={`p-8 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
              <div className="space-y-4">
                <div className={`flex items-center p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <MapPin className="text-green-400 mr-4" size={24} />
                  <div>
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                
                <div 
                  onClick={() => copyToClipboard('+91 961-143-0812', 'Phone number')}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Phone className="text-blue-400 mr-4" size={24} />
                  <div className="flex-1">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+91 961-143-0812</p>
                  </div>
                  <button className={`transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'
                  }`}>
                    <ExternalLink size={16} />
                  </button>
                </div>
                
                <div 
                  onClick={() => copyToClipboard('ajaymys2011@gmail.com', 'Email')}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Mail className="text-red-400 mr-4" size={24} />
                  <div className="flex-1">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>ajaymys2011@gmail.com</p>
                  </div>
                  <button className={`transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'
                  }`}>
                    <ExternalLink size={16} />
                  </button>
                </div>
                
                <div className={`flex items-center p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <Linkedin className="text-blue-400 mr-4" size={24} />
                  <div className="flex-1">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</p>
                    <a href="https://linkedin.com/in/ajaym10" className="text-blue-400 hover:text-blue-300">
                      /in/ajaym10
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Bachelor of Engineering</h3>
                <p className={`text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Electronics and Communication</p>
                <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>P.E.S College of Engineering, Mandya</p>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Aug 2017 – Aug 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;