import React from 'react';
import { useTranslation } from 'react-i18next';

const whyUsKeys = ['craftsmanship', 'data', 'collaboration'] as const;
const whyUsIcons = [
  "fa-trophy",
  "fa-chart-simple",
  "fa-bolt"
];

const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="bg-background py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
            <span className="text-primary">{t('whyUs.title')}</span>{t('whyUs.titleHighlight')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {whyUsKeys.map((key, index) => (
            <div key={key} className="flex flex-col items-center text-center">
              <div className="mb-8 flex size-20 items-center justify-center border-2 border-secondary bg-background text-secondary hover:scale-110 transition-transform duration-300">
                <i className={`fa-solid ${whyUsIcons[index]} text-5xl`}></i>
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-snug text-text">{t(`whyUs.items.${key}.title`)}</h3>
              <p className="text-lg leading-relaxed text-muted">{t(`whyUs.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;