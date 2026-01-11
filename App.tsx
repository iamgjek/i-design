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

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans antialiased selection:bg-primary selection:text-background">
      <SEO />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <WhyUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;