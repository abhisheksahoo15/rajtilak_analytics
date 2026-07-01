import React, { useEffect, useRef } from 'react';
import { Sparkles, Sun, Compass, Heart, GraduationCap, Laptop, Landmark, Star } from 'lucide-react';

interface ShowcaseItem {
  title: string;
  category: string;
  gradient: string;
  icon: React.ReactNode;
  fact: string;
}

export const CulturalShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items: ShowcaseItem[] = [
    {
      title: 'Kashi Ghats',
      category: 'Spiritual Center',
      gradient: 'from-[#FF512F] to-[#DD2476]',
      icon: <Landmark className="w-6 h-6 text-[#FF512F]" />,
      fact: 'Deep spiritual frequency monitoring.',
    },
    {
      title: 'Ayodhya Mandir',
      category: 'Civilizational Crown',
      gradient: 'from-[#FF6A00] to-[#FFB300]',
      icon: <Sun className="w-6 h-6 text-saffron-start" />,
      fact: 'Mapping narrative resonance values.',
    },
    {
      title: 'Somnath Mandir',
      category: 'Resilience Symbol',
      gradient: 'from-[#E52D27] to-[#B31217]',
      icon: <Landmark className="w-6 h-6 text-[#E52D27]" />,
      fact: 'Heritage-driven pride indicators.',
    },
    {
      title: 'Bharat Kisans',
      category: 'Agrarian Base',
      gradient: 'from-[#11998e] to-[#38ef7d]',
      icon: <Landmark className="w-6 h-6 text-[#2e7d32]" />,
      fact: 'Analysing crop manifestos.',
    },
    {
      title: 'Rural Bharat',
      category: 'Village Wisdom',
      gradient: 'from-[#F35500] to-[#E65C00]',
      icon: <Compass className="w-6 h-6 text-saffron-start" />,
      fact: 'Panchayat level local surveys.',
    },
    {
      title: 'Classical Dance',
      category: 'Artistic Heritage',
      gradient: 'from-[#EC008C] to-[#FC6767]',
      icon: <Sparkles className="w-6 h-6 text-[#c2185b]" />,
      fact: 'Art and aesthetics sentiment mapping.',
    },
    {
      title: 'Temples of India',
      category: 'Heritage Pillars',
      gradient: 'from-[#7F00FF] to-[#E100FF]',
      icon: <Landmark className="w-6 h-6 text-[#7f00ff]" />,
      fact: 'Festivals turnout dynamics.',
    },
    {
      title: 'Youth Power',
      category: 'Startups & Tech',
      gradient: 'from-[#00F2FE] to-[#4FACFE]',
      icon: <GraduationCap className="w-6 h-6 text-[#0066cc]" />,
      fact: 'First-time voter ambitions.',
    },
    {
      title: 'Innovation Hubs',
      category: 'Digital India',
      gradient: 'from-[#00C6FF] to-[#0072FF]',
      icon: <Laptop className="w-6 h-6 text-[#0072ff]" />,
      fact: 'Tech welfare policy evaluation.',
    },
    {
      title: 'Women Leadership',
      category: 'Shakti Mandate',
      gradient: 'from-[#FF0844] to-[#FFB199]',
      icon: <Heart className="w-6 h-6 text-[#d81b60]" />,
      fact: 'Welfare delivery satisfaction score.',
    },
  ];

  // Doubling the array to create seamless infinite scrolling
  const infiniteItems = [...items, ...items];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    let scrollSpeed = 0.6;

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      
      // Reset scroll when reaching middle point (to make it look infinite)
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= halfWidth) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause scroll on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrame);
    const handleMouseLeave = () => {
      animationFrame = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="culture" className="relative py-24 bg-white overflow-hidden">
      {/* Saffron background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-saffron-start/5 rounded-full blur-[170px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Heritage & Innovation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D]">
            Cultural India <span className="text-saffron-gradient">Showcase</span>
          </h2>
        </div>
        <p className="font-sans text-[#071A3D]/60 max-w-md text-sm md:text-right leading-relaxed">
          The civilizational soul meets digital systems. Hover on cards to trigger premium light sweep leaks and explore localized data indicators.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto py-6 px-6 scrollbar-none select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {infiniteItems.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[260px] sm:min-w-[300px] h-[360px] rounded-3xl glass-panel relative overflow-hidden group transition-transform duration-500 hover:scale-[1.03] cursor-pointer"
          >
            {/* Soft backdrop radial gradient glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-500`} />

            {/* Glowing neon sphere background */}
            <div className={`absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl opacity-[0.08] group-hover:opacity-[0.15] transition-all duration-750`} />

            {/* CINEMATIC LIGHT STREAK OVERLAY (sweeps from left to right on hover) */}
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out" />

            {/* Card Content Layout */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              
              {/* Top Row: category badge */}
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-display font-semibold tracking-widest text-[#071A3D] uppercase bg-[#F3F5F9]/80 px-2.5 py-1 rounded border border-[#071A3D]/10">
                  {item.category}
                </span>
                
                {/* Micro gold icon indicator */}
                <Star className="w-3.5 h-3.5 text-saffron-start opacity-30 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-750" />
              </div>

              {/* Center symbol overlay representing card topic */}
              <div className="p-4 rounded-full bg-[#F3F5F9]/80 border border-[#071A3D]/5 w-fit mx-auto shadow-inner group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Bottom details */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold text-[#071A3D] group-hover:text-saffron-end transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-sans text-[11px] text-[#071A3D]/65 leading-relaxed font-medium">
                  {item.fact}
                </p>
                
                {/* Tech scan line */}
                <div className="h-[1px] w-full bg-[#071A3D]/10 group-hover:bg-[#071A3D]/25 transition-all mt-2" />
                <span className="font-mono text-[8px] text-[#071A3D]/40 group-hover:text-saffron-start transition-all tracking-widest uppercase">
                  Data Stream: SECURE
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
