import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectEstimator from './components/ProjectEstimator';
import TestimonialsSection from './components/TestimonialsSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { translations } from './translations';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('en');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState('');

  const t = translations[lang] || translations.en;

  // Lock dark theme mode & handle RTL direction for Arabic
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleOpenContactModal = (serviceName = '') => {
    setContactInitialService(typeof serviceName === 'string' ? serviceName : '');
    setContactModalOpen(true);
  };

  const handleExploreWork = () => {
    setActiveTab('work');
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartEstimator = () => {
    setActiveTab('estimator');
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#07080c] text-slate-100 transition-colors duration-300 ${lang === 'ar' ? 'font-sans text-right' : ''}`}>
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        toggleLang={toggleLang}
        t={t.nav}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        openContactModal={handleOpenContactModal}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          t={t.hero}
          onExploreWork={handleExploreWork}
          onStartEstimator={handleStartEstimator}
          openContactModal={handleOpenContactModal}
        />

        {/* About Section */}
        <AboutSection
          lang={lang}
          t={t.about}
          openContactModal={handleOpenContactModal}
        />

        {/* Services Section */}
        <ServicesSection
          lang={lang}
          t={t.services}
          openContactModal={handleOpenContactModal}
        />

        {/* Work / Showcase Portfolio Section */}
        <PortfolioSection
          lang={lang}
          t={t.portfolio}
          openContactModal={handleOpenContactModal}
        />

        {/* Interactive Project Estimator Section */}
        <ProjectEstimator
          lang={lang}
          t={t.estimator}
          openContactModal={handleOpenContactModal}
        />

        {/* Testimonials & FAQs Section */}
        <TestimonialsSection
          lang={lang}
          t={t.testimonials}
          openContactModal={handleOpenContactModal}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        t={t.footer}
        setActiveTab={setActiveTab}
        openContactModal={handleOpenContactModal}
      />

      {/* Booking & Inquiry Modal */}
      <ContactModal
        lang={lang}
        t={t.modal}
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={contactInitialService}
      />

    </div>
  );
}
