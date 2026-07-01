import React from 'react';
import { WarRoom } from '../components/WarRoom';
import { ScrollReveal } from '../components/ScrollReveal';
import { Info, ShieldAlert, Bell } from 'lucide-react';

interface StrategyDirective {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  details: string;
}

export const WarRoomPage: React.FC = () => {
  const directives: StrategyDirective[] = [
    {
      id: 'DIR-012',
      badge: 'Immediate Action',
      badgeColor: 'bg-rose-500 text-white border-rose-600',
      title: 'Counter-Narrative Broadcast',
      details: 'Deploy regional WhatsApp micro-videos in Wards 14-22 contesting municipal drainage delay claims. Sync message with Phase-2 municipal approvals.'
    },
    {
      id: 'DIR-015',
      badge: 'Direct Outreach',
      badgeColor: 'bg-amber-400 text-[#071A3D] border-amber-500',
      title: 'Agrarian Beneficiary Check',
      details: 'Booth agents in Rural Sector C must verify solar pump pipeline distribution logs directly with household panels. Latency limit: 12 hours.'
    },
    {
      id: 'DIR-019',
      badge: 'Local Pride Calibration',
      badgeColor: 'bg-[#00E5FF] text-[#071A3D] border-navy-glow/30',
      title: 'Heritage Hub Local Launch',
      details: 'Align candidate speech cards for tomorrow\'s market rally with the Kashi weaver cooperative subsidy updates. Emphasize legacy preservation.'
    }
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-saffron-start/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
                <ShieldAlert className="w-3.5 h-3.5 animate-pulse" /> Command Deck
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Exclusive Campaign <br />
                <span className="text-saffron-gradient">War Room Console</span>
              </h1>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 font-bold uppercase tracking-wider h-fit animate-breathe shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              SECURE PIPELINE STABLE
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WAR ROOM DASHBOARD INTERFACE */}
      <WarRoom />

      {/* 3. STRATEGIC FIELD DIRECTIVES */}
      <section className="py-24 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16 max-w-xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071A3D]/5 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit font-display">
                Active Orders
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-bold text-[#071A3D]">
                Strategic Field Directives
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed">
                Live actionable directives dispatched to district campaign managers and coordinate centers.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directives.map((dir, idx) => (
              <ScrollReveal key={dir.id} direction="up" delay={idx * 100}>
                <div className="bg-white border border-[#071A3D]/5 rounded-3xl p-6 hover:shadow-[0_10px_30px_rgba(7,26,61,0.03)] hover:border-saffron-start/20 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    
                    <div className="flex justify-between items-center border-b border-[#071A3D]/5 pb-3">
                      <span className="font-mono text-[9px] text-[#071A3D]/40 font-black uppercase tracking-wider">{dir.id}</span>
                      <span className={`text-[8.5px] font-display font-black uppercase tracking-widest px-2.5 py-0.5 rounded-lg border shadow-sm ${dir.badgeColor}`}>
                        {dir.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-black text-[#071A3D] group-hover:text-saffron-end transition-colors duration-300">
                      {dir.title}
                    </h4>

                    <p className="font-sans text-[11px] text-[#071A3D]/65 leading-relaxed">
                      {dir.details}
                    </p>

                  </div>

                  <span className="text-[9px] font-mono text-[#071A3D]/40 mt-6 pt-4 border-t border-[#071A3D]/5 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <Bell className="w-3.5 h-3.5 text-saffron-start" /> Dispatched via GetSetAI E2EE
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. USER GUIDE */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-5">
          <ScrollReveal>
            <h3 className="font-display text-sm font-black text-[#071A3D] uppercase tracking-widest flex items-center gap-2 heading-underline">
              <Info className="w-4 h-4 text-saffron-start" />
              How To Read This Console
            </h3>
          </ScrollReveal>
          <ul className="list-disc pl-5 font-sans text-xs text-[#071A3D]/65 flex flex-col gap-3 leading-relaxed">
            {[
              { bold: 'Constituency Heatmap:', text: 'Click any constituency card to stream its demographic and sentiment datasets.' },
              { bold: 'Voter Sentiment:', text: 'Net approval percentage. Above 60% represents solid voter containment.' },
              { bold: 'Demographics Tab:', text: 'Inspects dominant electorates. Formulate manifestos prioritizing their needs.' },
              { bold: 'Social Listening:', text: 'Active town hall feedback loops. Adjust candidate speeches for rallies instantly.' },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="left" delay={i * 80}>
                <li>
                  <strong>{item.bold}</strong> {item.text}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};
