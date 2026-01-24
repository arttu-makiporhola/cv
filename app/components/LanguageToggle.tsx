'use client';

import { memo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';
import IconButton from './IconButton';

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'fi' : 'en';
    setLanguage(newLanguage);
  };

  // Don't render until language is determined to avoid flash
  if (!language) return null;

  return (
    <IconButton
      icon={<span>{language === 'en' ? 'EN' : 'FI'}</span>}
      onClick={() => toggleLanguage()}
      title={t('actions.switchToFinnish')?.toString()}
    />
  );
}

export default memo(LanguageToggle);
