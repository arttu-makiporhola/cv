'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { Language, translations, Translations } from '../i18n/translations';

type LanguageContextType = {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | React.ReactNode;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language;
    const browserLang = navigator.language.toLowerCase();
    const prefersFinnish = browserLang.startsWith('fi');
    const initial = (stored as Language) || (prefersFinnish ? 'fi' : 'en');

    setLanguageState(initial);
    document.documentElement.setAttribute('lang', initial);
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
  }, []);

  const t = useCallback(
    (key: string): string | React.ReactNode => {
      if (!mounted || !language) return '';

      const keys = key.split('.');
      let value: any = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key;
        }
      }

      // Return whatever we found: string, number or React node
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        React.isValidElement(value) ||
        value === null
      ) {
        return value;
      }

      return key;
    },
    [language, mounted]
  );

  const contextValue = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
