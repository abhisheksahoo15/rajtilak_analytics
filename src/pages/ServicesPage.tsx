import React from 'react';
import { Services } from '../components/Services';
import { ScrollReveal } from '../components/ScrollReveal';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const steps = [
    { num: '01', title: 'Ingestion Briefing', desc: 'Submit regional challenges through our secure interface or satellite sessions.', color: 'saffron-start' },
    { num: '02', title: 'Booth-Level Modeling', desc: 'AI engines compile historical data and voter demographics at booth unit level.', color: '[#071A3D]' },
    { num: '03', title: 'Narrative Designing', desc: 'Draft speech hooks and localized manifesto segments aligned with heritage.', color: 'gold-accent' },
    { num: '04', title: 'Active War-Room', desc: 'Continuous monitoring to adjust messaging and speech scripts dynamically.', color: 'saffron-end' },
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white">
      {/* 1. Core Services grid */}
      <Services onNavigate={onNavigate} />

      {/* 2. How We Work */}
      <section className="py-20 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <ScrollReveal>
              <span className="text-xs font-display font-black tracking-widest text-saffron-start uppercase bg-white border border-[#071A3D]/5 px-3 py-1 rounded-full inline-block">
                Deployment Path
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#071A3D] heading-underline inline-block">
                How We Deploy Strategy In Your Constituency
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/65 max-w-lg leading-relaxed mt-1 text-center">
                We coordinate our models in 4 simple stages with absolute data isolation and constant ground checks.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 120}>
                <div className="flex flex-col gap-4 text-center items-center feature-card p-6 rounded-2xl bg-white/50 border border-transparent hover:border-[#071A3D]/5 relative">
                  <div className={`w-12 h-12 rounded-full bg-${step.color}/20 border border-${step.color}/40 flex items-center justify-center font-display font-black text-${step.color} animate-pulse-ring`}>
                    {step.num}
                  </div>
                  <h3 className="font-display text-base font-black text-[#071A3D]">{step.title}</h3>
                  <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                  {/* Connecting line (hidden on last item) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#071A3D]/10 to-[#071A3D]/5" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
