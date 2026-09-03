import React from 'react';
import TechTags from './TechTags';

const projects = [
  {
    title: 'CFTV-BTC — Verifiable Video Custody on Bitcoin',
    description: 'A verifiable custody chain for CCTV footage anchored on Bitcoin: video is segmented, hashed (SHA-256), packaged into signed BagIt manifests, and later verified against an on-chain anchor to prove integrity and detect tampering. Academic project (UnB) and the likely basis for my final thesis. Published article: cftv.vilarins.cloud',
    link: 'https://github.com/duckrwx/cftv-onchain',
    tags: ['Bitcoin', 'OpenTimestamps', 'Python', 'Digital Forensics', 'SHA-256'],
  },
  {
    title: 'Polka-Scope',
    description: 'Smart P2P monitoring and slash-prevention for Polkadot/Substrate validators, written in Rust and formally verified with TLA+. It tracks peer connectivity and network health to catch issues before they cause slashing events — bridging network engineering with Web3 infrastructure.',
    link: 'https://github.com/duckrwx/polka-scope',
    tags: ['Rust', 'Polkadot', 'TLA+', 'Formal Verification', 'P2P'],
  },
  {
    title: 'Guardian Gateway',
    description: 'A sovereign-identity gateway for parental authorization built on Brazil\'s Gov.br OIDC. Features an O(1) state machine, a hash-chained audit log for non-repudiation, and a REST API for integration with games and digital platforms.',
    link: 'https://github.com/duckrwx/guardian-gateway',
    tags: ['Identity', 'OIDC', 'Gov.br', 'Rust', 'REST API'],
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
            className="group flex flex-col gap-2 transition-all duration-300 ease-in-out hover:!opacity-100 group-hover/list:opacity-50 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            <h4 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
              {project.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {project.description}
            </p>
            <TechTags technologies={project.tags} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
