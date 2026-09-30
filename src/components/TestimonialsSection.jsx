import React, { useState } from 'react';
import { Star, Quote, Sparkles, ChevronDown, CheckCircle2, Camera } from 'lucide-react';

export default function TestimonialsSection({ lang, t, openContactModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const clientLogos = [
    'VOGUE WEDDINGS', 'AURORA FESTIVAL', 'WARNER MUSIC', 'CYBERPULSE', 'HARPER\'S BAZAAR', 'RED BULL LIVE', 'SONY CINEMA'
  ];

  const testimonials = [
    {
      quote: lang === 'ar' ? "غطى سمارت ستوديو مهرجاننا الموسيقي في دبي بـ 6 طواقم تصوير وطائرات درون FPV. الفيديو الترويجي الرسمي بدقة 4K حقق أكثر من 5 ملايين مشاهدة خلال 48 ساعة!" : "Smart Studio covered our 3-day outdoor music festival with 6 camera crews and an FPV drone. The official 4K aftermovie they delivered in 48 hours got over 5 million views on Instagram!",
      author: "Marcus Thorne",
      title: lang === 'ar' ? 'مدير المهرجان، أورورا لايف دبي' : 'Festival Director, Aurora Live',
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: lang === 'ar' ? 'فيديو المهرجان الموسيقي' : 'Concert & Festival Aftermovie'
    },
    {
      quote: lang === 'ar' ? "فيلم زفافنا في نخلة جميرا يبدو كأنه فيلم رومانسي هوليوودي. التقاط أدق اللحظات العفوية في غروب الشمس تم بإبداع فني مذهل." : "Our Tuscany destination wedding film looks like a Hollywood romantic movie. Sophia and Marcus captured every unscripted tear and sunset moment with pure artistry.",
      author: "Julian & Sophia Sterling",
      title: lang === 'ar' ? 'عريسان، حفل زفاف فاخر بدبي' : 'Bride & Groom, Luxury Destination Wedding',
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: lang === 'ar' ? 'قصة زفاف سينمائية' : 'Luxury Wedding Story'
    },
    {
      quote: lang === 'ar' ? "جلسة التصوير التجارية لكتالوج منتجاتنا في استوديو دبي كانت خيالية. تعاملهم مع إضاءة الاستوديو وتعديل الألوان 8K كان بسرعة ودقة عالية." : "The commercial fashion shoot Smart Studio produced for our new tech apparel lookbook was flawless. They handled the studio lighting, camera gimbals, and 8K color grading with incredible speed.",
      author: "Elena Vance",
      title: lang === 'ar' ? 'المديرة الإبداعية، سايبر بالس دبي' : 'Creative Director, CyberPulse',
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: lang === 'ar' ? 'تصوير إعلان تجاري' : 'Brand Commercial Shoot'
    }
  ];

  const faqs = [
    {
      q: lang === 'ar' ? "متى نستلم فيديو الزفاف النهائي ومعرض الصور الفوتوغرافية؟" : "How soon do we receive our final wedding video and photo gallery?",
      a: lang === 'ar' ? "نسلمك فيديو تشويقي خلال 24 ساعة من الفعالية! معرض الصور الرقمي عالي الدقة يكون جاهزاً خلال 7 أيام عمل، وفيلم الزفاف 4K خلال 2-3 أسابيع." : "We deliver a 24-hour teaser reel right after your event! The full high-resolution digital photo gallery is ready within 7 business days, and the master 4K wedding film feature is delivered within 2-3 weeks."
    },
    {
      q: lang === 'ar' ? "هل يمكن لسمارت ستوديو السفر وتغطية الفعاليات خارج دبي وفي دول الخليج؟" : "Can Smart Studio travel internationally for destination weddings and festival tours?",
      a: lang === 'ar' ? "بالتأكيد! غطى طاقمنا أعراس فاخرة ومهرجانات في دبي، أبوظبي، الرياض، أوروبا والولايات المتحدة، ونقوم بإدارة كافة اللوجستيات لنقل المعدات." : "Absolutely! Our production crews have covered destination weddings and music festival tours across Dubai, Abu Dhabi, Riyadh, Europe, and the US."
    },
    {
      q: lang === 'ar' ? "هل توفرون مقاطع الكاميرا الأساسية الخام غير المعدلة (Raw Footage)؟" : "Do you provide raw unedited video camera footage?",
      a: lang === 'ar' ? "نعم! تشمل جميع الباقات الفيديوهات المحررة بدقة عالية، ويمكن تقديم المقاطع الخام على قرص صلب خارجي SSD عند الطلب." : "Yes! All packages include full high-resolution edited deliverables, and raw camera clips can be provided on an external SSD upon request."
    },
    {
      q: lang === 'ar' ? "ما هي معدات الكاميرات والدرون المستخدمة أثناء تصوير الفعاليات؟" : "What camera equipment and drones do you use during live events?",
      a: lang === 'ar' ? "نستخدم كاميرات RED V-Raptor 8K، وكاميرات Sony FX6/FX9، وعدسات Leica & Zeiss Master Primes، وطائرات DJI FPV 4K، وإضاءة Profoto الاستوديو." : "We shoot with RED V-Raptor 8K cinema cameras, Sony FX6/FX9 multi-camera setups, Leica & Zeiss Master Prime lenses, DJI FPV 4K drones, and Profoto wireless studio strobes."
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Client Logos Ticker */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">
              {t.tickerTitle}
            </span>
          </div>
          <div className="overflow-hidden relative py-4 border-y border-white/10">
            <div className="animate-marquee flex items-center gap-12 sm:gap-16">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <span key={idx} className="text-base sm:text-lg font-black tracking-widest text-slate-500 hover:text-white transition-colors cursor-pointer font-display whitespace-nowrap">
                  📷 {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
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
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((tItem, idx) => (
            <div key={idx} className="glass-card p-8 flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: tItem.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{tItem.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-4">
                <img
                  src={tItem.avatar}
                  alt={tItem.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">{tItem.author}</h4>
                  <span className="text-xs text-amber-400 block">{tItem.title}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{tItem.project}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-display">{t.faqBadge}</span>
            <h3 className="text-3xl font-extrabold text-white font-display mt-1">
              {t.faqTitle}
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 cursor-pointer select-none transition-all"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">
                      {faq.q}
                    </h4>
                    <div className={`p-1.5 rounded-full bg-white/5 text-slate-300 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                  {isOpen && (
                    <p className="text-slate-300 text-sm mt-4 pt-4 border-t border-white/10 leading-relaxed animate-fadeIn">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
