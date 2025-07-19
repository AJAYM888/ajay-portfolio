import React, { useEffect } from 'react';
import { Brain, Code, Cloud, ArrowRight, MessageCircle } from 'lucide-react';

const HomePage = ({ setCurrentPage, isDarkMode }) => {
  useEffect(() => {
    // Smooth scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Main heading with improved typography */}
          <div className="mb-6 sm:mb-8 animate-on-scroll">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight mb-3 sm:mb-4 tracking-tight text-gray-900 dark:text-white text-center leading-tight">
              Ajay M
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          </div>
          
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-light tracking-wide animate-on-scroll text-gray-600 dark:text-gray-300 text-center px-2">
            Senior Software Engineer & Data Scientist
          </h2>
          
          <h3 className="text-sm xs:text-base sm:text-lg text-blue-600 dark:text-blue-400 mb-8 sm:mb-12 font-medium animate-on-scroll text-center px-2 leading-relaxed">
            Robert Bosch Automotive Electronics Pvt. Ltd
          </h3>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light animate-on-scroll text-gray-600 dark:text-gray-400 text-center px-4 sm:px-6">
            Transforming complex data challenges into intelligent solutions through 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> cutting-edge AI</span>, 
            <span className="text-purple-600 dark:text-purple-400 font-medium"> machine learning</span>, and 
            <span className="text-green-600 dark:text-green-400 font-medium"> generative AI</span> technologies
          </p>
          
          {/* Clean CTA buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-center mb-8 sm:mb-12 animate-on-scroll px-4">
            <button
              onClick={() => setCurrentPage('projects')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-500 flex items-center justify-center gap-2 border hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm sm:text-base"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-xl font-medium text-white hover:bg-blue-700 transition-all duration-500 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              <MessageCircle size={16} />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Expertise Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-light mb-6 text-gray-900 dark:text-white">
              Expertise
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto font-light text-gray-600 dark:text-gray-400">
              Specializing in building intelligent systems that solve real-world problems 
              through advanced AI and machine learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group animate-on-scroll">
              <div className="p-10 rounded-3xl border transition-all duration-500 hover:scale-105 hover:rotate-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-900 dark:text-white">
                  AI & Machine Learning
                </h3>
                <p className="leading-relaxed mb-8 font-light text-gray-600 dark:text-gray-300">
                  Developing sophisticated AI models for computer vision, NLP, and predictive analytics 
                  that drive measurable business value.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-light border border-blue-200 dark:border-blue-800">
                    PyTorch
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-light border border-blue-200 dark:border-blue-800">
                    Computer Vision
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-light border border-blue-200 dark:border-blue-800">
                    Deep Learning
                  </span>
                </div>
              </div>
            </div>
            
            <div className="group animate-on-scroll">
              <div className="p-10 rounded-3xl border transition-all duration-500 hover:scale-105 hover:-rotate-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-900 dark:text-white">
                  Generative AI
                </h3>
                <p className="leading-relaxed mb-8 font-light text-gray-600 dark:text-gray-300">
                  Building next-generation conversational AI and RAG systems using cutting-edge 
                  language models and vector databases.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-light border border-purple-200 dark:border-purple-800">
                    LangChain
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-light border border-purple-200 dark:border-purple-800">
                    RAG Systems
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-light border border-purple-200 dark:border-purple-800">
                    LLMs
                  </span>
                </div>
              </div>
            </div>
            
            <div className="group animate-on-scroll">
              <div className="p-10 rounded-3xl border transition-all duration-500 hover:scale-105 hover:rotate-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-900 dark:text-white">
                  Cloud & MLOps
                </h3>
                <p className="leading-relaxed mb-8 font-light text-gray-600 dark:text-gray-300">
                  Deploying scalable AI solutions on Azure with robust MLOps practices for 
                  continuous integration and deployment.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-light border border-green-200 dark:border-green-800">
                    Azure
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-light border border-green-200 dark:border-green-800">
                    Kubernetes
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-light border border-green-200 dark:border-green-800">
                    MLOps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;