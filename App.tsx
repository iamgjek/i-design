import React from 'react';
import './i18n';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioLanding from './components/PortfolioLanding';
import PortfolioFooter from './components/PortfolioFooter';
import { useTheme } from './theme';

function App() {
  const { theme } = useTheme();
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const isPortfolio = pathname.startsWith('/portfolio');
  const pageClassName = isPortfolio ? 'page-portfolio' : 'page-home';

  return (
    <div className={`min-h-screen bg-background text-text font-sans antialiased selection:bg-primary selection:text-background theme-${theme} ${pageClassName}`}>
      <SEO page={isPortfolio ? 'portfolio' : 'home'} />
      {isPortfolio ? <PortfolioHeader /> : <Header />}

      <main id="main">
        {isPortfolio ? (
          <PortfolioLanding />
        ) : (
          <>
            <Hero />
            <PainPoints />
            <Services />
            <WhyUs />
            <Testimonials />
            <ContactForm />
          </>
        )}
      </main>

      {isPortfolio ? <PortfolioFooter /> : <Footer />}
    </div>
  );
}

export default App;