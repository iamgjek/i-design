import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const PortfolioHeader: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex size-10 items-center justify-center border-2 border-primary text-primary bg-background hover:bg-primary hover:text-background transition-colors duration-300">
            <img src="/logo.svg" alt="i-design logo" className="w-full h-full object-contain p-1" />
          </div>
          <h2 className="text-xl font-bold font-sans leading-snug tracking-tight text-text">i-design</h2>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-12">
          <a
            href="#social-proof"
            className="text-base font-medium text-muted hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-2"
          >
            {t('portfolio.nav.socialProof')}
          </a>
          <a
            href="#projects"
            className="text-base font-medium text-muted hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-2"
          >
            {t('portfolio.nav.projects')}
          </a>
          <a
            href="#how"
            className="text-base font-medium text-muted hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-2"
          >
            {t('portfolio.nav.how')}
          </a>
        </nav>

        {/* Theme Switcher, Language Switcher & CTA Button */}
        <div className="theme-header-actions hidden md:flex items-center justify-end">
          <a
            href="#contact"
            className="theme-button-primary theme-header-cta flex h-12 cursor-pointer items-center justify-center border-2 border-primary px-6 text-base font-bold text-primary transition hover:bg-primary hover:text-background"
          >
            {t('portfolio.nav.contact')}
          </a>
          <div className="theme-control-cluster flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={t('portfolio.nav.openMenu')}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b-2 border-border p-6 flex flex-col gap-4 absolute w-full">
          <a
            href="#social-proof"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted hover:text-primary"
          >
            {t('portfolio.nav.socialProof')}
          </a>
          <a
            href="#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted hover:text-primary"
          >
            {t('portfolio.nav.projects')}
          </a>
          <a
            href="#how"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted hover:text-primary"
          >
            {t('portfolio.nav.how')}
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="theme-button-primary mt-4 flex h-12 items-center justify-center border-2 border-primary text-primary font-bold"
          >
            {t('portfolio.nav.contact')}
          </a>
          <ThemeSwitcher />
          <div className="mt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default PortfolioHeader;

