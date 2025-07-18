import React from 'react';
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react';

// Local blog posts data since we removed it from portfolioData
const blogPosts = [
  {
    title: "Building RAG Systems: A Complete Guide",
    excerpt: "Learn how to build production-ready Retrieval-Augmented Generation systems with practical examples and best practices.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["RAG", "LangChain", "Vector Databases"],
    views: 1500
  },
  {
    title: "MLOps Best Practices for AI Model Deployment",
    excerpt: "Comprehensive guide to deploying and monitoring machine learning models in production environments using modern MLOps practices.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["MLOps", "Azure", "Kubernetes"],
    views: 2300
  },
  {
    title: "Computer Vision in Manufacturing: Real-world Applications",
    excerpt: "Exploring how computer vision transforms manufacturing processes with automated quality control and predictive maintenance.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Computer Vision", "Manufacturing", "PyTorch"],
    views: 1800
  }
];

const BlogPage = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights and learnings from my journey in AI, machine learning, and software engineering
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{post.date}</span>
                <Clock size={16} className="mr-2" />
                <span className="mr-4">{post.readTime}</span>
                <Eye size={16} className="mr-2" />
                <span>{post.views} views</span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              More Content Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm working on more in-depth articles about AI, machine learning, and software engineering. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;