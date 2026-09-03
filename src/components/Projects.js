import React from 'react';
import TechTags from './TechTags';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8">
        {t.sections.projects}
      </h3>
      <div className="flex flex-col gap-12">
        {t.projects.map((project, index) => (
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
