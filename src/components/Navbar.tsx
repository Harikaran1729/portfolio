'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black shadow-xl' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold transition-colors duration-500 ${
                scrolled ? 'text-white' : 'text-gray-900'
              }`}>
                Portfolio
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-500 ${
                  scrolled ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition duration-200 group-hover:scale-x-100 ${
                  scrolled ? 'bg-white' : 'bg-gray-900'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-500 ${
                scrolled ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 origin-top ${
            isMenuOpen 
              ? 'opacity-100 scale-y-100 transform translate-y-0' 
              : 'opacity-0 scale-y-95 transform -translate-y-2 pointer-events-none'
          }`}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm rounded-lg shadow-xl mt-2 transition-all duration-500 ${
            scrolled ? 'bg-black/95 border border-zinc-900' : 'bg-white/95 border border-gray-200'
          }`}>
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-500 ${
                  scrolled 
                    ? 'text-white/90 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
