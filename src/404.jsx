import React from 'react';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">404</h1>
        <h2 className="text-3xl md:text-4xl font-light">Page Not Found</h2>
        <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center text-lg font-light hover:opacity-70 transition-opacity group"
        >
          Return Home
          <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
