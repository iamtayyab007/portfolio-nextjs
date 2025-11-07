'use client';

import React from 'react';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-pink-50 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* <svg
                  className="w-16 h-16 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg> */}
                <img src="/profile-latest.jpeg" alt="profile" width={128} height={128} className="rounded-full" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Muhammad Tayyab
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack (MERN) Developer & Wordpress Developer
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, innovative design, and solving complex problems 
            through technology.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
               <Button
              size="lg"
             
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-700"
            >
              Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;