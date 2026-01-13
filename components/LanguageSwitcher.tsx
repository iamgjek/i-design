import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', label: '簡體中文', flag: '🇨🇳' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18n-language', code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto flex items-center justify-between gap-2 px-4 py-2 border-2 border-border bg-background text-text hover:border-primary transition-colors"
        aria-label={t('header.switchLanguage')}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{currentLanguage.flag}</span>
          <span className="text-sm font-medium">{currentLanguage.label}</span>
        </div>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} text-xs`}></i>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute left-0 right-0 md:right-0 md:left-auto mt-2 w-full md:w-48 bg-background border-2 border-border z-50 shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface transition-colors ${
                  i18n.language === lang.code ? 'bg-surface border-l-4 border-primary' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium text-text">{lang.label}</span>
                {i18n.language === lang.code && (
                  <i className="fa-solid fa-check ml-auto text-primary"></i>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
