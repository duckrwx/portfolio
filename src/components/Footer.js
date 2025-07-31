import React from 'react';
import TechTags from './TechTags';

const Footer = () => {

  return (
    <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="mb-8">
        <a
          className="inline-block px-4 py-2 text-sm font-medium rounded-full border border-blue-400 text-blue-400 bg-transparent transition-all duration-200 hover:bg-blue-400 hover:bg-opacity-10 hover:scale-105"
          href="/cv/PauloVictorCV.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
