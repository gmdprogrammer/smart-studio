import React, { useState, useEffect } from 'react';
import { Camera, Video, Globe, Sun, Moon, Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, lang, toggleLang, t, soundEnabled, setSoundEnabled, openContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'services', label: t.services },
    { id: 'work', label: t.work },
    { id: 'estimator', label: t.estimator },
    { id: 'testimonials', label: t.testimonials },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container">
        <div className="flex items-center justify-between px-6 py-3 rounded-full bg-slate-900/75 dark:bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-amber-500/25">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 font-display">
                SMART <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">STUDIO</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                {lang === 'ar' ? 'استوديو التصوير والسينما • دبي' : 'Videography & Photography • Dubai'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-md shadow-amber-500/20 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Language Switcher Button (English <-> Arabic) */}
            <button
              onClick={toggleLang}
              className="px-3 py-2 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              title="Switch Language / تغيير اللغة"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{t.langLabel}</span>
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title={soundEnabled ? 'Mute Interface Sounds' : 'Enable Interface Sounds'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={openContactModal}
              className="btn-primary py-2.5 px-5 text-sm font-semibold flex items-center gap-2 group bg-gradient-to-r from-amber-500 to-rose-600 text-white"
            >
              {t.bookCall}
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.langLabel}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="px-3 py-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5"
                >
                  <Globe className="w-4 h-4" />
                  <span>{t.langLabel}</span>
                </button>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal();
                }}
                className="btn-primary text-xs py-2.5 px-4 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
              >
                {t.bookCall} →
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

