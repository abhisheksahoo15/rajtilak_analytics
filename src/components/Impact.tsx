import React, { useState } from 'react';
import { Award, Compass } from 'lucide-react';

interface MilestoneItem {
  year: string;
  title: string;
  location: string;
  result: string;
  details: string;
  hubs: { x: number; y: number; name: string }[];
}

export const Impact: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const milestones: MilestoneItem[] = [
    {
      year: '2026',
      title: 'State Assembly Campaign Advisory',
      location: 'Central India Operations',
      result: 'Comprehensive Strategy Delivered',
      details: 'Provided end-to-end campaign strategy advisory including voter demographic profiling, constituency-level sentiment mapping, digital campaign planning, and booth-level mobilization frameworks for state assembly elections.',
      hubs: [
        { x: 230, y: 150, name: 'Delhi NCR' },
        { x: 280, y: 210, name: 'Central India' },
      ],
    },
    {
      year: '2025',
      title: 'Voter Sentiment Research Study',
      location: 'Multi-State Research',
      result: '10,000+ Data Points Analyzed',
      details: 'Conducted large-scale voter sentiment research across multiple constituencies using field surveys, digital listening tools, and demographic analysis to build predictive voter behavior models.',
      hubs: [
        { x: 210, y: 460, name: 'South India' },
        { x: 280, y: 210, name: 'North India' },
      ],
    },
    {
      year: '2024',
      title: 'Digital Campaign Strategy Deployment',
      location: 'Regional Campaign Support',
      result: 'Multi-Platform Strategy Executed',
      details: 'Designed and executed targeted digital campaign strategies including social media content planning, WhatsApp broadcast coordination, and video narrative production for regional political campaigns.',
      hubs: [
        { x: 160, y: 360, name: 'West India' },
        { x: 275, y: 180, name: 'North India' },
      ],
    },
    {
      year: '2023',
      title: 'War Room Operations Setup',
      location: 'Chhattisgarh HQ',
      result: 'Real-Time Monitoring Activated',
      details: 'Established dedicated election war room with real-time dashboards, volunteer coordination systems, and rapid response frameworks for monitoring and adjusting campaign strategies.',
      hubs: [
        { x: 250, y: 310, name: 'Chhattisgarh' },
      ],
    },
  ];

  return (
    <section id="impact" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-navy-royal/5 rounded-full blur-[170px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-saffron-start/5 rounded-full blur-[150px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-12 sm:gap-16">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#071A3D]/10 pb-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
              Our Work
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071A3D]">
              Project <span className="text-saffron-gradient">Milestones</span>
            </h2>
          </div>
          <p className="font-sans text-[#071A3D]/55 max-w-sm text-sm">
            Key projects and advisory engagements demonstrating our capabilities in political strategy and campaign management.
          </p>
        </div>

        {/* Impact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* LEFT: Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            
            {/* Timeline buttons */}
            <div className="flex justify-between items-center bg-[#F3F5F9]/80 p-1.5 sm:p-2 rounded-2xl border border-[#071A3D]/10 relative overflow-hidden">
              {milestones.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`flex-1 py-2.5 sm:py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-widest rounded-xl transition-all duration-300 relative z-10 cursor-pointer ${
                    selectedMilestone === idx
                      ? 'bg-gradient-to-r from-saffron-start to-saffron-end text-white shadow-lg'
                      : 'text-[#071A3D]/50 hover:text-[#071A3D]/70'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>

            {/* Milestone Details Card */}
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border-saffron-start/20 shadow-2xl relative flex flex-col gap-5 sm:gap-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-saffron-start/20 border border-saffron-start/30">
                    <Award className="w-5 h-5 text-saffron-start" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#071A3D]">
                    {milestones[selectedMilestone].title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-saffron-start tracking-wider uppercase bg-[#F3F5F9] px-2.5 py-1 rounded border border-[#071A3D]/10">
                  {milestones[selectedMilestone].year}
                </span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-saffron-start/40 pl-4">
                <span className="text-[10px] text-[#071A3D]/45 uppercase tracking-widest font-semibold">Focus Area</span>
                <span className="text-sm font-semibold text-[#071A3D]">{milestones[selectedMilestone].location}</span>
              </div>

              <p className="font-sans text-sm text-[#071A3D]/65 leading-relaxed">
                {milestones[selectedMilestone].details}
              </p>

              {/* Result Metric */}
              <div className="p-4 bg-[#F3F5F9]/60 rounded-2xl border border-[#071A3D]/5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#071A3D]/55">Outcome</span>
                <span className="text-sm font-display font-extrabold text-saffron-start uppercase tracking-wider">
                  {milestones[selectedMilestone].result}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Footprint Map */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="w-full max-w-[500px] p-4 sm:p-6 glass-panel rounded-3xl border-[#071A3D]/5 shadow-2xl relative">
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2">
                <Compass className="w-4 h-4 text-saffron-start animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[9px] sm:text-[10px] font-display font-bold tracking-widest uppercase text-[#071A3D]/60">
                  Operations Map
                </span>
              </div>

              <svg viewBox="0 0 500 580" className="w-full h-auto text-[#071A3D]/10 fill-current stroke-[#071A3D]/25 stroke-1 select-none">
                <path d="M 230 40 L 245 25 L 260 20 L 275 35 L 270 70 L 285 90 L 305 100 L 330 95 L 350 115 L 365 150 L 385 170 L 415 190 L 450 210 L 440 240 L 420 250 L 395 260 L 370 290 L 350 320 L 330 350 L 310 395 L 295 440 L 280 490 L 265 540 L 255 560 L 250 565 L 245 540 L 235 490 L 220 460 L 200 435 L 180 410 L 155 390 L 130 380 L 105 350 L 120 330 L 140 320 L 155 295 L 170 260 L 185 220 L 195 190 L 205 150 Z" fill="rgba(243, 245, 249, 0.4)" />
                
                {milestones[selectedMilestone].hubs.map((hub, idx) => (
                  <g key={idx} className="animate-fade-in">
                    <circle cx={hub.x} cy={hub.y} r="16" className="fill-saffron-start/15 stroke-saffron-end/60 stroke-[1.5px] animate-ping" />
                    <circle cx={hub.x} cy={hub.y} r="7" className="fill-saffron-start stroke-white stroke-1 shadow-2xl" />
                    <text x={hub.x + 12} y={hub.y + 4} className="fill-[#071A3D] font-display text-[10px] font-extrabold tracking-widest drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                      {hub.name.toUpperCase()}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
