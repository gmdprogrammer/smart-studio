import React from 'react';
import { X, ExternalLink, Award, CheckCircle2, Camera, Video, Film, Play } from 'lucide-react';

export default function ProjectModal({ lang, t, project, onClose, openContactModal }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative bg-slate-950 border-white/20 shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          
          {/* Header Badge & Title */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-display bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40">
                {project.category}
              </span>
              <span className="text-xs font-medium text-slate-400">{project.client}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group max-h-[380px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-bold text-white bg-slate-900/80 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                {project.metric}
              </span>
            </div>
          </div>

          {/* Grid Details: Concept vs Execution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-400" />
                {t.modalChallenge}
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2">
              <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Film className="w-4 h-4 text-emerald-400" />
                {t.modalSolution}
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech & Gear Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display mb-3">
              {t.modalGear}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-medium text-slate-200 bg-white/10 border border-white/15 px-3 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                openContactModal(`Book Event Coverage similar to ${project.title}`);
              }}
              className="btn-primary text-xs py-3 px-6 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
            >
              {t.modalBook}
            </button>
            <button
              onClick={() => alert(`Full Video Reel Preview for ${project.title} loading!`)}
              className="btn-secondary text-xs py-3 px-6 flex items-center gap-2"
            >
              {t.modalWatch}
              <Play className="w-4 h-4 text-amber-400" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
