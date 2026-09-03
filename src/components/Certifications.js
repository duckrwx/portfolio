import React from 'react';
import TechTags from './TechTags';
import { useLanguage } from '../LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();
  return (
    <section id="certifications" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8">
        {t.sections.certifications}
      </h3>

      <div className="flex flex-col gap-12">
        {t.certifications.map((cert, index) => (
          <div key={index} className="md:col-span-3">
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">
              {cert.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {cert.description}
            </p>
            <TechTags technologies={cert.tags} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
