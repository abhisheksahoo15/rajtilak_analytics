import React, { useRef, useEffect } from 'react';
import { 
  Building, 
  Sprout, 
  Users, 
  TrendingUp, 
  MapPin, 
  Award, 
  Flame, 
  Compass, 
  Lightbulb, 
  Milestone, 
  Vote, 
  Building2 
} from 'lucide-react';

interface CardData {
  title: string;
  tagline: string;
  gradient: string;
  glow: string;
  icon: React.ReactNode;
  desc: string;
}

export const IndiaInMotion: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards: CardData[] = [
    {
      title: 'Kashi Ghats',
      tagline: 'Civilizational Roots',
      gradient: 'from-[#FF6A00] to-[#E52D27]',
      glow: 'shadow-[0_0_20px_rgba(255,106,0,0.12)]',
      icon: <Flame className="w-8 h-8 text-saffron-start" />,
      desc: 'Tapping into ancient spiritual consciousness to understand grassroots aspirations.',
    },
    {
      title: 'Ayodhya',
      tagline: 'Cultural Reawakening',
      gradient: 'from-[#FF9A3C] to-[#E65C00]',
      glow: 'shadow-[0_0_20px_rgba(255,154,60,0.12)]',
      icon: <Building2 className="w-8 h-8 text-saffron-end" />,
      desc: 'Mapping cultural narrative alignments and heritage-driven voter motivation.',
    },
    {
      title: 'Bharat Kisans',
      tagline: 'Agrarian Foundations',
      gradient: 'from-[#11998e] to-[#38ef7d]',
      glow: 'shadow-[0_0_20px_rgba(56,239,125,0.08)]',
      icon: <Sprout className="w-8 h-8 text-[#2e7d32]" />,
      desc: 'Decoding agricultural sentiments and crop-cycle policy expectations.',
    },
    {
      title: 'Women Leaders',
      tagline: 'Shakti Power',
      gradient: 'from-[#EC008C] to-[#FC6767]',
      glow: 'shadow-[0_0_20px_rgba(236,0,140,0.08)]',
      icon: <Users className="w-8 h-8 text-[#c2185b]" />,
      desc: 'Analysing the rise of the female electorate and target welfare delivery impacts.',
    },
    {
      title: 'Rural Bharat',
      tagline: 'Grassroots Dynamics',
      gradient: 'from-[#e65c00] to-[#f9d423]',
      glow: 'shadow-[0_0_20px_rgba(230,92,0,0.08)]',
      icon: <Compass className="w-8 h-8 text-saffron-start" />,
      desc: 'In-depth booth-level analysis across remote administrative divisions.',
    },
    {
      title: 'Urban India',
      tagline: 'Metro Aspiration',
      gradient: 'from-[#00F2FE] to-[#4FACFE]',
      glow: 'shadow-[0_0_20px_rgba(0,242,254,0.08)]',
      icon: <Building className="w-8 h-8 text-saffron-end" />,
      desc: 'Tracking middle-class economic metrics and city infrastructure policies.',
    },
    {
      title: 'Youth Voters',
      tagline: 'The First-Timers',
      gradient: 'from-[#F35500] to-[#FFB300]',
      glow: 'shadow-[0_0_20px_rgba(243,85,0,0.08)]',
      icon: <Vote className="w-8 h-8 text-saffron-start" />,
      desc: 'Predicting vocational desires, social media narratives, and career aspirations.',
    },
    {
      title: 'Startups Hubs',
      tagline: 'Digital Innovation',
      gradient: 'from-[#7F00FF] to-[#E100FF]',
      glow: 'shadow-[0_0_20px_rgba(225,0,255,0.08)]',
      icon: <Lightbulb className="w-8 h-8 text-saffron-end" />,
      desc: 'Measuring entrepreneurial micro-sentiments and technology sector indicators.',
    },
    {
      title: 'Infrastructure',
      tagline: 'Highways & Rail',
      gradient: 'from-[#2b5876] to-[#4e4376]',
      glow: 'shadow-[0_0_20px_rgba(78,67,118,0.08)]',
      icon: <Milestone className="w-8 h-8 text-[#071A3D]" />,
      desc: 'Mapping corridor connectivity to voter perception of developmental speeds.',
    },
    {
      title: 'Democracy Pulse',
      tagline: 'Voter Registration',
      gradient: 'from-[#1e3c72] to-[#2a5298]',
      glow: 'shadow-[0_0_20px_rgba(42,82,152,0.08)]',
      icon: <TrendingUp className="w-8 h-8 text-saffron-start" />,
      desc: 'Continuous voter registrations, shifting party alignments, and turnout modeling.',
    },
    {
      title: 'Cultural Festivals',
      tagline: 'Community Bond',
      gradient: 'from-[#F857A6] to-[#FF5858]',
      glow: 'shadow-[0_0_20px_rgba(248,87,166,0.08)]',
      icon: <Award className="w-8 h-8 text-saffron-end" />,
      desc: 'Decoding community gatherings and cultural heritage pride indexes.',
    },
    {
      title: 'Parliament',
      tagline: 'Federal Governance',
      gradient: 'from-[#071A3D] to-[#0A2C66]',
      glow: 'shadow-[0_0_20px_rgba(10,44,102,0.08)]',
      icon: <MapPin className="w-8 h-8 text-[#071A3D]" />,
      desc: 'Tracking parliamentary debates, legislation shifts, and national narratives.',
    },
  ];

  // Auto-scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    let scrollSpeed = 0.5;

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      
      // If we scroll to the end, wrap back to start smoothly
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
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
    <section className="relative py-24 bg-white overflow-hidden border-t border-b border-[#071A3D]/5">
      {/* Saffron background glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-saffron-start/5 rounded-full blur-[140px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Storytelling Loop
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D]">
            India in <span className="text-saffron-gradient">Motion</span>
          </h2>
        </div>
        <p className="font-sans text-[#071A3D]/60 max-w-md text-sm md:text-right leading-relaxed">
          Hover to freeze and expand any segment. Discover the distinct cultural, economic, and demographic pillars shaping the nation's political landscape.
        </p>
      </div>

      {/* Horizontal Scroll Carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto py-8 px-6 scrollbar-none select-none scroll-smooth cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`min-w-[280px] sm:min-w-[320px] h-[400px] rounded-2xl glass-panel relative overflow-hidden group transition-all duration-500 ease-out hover:scale-105 hover:z-10 ${card.glow}`}
          >
            {/* Dynamic Saffron/Gold gradient background overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-500`} />
            
            {/* Tech scanning lines */}
            <div className="absolute inset-0 grid-overlay opacity-[0.05] group-hover:opacity-[0.12] transition-opacity" />

            {/* Glowing orb in card background */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-750`} />

            {/* Card Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              {/* Top Row: Icon & Tagline */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#F3F5F9]/80 rounded-xl border border-[#071A3D]/5 group-hover:border-saffron-start/40 group-hover:shadow-[0_0_15px_rgba(255,106,0,0.1)] transition-all">
                  {card.icon}
                </div>
                <span className="text-[9px] font-display font-semibold tracking-widest text-[#071A3D] uppercase bg-[#F3F5F9]/90 px-2.5 py-1 rounded border border-[#071A3D]/10">
                  {card.tagline}
                </span>
              </div>

              {/* Bottom Row: Text description and title */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A3D] group-hover:text-saffron-end transition-colors">
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed group-hover:text-[#071A3D]/80 transition-colors">
                  {card.desc}
                </p>
                {/* Micro interaction arrow indicator */}
                <div className="flex items-center gap-1.5 text-xs font-display font-bold text-saffron-start mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  EXPLORE DATA ENGINE
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
