import React, { useState } from 'react';
import { Camera, ArrowRight, Video, Sparkles, Star } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function PortfolioSection({ lang, t, openContactModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    { key: 'All', label: t.all },
    { key: 'Concerts & Festivals', label: t.concerts },
    { key: 'Weddings & Marriages', label: t.weddings },
    { key: 'Brand & Commercial', label: t.brand },
    { key: 'Fashion & Editorial', label: t.fashion }
  ];

  const projects = [
    {
      id: 1,
      title: lang === 'ar' ? 'مهرجان أورورا الموسيقي دبي 2026 — المسرح الرئيسي والفيديو الحماسي' : 'Aurora Music Festival 2026 — Mainstage & Live Aftermovie',
      subtitle: lang === 'ar' ? 'تغطية 3 أيام من المهرجان الحي، تصوير ليزر المسرح، وتصوير جوي بطائرات FPV.' : '3-Day live music festival coverage, stage laser videography, and FPV drone flythroughs.',
      categoryKey: 'Concerts & Festivals',
      category: t.concerts,
      client: 'Aurora Live Productions (Dubai)',
      image: '/concert_coverage.jpg',
      metric: lang === 'ar' ? '+5 مليون مشاهدة • مونتاج 4K متعدد الكاميرات' : '5M+ Reel Views • 4K Multi-Cam Cut',
      challenge: lang === 'ar' ? 'توثيق إضاءة المسرح الديناميكية والحضور البالغ 40,000 شخص عبر 3 مسارح خارجية في أجواء ليلية.' : 'Capturing dynamic stage lighting, 40,000 energetic festival attendees, and rapid artist set transitions across 3 outdoor stages in low-light night environments.',
      solution: lang === 'ar' ? 'تم تشغيل 6 مصورين بكاميرات Sony FX6/FX9، وكاميرات RED 8K، وطائرات FPV لتقديم فيديو ترويجي سينمائي مدته 3 دقائق.' : 'Deployed 6 Sony FX6/FX9 camera operators, 2 RED V-Raptor stage rigs, and dual night-vision FPV drones to deliver a high-octane 3-minute official aftermovie.',
      tags: ['8K RED V-Raptor', 'Sony FX9 Multi-Cam', 'FPV Drone', 'DaVinci Resolve HDR', 'Dolby Audio']
    },
    {
      id: 2,
      title: lang === 'ar' ? 'منتجع الريفيرا دبي — فيلم وفوتوغرافي زفاف فاخر' : 'The Riviera Estate — Luxury Wedding & Marriage Film',
      subtitle: lang === 'ar' ? 'تصوير فوتوغرافي في غروب الشمس، قصة العروس الودية، وفيلم زفاف سينمائي.' : 'Sunset golden hour photography, candid bridal story, and heirloom wedding film trailer.',
      categoryKey: 'Weddings & Marriages',
      category: t.weddings,
      client: 'Julian & Sophia (Palm Jumeirah, Dubai)',
      image: '/wedding_coverage.jpg',
      metric: lang === 'ar' ? 'نُشر في مجلة Vogue الأعراس' : 'Featured in Vogue Weddings',
      challenge: lang === 'ar' ? 'توثيق حفل زفاف ملكي ممتد 3 أيام مع أكثر من 300 ضيف من مختلف دول العالم في الفلل الفاخرة.' : 'Documenting an opulent 3-day destination wedding with over 300 international guests across historic Italian villas and olive groves.',
      solution: lang === 'ar' ? 'تم إنتاج فيلم روائي رومانسي باستخدام عدسات Leica Master Primes التقاط اللحظات التلقائية والافتتاحية.' : 'Crafted a romantic narrative film shot on Leica Master Primes, capturing intimate unscripted moments, fireworks, and sunset vow exchanges in breathtaking HDR.',
      tags: ['Leica Master Primes', 'Sony A7SIII', 'Golden Hour Photo', 'Handcrafted Album', '4K Drone']
    },
    {
      id: 3,
      title: lang === 'ar' ? 'جلسة تصوير إعلانات سايبر بالس دبي — كتالوج الأزياء' : 'CyberPulse Commercial Shoot — High-Fashion Lookbook',
      subtitle: lang === 'ar' ? 'فيديو كواليس العلامة التجارية، تصوير استوديو بالإضاءة الاحترافية، وستوريات الميديا.' : 'Behind-the-scenes brand video, studio strobe photography, and social campaign reels.',
      categoryKey: 'Brand & Commercial',
      category: t.brand,
      client: 'CyberPulse Wearables (Dubai Mall)',
      image: '/brand_shoot.jpg',
      metric: lang === 'ar' ? '+380% ارتفاع المبيعات' : '+380% E-Commerce Sales Lift',
      challenge: lang === 'ar' ? 'ابتكار طابع بصري استوديو يعكس ملمس الأقمشة المعدنية والأجهزة الذكية المستقبلية.' : 'Designing a sleek studio visual aesthetic that highlights metallic textile textures and futuristic smart wearable devices.',
      solution: lang === 'ar' ? 'تم تصميم نظام إضاءة استوديو Profoto، ومتحركات الكاميرا المنزلقة، وتصوير بورتفوليو عالي الدقة للإعلانات.' : 'Engineered a high-contrast Profoto studio lighting array, motorized camera slider movements, and high-frequency portrait photography for global billboards.',
      tags: ['ARRI Alexa Mini', 'Profoto Pro-11 Lighting', 'Lookbook Photo', 'Color Grading', 'Retouching']
    },
    {
      id: 4,
      title: lang === 'ar' ? 'اختبار معدات السينما ببيفرلي هيلز دبي — إنتاج 8K' : 'Hollywood Cinema Rig Studio Test — 8K Production Showcase',
      subtitle: lang === 'ar' ? 'كواليس الكاميرات الاستوديو، تجهيزات السينما، وإخراج أفلام الموضة الفاخرة.' : 'Behind-the-camera studio setup, cinema rigging, and high-end fashion film direction.',
      categoryKey: 'Fashion & Editorial',
      category: t.fashion,
      client: 'Smart Studio Originals',
      image: '/hero_video_camera.jpg',
      metric: lang === 'ar' ? 'جائزة أفضل تصوير سينمائي' : 'Award Winner — Best Cinematography',
      challenge: lang === 'ar' ? 'إبراز قوة بدقة حساس كاميرا RED 8K وانعكاسات العدسات السينمائية تحت إضاءة استوديو متعددة المفاتيح.' : 'Demonstrating the raw power of RED 8K sensor resolution and anamorphic lens flares under complex multi-key studio lighting.',
      solution: lang === 'ar' ? 'تصوير فيلم موضة دقة 8K يبرز عمق الألوان، نضارة البشرة، وحركة الكاميرا السينمائية.' : 'Filmed an exquisite 8K fashion editorial reel highlighting color depth, skin tone fidelity, and cinematic camera movement.',
      tags: ['8K Anamorphic', 'RED Cinema Rig', 'Studio Lighting', 'HDR Master', 'Motion Control']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeFilter);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="container relative z-10">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <div className="pill-badge mb-3 border-amber-500/30 text-amber-400 bg-amber-950/40">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              {t.title}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat.key
                    ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden group cursor-pointer flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                {/* Image & Metric Badge */}
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-bold text-white bg-amber-950/80 px-3 py-1.5 rounded-lg backdrop-blur-md border border-amber-500/30 flex items-center gap-1.5 w-max">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Tags & View Arrow */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10 mt-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  {t.viewDetails}
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          lang={lang}
          t={t}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          openContactModal={openContactModal}
        />
      )}
    </section>
  );
}
