'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean}>({});

  const skills = {
    'Digital Electronics': [
      { name: 'FPGA Development', level: 70 },
      { name: 'VHDL/Verilog', level: 65 },
      { name: 'Digital Signal Processing', level: 60 },
      { name: 'Microcontrollers', level: 75 }
    ],
    'Analog Electronics': [
      { name: 'Circuit Design', level: 70 },
      { name: 'PCB Layout', level: 65 },
      { name: 'Signal Analysis', level: 60 },
      { name: 'Power Electronics', level: 55 }
    ],
    'Tools & Software': [
      { name: 'Quartus Prime', level: 65 },
      { name: 'ModelSim', level: 60 },
      { name: 'Git', level: 70 },
      { name: 'GitHub Copilot', level: 65 },
      { name: 'LTspice', level: 70 },
      { name: 'Oscilloscope', level: 75 }
    ]
  };

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start animating skill bars with delays
          setTimeout(() => {
            Object.keys(skills).forEach((category, categoryIndex) => {
              skills[category as keyof typeof skills].forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [`${category}-${skill.name}`]: true
                  }));
                }, (categoryIndex * 500) + (skillIndex * 100));
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-1 bg-blue-500 animate-trace"></div>
        <div className="absolute top-20 right-20 w-1 h-40 bg-green-500 animate-trace-vertical"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 border-4 border-blue-400 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-300 rounded-lg animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase animate-fade-in-up">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up delay-200">
            Technical Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto animate-fade-in-up delay-400">
            A comprehensive overview of my electronics engineering skills and proficiencies.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <div 
              key={category} 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 group relative overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + categoryIndex * 200}ms` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-4 relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                {category}
              </h3>
              <div className="space-y-4 relative z-10">
                {categorySkills.map((skill, index) => {
                  const skillKey = `${category}-${skill.name}`;
                  const isAnimated = animatedSkills[skillKey];
                  
                  return (
                    <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className={`text-sm text-gray-500 font-mono transition-all duration-300 ${
                          isAnimated ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 group-hover:bg-gray-300 transition-colors duration-300">
                        <div
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out relative ${
                            isAnimated ? 'animate-pulse-slow' : ''
                          }`}
                          style={{ 
                            width: isAnimated ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-slide-right"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
