import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-surface py-24 border-b-2 border-border" id="cases">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <i className="fa-solid fa-quote-left mb-12 text-7xl text-primary/30"></i>
          <blockquote className="mb-12">
            <p className="text-3xl font-medium leading-[58px] text-text sm:text-4xl lg:text-5xl">
              "{t('testimonials.quote')}"
            </p>
          </blockquote>
          <div className="flex items-center gap-6">
            <div 
              className="size-20 overflow-hidden border-2 border-primary grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-text">{t('testimonials.author')}</div>
              <div className="text-lg text-muted">{t('testimonials.role')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;