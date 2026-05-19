'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationType } from './translations';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Read language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('fetch-lang') as Language;
    if (savedLang === 'en' || savedLang === 'ar') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLang);
    } else {
      // Auto-detect browser language if arabic
      const browserLang = navigator.language || '';
      if (browserLang.startsWith('ar')) {
        setLanguageState('ar');
      }
    }
  }, []);

  // Update HTML elements when language changes
  useEffect(() => {
    const root = document.documentElement;
    if (language === 'ar') {
      root.setAttribute('dir', 'rtl');
      root.setAttribute('lang', 'ar');
      root.classList.add('rtl-active');
      root.classList.remove('ltr-active');
    } else {
      root.setAttribute('dir', 'ltr');
      root.setAttribute('lang', 'en');
      root.classList.add('ltr-active');
      root.classList.remove('rtl-active');
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('fetch-lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'ar' : 'en';
    setLanguage(nextLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
