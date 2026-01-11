import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="mb-10 text-4xl font-bold tracking-tight leading-snug text-text sm:text-5xl">
          {t('footer.title')}<span className="text-primary">{t('footer.titleHighlight')}</span>{t('footer.titleSuffix')}
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-xl text-muted leading-relaxed">
          {t('footer.subtitle')}
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="#contact" className="border-2 border-secondary px-10 py-5 text-xl font-bold text-secondary shadow-none transition hover:bg-secondary hover:text-background hover:shadow-[0_0_20px_rgba(255,0,102,0.5)]">
            <i className="fa-solid fa-arrow-up-right-from-square mr-3"></i> {t('footer.cta')}
          </a>
        </div>
        <div className="mt-20 flex flex-col items-center gap-4 text-base text-muted sm:flex-row sm:justify-center sm:gap-10">
          {/* <span className="flex items-center gap-3">
            <i className="fa-regular fa-envelope text-xl text-primary"></i> <a href="mailto:idesign.app2026@gmail.com" className="hover:text-primary transition-colors">idesign.app2026@gmail.com</a>
          </span>
          <span className="hidden sm:inline text-muted">|</span>
          <span className="flex items-center gap-3">
            <i className="fa-solid fa-phone-alt text-xl text-primary"></i> <a href="tel:886-988968172" className="hover:text-primary transition-colors">0988-968172</a>
          </span> */}
        </div>
        <div className="mt-12 text-sm text-muted/30">
            © {new Date().getFullYear()} i-design. {t('footer.copyright')}
        </div>
      </div>
    </section>
  );
};

export default Footer;