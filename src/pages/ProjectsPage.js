import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Updated personal projects data with only your two completed projects
const personalProjects = [
  {
    title: "Image Classification Using PyTorch",
    description: "A comprehensive PyTorch-based project for image classification that demonstrates how to build, train, and deploy deep learning models. Features a complete pipeline from data collection to web deployment with REST API and user-friendly interface.",
    status: "Completed",
    github: "https://github.com/AJAYM888/ImageClassificationUsingPyTorch",
    demo: "https://github.com/AJAYM888/ImageClassificationUsingPyTorch",
    features: [
      "Deep Learning with PyTorch for neural network training",
      "Automated data collection and preprocessing tools",
      "Web interface with drag-and-drop image upload",
      "REST API for programmatic model access",
      "Comprehensive visualization of training metrics",
      "Real-time prediction with confidence scores",
      "Configurable CNN architecture",
      "Model persistence and checkpointing"
    ],
    technologies: [
      "PyTorch",
      "Python",
      "Flask",
      "Computer Vision",
      "Deep Learning",
      "REST API",
      "HTML/CSS",
      "Matplotlib",
      "PIL/Pillow",
      "Scikit-learn"
    ],
    metrics: {
      accuracy: "95%+ Training, 90%+ Validation",
      inference: "<100ms per image",
      version: "1.0.0"
    }
  },
  {
    title: "AI Steering Angle Predictor",
    description: "A full-stack end-to-end deep learning system for autonomous vehicle steering prediction using NVIDIA's DAVE-2 architecture. Features a complete web application with React frontend, Flask API backend, and PyTorch deep learning model that learns to drive by mapping raw camera images directly to steering commands.",
    status: "Completed",
    github: "https://github.com/AJAYM888/SteeringAnglePredictionUsingPytorch",
    demo: "https://github.com/AJAYM888/SteeringAnglePredictionUsingPytorch",
    features: [
      "Full-Stack Web Application with modern React frontend",
      "Real-Time Inference with 23ms prediction time",
      "Interactive Dashboard with model performance metrics",
      "Video Processing with frame-by-frame analysis",
      "Drag-and-drop interface for road image analysis",
      "NVIDIA DAVE-2 CNN architecture implementation",
      "RESTful API with comprehensive error handling",
      "Live steering wheel animation visualization"
    ],
    technologies: [
      "PyTorch",
      "React",
      "Flask",
      "OpenCV",
      "NVIDIA DAVE-2",
      "Computer Vision",
      "Autonomous Driving",
      "Deep Learning",
      "REST API",
      "Framer Motion"
    ],
    metrics: {
      accuracy: "97.3% with 7.2° average error",
      inference: "23ms (43+ FPS)",
      architecture: "NVIDIA DAVE-2 with 250K parameters"
    },
    performance: {
      straightRoads: "0.5-2° error",
      gentleCurves: "3-8° error",
      sharpTurns: "10-20° error",
      apiResponse: "<200ms",
      frontendLoad: "<2s"
    }
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Personal Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative projects showcasing expertise in AI, machine learning, and cutting-edge technology solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {personalProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-600 text-white' :
                    project.status === 'In Development' ? 'bg-yellow-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} className="text-gray-600 dark:text-gray-400" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-600 dark:text-gray-400" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Special metrics section for both projects */}
                {project.metrics && (
                  <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Performance Metrics</h4>
                    <div className="space-y-1 text-sm">
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Accuracy:</span> {project.metrics.accuracy}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Inference:</span> {project.metrics.inference}
                      </div>
                      {project.metrics.version && (
                        <div className="text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Version:</span> {project.metrics.version}
                        </div>
                      )}
                      {project.metrics.architecture && (
                        <div className="text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Architecture:</span> {project.metrics.architecture}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional performance details for Steering Angle Predictor */}
                {project.performance && (
                  <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Detailed Performance</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Straight Roads:</span> {project.performance.straightRoads}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Gentle Curves:</span> {project.performance.gentleCurves}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Sharp Turns:</span> {project.performance.sharpTurns}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">API Response:</span> {project.performance.apiResponse}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 ml-5">
                        +{project.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-600 text-white rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-500 text-white rounded text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;