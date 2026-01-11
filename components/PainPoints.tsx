import React from 'react';
import { useTranslation } from 'react-i18next';

const painPointKeys = ['outdated', 'performance', 'visibility', 'partner'] as const;
const painPointIcons = [
  "fa-anchor-circle-exclamation",
  "fa-gauge-high",
  "fa-magnifying-glass-chart",
  "fa-handshake-simple"
];

const PainPoints: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-surface py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col gap-6 text-center">
          <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
            {t('painPoints.title')}<span className="text-primary">{t('painPoints.titleHighlight')}</span>？
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {t('painPoints.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {painPointKeys.map((key, index) => (
            <div key={key} className="group flex flex-col gap-6 border-2 border-border bg-background p-8 transition duration-300 hover:border-primary hover:-translate-y-2">
              <div className="flex size-16 items-center justify-center border-2 border-primary bg-background text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <i className={`fa-solid ${painPointIcons[index]} text-3xl`}></i>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-text">{t(`painPoints.items.${key}.title`)}</h3>
                <p className="text-base leading-relaxed text-muted">{t(`painPoints.items.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;