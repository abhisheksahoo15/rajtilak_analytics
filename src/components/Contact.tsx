import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Candidate / Coordinator',
    constituency: '',
    service: 'Political Strategy',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.constituency) return;

    setIsSubmitting(true);
    setSubmitStatus('scanning');

    // Simulate futuristic data encoding/encryption before sending
    setTimeout(() => {
      setSubmitStatus('complete');
      setIsSubmitting(false);
      
      // Reset form after a delay
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          name: '',
          role: 'Candidate / Coordinator',
          constituency: '',
          service: 'Political Strategy',
          details: '',
        });
      }, 3000);
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden border-t border-[#071A3D]/5">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-navy-royal/5 rounded-full blur-[180px] opacity-45 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Strategy Room Ingestion
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D] leading-tight">
            Book <span className="text-saffron-gradient">Strategy Session</span>
          </h2>
          <p className="font-sans text-[#071A3D]/60 max-w-md text-sm leading-relaxed">
            Initialize an encrypted channel directly with our chief campaign architect. All briefings remain strictly confidential.
          </p>
        </div>

        {/* Strategy Booking Form */}
        <div className="glass-panel-glow p-8 md:p-10 rounded-3xl border-[#071A3D]/10 shadow-2xl relative">
          
          {submitStatus === 'scanning' && (
            <div className="absolute inset-0 bg-white/95 z-20 rounded-3xl flex flex-col items-center justify-center gap-4 animate-fade-in font-mono text-xs text-[#071A3D]">
              <Sparkles className="w-12 h-12 text-saffron-start animate-bounce" />
              <div className="flex flex-col items-center gap-1.5 mt-2">
                <span>ENCRYPTING DE-IDENTIFIED BRIEFING...</span>
                <span className="text-[10px] text-[#071A3D]/50">SECURE SHELL PIPELINE INGESTION v4.22</span>
              </div>
              <div className="w-[180px] h-1.5 bg-[#F3F5F9] rounded-full overflow-hidden border border-[#071A3D]/5 mt-2">
                <div className="h-full bg-gradient-to-r from-saffron-start to-saffron-end rounded-full animate-[growBar_2.5s_ease-out_forwards]" />
              </div>
            </div>
          )}

          {submitStatus === 'complete' && (
            <div className="absolute inset-0 bg-white/95 z-20 rounded-3xl flex flex-col items-center justify-center gap-4 animate-fade-in font-display text-center p-6">
              <CheckCircle className="w-12 h-12 text-emerald-600 animate-pulse" />
              <h3 className="text-xl font-bold text-[#071A3D] mt-4">Strategy Session Initialized</h3>
              <p className="font-sans text-xs text-[#071A3D]/60 max-w-sm leading-relaxed mt-1">
                Your credentials have been securely encoded. Our liaison commander will establish satellite contact within 180 minutes.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Input Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Leader or Organisation Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajvardhan Singh"
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3.5 text-sm text-[#071A3D] focus:outline-none focus:border-saffron-start focus:ring-1 focus:ring-saffron-start transition-all placeholder-[#071A3D]/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Political Role
                </label>
                <select
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value })}
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3.5 text-sm text-[#071A3D]/80 focus:outline-none focus:border-saffron-start transition-all"
                >
                  <option value="Candidate / Coordinator" className="bg-white text-[#071A3D]">Candidate / Coordinator</option>
                  <option value="Party Representative" className="bg-white text-[#071A3D]">Party Representative</option>
                  <option value="Strategy Liaison Officer" className="bg-white text-[#071A3D]">Strategy Liaison Officer</option>
                  <option value="Independent Leader" className="bg-white text-[#071A3D]">Independent Leader</option>
                </select>
              </div>
            </div>

            {/* Input Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Target Constituency / Region
                </label>
                <input
                  type="text"
                  required
                  value={formData.constituency}
                  onChange={e => setFormData({ ...formData, constituency: e.target.value })}
                  placeholder="e.g. Varanasi (UP)"
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3.5 text-sm text-[#071A3D] focus:outline-none focus:border-saffron-start focus:ring-1 focus:ring-saffron-start transition-all placeholder-[#071A3D]/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Service Area
                </label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3.5 text-sm text-[#071A3D]/80 focus:outline-none focus:border-saffron-start transition-all"
                >
                  <option value="Political Strategy" className="bg-white text-[#071A3D]">Political Strategy</option>
                  <option value="Election Campaign Management" className="bg-white text-[#071A3D]">Election Campaign Management</option>
                  <option value="Booth Analytics" className="bg-white text-[#071A3D]">Booth Analytics</option>
                  <option value="Public Sentiment Analysis" className="bg-white text-[#071A3D]">Public Sentiment Analysis</option>
                  <option value="Leader Branding" className="bg-white text-[#071A3D]">Leader Branding</option>
                </select>
              </div>
            </div>

            {/* Input Textarea Details */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                Brief Campaign Objectives (Encrypted Details)
              </label>
              <textarea
                rows={4}
                value={formData.details}
                onChange={e => setFormData({ ...formData, details: e.target.value })}
                placeholder="Briefly state key challenges or target outcomes..."
                className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3.5 text-sm text-[#071A3D] focus:outline-none focus:border-saffron-start focus:ring-1 focus:ring-saffron-start transition-all resize-none placeholder-[#071A3D]/40"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="magnetic-btn w-full mt-4 bg-gradient-to-r from-saffron-start to-saffron-end py-4 rounded-xl font-display text-xs font-bold uppercase tracking-widest text-white hover:shadow-[0_0_25px_rgba(255,106,0,0.22)] flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Ingest Strategic Briefing
            </button>

          </form>
        </div>

      </div>
      
      <style>{`
        @keyframes growBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};
