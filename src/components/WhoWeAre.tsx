import React, { useEffect, useState } from 'react';

export const WhoWeAre: React.FC = () => {
  // Stats counter state
  const [stats, setStats] = useState({
    campaigns: 0,
    constituencies: 0,
    dataPoints: 0,
    leaders: 0,
  });

  const targets = {
    campaigns: 48,
    constituencies: 543,
    dataPoints: 12.8, // Billion
    leaders: 120,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setStats({
        campaigns: Math.min(targets.campaigns, Math.round((targets.campaigns / steps) * stepCount)),
        constituencies: Math.min(targets.constituencies, Math.round((targets.constituencies / steps) * stepCount)),
        dataPoints: Math.min(targets.dataPoints, parseFloat(((targets.dataPoints / steps) * stepCount).toFixed(1))),
        leaders: Math.min(targets.leaders, Math.round((targets.leaders / steps) * stepCount)),
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="solutions" className="relative py-24 bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-navy-royal/5 rounded-full blur-[160px] opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Statistics */}
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Who We Are
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-[#071A3D]">
            Building Winning Narratives <br />
            <span className="text-saffron-gradient">Through Intelligence.</span>
          </h2>

          <p className="font-sans text-[#071A3D]/80 leading-relaxed text-lg">
            Rajtilak Analytics is India's premier political advisory and campaign intelligence firm. We integrate cultural heritage with cutting-edge artificial intelligence, transforming raw demographics into strategic victory. 
          </p>

          <p className="font-sans text-[#071A3D]/60 leading-relaxed">
            Our teams operate from state-of-the-art war rooms, monitoring live voter pulses, digital sentiments, and booth-level dynamics to craft messaging that aligns with the civilizational soul of Bharat.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col border-l-2 border-saffron-start/50 pl-4 py-2">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D]">
                {stats.campaigns}+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Campaigns Managed
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-saffron-end/50 pl-4 py-2">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D]">
                {stats.constituencies}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Constituencies Modeled
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-gold-accent/50 pl-4 py-2">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D]">
                {stats.dataPoints}B+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Data Points Processed
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-saffron-start/40 pl-4 py-2">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D]">
                {stats.leaders}+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Leaders Advised
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: India Live Pulse Map */}
        <div className="relative flex justify-center items-center">
          {/* Outer glowing dashboard ring */}
          <div className="absolute inset-0 border border-[#071A3D]/5 rounded-full scale-95 pointer-events-none animate-pulse-slow" />
          
          <div className="w-full max-w-[550px] relative z-10 p-6 glass-panel-glow rounded-3xl border-saffron-start/15 shadow-2xl">
            {/* Live radar sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-saffron-start/5 to-transparent rounded-3xl animate-pulse pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#071A3D]/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-saffron-start animate-ping" />
                <span className="text-xs font-display font-bold tracking-widest uppercase text-[#071A3D]">
                  Live Sentiment Hub Map
                </span>
              </div>
              <span className="text-[10px] font-display text-[#071A3D]/40 tracking-wider">
                REFRESHING LIVE DATA
              </span>
            </div>

            {/* India Map Outline with pulsing cities */}
            <div className="w-full h-[400px] flex items-center justify-center relative">
              <svg viewBox="0 0 500 580" className="w-full h-full text-[#071A3D]/10 fill-current stroke-[#071A3D]/25 stroke-1 select-none">
                {/* Simplified Vector Map Path of India */}
                <path d="M 230 40 L 245 25 L 260 20 L 275 35 L 270 70 L 285 90 L 305 100 L 330 95 L 350 115 L 365 150 L 385 170 L 415 190 L 450 210 L 440 240 L 420 250 L 395 260 L 370 290 L 350 320 L 330 350 L 310 395 L 295 440 L 280 490 L 265 540 L 255 560 L 250 565 L 245 540 L 235 490 L 220 460 L 200 435 L 180 410 L 155 390 L 130 380 L 105 350 L 120 330 L 140 320 L 155 295 L 170 260 L 185 220 L 195 190 L 205 150 Z" fill="rgba(243, 245, 249, 0.4)" />
                
                {/* Hub Pulsing Points (Coordinates correspond directly with map projection above) */}
                
                {/* New Delhi */}
                <g className="cursor-pointer group">
                  <circle cx="230" cy="150" r="14" className="fill-saffron-start/20 stroke-saffron-end/55 stroke-1 animate-ping" />
                  <circle cx="230" cy="150" r="6" className="fill-saffron-end stroke-white stroke-1" />
                  <text x="240" y="154" className="fill-[#071A3D] font-display text-[9px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">NEW DELHI</text>
                </g>

                {/* Varanasi / Kashi */}
                <g className="cursor-pointer group">
                  <circle cx="280" cy="210" r="14" className="fill-saffron-start/20 stroke-saffron-end/55 stroke-1 animate-ping" />
                  <circle cx="280" cy="210" r="6" className="fill-saffron-start stroke-white stroke-1" />
                  <text x="290" y="214" className="fill-[#071A3D] font-display text-[9px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">KASHI (VARANASI)</text>
                </g>

                {/* Ayodhya */}
                <g className="cursor-pointer group">
                  <circle cx="275" cy="180" r="12" className="fill-gold-accent/20 stroke-gold-accent stroke-1 animate-ping" />
                  <circle cx="275" cy="180" r="5" className="fill-gold-accent stroke-white stroke-1" />
                  <text x="285" y="184" className="fill-[#071A3D] font-display text-[9px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">AYODHYA</text>
                </g>

                {/* Mumbai */}
                <g className="cursor-pointer group">
                  <circle cx="160" cy="360" r="10" className="fill-saffron-start/20 stroke-saffron-end stroke-1 animate-ping" />
                  <circle cx="160" cy="360" r="4.5" className="fill-saffron-end stroke-white stroke-1" />
                  <text x="170" y="364" className="fill-[#071A3D] font-display text-[9px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">MUMBAI</text>
                </g>

                {/* Bangalore */}
                <g className="cursor-pointer group">
                  <circle cx="210" cy="460" r="10" className="fill-saffron-start/20 stroke-saffron-end stroke-1 animate-ping" />
                  <circle cx="210" cy="460" r="4.5" className="fill-saffron-start stroke-white stroke-1" />
                  <text x="220" y="464" className="fill-[#071A3D] font-display text-[9px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">BANGALORE</text>
                </g>
              </svg>
            </div>
            
            {/* Live Sentiment Feed inside Card */}
            <div className="bg-[#F3F5F9]/70 p-4 rounded-xl border border-[#071A3D]/5 flex flex-col gap-2 mt-4 text-[10px] font-sans text-[#071A3D]/60">
              <div className="flex justify-between items-center text-saffron-start font-bold">
                <span>&gt; ANALYTICAL PIPELINE SECURE</span>
                <span>LATENCY: 42ms</span>
              </div>
              <p>&gt; Ingesting digital surveys from 12 regional clusters...</p>
              <p>&gt; Recalibrating Booth-Level dynamics across 80 constituencies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
