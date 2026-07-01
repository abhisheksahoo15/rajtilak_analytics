import React, { useState, useEffect } from 'react';
import { Sparkles, Radio, BarChart2 } from 'lucide-react';

interface Constituency {
  id: string;
  name: string;
  region: string;
  lead: string;
  sentiment: number; // percentage
  dominantDemographic: string;
  certainty: number; // percentage
}

export const WarRoom: React.FC = () => {
  const [selectedConst, setSelectedConst] = useState<Constituency>({
    id: 'UP-37',
    name: 'Varanasi',
    region: 'Uttar Pradesh',
    lead: 'NDA',
    sentiment: 72.8,
    dominantDemographic: 'Urban-Youth / Traditionalist',
    certainty: 96.2,
  });

  const [activeTab, setActiveTab] = useState<'sentiment' | 'demographics' | 'listening'>('sentiment');
  const [exportStatus, setExportStatus] = useState<'idle' | 'exporting' | 'done'>('idle');

  const handleExport = () => {
    setExportStatus('exporting');
    setTimeout(() => {
      setExportStatus('done');
      setTimeout(() => {
        setExportStatus('idle');
      }, 3000);
    }, 2000);
  };

  // Live ticker feeds
  const [socialFeed, setSocialFeed] = useState([
    { id: 1, time: 'Just Now', tag: '#AyodhyaReawakens', score: '+18.4% Sentiment Shift', location: 'UP East' },
    { id: 2, time: '1m ago', tag: 'Rural Welfare Delivery', score: '+6.2% Favourable Shift', location: 'MP Bundelkhand' },
    { id: 3, time: '3m ago', tag: 'Infrastructure Corridor', score: '+12.5% Sentiment Rise', location: 'Maharashtra' },
    { id: 4, time: '5m ago', tag: 'Youth Startup Grants', score: '+9.1% Favourable Shift', location: 'Karnataka' },
  ]);

  // Generate random fluctuations in values to look "live"
  useEffect(() => {
    const interval = setInterval(() => {
      // Add random new item to social feed
      const locations = ['Bihar West', 'Gujarat Central', 'Tamil Nadu North', 'Rajasthan East', 'Haryana South'];
      const topics = ['MSP Farmer Reforms', 'Women Empowerment Subsidies', 'Digital Infrastructure Speed', 'Skill Development Schemes'];
      const shift = (Math.random() * 15 + 2).toFixed(1);
      const sign = Math.random() > 0.3 ? '+' : '-';

      setSocialFeed(prev => [
        {
          id: Date.now(),
          time: 'Just Now',
          tag: topics[Math.floor(Math.random() * topics.length)],
          score: `${sign}${shift}% Sentiment Shift`,
          location: locations[Math.floor(Math.random() * locations.length)],
        },
        ...prev.slice(0, 3)
      ]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const constituencies: Constituency[] = [
    { id: 'UP-37', name: 'Varanasi', region: 'Uttar Pradesh', lead: 'NDA', sentiment: 72.8, dominantDemographic: 'Urban-Youth / Traditionalist', certainty: 96.2 },
    { id: 'UP-54', name: 'Amethi', region: 'Uttar Pradesh', lead: 'NDA', sentiment: 54.2, dominantDemographic: 'Agrarian / Rural-Youth', certainty: 88.5 },
    { id: 'MH-12', name: 'Pune', region: 'Maharashtra', lead: 'MGB', sentiment: 51.5, dominantDemographic: 'Tech-Professionals / Youth', certainty: 78.4 },
    { id: 'KA-24', name: 'Bangalore South', region: 'Karnataka', lead: 'NDA', sentiment: 68.1, dominantDemographic: 'Startup Founders / Corporates', certainty: 94.0 },
    { id: 'WB-16', name: 'Kolkata Dakshin', region: 'West Bengal', lead: 'AITC', sentiment: 56.4, dominantDemographic: 'Traditionalist / Intellectuals', certainty: 84.1 },
    { id: 'BR-22', name: 'Patna Sahib', region: 'Bihar', lead: 'NDA', sentiment: 59.8, dominantDemographic: 'Agrarian / Traders', certainty: 91.3 },
  ];

  return (
    <section id="war-room" className="relative py-24 bg-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-navy-royal/5 rounded-full blur-[180px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-saffron-start/5 rounded-full blur-[150px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 relative z-10">
        {/* Title and Top Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#071A3D]/10 pb-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
              Command Dashboard
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D]">
              Election <span className="text-saffron-gradient">War Room</span> Engine
            </h2>
          </div>
          
          {/* Live system state */}
          <div className="flex items-center gap-4 bg-[#F3F5F9]/80 p-3.5 rounded-xl border border-[#071A3D]/10 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shadow-[0_0_8px_#10B981]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#071A3D]/45 uppercase font-display tracking-widest font-bold">SENTIMENT PIPELINE</span>
              <span className="text-xs text-[#071A3D] font-mono uppercase tracking-wider font-semibold">Active & Recalibrating</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL: Live Social Listening Feed (Cols 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="glass-panel p-5 rounded-2xl border-[#071A3D]/8 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between border-b border-[#071A3D]/10 pb-3">
                <span className="text-xs font-display font-bold tracking-widest text-[#071A3D] uppercase flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-saffron-start animate-pulse" />
                  Social Listening
                </span>
                <span className="text-[8px] bg-red-100 text-red-600 px-2 py-0.5 rounded border border-red-200 font-bold uppercase tracking-wider">LIVE</span>
              </div>

              {/* Feed ticker */}
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[360px] scrollbar-none">
                {socialFeed.map(feed => (
                  <div key={feed.id} className="p-3 bg-[#F3F5F9]/60 rounded-xl border border-[#071A3D]/5 flex flex-col gap-2 hover:border-[#FF6A00]/40 transition-all">
                    <div className="flex justify-between items-center text-[9px] font-display text-[#071A3D]/50">
                      <span>{feed.location}</span>
                      <span>{feed.time}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#071A3D] truncate">{feed.tag}</span>
                    <span className="text-[10px] font-mono text-saffron-start font-bold">{feed.score}</span>
                  </div>
                ))}
              </div>

              {/* Quick Summary Gauge */}
              <div className="mt-auto pt-4 border-t border-[#071A3D]/10 flex items-center justify-between">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#071A3D]/50">Overall Net Sentiment</span>
                <span className="text-sm font-display font-extrabold text-saffron-start tracking-wider">+58.4%</span>
              </div>
            </div>
          </div>

          {/* CENTER PANEL: Interactive Constituency Map & Grid (Cols 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel-glow p-5 rounded-2xl border-[#071A3D]/10 flex flex-col gap-4 h-full relative">
              <div className="flex items-center justify-between border-b border-[#071A3D]/10 pb-3">
                <span className="text-xs font-display font-bold tracking-widest text-[#071A3D] uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-end" />
                  Constituency Heatmap
                </span>
                <span className="text-[9px] text-saffron-start font-mono font-bold">SELECT HUB NODE</span>
              </div>

              <p className="text-[11px] text-[#071A3D]/65 leading-relaxed">
                Click any constituency node block below to stream real-time demographic sentiment models and prediction index directly to the war room console.
              </p>

              {/* Interactive Grid blocks representing constituencies */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 py-4">
                {constituencies.map((c) => {
                  const isActive = c.id === selectedConst.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedConst(c)}
                      className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col gap-3 relative ${
                        isActive
                          ? 'bg-[#F3F5F9] border-saffron-start shadow-[0_0_15px_rgba(255,106,0,0.08)] scale-105'
                          : 'bg-white border-[#071A3D]/8 hover:border-[#071A3D]/25'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-saffron-end animate-ping" />
                      )}
                      <span className="text-[8px] font-mono tracking-widest text-saffron-start uppercase font-bold">{c.id}</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-display font-bold text-[#071A3D] leading-tight">{c.name}</span>
                        <span className="text-[9px] text-[#071A3D]/50">{c.region}</span>
                      </div>
                      
                      {/* Lead party badge */}
                      <span className={`text-[9px] font-display font-bold px-2 py-0.5 rounded w-fit ${
                        c.lead === 'NDA' ? 'bg-saffron-start/15 text-saffron-end border border-saffron-start/10' : 'bg-[#071A3D]/10 text-[#071A3D] border border-[#071A3D]/10'
                      }`}>
                        LEAD: {c.lead}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Glowing vector line representing analysis sweep */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-saffron-start/40 to-transparent animate-pulse mt-auto" />
            </div>
          </div>

          {/* RIGHT PANEL: Live Dashboards & Prediction Indicators (Cols 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel p-5 rounded-2xl border-[#071A3D]/8 flex flex-col gap-5 h-full">
              <div className="flex items-center justify-between border-b border-[#071A3D]/10 pb-3">
                <span className="text-xs font-display font-bold tracking-widest text-[#071A3D] uppercase flex items-center gap-2">
                  <BarChart2 className="w-3.5 h-3.5 text-saffron-start" />
                  Live Console Model: {selectedConst.name}
                </span>
                <span className="text-[9px] font-mono text-[#071A3D]/50">{selectedConst.id}</span>
              </div>

              {/* Tabs for Console display */}
              <div className="grid grid-cols-3 gap-1 bg-[#F3F5F9]/80 p-1 rounded-xl border border-[#071A3D]/10">
                {(['sentiment', 'demographics', 'listening'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[9px] font-display font-bold tracking-wider uppercase py-2 rounded-lg transition-colors ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-saffron-start to-saffron-end text-white shadow-md'
                        : 'text-[#071A3D]/50 hover:text-[#071A3D]/85'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Console Tab Content */}
              <div className="flex-1 flex flex-col justify-center">
                {activeTab === 'sentiment' && (
                  <div className="flex flex-col gap-5">
                    {/* Gauge metrics */}
                    <div className="flex justify-between items-center p-3.5 bg-[#F3F5F9]/70 rounded-xl border border-[#071A3D]/5">
                      <span className="text-xs text-[#071A3D]/65">Predictive Sentiment Score</span>
                      <span className="text-lg font-mono font-bold text-saffron-start">{selectedConst.sentiment}%</span>
                    </div>

                    <div className="flex justify-between items-center p-3.5 bg-[#F3F5F9]/70 rounded-xl border border-[#071A3D]/5">
                      <span className="text-xs text-[#071A3D]/65">Winning Certainty Index</span>
                      <span className="text-lg font-mono font-bold text-[#071A3D]">{selectedConst.certainty}%</span>
                    </div>

                    {/* Progress Bar indicator */}
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex justify-between text-[10px] text-[#071A3D]/50 font-mono font-bold">
                        <span>ESTIMATED LEAD GAP</span>
                        <span>+14.2% OVER OPPONENT</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#F3F5F9] rounded-full overflow-hidden border border-[#071A3D]/5">
                        <div 
                          className="h-full bg-gradient-to-r from-saffron-start to-saffron-end rounded-full shadow-[0_0_10px_#FF6A00] transition-all duration-700 ease-out"
                          style={{ width: `${selectedConst.sentiment}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'demographics' && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 p-3 bg-[#F3F5F9]/70 rounded-xl border border-[#071A3D]/5">
                      <span className="text-[10px] text-[#071A3D]/50 uppercase tracking-widest font-semibold">Dominant Electorate</span>
                      <span className="text-xs font-semibold text-[#071A3D]">{selectedConst.dominantDemographic}</span>
                    </div>

                    {/* Breakdown representation */}
                    <div className="flex flex-col gap-2.5 mt-2">
                      <span className="text-[9px] uppercase tracking-wider text-[#071A3D]/50 font-semibold font-display">Sector Distribution</span>
                      <div className="flex flex-col gap-2 font-mono text-[10px] text-[#071A3D]/70">
                        <div className="flex justify-between items-center">
                          <span>Youth Voters</span>
                          <span className="font-bold text-[#071A3D]">42%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F3F5F9] rounded-full overflow-hidden">
                          <div className="h-full bg-saffron-end rounded-full" style={{ width: '42%' }} />
                        </div>

                        <div className="flex justify-between items-center">
                          <span>Agrarian Sectors</span>
                          <span className="font-bold text-[#071A3D]">35%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F3F5F9] rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full" style={{ width: '35%' }} />
                        </div>

                        <div className="flex justify-between items-center">
                          <span>Traders & Retailers</span>
                          <span className="font-bold text-[#071A3D]">23%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F3F5F9] rounded-full overflow-hidden">
                          <div className="h-full bg-saffron-start rounded-full" style={{ width: '23%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'listening' && (
                  <div className="flex flex-col gap-4 text-xs">
                    <div className="p-3.5 bg-[#F3F5F9]/70 rounded-xl border border-[#071A3D]/5 flex flex-col gap-2 font-mono text-[10px] text-[#071A3D]/70">
                      <span className="text-[#071A3D]/50 font-display font-semibold uppercase tracking-wider">TOWN HALL FEEDBACK</span>
                      <p>&gt; Infrastructure expansion in rural sectors ranks as high-influence factor for 72% respondents.</p>
                    </div>

                    <div className="p-3.5 bg-[#F3F5F9]/70 rounded-xl border border-[#071A3D]/5 flex flex-col gap-2 font-mono text-[10px] text-[#071A3D]/80">
                      <span className="text-saffron-start font-display font-semibold uppercase tracking-wider">KEY RALLY ANCHOR POINTS</span>
                      <p>&gt; Focus on cultural pride and digitisation grants yields +8.5% conversion in first-time voters.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick-Action CTA */}
              <button 
                onClick={handleExport}
                disabled={exportStatus === 'exporting'}
                className="magnetic-btn w-full mt-auto py-3 bg-gradient-to-r from-saffron-start to-saffron-end rounded-xl font-display text-xs font-bold uppercase tracking-widest text-white hover:shadow-[0_0_20px_rgba(255,106,0,0.22)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {exportStatus === 'idle' && 'Export Predictions PDF'}
                {exportStatus === 'exporting' && 'Compiling Secure PDF...'}
                {exportStatus === 'done' && '✓ PDF Exported Successfully'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
