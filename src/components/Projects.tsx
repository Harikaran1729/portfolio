'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack?: string[];
  tools?: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "FPGA-based Digital Signal Processor",
      description: "Implemented a complete DSP system on FPGA using VHDL, featuring FIR/IIR filters, FFT processing, and real-time audio processing capabilities.",
      image: "/project1.svg",
      tags: ["VHDL", "FPGA", "DSP", "Quartus"],
      techStack: ["Digital Signal Processing", "Real-time Processing", "Filter Design"],
      tools: ["Quartus Prime", "ModelSim", "MATLAB"],
      github: "https://github.com/Harikaran1729/fpga-dsp",
      demo: "#"
    },
    {
      id: 2,
      title: "Microcontroller-based Home Automation", 
      description: "Designed and developed a comprehensive home automation system using ESP32, integrating IoT capabilities, sensor networks, and mobile app control.",
      image: "/project2.svg",
      tags: ["ESP32", "IoT", "Sensors", "Mobile App"],
      techStack: ["Wireless Communication", "Sensor Integration", "Mobile Development"],
      tools: ["Arduino IDE", "React Native", "Firebase"],
      github: "https://github.com/Harikaran1729/home-automation",
      demo: "#"
    },
    {
      id: 3,
      title: "Analog Circuit Simulation Tool",
      description: "Created a web-based tool for analog circuit simulation and analysis, featuring SPICE-like capabilities and interactive circuit visualization.",
      image: "/project3.svg",
      tags: ["Circuit Analysis", "Web App", "Simulation", "JavaScript"],
      techStack: ["Circuit Simulation", "Mathematical Modeling", "Interactive Visualization"],
      tools: ["JavaScript", "D3.js", "WebGL"],
      github: "https://github.com/Harikaran1729/circuit-sim",
      demo: "#"
    }
  ];

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

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-1 bg-blue-500 animate-trace"></div>
        <div className="absolute top-40 right-32 w-1 h-64 bg-green-500 animate-trace-vertical"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-purple-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300 rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase animate-fade-in-up">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up delay-200">
            Featured Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto animate-fade-in-up delay-400">
            A selection of my electronics and embedded systems projects, showcasing practical applications of digital and analog circuit design.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-12 rotate-1'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
              
              <div className="relative bg-white rounded-xl">
                {/* Image container with overlay effects */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-white/90 text-gray-900 text-sm font-medium rounded-md hover:bg-white transition-all duration-200 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Circuit-like decoration */}
                  <div className={`absolute top-2 right-2 w-6 h-6 border-2 border-white rounded-full transition-all duration-300 ${
                    hoveredProject === project.id ? 'animate-ping' : ''
                  }`}>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-110 ${
                          hoveredProject === project.id 
                            ? 'bg-blue-100 text-blue-800 animate-pulse' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, index) => (
                          <span 
                            key={index} 
                            className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tools */}
                  {project.tools && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, index) => (
                          <span 
                            key={index} 
                            className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded hover:bg-green-100 transition-colors duration-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative circuit traces */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
