import React from 'react';
import { WhoWeAre } from '../components/WhoWeAre';
import { ScrollReveal } from '../components/ScrollReveal';
import { Compass, ShieldCheck, Cpu, Radio, Target, BarChart2 } from 'lucide-react';

export const About: React.FC = () => {
  const methodology = [
    { step: '01', title: 'Data Collection & Survey Design', desc: 'Designing structured field surveys and deploying digital listening tools to capture voter opinions, local issues, and public sentiment from grassroots to social media.', icon: <Radio className="w-5 h-5 text-saffron-start" /> },
    { step: '02', title: 'Demographic Analysis', desc: 'Segmenting voter datasets by age, gender, occupation, and geographic factors to build constituency-level profiles that go beyond surface-level assumptions.', icon: <Cpu className="w-5 h-5 text-saffron-end" /> },
    { step: '03', title: 'Strategy Development', desc: 'Crafting evidence-based campaign plans, messaging frameworks, and communication strategies aligned with regional priorities and voter expectations.', icon: <Compass className="w-5 h-5 text-gold-accent" /> },
    { step: '04', title: 'Execution & Monitoring', desc: 'Deploying campaign strategies with real-time tracking dashboards, enabling rapid adjustments based on live feedback and ground-level data.', icon: <ShieldCheck className="w-5 h-5 text-[#00E5FF]" /> }
  ];

  const values = [
    { icon: <Target className="w-5 h-5 text-saffron-start" />, title: 'Evidence-Based Decisions', desc: 'Every recommendation we make is backed by data — field surveys, digital sentiment analysis, and demographic research.' },
    { icon: <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />, title: 'Confidential Operations', desc: 'All client engagements are handled with strict confidentiality. Our systems are secured with end-to-end encryption.' },
    { icon: <BarChart2 className="w-5 h-5 text-saffron-end" />, title: 'Ground-Level Accuracy', desc: 'We cross-verify digital insights with on-ground surveys to ensure our analysis reflects real voter sentiment.' },
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-saffron-start/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center gap-4">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
              About Rajtilak Analytics
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Political Strategy Powered by <br className="hidden sm:block" />
              <span className="text-saffron-gradient">Data & Research</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 max-w-xl leading-relaxed mt-2">
              We help political leaders and campaign teams make informed decisions through demographic analysis, voter sentiment tracking, and structured field operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WHO WE ARE (STATS & MAP) */}
      <WhoWeAre />

      {/* 3. OUR VALUES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-12 sm:mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071A3D]/5 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Our Approach
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
                What Guides Our Work
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 leading-relaxed">
                Our advisory is built on three core principles that ensure every engagement delivers measurable, trustworthy results.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="bg-white border border-[#071A3D]/5 rounded-3xl p-6 sm:p-8 hover:shadow-[0_12px_35px_rgba(7,26,61,0.04)] hover:border-saffron-start/20 transition-all duration-500 flex flex-col gap-4 group hover:-translate-y-1.5 h-full">
                  <div className="p-3 bg-[#F3F5F9] border border-[#071A3D]/5 rounded-xl w-fit group-hover:bg-saffron-start/10 group-hover:border-saffron-start/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-black text-[#071A3D]">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#071A3D]/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. METHODOLOGY ROADMAP */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-12 sm:mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Our Process
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
                How We Work
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 leading-relaxed">
                A structured four-step process from data collection to campaign execution and real-time monitoring.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 relative pl-6 border-l border-[#071A3D]/10 ml-4 py-4">
            {methodology.map((step, idx) => (
              <ScrollReveal key={idx} direction="left" delay={idx * 120}>
                <div className="relative group">
                  {/* Glowing connector timeline node */}
                  <span className="absolute -left-10 top-2.5 w-8 h-8 rounded-full bg-white border-2 border-saffron-start/50 flex items-center justify-center font-display font-black text-[10px] text-saffron-start group-hover:bg-saffron-start group-hover:text-white transition-all shadow-sm">
                    {step.step}
                  </span>
                  
                  <div className="p-5 sm:p-6 bg-[#F3F5F9]/30 hover:bg-[#F3F5F9]/50 border border-[#071A3D]/5 hover:border-saffron-start/20 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                    <div className="p-3 bg-white border border-[#071A3D]/5 rounded-xl w-fit shrink-0 shadow-sm">
                      {step.icon}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-display text-sm sm:text-base font-black text-[#071A3D] group-hover:text-saffron-end transition-colors">
                        {step.title}
                      </h4>
                      <p className="font-sans text-[11px] sm:text-xs text-[#071A3D]/65 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
