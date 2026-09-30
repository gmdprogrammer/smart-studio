import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Camera, Video, Film, Compass, CheckCircle2, Globe, Share2, Sparkles, Award } from 'lucide-react';

export default function AboutSection({ lang, t, openContactModal }) {
  const [activePillarTab, setActivePillarTab] = useState('mission');

  const teamMembers = [
    {
      name: 'Marcus Vance',
      role: lang === 'ar' ? 'المؤسس ومدير التصوير السينمائي' : 'Founder & Director of Photography',
      bio: lang === 'ar' ? 'مصور سينمائي سابق في ناشيونال جيوغرافيك بخبرة 14+ عاماً في تغطية المهرجانات العالمية وعروض الموضة.' : 'Ex-National Geographic cinematographer with 14+ years capturing global music festivals, fashion runways, and high-end brand films.',
      skills: ['8K RED / Arri', 'Creative Direction', 'Color Grading', 'Lighting Design'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sophia Lin',
      role: lang === 'ar' ? 'رئيسة مصوري الأعراس والبورتفوليو' : 'Lead Wedding & Portrait Photographer',
      bio: lang === 'ar' ? 'مصورة مشاهير وأعراس فاخرة حائزة على جوائز عالمية ومثبتة في مجلات Vogue وHarper\'s Bazaar.' : 'Award-winning celebrity and luxury marriage photographer featured in Vogue Weddings and Harper\'s Bazaar.',
      skills: ['Luxury Marriages', 'Portraiture', 'Editorial Photo', 'Fine Art Albums'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'David Miller',
      role: lang === 'ar' ? 'رئيس تغطية الحفلات والفعاليات الحية' : 'Head of Live Event & Concert Coverage',
      bio: lang === 'ar' ? 'متخصص في البث المباشر متعدد الكاميرات للحفلات الغنائية والمهرجانات وطائرات FPV.' : 'Specialist in multi-camera live switching, concert festival aftermovies, stage lighting capture, and high-energy sound sync.',
      skills: ['Live Concerts', 'Multi-Cam Setup', 'Festival Coverage', 'FPV Drone'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Elena Rostova',
      role: lang === 'ar' ? 'خبيرة تعديل الألوان ومخرجة الإعلانات' : 'Lead Colorist & Brand Film Director',
      bio: lang === 'ar' ? 'خبيرة دافينشي ريزولف لتعديل الألوان السينمائية لإعلانات الموضة والسيارات العالمية.' : 'Senior DaVinci Resolve Master Colorist crafting high-gloss commercial visuals for global fashion houses and automotive brands.',
      skills: ['DaVinci Resolve', 'Commercial Films', 'Brand Shoots', 'HDR Mastering'],
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: lang === 'ar' ? 'التحضير ومعاينة الموقع' : 'Pre-Production & Visual Storyboard',
      description: lang === 'ar' ? 'ننسق معاينة المواقع، إعداد الإضاءة، وقائمة اللقطات والجداول الزمنية المخصصة لفعاليتك.' : 'We collaborate on location scouting, moodboards, lighting setup diagrams, shot lists, and timeline coordination tailored to your event type.',
      features: lang === 'ar' ? ['تحديد الجدول الزمني', 'معاينة الموقع والإضاءة', 'تجهيز الكاميرات'] : ['Event Timeline Mapping', 'Location & Lighting Scout', 'Shot List & Gear Prep']
    },
    {
      step: '02',
      title: lang === 'ar' ? 'التصوير الحي متعدد الكاميرات' : 'Multi-Cam Live Coverage & Shoot',
      description: lang === 'ar' ? 'يطبق طاقمنا كاميرات RED 8K وطائرات FPV الدرون لالتقاط كل زاوية بسلاسة.' : 'Our senior crew deploys 8K RED cameras, gimbal stabilizers, wireless monitors, and FPV drones to capture every angle seamlessly.',
      features: lang === 'ar' ? ['تصوير 8K من زوايا متعددة', 'تصوير جوي بطائرات FPV', 'تسجيل صوتي عالي النقاء'] : ['Multi-Angle 8K Filming', 'FPV Aerial Drone Shots', 'High-Fidelity Live Audio']
    },
    {
      step: '03',
      title: lang === 'ar' ? 'المونتاج والألوان والمكس الصوتي' : 'Master Editing, Color & Sound Design',
      description: lang === 'ar' ? 'نختار أفضل اللقطات وننفذ تعديل الألوان السينمائي والهندسة الصوتية.' : 'We curate the finest frames, perform cinematic DaVinci Resolve color grading, polish audio, and mix licensed soundtracks.',
      features: lang === 'ar' ? ['تعديل ألوان دافينشي', 'فيديو سريع نفس اليوم', 'هندسة صوتية مخصصة'] : ['DaVinci Color Grading', 'Same-Day Reel Delivery', 'Custom Sound Design']
    },
    {
      step: '04',
      title: lang === 'ar' ? 'التسليم بدقة 8K والألبومات' : '8K Delivery & Fine Art Albums',
      description: lang === 'ar' ? 'تسليم سحابي بدقة 4K/8K، قصاصات مخصصة لستوري وريلز التواصل، وألبومات جلدية فاخرة.' : 'Instant cloud delivery in full 4K/8K resolution, social media reel crops (9:16), raw archival storage, and luxury leather photo albums.',
      features: lang === 'ar' ? ['معرض صور رقمي عالي الدقة', 'قصاصات فيديو للسوشيال ميديا', 'ألبومات صور جلدية فاخرة'] : ['High-Res Digital Gallery', 'Social Media Reel Crops', 'Heirloom Photo Albums']
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-white/5">
      {/* Ambient background glows */}
      <div className="bg-glow-blob w-[400px] h-[400px] bg-amber-600/10 top-1/3 left-0" />
      <div className="bg-glow-blob w-[350px] h-[350px] bg-rose-600/10 bottom-10 right-0" />

      <div className="container relative z-10">
        
        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4 border-amber-500/30 text-amber-400 bg-amber-950/40">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl font-display">
            {t.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 leading-relaxed">
            {t.subtext}
          </p>
        </div>

        {/* Who We Are & Story Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 glass-card relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-display">{t.storyBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight font-display">
                {t.storyTitle}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t.storyP1}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {t.storyP2}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {teamMembers.map((member, idx) => (
                    <img
                      key={idx}
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">
                    {lang === 'ar' ? 'طاقم إنتاج كامل في دبي' : 'Full UAE Production Crew'}
                  </span>
                  <span className="text-xs text-slate-400">
                    {lang === 'ar' ? 'مصورو فيديو • فوتوغراف • مخرجو درون' : 'Videographers • Photographers • Drone Pilots'}
                  </span>
                </div>
              </div>
              <button 
                onClick={openContactModal}
                className="btn-secondary py-2.5 px-5 text-xs font-semibold"
              >
                {t.workWithUs}
              </button>
            </div>
          </div>

          {/* Interactive Mission / Vision / Values Tabs Card */}
          <div className="lg:col-span-5 p-8 glass-card flex flex-col">
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <button
                onClick={() => setActivePillarTab('mission')}
                className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                  activePillarTab === 'mission' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.tabMission}
              </button>
              <button
                onClick={() => setActivePillarTab('vision')}
                className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                  activePillarTab === 'vision' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.tabEquipment}
              </button>
              <button
                onClick={() => setActivePillarTab('values')}
                className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                  activePillarTab === 'values' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.tabQuality}
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              {activePillarTab === 'mission' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">{t.missionTitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.missionDesc}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {t.missionPoints.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activePillarTab === 'vision' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <Video className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">{t.equipTitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.equipDesc}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {t.equipPoints.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activePillarTab === 'values' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">{t.qualityTitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.qualityDesc}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {t.qualityPoints.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Four-Stage Production Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-display">{t.workflowBadge}</span>
            <h3 className="text-3xl font-extrabold text-white font-display mt-1">{t.workflowTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((item, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 font-display">
                      {item.step}
                    </span>
                    <Sparkles className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  {item.features.map((feat, i) => (
                    <div key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Leadership & Crew Grid */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-display">{t.teamBadge}</span>
              <h3 className="text-3xl font-extrabold text-white font-display mt-1">{t.teamTitle}</h3>
            </div>
            <button 
              onClick={openContactModal}
              className="btn-secondary text-xs py-2.5 px-5"
            >
              {t.workWithUs}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="glass-card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-display bg-slate-900/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      {member.role.split('&')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-white font-display">{member.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-semibold text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
