import React from 'react';
import { WhoWeAre } from '../components/WhoWeAre';
import { ScrollReveal } from '../components/ScrollReveal';
import { Compass, ShieldCheck, Cpu, Users, Award, Radio } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatarText: string;
  color: string;
}

export const About: React.FC = () => {
  const council: TeamMember[] = [
    {
      name: 'Rajeshwar Tripathii',
      role: 'Chief Election Strategist',
      credentials: '22+ National & State Campaigns',
      bio: 'Expert in narrative alignment, coalition dynamics, and regional swing mechanics. Formerly advised three national cabinets.',
      avatarText: 'RT',
      color: 'from-saffron-start to-saffron-end'
    },
    {
      name: 'Col. Vikram Dev (Retd.)',
      role: 'Director of Ground Operations',
      credentials: 'Ex-Special Forces, Booth Sync Architect',
      bio: 'Pioneered our Ground-Truth validation methodologies, training over 80,000 booth-level coordinators across India.',
      avatarText: 'VD',
      color: 'from-navy-royal to-blue-900'
    },
    {
      name: 'Dr. Ananya Iyer',
      role: 'Head of Data Science & NLP',
      credentials: 'Ph.D. in Computational Linguistics, MIT',
      bio: 'Designed the GetSetAI sentiment engine, compiling semantic dictionaries mapping local dialects and idioms.',
      avatarText: 'AI',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Smita Deshmukh',
      role: 'Director of Demographic Research',
      credentials: '15 Years Social Policy Audits',
      bio: 'Specialist in household utility indexes, maternal welfare consolidations, and independent female voting blocs.',
      avatarText: 'SD',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const methodology = [
    { step: '01', title: 'Linguistic Ingestion', desc: 'Deploying secure NLP listening nodes to capture local dialogues, slangs, and grievance metrics from tea stalls to WhatsApp.', icon: <Radio className="w-5 h-5 text-saffron-start" /> },
    { step: '02', title: 'Demographic Modeling', desc: 'Clustering voter datasets by age, gender, and welfare receipt levels, bypassing traditional caste-only indices.', icon: <Cpu className="w-5 h-5 text-saffron-end" /> },
    { step: '03', title: 'Narrative Designing', desc: 'Crafting localized manifestos and speech cadence maps that align candidate branding with regional heritage and pride.', icon: <Compass className="w-5 h-5 text-gold-accent" /> },
    { step: '04', title: 'War Room Calibration', desc: 'Simulating voter swing responses to adjust messaging drafts and dispatch checklists in under 24 hours.', icon: <ShieldCheck className="w-5 h-5 text-[#00E5FF]" /> }
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
              <Users className="w-3.5 h-3.5 animate-pulse" /> The Command Deck
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              The Advisory Council Behind <br />
              <span className="text-saffron-gradient">Democratic Coronation</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-xs sm:text-sm text-[#071A3D]/60 max-w-xl leading-relaxed mt-2">
              We translate raw demographic datasets into unified victory strategies, matching computational accuracy with civilizational wisdom.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WHO WE ARE (STATS & MAP) */}
      <WhoWeAre />

      {/* 3. LEADERSHIP COUNCIL */}
      <section className="py-24 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071A3D]/5 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Executive Leadership
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-bold text-[#071A3D]">
                The Leadership Council
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed">
                Meet the veteran political advisors, data compilers, and operations commanders directing our regional teams.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {council.map((member, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="bg-white border border-[#071A3D]/5 rounded-3xl p-6 hover:shadow-[0_12px_35px_rgba(7,26,61,0.04)] hover:border-saffron-start/20 transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1.5">
                  <div className="flex flex-col gap-4">
                    
                    {/* Glowing Avatar Initials */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center font-display font-black text-sm text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      {member.avatarText}
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-display text-base font-black text-[#071A3D]">
                        {member.name}
                      </h4>
                      <span className="font-mono text-[9px] text-saffron-start font-black uppercase tracking-wider mt-0.5">
                        {member.role}
                      </span>
                    </div>

                    <p className="font-sans text-[11px] text-[#071A3D]/65 leading-relaxed">
                      {member.bio}
                    </p>

                  </div>

                  <div className="border-t border-[#071A3D]/5 pt-4 mt-6 flex items-center justify-between text-[8.5px] font-mono text-[#071A3D]/40 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-gold-accent" /> {member.credentials}</span>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. METHODOLOGY CALIBRATION ROADMAP */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Execution Blueprint
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-bold text-[#071A3D]">
                GetSetAI Calibration Roadmap
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed">
                How we coordinate data, narrative testing, and field execution to calibrate majorities.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-8 relative pl-6 border-l border-[#071A3D]/10 ml-4 py-4">
            {methodology.map((step, idx) => (
              <ScrollReveal key={idx} direction="left" delay={idx * 120}>
                <div className="relative group">
                  {/* Glowing connector timeline node */}
                  <span className="absolute -left-10 top-2.5 w-8 h-8 rounded-full bg-white border-2 border-saffron-start/50 flex items-center justify-center font-display font-black text-[10px] text-saffron-start group-hover:bg-saffron-start group-hover:text-white transition-all shadow-sm">
                    {step.step}
                  </span>
                  
                  <div className="p-6 bg-[#F3F5F9]/30 hover:bg-[#F3F5F9]/50 border border-[#071A3D]/5 hover:border-saffron-start/20 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <div className="p-3 bg-white border border-[#071A3D]/5 rounded-xl w-fit shrink-0 shadow-sm">
                      {step.icon}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-display text-base font-black text-[#071A3D] group-hover:text-saffron-end transition-colors">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed">
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
