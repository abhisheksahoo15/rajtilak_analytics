import React, { useState } from 'react';
import { 
  Target, 
  BarChart2, 
  Compass, 
  MessageCircle, 
  Award, 
  Flame, 
  TrendingUp, 
  MapPin, 
  PenTool, 
  Search, 
  Megaphone, 
  ShieldCheck 
} from 'lucide-react';

interface ServiceItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services: ServiceItem[] = [
    {
      name: 'Campaign Strategy',
      desc: 'Formulating end-to-end coalition blueprints, poll manifesto strategies, and structural campaign plans.',
      icon: <Target className="w-6 h-6 text-saffron-start" />,
    },
    {
      name: 'AI Voter Analytics',
      desc: 'Deep learning-based demographic evaluation, voter cohort clustering, and predictive victory forecasting.',
      icon: <BarChart2 className="w-6 h-6 text-saffron-end" />,
    },
    {
      name: 'Psychology Design',
      desc: 'Decoding voter sentiment drivers, aspiration mappings, and behavioral conversion mechanics.',
      icon: <Compass className="w-6 h-6 text-[#071A3D]" />,
    },
    {
      name: 'Sentiment Building',
      desc: 'Forging emotional connects, civic pride narratives, and community alignment campaigns.',
      icon: <MessageCircle className="w-6 h-6 text-gold-accent" />,
    },
    {
      name: 'Leader Branding',
      desc: 'Calibrating leadership profiles with civilizational authority and regional charisma.',
      icon: <Award className="w-6 h-6 text-saffron-start" />,
    },
    {
      name: 'Election War Room',
      desc: 'Full-scale command operations managing real-time data flow and campaign adjustments.',
      icon: <Flame className="w-6 h-6 text-saffron-end" />,
    },
    {
      name: 'Social Media Growth',
      desc: 'Accelerating online footprint, micro-content propagation, and narrative amplification.',
      icon: <TrendingUp className="w-6 h-6 text-[#071A3D]" />,
    },
    {
      name: 'Booth Planning',
      desc: 'Micro-targeting demographics at the single polling station level to secure local majorities.',
      icon: <MapPin className="w-6 h-6 text-gold-accent" />,
    },
    {
      name: 'Speech Writing',
      desc: 'Drafting impact-optimized speeches with regional phrases and cadence mapping.',
      icon: <PenTool className="w-6 h-6 text-saffron-start" />,
    },
    {
      name: 'Political Intelligence',
      desc: 'Comprehensive mapping of constituency dynamics, local influencers, and opponent paths.',
      icon: <Search className="w-6 h-6 text-saffron-end" />,
    },
    {
      name: 'Digital Campaigns',
      desc: 'AI-driven targeting, WhatsApp network propagation, and narrative shaping.',
      icon: <Megaphone className="w-6 h-6 text-[#071A3D]" />,
    },
    {
      name: 'Reputation Management',
      desc: 'Mitigating negative waves, structural leaks, and executing counter-strategies.',
      icon: <ShieldCheck className="w-6 h-6 text-gold-accent" />,
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Background neon grids */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-navy-royal/5 rounded-full blur-[180px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        
        {/* Title */}
        <div className="text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Campaign Intelligence Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#071A3D] max-w-2xl leading-tight">
            Comprehensive Suite of <span className="text-saffron-gradient">Victory Solutions</span>
          </h2>
          <p className="font-sans text-[#071A3D]/55 max-w-xl leading-relaxed text-sm">
            We operate across all verticals of election planning, blending data-driven algorithms with decades of on-ground campaigning insights.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, index) => (
            <ServiceCard key={index} svc={svc} onNavigate={onNavigate} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual card mouse-tilt effect
const ServiceCard: React.FC<{ svc: ServiceItem; onNavigate?: (page: string) => void }> = ({ svc, onNavigate }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Relative mouse coordinates from center of card
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Convert to rotation angle (max 10 degrees)
    const factor = 12;
    setRotate({
      x: -y / factor,
      y: x / factor,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onClick={() => onNavigate && onNavigate('contact')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-panel p-6 rounded-2xl border-[#071A3D]/5 hover:border-saffron-start/20 hover:shadow-[0_8px_32px_rgba(255,106,0,0.08)] flex flex-col gap-4 group cursor-pointer transition-all duration-300"
    >
      {/* Icon frame with micro anims */}
      <div className="p-3 bg-[#F3F5F9]/80 border border-[#071A3D]/5 group-hover:border-saffron-start/40 rounded-xl w-fit group-hover:scale-110 transition-all duration-300 shadow-inner">
        {svc.icon}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-display text-base font-bold text-[#071A3D] group-hover:text-saffron-end transition-colors duration-300">
          {svc.name}
        </h3>
        <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed group-hover:text-[#071A3D]/80 transition-colors duration-300">
          {svc.desc}
        </p>
      </div>

      {/* Floating dot marker */}
      <div className="w-1.5 h-1.5 rounded-full bg-saffron-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end mt-auto" />
    </div>
  );
};
