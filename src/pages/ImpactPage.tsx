import React from 'react';
import { Impact } from '../components/Impact';
import { ScrollReveal } from '../components/ScrollReveal';
import { CheckCircle, BarChart2, Users, MapPin, Milestone } from 'lucide-react';

interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  geography: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  desc: string;
  achievements: string[];
}

export const ImpactPage: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'PROJECT-01',
      badge: 'Campaign Advisory',
      title: 'State Assembly Election Strategy & War Room Setup',
      geography: 'Central India (Multi-Constituency)',
      metric1: '3 Constituencies',
      metric1Label: 'STRATEGIC COVERAGE',
      metric2: '10K+ Data Points',
      metric2Label: 'VOTER INSIGHTS COLLECTED',
      desc: 'Provided comprehensive campaign strategy advisory including voter demographic profiling, digital campaign planning, and real-time war room monitoring. Our team designed constituency-specific messaging frameworks and coordinated booth-level volunteer networks.',
      achievements: [
        'Built voter sentiment dashboards tracking public opinion across key demographics.',
        'Designed localized campaign messaging aligned with constituency-specific priorities.',
        'Established war room with real-time monitoring and rapid response protocols.'
      ]
    },
    {
      id: 'PROJECT-02',
      badge: 'Research & Analytics',
      title: 'Multi-State Voter Sentiment Research Study',
      geography: 'North & Central India',
      metric1: '5 Districts',
      metric1Label: 'SURVEY COVERAGE',
      metric2: '20+ Leaders',
      metric2Label: 'ADVISORY SESSIONS',
      desc: 'Conducted structured voter sentiment research using field surveys, focus group discussions, and digital listening tools. Analyzed voter behavior patterns across age groups, occupations, and geographic segments to build actionable campaign intelligence.',
      achievements: [
        'Developed demographic voter profiles using Census and field survey data.',
        'Identified key swing voter segments and their primary concern areas.',
        'Delivered comprehensive research reports with actionable strategic recommendations.'
      ]
    },
    {
      id: 'PROJECT-03',
      badge: 'Digital Strategy',
      title: 'Social Media & Digital Campaign Execution',
      geography: 'Regional Campaign (Chhattisgarh)',
      metric1: 'Full Digital Suite',
      metric1Label: 'PLATFORM COVERAGE',
      metric2: 'Content Library',
      metric2Label: 'VIDEO & GRAPHICS PRODUCED',
      desc: 'Planned and executed digital-first campaign strategy including social media content calendars, video production for YouTube and WhatsApp, community management, and targeted outreach through regional digital channels.',
      achievements: [
        'Created region-specific video content in Hindi and local dialects.',
        'Built WhatsApp broadcast networks for targeted voter communication.',
        'Managed social media growth strategy across Facebook, Instagram, and YouTube.'
      ]
    }
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center gap-4">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
              <Milestone className="w-3.5 h-3.5 animate-pulse" /> Our Work
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Project Portfolio & <br className="hidden sm:block" />
              <span className="text-saffron-gradient">Campaign Impact</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 max-w-xl leading-relaxed mt-2">
              Explore our key engagements showcasing how data-driven strategy and ground-level operations create effective campaign outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. TIMELINE MAP */}
      <Impact />

      {/* 3. CASE STUDIES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-12 sm:mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071A3D]/5 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Project Highlights
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
                Key Engagements & Deliverables
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 leading-relaxed">
                Detailed overview of how our integrated approach delivers measurable campaign outcomes.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10">
            {cases.map((c, i) => (
              <ScrollReveal key={c.id} direction="up" delay={i * 100}>
                <div className="bg-white border border-[#071A3D]/5 rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between hover:shadow-[0_12px_40px_rgba(7,26,61,0.03)] hover:border-saffron-start/20 transition-all duration-300 relative overflow-hidden group">
                  
                  <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-start/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="lg:max-w-xl flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[9px] text-[#071A3D]/45 font-black uppercase tracking-widest bg-[#F3F5F9] px-2.5 py-0.5 rounded border border-[#071A3D]/5">
                        {c.id}
                      </span>
                      <span className="text-[8px] font-display font-black text-white bg-gradient-to-r from-saffron-start to-saffron-end px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {c.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-base sm:text-lg lg:text-xl font-black text-[#071A3D] group-hover:text-saffron-end transition-colors">
                        {c.title}
                      </h3>
                      <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#071A3D]/50 font-bold uppercase tracking-wider mt-1">
                        <MapPin className="w-3.5 h-3.5 text-saffron-start" /> {c.geography}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#071A3D]/65 leading-relaxed mt-1 sm:mt-2">
                      {c.desc}
                    </p>

                    <div className="flex flex-col gap-2.5 mt-2 sm:mt-3">
                      <span className="font-display text-[9px] font-black uppercase tracking-widest text-[#071A3D]/40">Key Deliverables</span>
                      {c.achievements.map((ach, idx) => (
                        <div key={idx} className="flex gap-2.5 text-xs font-sans text-[#071A3D]/75 items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-56 border-t lg:border-t-0 lg:border-l border-[#071A3D]/5 pt-5 lg:pt-0 lg:pl-8 flex flex-row lg:flex-col justify-center gap-4 sm:gap-6 shrink-0">
                    <div className="p-3 sm:p-4 rounded-2xl bg-[#F3F5F9]/50 border border-[#071A3D]/5 flex flex-col items-center text-center gap-1.5 flex-1">
                      <BarChart2 className="w-5 h-5 text-saffron-start" />
                      <span className="font-display text-sm sm:text-base font-black text-[#071A3D]">{c.metric1}</span>
                      <span className="font-mono text-[7px] sm:text-[8px] text-[#071A3D]/45 uppercase font-bold">{c.metric1Label}</span>
                    </div>

                    <div className="p-3 sm:p-4 rounded-2xl bg-[#F3F5F9]/50 border border-[#071A3D]/5 flex flex-col items-center text-center gap-1.5 flex-1">
                      <Users className="w-5 h-5 text-saffron-end" />
                      <span className="font-display text-sm sm:text-base font-black text-[#071A3D]">{c.metric2}</span>
                      <span className="font-mono text-[7px] sm:text-[8px] text-[#071A3D]/45 uppercase font-bold">{c.metric2Label}</span>
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
