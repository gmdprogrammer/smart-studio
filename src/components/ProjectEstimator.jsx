import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Clock, Camera, Video, Film, Music, Heart, Flame } from 'lucide-react';

export default function ProjectEstimator({ lang, t, openContactModal }) {
  const [selectedType, setSelectedType] = useState('wedding');
  const [scopeLevel, setScopeLevel] = useState('full_day');
  const [selectedAddons, setSelectedAddons] = useState(['drone']);

  const projectTypes = [
    { id: 'wedding', title: lang === 'ar' ? 'فيلم وحفل الزفاف الفاخر' : 'Luxury Wedding & Marriage Film', basePrice: 2800, icon: Heart, time: lang === 'ar' ? 'مونتاج 3-4 أيام' : '3-4 Days Edit' },
    { id: 'concert', title: lang === 'ar' ? 'تغطية الحفلات والمهرجانات' : 'Concert & Music Festival', basePrice: 3500, icon: Music, time: lang === 'ar' ? 'فيديو خلال 24 ساعة' : '24hr Teaser Edit' },
    { id: 'brand', title: lang === 'ar' ? 'جلسة وإعلان تجاري' : 'Brand Commercial & Campaign', basePrice: 4200, icon: Flame, time: lang === 'ar' ? 'مونتاج 5-7 أيام' : '5-7 Days Edit' },
    { id: 'fashion', title: lang === 'ar' ? 'تصوير أزياء وكتالوج' : 'Fashion Shoot & Lookbook', basePrice: 2200, icon: Camera, time: lang === 'ar' ? 'مونتاج 2-3 أيام' : '2-3 Days Edit' },
    { id: 'corporate', title: lang === 'ar' ? 'مؤتمرات وفعاليات شركات' : 'Corporate Summit & Gala', basePrice: 2500, icon: Video, time: lang === 'ar' ? 'مونتاج يومين' : '2 Days Edit' }
  ];

  const scopeLevels = [
    { id: 'half_day', label: lang === 'ar' ? 'تغطية نصف يوم (4 ساعات)' : 'Half-Day Shoot (4 Hours)', multiplier: 0.75, timeMod: lang === 'ar' ? 'مصور رئيسي واحد' : '1 Crew Lead' },
    { id: 'full_day', label: lang === 'ar' ? 'تغطية يوم كامل (8-10 ساعات)' : 'Full-Day Shoot (8-10 Hours)', multiplier: 1.0, timeMod: lang === 'ar' ? 'طاقم مصورين ثنائي' : 'Dual Crew Lead' },
    { id: 'multi_day', label: lang === 'ar' ? 'فعالية عدة أيام (2-3 أيام)' : 'Multi-Day Event (2-3 Days)', multiplier: 1.85, timeMod: lang === 'ar' ? 'طاقم استوديو كامل' : 'Full Studio Crew' }
  ];

  const addonsList = [
    { id: 'drone', title: lang === 'ar' ? 'تصوير جوي سينمائي 4K FPV' : '4K FPV Aerial Drone Cinema', price: 600 },
    { id: 'red_upgrade', title: lang === 'ar' ? 'ترقية لكاميرا RED V-Raptor 8K' : '8K RED V-Raptor Camera Rig Upgrade', price: 950 },
    { id: 'same_day', title: lang === 'ar' ? 'فيديو سريع للميديا في نفس اليوم' : 'Same-Day 60-Second Social Reel Cut', price: 450 },
    { id: 'album', title: lang === 'ar' ? 'ألبوم صور جلدي فاخر مصنوع يدوياً' : 'Italian Leather Handcrafted Photo Album', price: 750 }
  ];

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate dynamic price
  const baseTypeObj = projectTypes.find(tObj => tObj.id === selectedType) || projectTypes[0];
  const scopeObj = scopeLevels.find(s => s.id === scopeLevel) || scopeLevels[1];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const calculatedBase = Math.round(baseTypeObj.basePrice * scopeObj.multiplier);
  const totalMin = calculatedBase + addonsTotal;
  const totalMax = Math.round(totalMin * 1.2);

  const handleApplyEstimate = () => {
    const summaryText = `Coverage Type: ${baseTypeObj.title}, Duration: ${scopeObj.label}, Addons: ${selectedAddons.join(', ')}, Est. Pricing: $${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`;
    openContactModal(summaryText);
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-b border-white/10">
      {/* Background Lighting */}
      <div className="bg-glow-blob w-[500px] h-[500px] bg-amber-600/15 bottom-0 left-1/3" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4 border-amber-500/30 text-amber-400 bg-amber-950/40">
            <Calculator className="w-4 h-4 text-amber-400" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configuration Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Event Type */}
            <div className="glass-card p-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                {t.step1}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const IconComp = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3 ${
                        isSelected 
                          ? 'bg-amber-600/20 border-amber-500 text-white shadow-lg shadow-amber-500/15'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-slate-400'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold font-display text-white">{type.title}</div>
                        <div className="text-xs text-slate-400">{lang === 'ar' ? 'يبدأ من' : 'From'} ${type.basePrice.toLocaleString()}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Coverage Duration */}
            <div className="glass-card p-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                {t.step2}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scopeLevels.map((scope) => {
                  const isSelected = scopeLevel === scope.id;
                  return (
                    <button
                      key={scope.id}
                      onClick={() => setScopeLevel(scope.id)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        isSelected 
                          ? 'bg-gradient-to-r from-amber-600/30 to-rose-600/30 border-amber-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-sm font-bold font-display text-white">{scope.label}</div>
                      <div className="text-xs text-slate-400 mt-1">{scope.timeMod}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Production Gear Add-ons */}
            <div className="glass-card p-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                {t.step3}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-center justify-between ${
                        isChecked 
                          ? 'bg-amber-950/40 border-amber-500/50 text-white'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-amber-500 border-amber-400 text-slate-950' : 'border-white/30'}`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-semibold text-white">{addon.title}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-400">+${addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-card p-8 bg-slate-900/90 border-amber-500/40 shadow-2xl shadow-amber-500/20 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                  {t.summaryTitle}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                  {t.guarantee}
                </span>
              </div>

              {/* Price Range Display */}
              <div>
                <span className="text-xs text-slate-400 block mb-1">{t.estInvestment}</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-white font-display">
                  ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
                </div>
                <span className="text-xs text-slate-400 mt-1 block">{t.ownershipNote}</span>
              </div>

              {/* Timeline Display */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-xs text-slate-400 block">{t.editTimeLabel}</span>
                    <span className="text-sm font-bold text-white font-display">{baseTypeObj.time}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-950 px-2.5 py-1 rounded-lg">HDR Master Cut</span>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-display">{t.standardHeader}</span>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{t.point1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{t.point2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{t.point3}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleApplyEstimate}
                className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
              >
                {t.bookBtn}
                <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
