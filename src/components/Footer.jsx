import React, { useState } from 'react';
import { Camera, ArrowRight, Globe, Share2, MessageSquare, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function Footer({ lang, t, setActiveTab, openContactModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navItems = [
    { id: 'home', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { id: 'about', label: lang === 'ar' ? 'من نحن' : 'About Us' },
    { id: 'services', label: lang === 'ar' ? 'خدماتنا' : 'Services' },
    { id: 'work', label: lang === 'ar' ? 'معرض الأعمال' : 'Showcase' },
    { id: 'estimator', label: lang === 'ar' ? 'حاسبة التكلفة' : 'Estimator' },
    { id: 'testimonials', label: lang === 'ar' ? 'آراء العملاء' : 'Reviews' },
  ];

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Main Footer Rounded Glass Card Container */}
        <div className="glass-card p-8 sm:p-12 bg-slate-950/90 border-white/10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Brand Story Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-cyan-400 p-[2px]">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                    <Camera className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                  SMART <span className="text-amber-400">STUDIO</span>
                </span>
              </div>

              <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                {t.desc}
              </p>

              {/* Newsletter Form */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                  {t.subTitle}
                </span>
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                    <input
                      type="email"
                      required
                      placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                    <button type="submit" className="btn-primary text-xs py-2.5 px-4 font-semibold bg-gradient-to-r from-amber-500 to-rose-600 text-white">
                      {t.joinBtn}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/40">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'تم الاشتراك بنجاح!' : 'Subscribed successfully!'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                {t.dirTitle}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        const el = document.getElementById(item.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Offices & Studio HQ Column */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                {t.hqTitle}
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{lang === 'ar' ? 'استوديو دبي الرئيسي' : 'Dubai Production HQ'}</span>
                    <span className="text-slate-400">{t.sfHq}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{lang === 'ar' ? 'فرع أبوظبي' : 'Abu Dhabi Branch'}</span>
                    <span className="text-slate-400">{t.londonHq}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-medium">booking@smartstudio.design</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Socials */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              {t.copyright}
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" title="Share Studio">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" title="Community Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
