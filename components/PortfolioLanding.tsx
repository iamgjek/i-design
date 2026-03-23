import React from 'react';
import { useTranslation } from 'react-i18next';

const socialProofKeys = [
  'bankCompliance',
  'microservices',
  'crossBorderPayments',
  'securityGovernance',
  'dataSaaS',
  'callCenterIntegration',
] as const;

const solutionKeys = [
  'techDriven',
  'uxIntuitive',
  'dataDriven',
  'crossFunctional',
  'aiPractical',
] as const;

const problemKeys = [
  'timelineRisk',
  'validationLoop',
  'decisionByPower',
  'safetyCompliance',
] as const;

const projectKeys = [
  'pes',
  'complianceOnPrem',
  'crossBorderPayment',
  'dataSaaSVVIP',
  'callCenterPlatform',
] as const;

const howKeys = ['agileDelivery', 'alignFirst', 'feasibilityEval', 'crossCountryCollab', 'securityGovernance'] as const;
const whyMeKeys = ['alignmentDriver', 'tradeoffFramework', 'handsOnDelivery'] as const;

const PortfolioLanding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Above the Fold */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b-2 border-border">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2072&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-surface/90 opacity-90" />

        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl font-extrabold leading-[64px] lg:leading-[92px] tracking-tight text-text sm:text-6xl">
                {t('portfolio.hero.headlinePrefix')}
                <br />
                <span className="text-primary">{t('portfolio.hero.headlineHighlight')}</span>
              </h1>

              <p className="text-xl font-normal leading-relaxed text-muted sm:text-2xl max-w-2xl">
                {t('portfolio.hero.subheadline').split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t('portfolio.hero.subheadline').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="group flex h-16 min-w-[280px] cursor-pointer items-center justify-center border-2 border-secondary px-8 text-xl font-bold text-secondary transition hover:bg-secondary hover:text-background hover:shadow-[0_0_20px_rgba(255,0,102,0.5)]"
                >
                  <i className="fa-solid fa-arrow-down mr-3 group-hover:translate-y-0.5 transition-transform"></i>
                  {t('portfolio.hero.primaryCta')}
                </a>

                <a
                  href="#contact"
                  className="group flex h-16 min-w-[280px] cursor-pointer items-center justify-center border-2 border-primary px-8 text-xl font-bold text-primary transition hover:bg-primary hover:text-background"
                >
                  <i className="fa-solid fa-envelope mr-3 group-hover:-translate-y-0.5 transition-transform"></i>
                  {t('portfolio.hero.secondaryCta')}
                </a>
              </div>
            </div>

            {/* Works */}
            <div className="flex flex-col gap-6">
              <div className="border-2 border-border bg-background/40 p-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-text">{t('portfolio.hero.worksTitle')}</h2>
                  <i className="fa-solid fa-link text-primary text-2xl" aria-hidden="true"></i>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4">
                  <a
                    href="https://bit.ly/4pyBFQJ"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 border-2 border-border bg-background p-5 transition hover:border-primary"
                  >
                    <span className="text-base font-bold text-text">
                      {t('portfolio.hero.figmaLabel')}
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-primary"></i>
                  </a>
                  <a
                    href="https://bit.ly/4nyntpZ"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 border-2 border-border bg-background p-5 transition hover:border-primary"
                  >
                    <span className="text-base font-bold text-text">
                      {t('portfolio.hero.pinterestLabel')}
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-primary"></i>
                  </a>
                </div>

                <p className="mt-6 text-sm text-muted leading-relaxed">
                  {t('portfolio.hero.worksHint')}
                </p>
              </div>

              <div className="border-2 border-border bg-surface/40 p-8">
                <h3 className="text-2xl font-bold text-text">{t('portfolio.hero.quickProfileTitle')}</h3>
                <ul className="mt-4 space-y-3 text-base text-muted list-disc pl-5 marker:text-primary">
                  <li>{t('portfolio.hero.quickProfile.1')}</li>
                  <li>{t('portfolio.hero.quickProfile.2')}</li>
                  <li>{t('portfolio.hero.quickProfile.3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="bg-surface py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
              {t('portfolio.socialProof.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {socialProofKeys.map((key) => (
              <div
                key={key}
                className="group border-2 border-border bg-background/40 p-8 transition duration-300 hover:border-primary hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-14 items-center justify-center border-2 border-primary bg-background text-primary">
                    <i className="fa-solid fa-trophy text-2xl" aria-hidden="true"></i>
                  </div>
                  <p className="text-base leading-relaxed text-muted">{t(`portfolio.socialProof.items.${key}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
                {t('portfolio.problem.titlePrefix')} <span className="text-primary">{t('portfolio.problem.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed">{t('portfolio.problem.subtitle')}</p>
            </div>

            <div className="border-2 border-border bg-surface/40 p-8">
              <ul className="space-y-4 text-base text-muted list-disc pl-5 marker:text-secondary">
                {problemKeys.map((key) => (
                  <li key={key}>{t(`portfolio.problem.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="bg-surface py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-snug text-text sm:text-5xl">
              <span className="text-primary">{t('portfolio.solution.title')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {solutionKeys.map((key, idx) => (
              <div
                key={key}
                className="border-2 border-border bg-background/40 p-8 transition duration-300 hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-14 items-center justify-center border-2 border-secondary bg-background text-secondary">
                    <span className="text-2xl font-extrabold">{idx + 1}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold leading-snug text-text">
                      {t(`portfolio.solution.items.${key}.title`)}
                    </h3>
                    <p className="text-base leading-relaxed text-muted">
                      {t(`portfolio.solution.items.${key}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
              {t('portfolio.projects.titlePrefix')} <span className="text-primary">{t('portfolio.projects.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projectKeys.map((key) => (
              <div key={key} className="border-2 border-border bg-surface/40 p-10">
                <h3 className="text-3xl font-bold leading-snug text-text">{t(`portfolio.projects.items.${key}.title`)}</h3>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-muted">
                      {t('portfolio.projects.labels.what')}
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-muted">{t(`portfolio.projects.items.${key}.what`)}</p>
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-muted">
                      {t('portfolio.projects.labels.outcome')}
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-muted">{t(`portfolio.projects.items.${key}.outcome`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="how" className="bg-surface py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
              {t('portfolio.how.titlePrefix')} <span className="text-primary">{t('portfolio.how.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {howKeys.map((key, idx) => (
              <div key={key} className="border-2 border-border bg-background/40 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-14 items-center justify-center border-2 border-primary text-primary bg-background">
                    <span className="text-2xl font-extrabold">{idx + 1}</span>
                  </div>
                  <p className="text-base leading-relaxed text-muted">{t(`portfolio.how.items.${key}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section id="why-me" className="py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
                {t('portfolio.whyMe.titlePrefix')} <span className="text-primary">{t('portfolio.whyMe.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed">{t('portfolio.whyMe.subtitle')}</p>
            </div>

            <div className="border-2 border-border bg-surface/40 p-8">
              <ul className="space-y-4 text-base text-muted list-disc pl-5 marker:text-primary">
                {whyMeKeys.map((key) => (
                  <li key={key}>{t(`portfolio.whyMe.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-surface py-24 border-b-2 border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
              {t('portfolio.contact.titlePrefix')} <span className="text-primary">{t('portfolio.contact.titleHighlight')}</span>
            </h2>
            <p className="mt-6 text-xl text-muted leading-relaxed">{t('portfolio.contact.message')}</p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border-2 border-border bg-background/40 p-6">
                <div className="text-sm font-bold uppercase tracking-widest text-muted">{t('portfolio.contact.emailLabel')}</div>
                <a
                  href="mailto:iamgjek@gmail.com"
                  className="mt-3 block text-lg font-bold text-text hover:text-primary transition-colors"
                >
                  {t('portfolio.contact.emailValue')}
                </a>
              </div>
              <div className="border-2 border-border bg-background/40 p-6">
                <div className="text-sm font-bold uppercase tracking-widest text-muted">{t('portfolio.contact.phoneLabel')}</div>
                <a
                  href="tel:+886988968172"
                  className="mt-3 block text-lg font-bold text-text hover:text-primary transition-colors"
                >
                  {t('portfolio.contact.phoneValue')}
                </a>
              </div>
              <div className="border-2 border-border bg-background/40 p-6">
                <div className="text-sm font-bold uppercase tracking-widest text-muted">{t('portfolio.contact.locationLabel')}</div>
                <div className="mt-3 text-lg font-bold text-text">{t('portfolio.contact.locationValue')}</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:iamgjek@gmail.com?subject=Portfolio%20Consultation"
                className="flex h-16 min-w-[280px] cursor-pointer items-center justify-center border-2 border-secondary px-8 text-xl font-bold text-secondary transition hover:bg-secondary hover:text-background"
              >
                <i className="fa-solid fa-paper-plane mr-3"></i>
                {t('portfolio.contact.ctaButton')}
              </a>

              <a
                href="#projects"
                className="flex h-16 min-w-[280px] cursor-pointer items-center justify-center border-2 border-border bg-background px-8 text-xl font-bold text-text transition hover:border-primary"
              >
                <i className="fa-solid fa-arrow-left mr-3"></i>
                {t('portfolio.contact.backToProjects')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioLanding;

