import React from 'react';

const projects = [
  {
    title: 'Vitrine',
    description: 'Web3 platform where users transform their Browse data into an AI-segmented, anonymous persona, stored on the CESS network.',
    logo: '/img/sunest.gif', 
    link: 'https://github.com/duckrwx/vitrine-dapp',
  },
  {
    title: 'Sunest',
    description: 'Decentralized P2P marketplace for solar energy credits.',
    logo: '/img/cess-logo.png',  
    link: 'https://github.com/duckrwx/sunest',
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
            // Layout alterado para ser uma coluna única
            className="group flex flex-col gap-4 transition-all duration-300 ease-in-out hover:!opacity-100 group-hover/list:opacity-50 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            {/* O GIF agora ocupa a largura total */}
            <div className="w-full">
              <img
                src={project.logo}
                alt={`${project.title} Demo`}
                // Usando a classe aspect-video para manter a proporção e w-full para ocupar a largura
                className="w-full h-auto aspect-video object-cover rounded-md border-2 border-gray-200 dark:border-gray-700"
              />
            </div>
            
            <div className="flex-1">
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
