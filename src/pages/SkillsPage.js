import React from 'react';
import { Award, Shield, ExternalLink, Code, Brain, Cloud, Database, Network } from 'lucide-react';
import { skills, certifications, skillLinks } from '../data/portfolioData';

const SkillsPage = ({ isDarkMode }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      "Programming Languages": Code,
      "Machine Learning & Deep Learning": Brain,
      "Generative AI & NLP": Brain,
      "Cloud & Deployment": Cloud,
      "Knowledge Graphs": Network
    };
    return icons[category] || Code;
  };

  const getSkillIcon = (skill) => {
    const fallbackEmojis = {
      "Python": "🐍",
      "SQL": "🗄️",
      "PyTorch": "🔥",
      "Scikit-learn": "🔬",
      "Computer Vision": "👁️",
      "Neural Networks": "🧠",
      "LangChain": "⛓️",
      "RAG Systems": "🔗",
      "GPT Models": "🤖",
      "Vector Databases": "🔢",
      "Microsoft Azure": "☁️",
      "Docker": "🐳",
      "Kubernetes": "⚙️",
      "FastAPI": "⚡",
      "StarDog": "⭐",
      "RDF/SPARQL": "🕸️",
      "Ontologies": "🏗️"
    };

    return skill.icon ? (
      <div className="flex items-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-5 h-5 object-contain mr-3"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'inline';
          }}
        />
        <span className="text-lg mr-3 hidden">{fallbackEmojis[skill.name] || "💼"}</span>
      </div>
    ) : (
      <span className="text-lg mr-3">{fallbackEmojis[skill.name] || "💼"}</span>
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Core technologies and expertise areas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          {Object.entries(skills).map(([category, data], index) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <IconComponent className="text-white" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-2">
                  {data.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer"
                      onClick={() => {
                        const link = skillLinks[skill.name];
                        console.log('Clicking skill:', skill.name, 'Link:', link); // Debug log
                        if (link) {
                          window.open(link, '_blank', 'noopener,noreferrer');
                        }
                      }}
                    >
                      {getSkillIcon(skill)}
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                        {skill.name}
                      </span>
                      {skillLinks[skill.name] && (
                        <ExternalLink 
                          size={12} 
                          className="ml-auto text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" 
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center mb-6">
            <Award className="text-yellow-500 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        {cert.code}
                      </span>
                      <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-xs font-medium ml-2">
                        <Shield size={10} className="mr-1" />
                        Verified
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {cert.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
                
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View Documentation
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;