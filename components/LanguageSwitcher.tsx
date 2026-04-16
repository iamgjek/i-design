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
  const dropdownId = 'language-switcher-menu';

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18n-language', code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-control-button theme-current-button flex min-h-[60px] w-full items-center justify-between gap-3 border-2 border-border bg-background px-3 py-2 text-left transition-colors md:min-w-[220px]"
        aria-label={t('header.switchLanguage')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={dropdownId}
      >
        <span className="theme-current-button-content flex min-w-0 items-center gap-3">
          <span className="theme-language-preview flex h-10 w-12 items-center justify-center border border-border bg-surface text-xl">
            {currentLanguage.flag}
          </span>
          <span className="flex min-w-0 flex-col justify-center">
            <span className="theme-current-button-label text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {t('header.languageLabel')}
            </span>
            <span className="theme-current-button-value truncate text-sm font-semibold text-text">
              {currentLanguage.label}
            </span>
          </span>
        </span>
        <i className={`theme-current-button-chevron fa-solid fa-chevron-${isOpen ? 'up' : 'down'} text-[10px]`}></i>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            id={dropdownId}
            role="listbox"
            aria-label={t('header.switchLanguage')}
            className="theme-dropdown absolute left-0 right-0 md:right-0 md:left-auto mt-2 w-full md:w-56 bg-background border-2 border-border z-50 shadow-lg"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`theme-dropdown-item flex min-h-[56px] w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                  i18n.language === lang.code ? 'bg-surface border-l-4 border-primary' : ''
                }`}
                role="option"
                aria-selected={i18n.language === lang.code}
              >
                <span className="theme-language-preview flex h-10 w-12 items-center justify-center border border-border bg-surface text-xl">
                  {lang.flag}
                </span>
                <span className="flex min-w-0 flex-1 flex-col justify-center">
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    {t('header.languageLabel')}
                  </span>
                  <span className="truncate text-sm font-medium text-text">{lang.label}</span>
                </span>
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
