import React from 'react';
import { useTranslation } from 'react-i18next';

const PortfolioFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="mb-10 text-4xl font-bold tracking-tight leading-snug text-text sm:text-5xl">
          {t('portfolio.footer.title')}
          <span className="text-primary">{t('portfolio.footer.titleHighlight')}</span>
          {t('portfolio.footer.titleSuffix')}
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-xl text-muted leading-relaxed">
          {t('portfolio.footer.subtitle')}
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="mailto:ian.chiu@i-design.app?subject=Portfolio%20Consultation"
            className="border-2 border-secondary px-10 py-5 text-xl font-bold text-secondary shadow-none transition hover:bg-secondary hover:text-background hover:shadow-[0_0_20px_rgba(255,0,102,0.5)]"
          >
            <i className="fa-solid fa-envelope mr-3"></i>
            {t('portfolio.footer.cta')}
          </a>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6">
          <div className="text-sm text-muted/70">
            © {new Date().getFullYear()} i-design. {t('footer.copyright')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFooter;

