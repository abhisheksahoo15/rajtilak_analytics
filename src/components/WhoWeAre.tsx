import React, { useEffect, useState, useRef } from 'react';

export const WhoWeAre: React.FC = () => {
  const [stats, setStats] = useState({
    campaigns: 0,
    constituencies: 0,
    dataPoints: 0,
    leaders: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const targets = {
    campaigns: 3,
    constituencies: 3,
    dataPoints: 10, // Thousand
    leaders: 20,
  };

  // Trigger counter animation only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      setStats({
        campaigns: Math.min(targets.campaigns, Math.round(targets.campaigns * eased)),
        constituencies: Math.min(targets.constituencies, Math.round(targets.constituencies * eased)),
        dataPoints: Math.min(targets.dataPoints, parseFloat((targets.dataPoints * eased).toFixed(0))),
        leaders: Math.min(targets.leaders, Math.round(targets.leaders * eased)),
      });

      if (stepCount >= steps) {
        clearInterval(timer);
        setStats({
          campaigns: targets.campaigns,
          constituencies: targets.constituencies,
          dataPoints: targets.dataPoints,
          leaders: targets.leaders,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="solutions" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-navy-royal/5 rounded-full blur-[160px] opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Side: Text and Statistics */}
        <div className="flex flex-col gap-6 sm:gap-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Who We Are
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#071A3D]">
            Data-Driven Political <br className="hidden sm:block" />
            <span className="text-saffron-gradient">Strategy & Advisory.</span>
          </h2>

          <p className="font-sans text-[#071A3D]/80 leading-relaxed text-base sm:text-lg">
            Rajtilak Analytics is a political consulting and campaign intelligence firm based in India. We combine demographic research, voter sentiment analysis, and ground-level field operations to help political leaders build effective campaign strategies. 
          </p>

          <p className="font-sans text-[#071A3D]/60 leading-relaxed text-sm sm:text-base">
            Our team works from dedicated operation centers, tracking voter feedback, analyzing public sentiment across digital and offline channels, and translating data into actionable campaign plans tailored to each constituency.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-6">
            <div className="flex flex-col border-l-2 border-saffron-start/50 pl-4 py-2 group hover:border-saffron-start transition-colors duration-300">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D] transition-transform duration-300 group-hover:scale-105 origin-left">
                {stats.campaigns}+
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Campaigns Managed
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-saffron-end/50 pl-4 py-2 group hover:border-saffron-end transition-colors duration-300">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D] transition-transform duration-300 group-hover:scale-105 origin-left">
                {stats.constituencies}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Constituencies Modeled
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-gold-accent/50 pl-4 py-2 group hover:border-gold-accent transition-colors duration-300">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D] transition-transform duration-300 group-hover:scale-105 origin-left">
                {stats.dataPoints}K+
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Data Points Processed
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-saffron-start/40 pl-4 py-2 group hover:border-saffron-start transition-colors duration-300">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A3D] transition-transform duration-300 group-hover:scale-105 origin-left">
                {stats.leaders}+
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#071A3D]/55 mt-1 font-semibold">
                Leaders Advised
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: India Live Pulse Map */}
        <div className="relative flex justify-center items-center">
          {/* Outer glowing dashboard ring */}
          <div className="absolute inset-0 border border-[#071A3D]/5 rounded-full scale-95 pointer-events-none animate-pulse-slow" />
          
          <div className="w-full max-w-[550px] relative z-10 p-4 sm:p-6 glass-panel-glow rounded-3xl border-saffron-start/15 shadow-2xl">
            {/* Live radar sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-saffron-start/5 to-transparent rounded-3xl animate-pulse pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#071A3D]/10 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-saffron-start animate-ping" />
                <span className="text-[10px] sm:text-xs font-display font-bold tracking-widest uppercase text-[#071A3D]">
                  Live Sentiment Hub Map
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-display text-[#071A3D]/40 tracking-wider hidden sm:block">
                REFRESHING LIVE DATA
              </span>
            </div>

            {/* India Map Outline with pulsing cities */}
            <div className="w-full h-[280px] sm:h-[350px] lg:h-[400px] flex items-center justify-center relative">
              <svg viewBox="0 0 500 580" className="w-full h-full text-[#071A3D]/10 fill-current stroke-[#071A3D]/25 stroke-1 select-none">
                {/* Simplified Vector Map Path of India */}
                <path d="M 230 40 L 245 25 L 260 20 L 275 35 L 270 70 L 285 90 L 305 100 L 330 95 L 350 115 L 365 150 L 385 170 L 415 190 L 450 210 L 440 240 L 420 250 L 395 260 L 370 290 L 350 320 L 330 350 L 310 395 L 295 440 L 280 490 L 265 540 L 255 560 L 250 565 L 245 540 L 235 490 L 220 460 L 200 435 L 180 410 L 155 390 L 130 380 L 105 350 L 120 330 L 140 320 L 155 295 L 170 260 L 185 220 L 195 190 L 205 150 Z" fill="rgba(243, 245, 249, 0.4)" />
                
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
                  <text x="290" y="214" className="fill-[#071A3D] font-display text-[9px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">VARANASI</text>
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
            <div className="bg-[#F3F5F9]/70 p-3 sm:p-4 rounded-xl border border-[#071A3D]/5 flex flex-col gap-2 mt-3 sm:mt-4 text-[9px] sm:text-[10px] font-sans text-[#071A3D]/60">
              <div className="flex justify-between items-center text-saffron-start font-bold">
                <span>&gt; ANALYTICAL PIPELINE ACTIVE</span>
                <span className="hidden sm:inline">LATENCY: 42ms</span>
              </div>
              <p>&gt; Processing voter demographic surveys from active regions...</p>
              <p>&gt; Calibrating sentiment models across tracked constituencies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
