import React, { useState } from 'react';
import { X, Calendar, Clock, Send, Sparkles, CheckCircle2, Camera, Video, Film, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ lang, t, isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || (lang === 'ar' ? 'توثيق قصة الزفاف والأعراس' : 'Luxury Wedding & Marriage Story'),
    eventLocation: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM PST',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect executed');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card max-w-2xl w-full p-6 sm:p-8 relative bg-slate-950 border-white/20 shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="pill-badge mb-2 border-amber-500/30 text-amber-400 bg-amber-950/40">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {t.title}
              </h3>
              <p className="text-slate-300 text-xs mt-1">
                {t.subtext}
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">{t.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'مثال: أحمد وسارة' : 'e.g. Sarah & Michael'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">{t.emailLabel}</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">{t.phoneLabel}</label>
                <input
                  type="text"
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">{t.typeLabel}</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Luxury Wedding & Marriage Story">{lang === 'ar' ? 'توثيق قصة الزفاف والأعراس الفاخرة' : 'Luxury Wedding & Marriage Story'}</option>
                  <option value="Concert & Live Music Festival">{lang === 'ar' ? 'تغطية الحفلات والمهرجانات الحية' : 'Concert & Live Music Festival'}</option>
                  <option value="Brand Commercial & Campaign Shoot">{lang === 'ar' ? 'إعلان تجاري وجلسة تصوير ماركة' : 'Brand Commercial & Campaign Shoot'}</option>
                  <option value="High-Fashion Runway & Lookbook">{lang === 'ar' ? 'عروض الأزياء وكتالوج الموضة' : 'High-Fashion Runway & Lookbook'}</option>
                  <option value="Corporate Summit & Gala">{lang === 'ar' ? 'مؤتمرات وملتقيات الشركات' : 'Corporate Summit & Gala'}</option>
                </select>
              </div>

            </div>

            {/* Schedule & Location Row */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-bold text-amber-400 font-display flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {t.dateLabel}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={t.venuePlaceholder}
                    value={formData.eventLocation}
                    onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Brief Input */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">{t.visionLabel}</label>
              <textarea
                rows="3"
                placeholder={lang === 'ar' ? 'اكتب تفاصيل فعاليتك أو طلبات الدرون والتصوير الخاصة...' : 'Tell us about your event timeline, drone requirements, or shot preferences...'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white"
            >
              {t.submitBtn}
              <Send className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white font-display">
                {t.confirmedTitle}
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                {t.confirmedSub}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{lang === 'ar' ? 'تاريخ الحجز:' : 'Reserved Event Date:'}</span>
                <span className="font-bold text-white">{formData.date}</span>
              </div>
              {formData.eventLocation && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{lang === 'ar' ? 'الموقع / القاعة:' : 'Venue Location:'}</span>
                  <span className="font-bold text-amber-400">{formData.eventLocation}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{lang === 'ar' ? 'البريد الإلكتروني:' : 'Confirmation Sent To:'}</span>
                <span className="font-bold text-cyan-400">{formData.email}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary py-3 px-8 text-xs font-semibold bg-gradient-to-r from-amber-500 to-rose-600 text-white"
            >
              {t.returnBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
