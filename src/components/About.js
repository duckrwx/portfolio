import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {t.about.map((paragraph, index) => (
        <p key={index} className="leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default About;
