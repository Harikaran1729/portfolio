'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 border border-blue-400 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-blue-600 animate-spin-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`lg:text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase animate-fade-in-up">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up delay-200">
            Junior at NIT Trichy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in-up delay-400">
            Third-year Electronics and Communication Engineering student at NIT Trichy, exploring the fascinating world of digital circuits, embedded systems, and signal processing. Eager to learn and contribute to innovative electronics projects.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Circuit Design",
                description: "Working extensively with digital and analog circuits, focusing on FPGA-based system design and implementation. Experienced in developing electronic systems from concept to completion."
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "FPGA Development",
                description: "Currently working with AHITv2 toolchain and AJIT Processor development. Passionate about FPGA-based system design and RTL development."
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "Achievements",
                description: "Secured All India Rank 4 in e-Yantra Robotics Competition 2024-25. Specialized in implementing complex digital systems and FPGA-based solutions."
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                ),
                title: "Problem Solver",
                description: "Strong analytical and debugging skills. Experienced in troubleshooting complex hardware issues and optimizing electronic systems."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`relative group transform transition-all duration-700 hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse">
                    {item.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </dd>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-lg transition-all duration-300 -z-10 group-hover:shadow-lg group-hover:bg-blue-50/30"></div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
