import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ExitPollDashboard } from '../components/ExitPollDashboard';
import { RefreshCw, BarChart2, Radio, ArrowUpRight } from 'lucide-react';

interface HashtagTrend {
  tag: string;
  category: string;
  mentions: number;
  sentiment: { pos: number; neu: number; neg: number };
  growth: number; // percentage
}

interface FeedItem {
  id: string;
  timestamp: string;
  booth: string;
  region: string;
  insight: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export const TrendsPage: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'north' | 'south' | 'east' | 'west'>('all');
  
  // 1. Mock Hashtags Data
  const [hashtags, setHashtags] = useState<HashtagTrend[]>([
    { tag: '#VikasKiRaftar', category: 'Infrastructure', mentions: 142300, sentiment: { pos: 68, neu: 22, neg: 10 }, growth: 24.5 },
    { tag: '#YuvaSankalp', category: 'Employment', mentions: 98150, sentiment: { pos: 55, neu: 30, neg: 15 }, growth: 18.2 },
    { tag: '#KisanWelfare', category: 'Agriculture', mentions: 120400, sentiment: { pos: 42, neu: 38, neg: 20 }, growth: -4.3 },
    { tag: '#AtmanirbharBharat', category: 'Nationalism', mentions: 88700, sentiment: { pos: 72, neu: 18, neg: 10 }, growth: 12.8 },
    { tag: '#GraminSuvidha', category: 'Rural Development', mentions: 75200, sentiment: { pos: 61, neu: 29, neg: 10 }, growth: 8.9 },
    { tag: '#ShikshaSankalp', category: 'Education', mentions: 63900, sentiment: { pos: 59, neu: 26, neg: 15 }, growth: 15.4 }
  ]);

  // 2. Live Feeds Stream Simulation
  const [feeds, setFeeds] = useState<FeedItem[]>([
    { id: '1', timestamp: '18:41:02', booth: 'Booth 12, Lucknow East', region: 'north', insight: 'High satisfaction reported on recently completed highway connectivity (+15% positive sentiment shift).', sentiment: 'positive' },
    { id: '2', timestamp: '18:42:15', booth: 'Booth 84, Belagavi Rural', region: 'south', insight: 'Agrarian concerns emerging regarding delays in crop insurance disbursements. Support stable but alert.', sentiment: 'negative' },
    { id: '3', timestamp: '18:43:40', booth: 'Booth 201, Asansol North', region: 'east', insight: 'Youth cohorts expressing neutral stance on industrial apprenticeship payouts. Awaiting direct outreach.', sentiment: 'neutral' },
  ]);

  const feedEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll feed terminal to bottom
  useEffect(() => {
    if (feedEndRef.current) {
      feedEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [feeds]);

  // 3. Telemetry Ground Stream Generator
  useEffect(() => {
    const locations = [
      { name: 'Booth 45, Meerut Cantonment', reg: 'north', in: 'High turnout predictions. Digital engagement on civic pride themes spikes by 9%.', sent: 'positive' as const },
      { name: 'Booth 119, Warangal West', reg: 'south', in: 'Volunteers report active resistance from local youth cohorts concerning stipend caps.', sent: 'negative' as const },
      { name: 'Booth 7, Patna Central', reg: 'east', in: 'Welfare check loop: Free gas cylinders refill awareness reaches 92% of targeted households.', sent: 'positive' as const },
      { name: 'Booth 62, Rajkot Outer', reg: 'west', in: 'Micro-survey indicates swing voters are responding favorably to credit lines (+5% conversion).', sent: 'positive' as const },
      { name: 'Booth 143, Nagpur South-West', reg: 'west', in: 'Local community leaders holding neutral consultations. Ground teams deploying specialized booklets.', sent: 'neutral' as const },
      { name: 'Booth 33, Amritsar Rural', reg: 'north', in: 'Tractor subsidy sentiment returns positive. Digital messaging scaling up.', sent: 'positive' as const }
    ];

    const interval = setInterval(() => {
      const randomLoc = locations[Math.floor(Math.random() * locations.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      
      const newFeed: FeedItem = {
        id: Math.random().toString(),
        timestamp: timeStr,
        booth: randomLoc.name,
        region: randomLoc.reg,
        insight: randomLoc.in,
        sentiment: randomLoc.sent
      };
      
      setFeeds(prev => [...prev.slice(-9), newFeed]); // Keep last 10 feeds
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // 4. Handle Mock Refresh
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setHashtags(prev => 
        prev.map(item => {
          const delta = Math.floor(Math.random() * 5000) - 2000;
          const deltaGrowth = (Math.random() * 4 - 2);
          return {
            ...item,
            mentions: Math.max(10000, item.mentions + delta),
            growth: parseFloat((item.growth + deltaGrowth).toFixed(1))
          };
        })
      );
      setRefreshing(false);
    }, 1200);
  };

  // Region metrics mapping
  const regionMetrics = {
    all: { positive: 61, neutral: 25, negative: 14, sample: '1.2M Voter Profiles' },
    north: { positive: 65, neutral: 22, negative: 13, sample: '380K Ground Audits' },
    south: { positive: 54, neutral: 28, negative: 18, sample: '250K Ground Audits' },
    east: { positive: 58, neutral: 29, negative: 13, sample: '290K Ground Audits' },
    west: { positive: 67, neutral: 20, negative: 13, sample: '300K Ground Audits' }
  };

  const currentMetrics = regionMetrics[selectedRegion];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* HEADER HERO */}
      <section className="relative py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <ScrollReveal direction="left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
                  <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Digital Intelligence
                </span>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={100}>
                <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[#071A3D]">
                  Voter Sentiment & <br />
                  <span className="text-saffron-gradient">Digital Trend Matrix</span>
                </h1>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="right" delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/65 max-w-sm leading-relaxed mb-1">
                Real-time ingestion of social conversations, local press feeds, and booth-level telemetry. Calibration updated every 15 minutes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 1.5. Interactive Exit Poll Dashboard */}
      <ExitPollDashboard />

      {/* METRIC OVERVIEW ROW */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* 1. Overall Sentiment Gauge (Cols 5) */}
            <div className="lg:col-span-5 bg-[#F3F5F9]/40 border border-[#071A3D]/5 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-start/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-saffron-start font-bold uppercase tracking-wider">National Pulse</span>
                  <h3 className="font-display text-lg font-bold text-[#071A3D]">Voter Mood Index</h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest text-[#00E5FF] bg-[#071A3D] border border-[#00E5FF]/20">Active</span>
              </div>

              {/* Custom SVG Semi-circle gauge */}
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative w-48 h-28 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
                    {/* Background arc */}
                    <path d="M10,45 A35,35 0 0,1 90,45" fill="none" stroke="#E5E8F0" strokeWidth="8" strokeLinecap="round" />
                    {/* Colored segments or progress arc */}
                    <path d="M10,45 A35,35 0 0,1 68,17" fill="none" stroke="url(#saffronGrad)" strokeWidth="8.5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6A00" />
                        <stop offset="100%" stopColor="#FF9A3C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Gauge Value Display */}
                  <div className="absolute bottom-0 flex flex-col items-center">
                    <span className="text-4xl font-display font-black text-[#071A3D]">61.8</span>
                    <span className="text-[9px] font-mono text-[#071A3D]/45 font-bold uppercase">OUT OF 100 (FAVORABLE)</span>
                  </div>
                </div>
                
                {/* Gauge Legend */}
                <div className="flex justify-between w-full max-w-[280px] mt-4 pt-4 border-t border-[#071A3D]/5 text-[10px] font-sans">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Positive (61%)
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Neutral (25%)
                  </div>
                  <div className="flex items-center gap-1.5 text-rose-500 font-bold">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Negative (14%)
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Interactive Region metrics (Cols 7) */}
            <div className="lg:col-span-7 bg-[#F3F5F9]/40 border border-[#071A3D]/5 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#071A3D]/5 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-saffron-start font-bold uppercase tracking-wider">Demographics Shift</span>
                  <h3 className="font-display text-lg font-bold text-[#071A3D]">Geographic Sentiment Shift</h3>
                </div>
                
                {/* Region filter controls */}
                <div className="flex flex-wrap gap-1 bg-white p-1 rounded-xl border border-[#071A3D]/5">
                  {(['all', 'north', 'south', 'east', 'west'] as const).map(reg => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1 rounded-lg text-[9px] font-display uppercase tracking-widest font-black transition-all cursor-pointer ${
                        selectedRegion === reg
                          ? 'bg-[#071A3D] text-white'
                          : 'text-[#071A3D]/50 hover:text-[#071A3D] hover:bg-[#071A3D]/5'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress charts */}
              <div className="flex flex-col gap-4 py-4">
                <div className="flex justify-between text-[10px] font-mono font-bold text-[#071A3D]/60">
                  <span>SAMPLE BASE: {currentMetrics.sample}</span>
                  <span className="text-saffron-start">PREDICTIVE MARGIN: +/-1.8%</span>
                </div>

                {/* Progress bars */}
                <div className="flex flex-col gap-3.5">
                  {/* Positive */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Favorable/Supportive
                      </span>
                      <span>{currentMetrics.positive}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#071A3D]/5">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-700 ease-out" 
                        style={{ width: `${currentMetrics.positive}%` }} 
                      />
                    </div>
                  </div>

                  {/* Neutral */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-amber-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Neutral / Swing Segment
                      </span>
                      <span>{currentMetrics.neutral}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#071A3D]/5">
                      <div 
                        className="h-full bg-amber-400 rounded-full transition-all duration-700 ease-out" 
                        style={{ width: `${currentMetrics.neutral}%` }} 
                      />
                    </div>
                  </div>

                  {/* Negative */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-rose-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Discontent / Friction Cohorts
                      </span>
                      <span>{currentMetrics.negative}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#071A3D]/5">
                      <div 
                        className="h-full bg-rose-500 rounded-full transition-all duration-700 ease-out" 
                        style={{ width: `${currentMetrics.negative}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRENDING HASHTAGS TABLE */}
      <section className="py-12 bg-white border-t border-[#071A3D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#071A3D] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-saffron-start/5 rounded-full blur-[140px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Table header with refresh button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-saffron-start font-bold uppercase tracking-wider">Hashtag Mentions Index</span>
                  <h2 className="font-display text-xl sm:text-2xl font-black">Top Digital Topics</h2>
                </div>
                
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 text-white font-display text-[9px] uppercase tracking-widest font-black bg-white/5 hover:bg-white/10 transition-all cursor-pointer select-none"
                >
                  <RefreshCw className={`w-3 h-3 ${refreshing ? 'animate-spin' : ''}`} />
                  {refreshing ? 'Recalculating...' : 'Refresh Trends'}
                </button>
              </div>

              {/* Table grid */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/15 text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      <th className="py-3 px-4">Topic / Hashtag</th>
                      <th className="py-3 px-4">Focus Core</th>
                      <th className="py-3 px-4">Mentions (24h)</th>
                      <th className="py-3 px-4">Net Sentiment Pulse</th>
                      <th className="py-3 px-4 text-right">Growth Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-xs">
                    {hashtags.map((h, i) => (
                      <tr key={i} className="hover:bg-white/3 transition-colors">
                        {/* Hashtag */}
                        <td className="py-4 px-4 font-display font-black text-sm tracking-wide text-white">
                          <span className="flex items-center gap-2">
                            <span className="text-saffron-start font-mono">#</span>
                            {h.tag.replace('#', '')}
                          </span>
                        </td>
                        
                        {/* Category */}
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono font-bold tracking-wider uppercase text-white/80">
                            {h.category}
                          </span>
                        </td>
                        
                        {/* Mentions */}
                        <td className="py-4 px-4 font-mono font-bold text-white/95">
                          {h.mentions.toLocaleString()}
                        </td>
                        
                        {/* Sentiment Meter */}
                        <td className="py-4 px-4 min-w-[200px]">
                          <div className="flex flex-col gap-1.5">
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                              <div className="h-full bg-emerald-500" style={{ width: `${h.sentiment.pos}%` }} />
                              <div className="h-full bg-amber-400" style={{ width: `${h.sentiment.neu}%` }} />
                              <div className="h-full bg-rose-500" style={{ width: `${h.sentiment.neg}%` }} />
                            </div>
                            <div className="flex justify-between text-[9px] font-mono text-white/40">
                              <span>Pos: {h.sentiment.pos}%</span>
                              <span>Neg: {h.sentiment.neg}%</span>
                            </div>
                          </div>
                        </td>
                        
                        {/* Growth */}
                        <td className={`py-4 px-4 text-right font-mono font-bold ${h.growth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          <span className="flex items-center justify-end gap-1">
                            {h.growth >= 0 ? '+' : ''}{h.growth}%
                            <ArrowUpRight className={`w-3.5 h-3.5 ${h.growth < 0 ? 'rotate-90' : ''}`} />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TELEMETRY FEED TERMINAL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#050505] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <div className="absolute top-4 right-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              <span className="font-mono text-[9px] tracking-widest text-[#00E5FF] font-black uppercase">LIVE BOOTH TELEMETRY</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-saffron-start/20 flex items-center justify-center border border-saffron-start/35 shrink-0">
                  <BarChart2 className="w-4 h-4 text-saffron-start" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-white/40 font-bold uppercase">Real-Time Ingestion</span>
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Ground Narrative Streams</h3>
                </div>
              </div>

              {/* Terminal screen */}
              <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-4 sm:p-6 font-mono text-xs text-white/80 h-[300px] overflow-y-auto flex flex-col gap-4 shadow-inner custom-scrollbar">
                {feeds.map((feed) => (
                  <div key={feed.id} className="flex flex-col gap-1.5 border-l-2 border-white/10 pl-3 py-1 hover:border-saffron-start/50 transition-colors">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white/30 text-[10px] font-bold">{feed.timestamp}</span>
                      <span className="text-saffron-end font-bold text-[10px] tracking-wide bg-saffron-start/10 border border-saffron-start/15 px-1.5 py-0.5 rounded uppercase">
                        {feed.booth}
                      </span>
                      <span className={`text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded ${
                        feed.sentiment === 'positive'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : feed.sentiment === 'negative'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                      }`}>
                        {feed.sentiment}
                      </span>
                    </div>
                    <p className="text-white/70 text-[11px] leading-relaxed">
                      {feed.insight}
                    </p>
                  </div>
                ))}
                <div ref={feedEndRef} />
              </div>

              <div className="flex flex-wrap justify-between items-center text-[10px] font-mono text-white/40 border-t border-white/5 pt-4 mt-2">
                <span>SYSTEM STATUS: COMPILING FEEDS NORMAL</span>
                <span className="text-saffron-start">SECURED LINK E2EE ✦</span>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
