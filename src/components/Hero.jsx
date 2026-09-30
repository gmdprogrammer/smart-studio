import React, { useEffect, useRef } from 'react';
import { ArrowRight, Camera, Video, Film, Award, Play, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero({ lang, t, onExploreWork, onStartEstimator, openContactModal }) {
  const canvasRef = useRef(null);

  // Dynamic particle canvas background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#f59e0b' : '#ec4899'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow Blobs */}
      <div className="bg-glow-blob w-[500px] h-[500px] bg-amber-600/20 top-10 left-1/4 -translate-x-1/2" />
      <div className="bg-glow-blob w-[450px] h-[450px] bg-rose-600/20 top-40 right-10" />

      {/* Particle Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Category Badge */}
            <div className="pill-badge border-amber-500/30 text-amber-400 bg-amber-950/40">
              <Camera className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
              {t.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400">
                {t.titleHighlight}
              </span> <br />
              {t.titleLine2}
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onExploreWork} 
                className="btn-primary py-3.5 px-7 text-base font-semibold group shadow-lg shadow-amber-500/25 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
              >
                {t.exploreWork}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>

              <button 
                onClick={onStartEstimator} 
                className="btn-secondary py-3.5 px-7 text-base font-semibold flex items-center gap-2 group"
              >
                {t.startEstimator}
                <ChevronRight className={`w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Key Stat Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-white/10 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-white font-display">{t.stat1Num}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{t.stat1Label}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-amber-400 font-display">{t.stat2Num}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{t.stat2Label}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-rose-400 font-display">{t.stat3Num}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{t.stat3Label}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-emerald-400 font-display">{t.stat4Num}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{t.stat4Label}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Studio Artwork & Floating Glass Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-slate-900">
              
              {/* Studio Master Artwork */}
              <img 
                src="/hero_video_camera.jpg" 
                alt="Smart Studio Professional Cinema Camera Set & Fashion Production" 
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15 flex items-center gap-3 shadow-lg animate-float">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-400/30">
                  <Video className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{t.liveBadgeTitle}</div>
                  <div className="text-sm font-bold text-white font-display">{t.liveBadgeSub}</div>
                </div>
              </div>

              {/* Bottom Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-400/40">
                    <Film className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.floatingTitle}</h4>
                    <p className="text-xs text-slate-300">{t.floatingSub}</p>
                  </div>
                </div>
                <button 
                  onClick={openContactModal}
                  className="p-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors"
                  title="Book Event Coverage"
                >
                  <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
