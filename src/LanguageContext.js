import React, { createContext, useContext, useState } from 'react';
import { content } from './content';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const toggle = () => setLang((l) => (l === 'en' ? 'pt' : 'en'));
  const value = { lang, setLang, toggle, t: content[lang] };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
