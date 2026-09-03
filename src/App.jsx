import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

const LanguageToggle = () => {
  const { toggle, t } = useLanguage();
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggle}
        aria-label="Switch language"
        className="px-3 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300"
      >
        {t.switchTo}
      </button>
    </div>
  );
};

function App() {
  // Theme is fixed to dark; the toggle now switches language.
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LanguageProvider>
      <div className="dark:bg-gray-900 dark:text-gray-300 min-h-screen">
        <LanguageToggle />

        <div className="lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16">
          {/* Left Fixed Section (Header) */}
          <Header />

          {/* Right Scrolling Section */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Certifications />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
