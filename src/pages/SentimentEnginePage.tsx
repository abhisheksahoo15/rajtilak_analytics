import React from 'react';
import { AIEngine } from '../components/AIEngine';
import { ScrollReveal } from '../components/ScrollReveal';
import { Cpu, Heart, Settings, Activity, CheckSquare } from 'lucide-react';

interface DiagnosticMetric {
  label: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
}

export const SentimentEnginePage: React.FC = () => {
  const diagnostics: DiagnosticMetric[] = [
    {
      label: 'Linguistic Ingestion Speed',
      value: '8,420 msgs / sec',
      sub: 'ACTIVE COMMENTS & FEED STREAMS',
      icon: <Activity className="w-5 h-5 text-[#00E5FF] animate-pulse" />
    },
    {
      label: 'Neural Training Epochs',
      value: '14,200 Epochs',
      sub: 'CALIBRATED DAILY AT MIDNIGHT',
      icon: <Cpu className="w-5 h-5 text-saffron-start" />
    },
    {
      label: 'NLP Dictionary Accuracy',
      value: '98.7% Precision',
      sub: 'CROSS-VALIDATED WITH GROUND SYNC',
      icon: <CheckSquare className="w-5 h-5 text-emerald-500" />
    }
  ];

  const features = [
    { icon: <Heart className="w-5 h-5 text-saffron-start" />, title: 'Sentiment Index', desc: 'Tracks whether discussions around policies trigger pride, dissatisfaction, or neutrality.', bgColor: 'saffron-start' },
    { icon: <Cpu className="w-5 h-5 text-[#071A3D]" />, title: 'Voter Cohorts', desc: 'Groups voters by shared needs — youth jobs, rural water, senior pensions — for target messaging.', bgColor: '[#071A3D]' },
    { icon: <Settings className="w-5 h-5 text-saffron-end" />, title: 'Swing Modelling', desc: 'Calculates how small welfare changes trigger swing voter conversions for ground targets.', bgColor: 'saffron-end' },
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-saffron-start/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-4">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
              <Cpu className="w-3.5 h-3.5 animate-pulse" /> Neural Ingestor
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              GetSetAI Predictive <br />
              <span className="text-saffron-gradient">Sentiment Engine Console</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 max-w-xl leading-relaxed mt-2">
              Deep semantic evaluation of voter expectations, dissatisfaction sources, and aspiration vectors using custom NLP regional dictionaries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. NEURAL NET CANVAS & GRAPH */}
      <AIEngine />

      {/* 3. SYSTEM DIAGNOSTICS DECK */}
      <section className="py-16 bg-[#071A3D] text-white border-t border-b border-saffron-start/15 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-saffron-start/35 text-[10px] font-black tracking-widest uppercase text-saffron-end w-fit font-display">
                Real-Time Diagnostics
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white">
                Engine Telemetry & Statistics
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diagnostics.map((diag, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-6 bg-white/5 border border-white/5 rounded-3xl flex flex-col gap-4 relative overflow-hidden hover:border-[#00E5FF]/20 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-start/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] font-black uppercase tracking-widest text-white/40">{diag.label}</span>
                    <div className="p-2 bg-white/5 rounded-xl border border-white/5">{diag.icon}</div>
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <span className="font-display text-2xl font-black text-white">{diag.value}</span>
                    <span className="font-mono text-[8px] text-saffron-start font-black uppercase tracking-widest">{diag.sub}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TECH IN PLAIN WORDS (FEATURES) */}
      <section className="py-24 bg-[#F3F5F9]/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <ScrollReveal>
              <span className="text-xs font-display font-black tracking-widest text-saffron-start uppercase bg-white border border-[#071A3D]/5 px-3 py-1 rounded-full inline-block">
                Tech In Plain Words
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#071A3D] heading-underline inline-block">
                How The Prediction Matrix Serves You
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/65 max-w-lg leading-relaxed mt-1 text-center">
                We translate billions of online comments, local dialogues, and voter responses into clear strategic guides.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className="p-8 bg-white border border-[#071A3D]/5 rounded-2xl flex flex-col gap-4 feature-card relative">
                  <div className={`p-3 bg-${feature.bgColor}/15 border border-${feature.bgColor}/20 rounded-xl w-fit`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-base font-black text-[#071A3D]">{feature.title}</h3>
                  <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
