import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const ExperiencePage = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Professional Experience</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My journey through the world of AI and data science across leading organizations
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`p-8 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                      <h4 className="text-lg text-blue-400 mb-3">{exp.company}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Calendar className="mr-2" size={16} />
                      {exp.period}
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPin className="mr-2" size={16} />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className={`mt-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
                  
                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h5 className={`text-lg font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Achievements</h5>
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;