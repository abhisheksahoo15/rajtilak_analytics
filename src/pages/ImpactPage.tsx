import React from 'react';
import { Impact } from '../components/Impact';
import { ScrollReveal } from '../components/ScrollReveal';
import { CheckCircle, BarChart2, Users, MapPin, Milestone } from 'lucide-react';

interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  geography: string;
  swing: string;
  turnout: string;
  desc: string;
  achievements: string[];
}

export const ImpactPage: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'CASE-UP-2026',
      badge: 'Historic Mandate',
      title: 'The Kashi-Ayodhya Infrastructure Mandate',
      geography: 'Uttar Pradesh (403 Wards)',
      swing: '+14.5% swing',
      turnout: '+8.2% turnout',
      desc: 'Fusing civilizational pride narratives with highway corridor developmental updates, our strategy bypassed traditional caste-only indices to mobilize swing cohorts across Central & Western UP.',
      achievements: [
        'Deploying localized WhatsApp micro-briefs targeting 22,000 voter groups.',
        'Real-time speech hooks customized for candidate town halls.',
        'Zero-leak coordination mapping 82,000 ground coordinates.'
      ]
    },
    {
      id: 'CASE-KA-2023',
      badge: 'Predictive Victory',
      title: 'Agrarian Welfare & Feedback Loop Integration',
      geography: 'Karnataka (224 Wards)',
      swing: '+9.8% swing',
      turnout: '+6.5% turnout',
      desc: 'Mapping irrigation demands and crop credit delays through GetSetAI listening nodes, we compiled direct feedback loops to shape targeted welfare promises in under 48 hours.',
      achievements: [
        'Doorstep ground sync crosschecking computerized voter forecasts daily.',
        'Refrigeration and solar pump subsidy narrative alignment.',
        'Booth-level candidate speech checklists deployed to 48 assemblies.'
      ]
    },
    {
      id: 'CASE-GJ-2022',
      badge: 'Welfare Consolidation',
      title: 'First-Time & Female Voter Consolidation Grid',
      geography: 'Gujarat (182 Wards)',
      swing: '+11.2% swing',
      turnout: '+7.8% turnout',
      desc: 'Identifying independent female voting patterns associated with gas cylinder delivery and piped water grids, we created direct digital outreach corridors for women leaders.',
      achievements: [
        'Outreach loops bypass household male preferences via micro-channels.',
        'Safety and education grant campaign coordination.',
        'Deployment of female ground advocates across 1,200 village circles.'
      ]
    }
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-4">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
              <Milestone className="w-3.5 h-3.5 animate-pulse" /> Track Record
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Victory Milestones & <br />
              <span className="text-saffron-gradient">Constituency Impact Logs</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 max-w-xl leading-relaxed mt-2">
              Review case study briefings showing how computational precision converted critical margins into decisive mandates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. TIMELINE MAP & radar SHOWCASE */}
      <Impact />

      {/* 3. CASE STUDIES GRID */}
      <section className="py-24 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071A3D]/5 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Campaign Case Briefs
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-bold text-[#071A3D]">
                Victory Audits & Strategy Deployments
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed">
                Detailed breakdowns of how our integrated ground sync and AI engines secured critical majorities.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-10">
            {cases.map((c, i) => (
              <ScrollReveal key={c.id} direction="up" delay={i * 100}>
                <div className="bg-white border border-[#071A3D]/5 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 justify-between hover:shadow-[0_12px_40px_rgba(7,26,61,0.03)] hover:border-saffron-start/20 transition-all duration-300 relative overflow-hidden group">
                  
                  <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-start/5 rounded-full blur-2xl pointer-events-none" />

                  {/* Left: Summary text */}
                  <div className="lg:max-w-xl flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[9px] text-[#071A3D]/45 font-black uppercase tracking-widest bg-[#F3F5F9] px-2.5 py-0.5 rounded border border-[#071A3D]/5">
                        {c.id}
                      </span>
                      <span className="text-[8px] font-display font-black text-white bg-gradient-to-r from-saffron-start to-saffron-end px-2.5 py-0.5 rounded uppercase tracking-wider animate-glow-pulse">
                        {c.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-lg sm:text-xl font-black text-[#071A3D] group-hover:text-saffron-end transition-colors">
                        {c.title}
                      </h3>
                      <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#071A3D]/50 font-bold uppercase tracking-wider mt-1">
                        <MapPin className="w-3.5 h-3.5 text-saffron-start" /> {c.geography}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed mt-2">
                      {c.desc}
                    </p>

                    {/* Achievements List */}
                    <div className="flex flex-col gap-2.5 mt-3">
                      <span className="font-display text-[9px] font-black uppercase tracking-widest text-[#071A3D]/40">Key Tactical Deployments</span>
                      {c.achievements.map((ach, idx) => (
                        <div key={idx} className="flex gap-2.5 text-xs font-sans text-[#071A3D]/75 items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Swing metrics panel */}
                  <div className="w-full lg:w-56 border-t lg:border-t-0 lg:border-l border-[#071A3D]/5 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center gap-6 shrink-0">
                    <div className="p-4 rounded-2xl bg-[#F3F5F9]/50 border border-[#071A3D]/5 flex flex-col items-center text-center gap-1.5">
                      <BarChart2 className="w-5 h-5 text-saffron-start" />
                      <span className="font-display text-lg font-black text-[#071A3D]">{c.swing}</span>
                      <span className="font-mono text-[8px] text-[#071A3D]/45 uppercase font-bold">VOTER SWING CONVERSION</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F3F5F9]/50 border border-[#071A3D]/5 flex flex-col items-center text-center gap-1.5">
                      <Users className="w-5 h-5 text-saffron-end" />
                      <span className="font-display text-lg font-black text-[#071A3D]">{c.turnout}</span>
                      <span className="font-mono text-[8px] text-[#071A3D]/45 uppercase font-bold">BOOTH MOBILIZATION SHIFT</span>
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
