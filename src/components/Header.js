import React from 'react';

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <img
          src="/img/Paulo.portfolio.jpg"
          alt="Profile"
          className="w-28 h-28 object-cover rounded-full shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
          Paulo Victor Vilarins
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-800 dark:text-white sm:text-xl">
          Web3 Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-gray-600 dark:text-gray-400">
          Building the future of the web, one block at a time.
        </p>

        {/* Smooth Scroll Navigation */}
        <nav className="hidden lg:block mt-12">
          <ul className="flex flex-col gap-4">
            <li>
              <a className="group flex items-center py-2" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-blue-500 dark:group-hover:bg-blue-400"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-2" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-blue-500 dark:group-hover:bg-blue-400"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  Experience
                </span>
              </a>
            </li>
                        <li>
              <a className="group flex items-center py-2" href="#certifications">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-blue-500 dark:group-hover:bg-blue-400"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  Courses & Certifications
                </span>
              </a>
            </li>
                        <li>
              <a className="group flex items-center py-2" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-blue-500 dark:group-hover:bg-blue-400"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-8">
        <a href="https://github.com/duckrwx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/img/github-icon.png" alt="GitHub" className="w-7 h-7 transition-transform hover:scale-110" />
        </a>
        <a href="https://instagram.com/pv202x" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/img/instagram-icon.png" alt="Instagram" className="w-7 h-7 transition-transform hover:scale-110" />
        </a>
        <a href="https://linkedin.com/in/paulo-vilarins" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/img/linkedin-icon.png" alt="LinkedIn" className="w-7 h-7 transition-transform hover:scale-110" />
        </a>
      </div>
    </header>
   );
};

export default Header;
