'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      
      // Reset success status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Harikaran1729',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/harikaran277',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-1 bg-blue-500 animate-trace"></div>
        <div className="absolute top-40 right-32 w-1 h-48 bg-green-500 animate-trace-vertical"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-purple-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-300 rounded-full animate-float"></div>
        
        {/* Circuit nodes */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase animate-fade-in-up">Contact</h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl animate-fade-in-up delay-200">
            Let's Innovate Together
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto animate-fade-in-up delay-400">
            Interested in electronics projects, circuit design, or hardware solutions? Let's discuss how we can collaborate!
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-700 text-green-300 rounded-lg flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {errorMessage || 'Something went wrong. Please try again.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-hover:text-blue-400">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-800 hover:border-gray-600"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-hover:text-blue-400">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-800 hover:border-gray-600"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"></div>
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className={`group transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-hover:text-blue-400">
                Subject
              </label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-800 hover:border-gray-600"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="circuit-design">Circuit Design</option>
                  <option value="embedded-systems">Embedded Systems</option>
                  <option value="pcb-design">PCB Design</option>
                  <option value="project-collaboration">Project Collaboration</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"></div>
              </div>
            </div>

            {/* Message Field */}
            <div className={`group transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-hover:text-blue-400">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="block w-full px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-800 hover:border-gray-600 placeholder-gray-500 resize-none"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"></div>
              </div>
            </div>

            {/* Submit Button */}
            <div className={`transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative flex justify-center items-center py-4 px-6 rounded-lg border border-blue-500/30 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400 group-disabled:opacity-50 group-disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <span className="flex items-center text-white font-medium">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="text-white font-medium text-lg group-hover:scale-105 transition-transform duration-200">
                      Send Message
                    </span>
                  )}
                </div>
              </button>
            </div>
          </form>

          <div className={`mt-12 pt-8 border-t border-gray-700/50 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Areas of Interest */}
              <div className="group">
                <h3 className="text-lg font-medium text-gray-200 mb-4 flex items-center transition-colors duration-200 group-hover:text-blue-400">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Areas of Interest
                </h3>
                <ul className="space-y-3">
                  {['Digital Electronics', 'Analog Electronics', 'FPGA', 'Microcontrollers', 'IoT Systems'].map((item, index) => (
                    <li 
                      key={item}
                      className={`text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 flex items-center group/item delay-${(index + 1) * 200}`}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-60 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="group">
                <h3 className="text-lg font-medium text-gray-200 mb-4 flex items-center transition-colors duration-200 group-hover:text-blue-400">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Details
                </h3>
                <dl className="space-y-6">
                  <div className="group/detail hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200">
                    <dt className="text-sm font-medium text-gray-400 group-hover/detail:text-blue-400 transition-colors duration-200">Email</dt>
                    <dd className="mt-1 text-sm text-gray-200">harikaran277@gmail.com</dd>
                  </div>
                  <div className="group/detail hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200">
                    <dt className="text-sm font-medium text-gray-400 group-hover/detail:text-blue-400 transition-colors duration-200">Location</dt>
                    <dd className="mt-1 text-sm text-gray-200">Vellore, India</dd>
                  </div>
                  <div className="group/detail hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200">
                    <dt className="text-sm font-medium text-gray-400 group-hover/detail:text-blue-400 transition-colors duration-200">Connect</dt>
                    <dd className="mt-3 flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative group/social p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 delay-${index * 100}`}
                        >
                          <span className="sr-only">{link.name}</span>
                          <div className="text-gray-400 group-hover/social:text-blue-400 transition-colors duration-200">
                            {link.icon}
                          </div>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
