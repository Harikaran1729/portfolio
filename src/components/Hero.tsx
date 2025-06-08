'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingState, setTypingState] = useState<'typing' | 'deleting' | 'paused'>('paused');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textCycle = [
    'Electronics Enthusiast',
    'Student',
    'Digital Design Engineer'
  ];
  
  const typingDelay = 80;
  const deleteDelay = 40;
  const pauseDelay = 1800;

  useEffect(() => {
    setMounted(true);

    let currentIndex = 0;
    let animationRunning = true;

    const animateText = async () => {
      while (animationRunning) {
        const currentText = textCycle[currentIndex];
        
        // Type out text
        setTypingState('typing');
        for (let i = 0; i <= currentText.length && animationRunning; i++) {
          setTypingText(currentText.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, typingDelay));
        }
        
        if (!animationRunning) break;
        
        // Pause at full text
        setTypingState('paused');
        await new Promise(resolve => setTimeout(resolve, pauseDelay));
        
        if (!animationRunning) break;
        
        // Delete text
        setTypingState('deleting');
        for (let i = currentText.length; i >= 0 && animationRunning; i--) {
          setTypingText(currentText.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, deleteDelay));
        }
        
        if (!animationRunning) break;
        
        // Brief pause before next text
        setTypingState('paused');
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Move to next text in cycle
        currentIndex = (currentIndex + 1) % textCycle.length;
        setCurrentTextIndex(currentIndex);
      }
    };

    const timeout = setTimeout(() => animateText(), 1000);
    
    return () => {
      animationRunning = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ccd 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating electronic components */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const componentType = i % 5; // Creates 5 different types of components
          return (
            <div
              key={i}
              className="absolute component-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * -4}s`
              }}
            >
              {componentType === 0 ? (
                // Resistor
                <div className="w-8 h-3 bg-blue-400/20 rounded-lg 
                  before:content-[''] before:absolute before:w-2 before:h-4 before:bg-blue-400/20 before:-top-0.5 before:left-0
                  after:content-[''] after:absolute after:w-2 after:h-4 after:bg-blue-400/20 after:-top-0.5 after:right-0"
                />
              ) : componentType === 1 ? (
                // Capacitor
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-blue-400/20" />
                  <div className="w-4 h-4 border-2 border-blue-400/20 rounded-full mx-1" />
                  <div className="w-0.5 h-full bg-blue-400/20" />
                </div>
              ) : componentType === 2 ? (
                // IC Chip
                <div className="w-8 h-8 bg-blue-400/20 rounded-sm flex flex-col justify-between p-1">
                  <div className="flex justify-between">
                    <div className="w-1 h-1 bg-blue-300/30 rounded-full" />
                    <div className="w-1 h-1 bg-blue-300/30 rounded-full" />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-1 h-1 bg-blue-300/30 rounded-full" />
                    <div className="w-1 h-1 bg-blue-300/30 rounded-full" />
                  </div>
                </div>
              ) : componentType === 3 ? (
                // Circuit Trace
                <div className="w-12 h-12">
                  <div className="w-full h-0.5 bg-blue-400/20 rotate-45 translate-y-6" />
                  <div className="w-0.5 h-full bg-blue-400/20 absolute top-0 left-6" />
                </div>
              ) : (
                // LED
                <div className="w-3 h-3 bg-blue-400/40 rounded-full 
                  animate-pulse shadow-lg shadow-blue-400/20
                  before:content-[''] before:absolute before:w-4 before:h-0.5 
                  before:bg-blue-400/20 before:left-3 before:top-1.5"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 xl:gap-28 min-h-[600px] lg:min-h-[500px]">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl relative leading-tight">
              <span className="block hover:scale-105 transition-transform duration-300">Hi, I'm Harikaran</span>{' '}
              <span className="block text-blue-600 relative mt-4 lg:mt-2">
                {/* Grid container to prevent layout shift - reserves space for longest text */}
                <div className="grid grid-cols-1 justify-center lg:justify-start min-h-[1.4em]">
                  {/* Invisible spacer for longest text to reserve space */}
                  <span className="invisible col-start-1 row-start-1 font-extrabold whitespace-nowrap">Digital Design Engineer</span>
                  {/* Visible typing text overlaid on top */}
                  <div className="col-start-1 row-start-1 flex items-start justify-center lg:justify-start typing-container">
                    <span className="typing-text">{typingText}</span>
                    <span className={`typing-cursor ${typingState}`}>|</span>
                  </div>
                </div>
                <span className="absolute -inset-1 bg-blue-100/30 blur-xl animate-pulse"></span>
              </span>
            </h1>
            <p className="mt-8 lg:mt-6 max-w-lg mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:text-xl leading-relaxed">
              Passionate about digital and analog electronics, with a keen interest in FPGA development and circuit design.
            </p>
            <div className="mt-10 lg:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 border-2 border-blue-600 hover:border-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 order-1 lg:order-2 lg:ml-8">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-20 scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse opacity-15 scale-125 animation-delay-1000"></div>
              
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/profile-temp.svg"
                  alt="Harikaran - Electronics Engineer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Overlay with circuit pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating tech icons */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Circuit nodes */}
                  <div className="absolute top-4 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
                </div>
              </div>

              {/* Decorative circuit elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-400 rounded transform rotate-45 animate-spin-slow opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce-gentle"></div>
              
              {/* Technical skills badges floating around */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 z-10">
                <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce-gentle whitespace-nowrap">
                  FPGA
                </div>
              </div>
              <div className="absolute top-1/2 -right-16 lg:-right-20 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 z-10">
                <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce-gentle whitespace-nowrap">
                  PCB Design
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-600 z-10">
                <div className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce-gentle whitespace-nowrap">
                  Embedded
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      {mounted && (
        <>
          {/* Circuit board traces */}
          <div className="absolute top-1/4 left-1/4 w-72 h-1 bg-blue-300/50 rounded-full animate-trace"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-72 bg-cyan-300/50 rounded-full animate-trace-vertical"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-1 bg-sky-300/50 rounded-full animate-trace rotate-45"></div>
          
          {/* Circuit nodes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full circuit-node"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-400/30 rounded-full circuit-node animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-sky-400/30 rounded-full circuit-node animation-delay-4000"></div>
        </>
      )}
    </section>
  );
}
