import React, { useState } from 'react';
import { Camera, Video, Film, Sparkles, ArrowRight, CheckCircle2, ChevronDown, Flame, Heart, Music, Briefcase } from 'lucide-react';

export default function ServicesSection({ lang, t, onSelectService, openContactModal }) {
  const [expandedId, setExpandedId] = useState('concerts');

  const icons = [Music, Heart, Flame, Camera, Briefcase];
  const colors = [
    'from-purple-500 to-rose-500',
    'from-amber-400 to-rose-400',
    'from-cyan-400 to-blue-500',
    'from-pink-500 to-amber-400',
    'from-emerald-400 to-teal-500'
  ];
  const techStacks = [
    ['RED 8K Cameras', 'Sony FX9 Multi-Cam', 'FPV Festival Drones', 'DaVinci Resolve HDR'],
    ['Sony A7SIII / FX6', 'Leica & Zeiss Primes', 'FPV Drone Aerials', 'Profoto Lighting'],
    ['ARRI Alexa Mini', 'RED V-Raptor', 'Profoto Studio Strobes', 'Motion Control Gimbals'],
    ['Hasselblad / Phase One', 'Profoto Pro-11 Lighting', 'Capture One Pro', 'Photoshop retouch'],
    ['Sony FX6 Rigs', 'Wireless Lavalier Audio', 'Studio Backdrop Station', 'Fast Cloud Gallery']
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="bg-glow-blob w-[500px] h-[500px] bg-amber-600/10 top-1/4 right-0" />

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4 border-amber-500/30 text-amber-400 bg-amber-950/40">
            <Video className="w-4 h-4 text-amber-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl font-display">
            {t.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mt-4">
            {t.subtext}
          </p>
        </div>

        {/* Services List / Accordion */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {t.items.map((service, idx) => {
            const IconComponent = icons[idx] || Camera;
            const serviceId = `s-${idx}`;
            const isExpanded = expandedId === serviceId;

            return (
              <div
                key={idx}
                className={`glass-card p-6 sm:p-8 transition-all duration-300 ${
                  isExpanded ? 'border-amber-500/50 bg-slate-900/90 shadow-2xl shadow-amber-500/10' : 'hover:border-white/20'
                }`}
              >
                {/* Header Row */}
                <div 
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setExpandedId(isExpanded ? null : serviceId)}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${colors[idx]} p-[1.5px] shadow-lg flex-shrink-0`}>
                      <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                          {service.tag}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openContactModal(service.title);
                      }}
                      className="hidden sm:inline-flex btn-primary text-xs py-2 px-4 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
                    >
                      {t.inquireBtn}
                    </button>
                    <div className={`p-2 rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-amber-600/20 text-amber-400' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
                    
                    {/* Left Description & Deliverables */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display mb-3">
                          {t.deliverablesHeader}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Tech Stack & Actions */}
                    <div className="lg:col-span-5 bg-slate-950/60 p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display mb-3">
                          {t.techHeader}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {techStacks[idx].map((tech, tIdx) => (
                            <span key={tIdx} className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-slate-400">{t.customGear}</span>
                        <button
                          onClick={() => openContactModal(service.title)}
                          className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
                        >
                          {t.requestBtn}
                          <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
