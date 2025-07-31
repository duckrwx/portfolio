import React from 'react';

const projects = [
  {
    title: 'Sunest',
    description: 'Decentralized P2P marketplace for solar energy credits.',
    logo: '/img/cess-logo.png',
    link: 'https://github.com/duckrwx/sunest',
  },
  {
    title: 'Vitrine',
    description: 'Web3 platform where users transform their browsing data into an AI-segmented, anonymous persona, stored on the CESS network.',
    logo: '/img/nft-logo.jpg',
    link: 'https://github.com/duckrwx/vitrine-dapp', 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8">
        Projects
      </h3>
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-4 gap-4 transition-all duration-300 ease-in-out hover:!opacity-100 group-hover/list:opacity-50 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            <div className="md:col-span-1">
              <img src={project.logo} alt={`${project.title} Logo`} className="w-16 h-16 rounded-md border-2 border-gray-200 dark:border-gray-700" />
            </div>
            <div className="md:col-span-3">
              <h4 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
