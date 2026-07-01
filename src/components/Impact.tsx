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
      year: '2024',
      title: 'National General Assembly Strategy',
      location: 'Nationwide Command Center',
      result: '+4.8% Swing Ratio Injected',
      details: 'Supervised full national sentiment pipelines across 543 constituencies, deploying micro-targeted digital narratives to first-time youth voters and agrarian clusters.',
      hubs: [
        { x: 230, y: 150, name: 'Delhi NCR' },
        { x: 280, y: 210, name: 'Uttar Pradesh' },
        { x: 300, y: 240, name: 'Bihar' },
      ],
    },
    {
      year: '2023',
      title: 'State Electoral Voter Modelling',
      location: 'Karnataka Operations',
      result: '94.2% Prediction Index Precision',
      details: 'Deployed booth-level predictive models for 224 constituencies. Recalibrated rural welfare feedback channels within 48 hours to alter media rally targets.',
      hubs: [
        { x: 210, y: 460, name: 'Bangalore Metro' },
      ],
    },
    {
      year: '2022',
      title: 'Uttar Pradesh War Room deployment',
      location: 'UP Command Center',
      result: 'Strategic Coronation of Narrative',
      details: 'Managed communications, speech cadence scripts, and booth-level worker maps for 403 constituencies. Unified rural-urban sentiments on development indicators.',
      hubs: [
        { x: 280, y: 210, name: 'Kashi / Varanasi' },
        { x: 275, y: 180, name: 'Ayodhya' },
      ],
    },
    {
      year: '2021',
      title: 'Gujarat Booth Optimization Grid',
      location: 'Western Hub Ops',
      result: 'Unified 420K Digital Cadre Network',
      details: 'Ingested data surveys from 50,000 polling stations to build local youth influencer structures, forming a rapid narrative response team.',
      hubs: [
        { x: 135, y: 290, name: 'Ahmedabad' },
      ],
    },
  ];

  return (
    <section id="impact" className="relative py-24 bg-white overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-navy-royal/5 rounded-full blur-[170px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-saffron-start/5 rounded-full blur-[150px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#071A3D]/10 pb-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
              Case Studies & Footprints
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D]">
              Leadership <span className="text-saffron-gradient">Impact</span> & Campaigns
            </h2>
          </div>
          <p className="font-sans text-[#071A3D]/55 max-w-sm text-sm">
            Discover our historical milestones. Click any timeline stage below to highlight active campaign footprint nodes on the map.
          </p>
        </div>

        {/* Impact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Timeline selection and case studies (Cols 6) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Timeline Milestones buttons row */}
            <div className="flex justify-between items-center bg-[#F3F5F9]/80 p-2 rounded-2xl border border-[#071A3D]/10 relative overflow-hidden">
              {milestones.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`flex-1 py-3 text-sm font-display font-bold uppercase tracking-widest rounded-xl transition-all duration-300 relative z-10 ${
                    selectedMilestone === idx
                      ? 'bg-gradient-to-r from-saffron-start to-saffron-end text-white shadow-lg'
                      : 'text-[#071A3D]/50 hover:text-[#071A3D]/70'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>

            {/* Glowing Milestone Details Card */}
            <div className="glass-panel-glow p-8 rounded-3xl border-saffron-start/20 shadow-2xl relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-saffron-start/20 border border-saffron-start/30">
                    <Award className="w-5 h-5 text-saffron-start" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A3D]">
                    {milestones[selectedMilestone].title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-saffron-start tracking-wider uppercase bg-[#F3F5F9] px-2.5 py-1 rounded border border-[#071A3D]/10">
                  {milestones[selectedMilestone].year}
                </span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-saffron-start/40 pl-4">
                <span className="text-[10px] text-[#071A3D]/45 uppercase tracking-widest font-semibold">Campaign Focus Area</span>
                <span className="text-sm font-semibold text-[#071A3D]">{milestones[selectedMilestone].location}</span>
              </div>

              <p className="font-sans text-sm text-[#071A3D]/65 leading-relaxed">
                {milestones[selectedMilestone].details}
              </p>

              {/* Highlight Result Metric Box */}
              <div className="p-4 bg-[#F3F5F9]/60 rounded-2xl border border-[#071A3D]/5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#071A3D]/55">Electoral Verdict</span>
                <span className="text-sm font-display font-extrabold text-saffron-start uppercase tracking-wider">
                  {milestones[selectedMilestone].result}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Footprint India Map highlight (Cols 6) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="w-full max-w-[500px] p-6 glass-panel rounded-3xl border-[#071A3D]/5 shadow-2xl relative">
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <Compass className="w-4 h-4 text-saffron-start animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[10px] font-display font-bold tracking-widest uppercase text-[#071A3D]/60">
                  Footprint Tracker Map
                </span>
              </div>

              {/* Vector India Map with overlay highlights */}
              <svg viewBox="0 0 500 580" className="w-full h-auto text-[#071A3D]/10 fill-current stroke-[#071A3D]/25 stroke-1 select-none">
                <path d="M 230 40 L 245 25 L 260 20 L 275 35 L 270 70 L 285 90 L 305 100 L 330 95 L 350 115 L 365 150 L 385 170 L 415 190 L 450 210 L 440 240 L 420 250 L 395 260 L 370 290 L 350 320 L 330 350 L 310 395 L 295 440 L 280 490 L 265 540 L 255 560 L 250 565 L 245 540 L 235 490 L 220 460 L 200 435 L 180 410 L 155 390 L 130 380 L 105 350 L 120 330 L 140 320 L 155 295 L 170 260 L 185 220 L 195 190 L 205 150 Z" fill="rgba(243, 245, 249, 0.4)" />
                
                {/* Active Footprint Hubs of the selected milestone */}
                {milestones[selectedMilestone].hubs.map((hub, idx) => (
                  <g key={idx} className="animate-fade-in">
                    {/* Ring glow pulse */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="16"
                      className="fill-saffron-start/15 stroke-saffron-end/60 stroke-[1.5px] animate-ping"
                    />
                    {/* Core node */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="7"
                      className="fill-saffron-start stroke-white stroke-1 shadow-2xl"
                    />
                    {/* Connector line and text label */}
                    <text
                      x={hub.x + 12}
                      y={hub.y + 4}
                      className="fill-[#071A3D] font-display text-[10px] font-extrabold tracking-widest drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
                    >
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
