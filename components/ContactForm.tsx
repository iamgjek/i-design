import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../services/api';
import { ContactFormData, FormStatus } from '../types';

const serviceKeys = ['webDesign', 'enterprise', 'consulting', 'seo'] as const;

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: t('contact.services.webDesign'),
    description: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    setErrorMessage('');
    
    try {
      await submitContactForm(formData);
      setStatus(FormStatus.SUCCESS);
      setFormData({ name: '', email: '', service: t('contact.services.webDesign'), description: '' });
    } catch (error: any) {
      console.error(error);
      setStatus(FormStatus.ERROR);
      setErrorMessage(error?.message || t('contact.form.error.message'));
    }
  };

  return (
    <section id="contact" className="bg-surface py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold leading-snug text-text sm:text-4xl">
            {t('contact.title')}<span className="text-primary">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">{t('contact.subtitle')}</p>
        </div>

        {status === FormStatus.SUCCESS ? (
           <div className="mx-auto max-w-2xl border-2 border-primary bg-background/50 p-10 text-center">
              <i className="fa-solid fa-check-circle text-6xl text-primary mb-6"></i>
              <h3 className="text-2xl font-bold text-text mb-4">{t('contact.form.success.title')}</h3>
              <p className="text-muted">{t('contact.form.success.message')}</p>
              <button 
                onClick={() => setStatus(FormStatus.IDLE)}
                className="mt-8 border-2 border-border px-6 py-2 text-text hover:border-primary hover:text-primary transition"
              >
                {t('contact.form.success.newMessage')}
              </button>
           </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text uppercase tracking-wider">{t('contact.form.name')}</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none placeholder-muted/50 outline-none transition-colors" 
                  placeholder={t('contact.form.namePlaceholder')} 
                  type="text" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text uppercase tracking-wider">{t('contact.form.email')}</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none placeholder-muted/50 outline-none transition-colors" 
                  placeholder={t('contact.form.emailPlaceholder')} 
                  type="email" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text uppercase tracking-wider">{t('contact.form.service')}</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none outline-none transition-colors appearance-none cursor-pointer"
              >
                {serviceKeys.map((key) => (
                  <option key={key} value={t(`contact.services.${key}`)}>
                    {t(`contact.services.${key}`)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text uppercase tracking-wider">{t('contact.form.description')}</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none placeholder-muted/50 outline-none transition-colors" 
                placeholder={t('contact.form.descriptionPlaceholder')} 
                rows={4}
              ></textarea>
            </div>
            
            {status === FormStatus.ERROR && (
              <div className="border-2 border-secondary bg-background/50 p-6 text-secondary">
                <div className="font-bold text-lg mb-2">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                  {t('contact.form.error.title')}
                </div>
                <div className="text-sm whitespace-pre-line">
                  {errorMessage}
                </div>
                <div className="mt-4 text-xs text-muted">
                  {t('contact.form.error.hint')}
                </div>
              </div>
            )}

            <button 
              type="submit"
              disabled={status === FormStatus.SUBMITTING}
              className="w-full border-2 border-primary bg-primary py-4 text-lg font-bold text-background transition hover:bg-transparent hover:text-primary uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === FormStatus.SUBMITTING ? t('contact.form.submitting') : t('contact.form.submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;