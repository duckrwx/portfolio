import React, { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans dark:bg-gray-900 dark:text-white">
      {/* Toggle Button - Top Right */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* Left Section */}
      <div className={`w-full md:w-1/3 flex flex-col items-center justify-center p-8 pt-20 ${darkMode ? 'bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-800' : 'bg-gradient-to-tr from-green-400 to-blue-700'} text-white`}>
        <img
          src="/img/Paulo.portfolio.jpg"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold">Paulo Victor Vilarins</h1>
        <p className="text-sm text-gray-200">Web3 Developer</p>

        <div className="flex gap-4 mt-6">
          <a href="https://github.com/duckrwx" target="_blank" rel="noopener noreferrer">
            <img src="/img/github-icon.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/pv202x" target="_blank" rel="noopener noreferrer">
            <img src="/img/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/paulo-vilarins" target="_blank" rel="noopener noreferrer">
            <img src="/img/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 pt-24">
        <div className="space-y-8">
          <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100">
            I am Paulo Victor da Costa Vilarins, a developer passionate about blockchain architecture and dedicated to building the future of Web3. My journey began at the University of Brasília, where I learned from Professor Dr. Cláudia Barenco and developers from CESS.
            <br /><br />
            This experience gave me a deep understanding of the technology's potential. While amazed by CESS's decentralized storage solution, I grew concerned about the energy resources required to keep nodes running. This inspired my first project, Sunest, a decentralized P2P marketplace for members of an energy community to securely trade solar energy credits.
            <br /><br />
            Building on this experience, I am currently an intern at Anatel, where I am helping to implement a private blockchain to manage company assets as NFTs. My focus is on creating innovative, secure solutions, and my hobby has become exploring how Web3 can be used to make everyday life easier.
          </p>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Projects</h4>

            <div className="flex items-start gap-4 mb-6">
              <img src="/img/cess-logo.png" alt="Sununest Logo" className="w-10 h-10" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Sunest</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Decentralized P2P marketplace for solar energy credits.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src="/img/nft-logo.jpg" alt="Vitrine Logo" className="w-10 h-10" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Vitrine</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Web3 platform where users transform their browsing data and interests into an AI-segmented, anonymous persona, stored decentrally on the CESS network.</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              className="inline-block bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 dark:text-blue-300 px-4 py-2 rounded shadow text-sm font-bold uppercase"
              href="/cv/PauloVictorCV.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
