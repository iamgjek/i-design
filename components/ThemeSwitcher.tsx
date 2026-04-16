import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { THEME_OPTIONS, useTheme } from '../theme';

const ThemePreview: React.FC<{
  mode: string;
  preview: [string, string, string];
}> = ({ mode, preview }) => (
  <span
    className={`theme-preview-card theme-preview-card-${mode}`}
    aria-hidden="true"
  >
    <span
      className="theme-preview-topbar"
      style={{ backgroundColor: preview[0] }}
    ></span>
    <span className="theme-preview-body">
      <span
        className="theme-preview-hero"
        style={{ backgroundColor: preview[1] }}
      ></span>
      <span className="theme-preview-meta">
        <span
          className="theme-preview-line theme-preview-line-long"
          style={{ backgroundColor: preview[2] }}
        ></span>
        <span
          className="theme-preview-line theme-preview-line-short"
          style={{ backgroundColor: preview[0] }}
        ></span>
      </span>
      <span className="theme-preview-actions">
        <span
          className="theme-preview-pill"
          style={{ backgroundColor: preview[1] }}
        ></span>
        <span
          className="theme-preview-pill theme-preview-pill-outline"
          style={{ borderColor: preview[2] }}
        ></span>
      </span>
    </span>
  </span>
);

const ThemeSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const currentTheme =
    THEME_OPTIONS.find(({ mode }) => mode === theme) ?? THEME_OPTIONS[0];
  const dropdownId = 'theme-switcher-menu';

  return (
    <div className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="theme-control-button theme-current-button flex min-h-[60px] w-full items-center justify-between gap-3 border-2 border-border bg-background px-3 py-2 text-left md:min-w-[220px]"
        aria-label={t('header.switchTheme')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={dropdownId}
      >
        <span className="theme-current-button-content flex min-w-0 items-center gap-3">
          <ThemePreview mode={currentTheme.mode} preview={currentTheme.preview} />
          <span className="flex min-w-0 flex-col justify-center">
            <span className="theme-current-button-label text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {t('header.themeLabel')}
            </span>
            <span className="theme-current-button-value truncate text-sm font-semibold text-text">
              {t(`theme.${currentTheme.mode}`)}
            </span>
          </span>
        </span>
        <i
          className={`theme-current-button-chevron fa-solid fa-chevron-${isOpen ? 'up' : 'down'} text-[10px]`}
          aria-hidden="true"
        ></i>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div
            id={dropdownId}
            role="listbox"
            aria-label={t('header.switchTheme')}
            className="theme-dropdown absolute left-0 right-0 z-50 mt-2 w-full overflow-hidden border-2 border-border bg-background shadow-lg md:right-0 md:left-auto md:w-56"
          >
            {THEME_OPTIONS.map(({ mode, icon, preview }) => {
              const isActive = theme === mode;

              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setTheme(mode);
                    setIsOpen(false);
                  }}
                  className={`theme-dropdown-item flex min-h-[56px] w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                    isActive ? 'bg-surface border-l-4 border-primary' : 'hover:bg-surface'
                  }`}
                  aria-pressed={isActive}
                  role="option"
                  aria-selected={isActive}
                >
                  <ThemePreview mode={mode} preview={preview} />
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
                    <span className="text-sm font-medium text-text">{t(`theme.${mode}`)}</span>
                  </span>
                  {isActive && <i className="fa-solid fa-check ml-auto text-primary" aria-hidden="true"></i>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
