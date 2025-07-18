import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, User, MessageSquare, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS Configuration - Replace with your actual keys
  const EMAILJS_CONFIG = {
    publicKey: 'ITggx9bL99WQCj_go',     // Replace with your Public Key (user_xxxxx)
    serviceId: 'service_qx4ymjg',     // Replace with your Service ID (service_xxxxx)
    templateId: 'template_gx6vz8l'    // Replace with your Template ID (template_xxxxx)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.publicKey);
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ajaymys2011@gmail.com', // Your email address
        reply_to: formData.email
      };

      // Send email via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Auto-clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }
  };

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Me
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get in touch for opportunities, collaborations, or just to say hello
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-3xl border backdrop-blur-xl animate-on-scroll ${
            isDarkMode ? 'bg-gray-900/40 border-gray-700/50' : 'bg-white/40 border-gray-200/50 shadow-xl'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Send Message
            </h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center">
                  <Send size={16} className="mr-2" />
                  <div>
                    <p className="font-semibold">Message sent successfully! 🎉</p>
                    <p className="text-sm mt-1">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center">
                  <AlertCircle size={16} className="mr-2" />
                  <div>
                    <p className="font-semibold">Failed to send message 😞</p>
                    <p className="text-sm mt-1">Please try again or email me directly at ajaymys2011@gmail.com</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Configuration Warning */}
            {(EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY' || 
              EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || 
              EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID') && (
              <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-yellow-400 backdrop-blur-sm">
                <div className="flex items-center">
                  <AlertCircle size={16} className="mr-2" />
                  <div>
                    <p className="font-semibold">⚠️ EmailJS Not Configured</p>
                    <p className="text-sm mt-1">Replace the placeholder keys with your actual EmailJS keys to enable the contact form.</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <User size={16} className="inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400'
                        : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Mail size={16} className="inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400'
                        : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <MessageSquare size={16} className="inline mr-2" />
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white transition-all duration-500 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl backdrop-blur-lg flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-blue-500/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              
              <p className={`text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                * Required fields. Your information is safe and will only be used to respond to your inquiry.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`p-8 rounded-3xl border backdrop-blur-xl animate-on-scroll ${
            isDarkMode ? 'bg-gray-900/40 border-gray-700/50' : 'bg-white/40 border-gray-200/50 shadow-xl'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <a 
                href="mailto:ajaymys2011@gmail.com" 
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm group ${
                  isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/60' : 'bg-gray-50/50 hover:bg-gray-100/60'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-red-500 transition-colors`}>
                    ajaymys2011@gmail.com
                  </p>
                </div>
              </a>
              
              <a 
                href="tel:+919611430812" 
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm group ${
                  isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/60' : 'bg-gray-50/50 hover:bg-gray-100/60'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-green-500 transition-colors`}>
                    +91 961-143-0812
                  </p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/ajaym10" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm group ${
                  isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/60' : 'bg-gray-50/50 hover:bg-gray-100/60'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-blue-500 transition-colors`}>
                    Connect with me
                  </p>
                </div>
              </a>
              
              <div className={`flex items-center p-4 rounded-xl backdrop-blur-sm ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Response Time
              </h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Usually responds within 24 hours
                </span>
              </div>
            </div>
            
            <div className={`mt-6 p-4 rounded-xl border ${
              isDarkMode 
                ? 'bg-blue-900/20 border-blue-700/30' 
                : 'bg-blue-50/50 border-blue-200/30'
            }`}>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                💡 Quick Tips:
              </h4>
              <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                <li>• Be specific about your topic</li>
                <li>• Feel free to share your LinkedIn or portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;