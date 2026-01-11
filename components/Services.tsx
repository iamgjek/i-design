import React from 'react';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['design', 'development', 'strategy', 'seo'] as const;
const serviceIcons = [
  "fa-pen-ruler",
  "fa-code",
  "fa-route",
  "fa-chart-line"
];

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-background py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-snug text-text sm:text-5xl" style={{ lineHeight: '58px' }}>
            {t('services.title')}<span className="text-secondary">{t('services.titleHighlight')}</span><br/>{t('services.titleSuffix')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {serviceKeys.map((key, index) => (
            <div key={key} className="group flex flex-col gap-8 border-2 border-border bg-surface p-10 transition duration-300 hover:border-primary">
              <div className="flex size-16 items-center justify-center border-2 border-primary bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                <i className={`fa-solid ${serviceIcons[index]} text-3xl`}></i>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold leading-snug text-text">{t(`services.items.${key}.title`)}</h3>
                <p className="text-lg leading-relaxed text-muted">{t(`services.items.${key}.desc`)}</p>
                <ul className="ml-6 list-disc text-base text-muted marker:text-primary space-y-2">
                  {(t(`services.items.${key}.list`, { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;