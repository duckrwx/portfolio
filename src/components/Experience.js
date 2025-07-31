import React from 'react';
import TechTags from './TechTags';

const experience = [
  {
    title: 'Anatel',
    description: 'Manage records and configure tools such as Zabbix, Grafana. Maintained weekly communication with ANATEL state-level superintendencies, supporting coordination, data sharing, and resolution of regional network demands.',
    link: 'https://www.gov.br/anatel/pt-br',
    time: '2025 - Present',
    tags: ['Communication', 'DevOps', 'Monitoring'],
  },
  {
    title: 'Telebras',
    description: 'Manage records and configure tools such as Centreon, Cacti, Zabbix, Grafana, FortiGate (FortiManager and FortiAnalyzer). Monitor dashboards and logs to ensure system health and performance.',
    link: 'https://www.telebras.com.br/',
    time: '2022 - 2024',
    tags: ['DevOps', 'Monitoring', 'Network'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8">
        Experience
      </h3>

      <div className="flex flex-col gap-12">
        {experience.map((exp, index) => (
          <a
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-4 gap-4 transition-all duration-300 ease-in-out hover:!opacity-100 group-hover/list:opacity-50 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            <div className="md:col-span-1">
              <h4 className="text-sm text-gray-500 dark:text-gray-400">{exp.time}</h4>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
                {exp.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {exp.description}
              </p>
              <TechTags technologies={exp.tags} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
