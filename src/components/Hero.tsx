import React, { useEffect, useState, useCallback } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedButton } from './AnimatedButton';
import {
  BarChart3, Shield, Users, Brain, Target, Vote,
  TrendingUp, Zap, Globe, Crown, MapPin, Radio
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const ROTATING_WORDS = [
  'Leaders',
  'Victories',
  'Mandates',
  'Narratives',
  'Legacies',
  'Dominance',
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [heroReady, setHeroReady] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const t1 = setTimeout(() => setHeroReady(true), 300);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWordVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsWordVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const stats = [
    { label: 'Campaigns Analyzed', value: '35+', color: '#071A3D' },
    { label: 'Data Points Processed', value: '10K+', color: '#FF6A00' },
    { label: 'Constituencies Modeled', value: '13+', color: '#071A3D' },
    { label: 'Leaders Advised', value: '20+', color: '#C5A059' },
  ];

  // Floating icon badges configuration
  const floatingIcons = [
    { Icon: BarChart3, top: '12%', left: '8%', delay: 0, size: 20, color: '#FF6A00', bg: 'rgba(255,106,0,0.08)' },
    { Icon: Shield, top: '18%', left: '88%', delay: 1.2, size: 18, color: '#071A3D', bg: 'rgba(7,26,61,0.06)' },
    { Icon: Users, top: '65%', left: '5%', delay: 2.5, size: 22, color: '#FF9A3C', bg: 'rgba(255,154,60,0.08)' },
    { Icon: Brain, top: '75%', left: '92%', delay: 0.8, size: 16, color: '#C5A059', bg: 'rgba(197,160,89,0.1)' },
    { Icon: Target, top: '35%', left: '3%', delay: 3, size: 14, color: '#071A3D', bg: 'rgba(7,26,61,0.05)' },
    { Icon: Vote, top: '45%', left: '95%', delay: 1.8, size: 20, color: '#FF6A00', bg: 'rgba(255,106,0,0.06)' },
    { Icon: TrendingUp, top: '85%', left: '15%', delay: 0.5, size: 16, color: '#00B4D8', bg: 'rgba(0,180,216,0.08)' },
    { Icon: Globe, top: '8%', left: '75%', delay: 2.2, size: 14, color: '#FF9A3C', bg: 'rgba(255,154,60,0.06)' },
    { Icon: Crown, top: '55%', left: '10%', delay: 1.5, size: 18, color: '#C5A059', bg: 'rgba(197,160,89,0.08)' },
    { Icon: MapPin, top: '30%', left: '92%', delay: 3.5, size: 15, color: '#071A3D', bg: 'rgba(7,26,61,0.06)' },
  ];

  // Animated connection nodes
  const connectionNodes = [
    { x1: '15%', y1: '25%', x2: '30%', y2: '15%' },
    { x1: '70%', y1: '20%', x2: '85%', y2: '30%' },
    { x1: '10%', y1: '60%', x2: '25%', y2: '75%' },
    { x1: '75%', y1: '65%', x2: '90%', y2: '55%' },
    { x1: '40%', y1: '85%', x2: '55%', y2: '90%' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8"
      onMouseMove={handleMouseMove}
      style={{ background: 'linear-gradient(170deg, #FAFBFE 0%, #FFF8F2 30%, #F5F0EB 60%, #FFFFFF 100%)' }}
    >
      {/* ═══════════════════════════════════════════
          ANIMATED BACKGROUND LAYER
          ═══════════════════════════════════════════ */}

      {/* Interactive gradient orb following cursor */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none transition-all duration-[3000ms] ease-out opacity-60"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,106,0,0.07) 0%, rgba(197,160,89,0.04) 30%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Animated gradient mesh blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left warm blob */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-30 animate-morph-blob"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,106,0,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Bottom-right navy blob */}
        <div
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-20 animate-morph-blob"
          style={{
            background: 'radial-gradient(ellipse, rgba(7,26,61,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '4s',
            animationDuration: '12s',
          }}
        />
        {/* Center gold accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-15 animate-breathe"
          style={{
            background: 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Concentric rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
          <div className="absolute inset-0 border border-[#071A3D]/[0.03] rounded-full animate-spin-slow" />
          <div className="absolute inset-[80px] border border-saffron-start/[0.04] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />
          <div className="absolute inset-[180px] border border-[#C5A059]/[0.04] rounded-full animate-spin-slow" style={{ animationDuration: '45s' }} />
          <div className="absolute inset-[280px] border border-[#071A3D]/[0.02] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '55s' }} />

          {/* Orbiting dots on rings */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-saffron-start/30 animate-spin-slow" style={{ transformOrigin: '50% 450px' }} />
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#071A3D]/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s', transformOrigin: '50% 370px' }} />
          <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C5A059]/25 animate-spin-slow" style={{ animationDuration: '45s', transformOrigin: '50% 270px' }} />
        </div>

        {/* Dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1.2" fill="#071A3D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {connectionNodes.map((node, i) => (
            <g key={i}>
              <line
                x1={node.x1} y1={node.y1} x2={node.x2} y2={node.y2}
                stroke="url(#lineGrad)"
                strokeWidth="1"
                opacity="0.08"
                strokeDasharray="4 6"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur={`${3 + i}s`} repeatCount="indefinite" />
              </line>
              <circle cx={node.x1} cy={node.y1} r="2" fill="#FF6A00" opacity="0.12">
                <animate attributeName="r" values="2;3.5;2" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={node.x2} cy={node.y2} r="2" fill="#071A3D" opacity="0.08">
                <animate attributeName="r" values="2;3;2" dur="4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6A00" />
              <stop offset="100%" stopColor="#071A3D" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating diamond shapes */}
        {[
          { top: '20%', left: '18%', size: 8, delay: 0, color: '#FF6A00' },
          { top: '30%', left: '80%', size: 6, delay: 1.5, color: '#071A3D' },
          { top: '75%', left: '12%', size: 10, delay: 2, color: '#FF9A3C' },
          { top: '65%', left: '85%', size: 5, delay: 3, color: '#C5A059' },
          { top: '88%', left: '45%', size: 7, delay: 0.5, color: '#FF6A00' },
          { top: '10%', left: '55%', size: 5, delay: 2.5, color: '#071A3D' },
          { top: '50%', left: '97%', size: 6, delay: 1, color: '#FF9A3C' },
          { top: '40%', left: '2%', size: 8, delay: 3.5, color: '#C5A059' },
        ].map((item, i) => (
          <div
            key={`diamond-${i}`}
            className="absolute animate-float"
            style={{
              top: item.top,
              left: item.left,
              animationDelay: `${item.delay}s`,
              animationDuration: `${5 + i * 0.8}s`,
            }}
          >
            <div
              className="rotate-45 opacity-15"
              style={{ width: item.size, height: item.size, background: item.color, borderRadius: '1.5px' }}
            />
          </div>
        ))}

        {/* Horizontal & vertical accent lines */}
        <div className="absolute top-[28%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-saffron-start/[0.06] to-transparent" />
        <div className="absolute top-[72%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#071A3D]/[0.04] to-transparent" />
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#071A3D]/[0.03] to-transparent" />
        <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-saffron-start/[0.04] to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════
          FLOATING ICON BADGES
          ═══════════════════════════════════════════ */}
      {floatingIcons.map(({ Icon, top, left, delay, size, color, bg }, i) => (
        <div
          key={`icon-${i}`}
          className="absolute z-10 pointer-events-none animate-float"
          style={{
            top,
            left,
            animationDelay: `${delay}s`,
            animationDuration: `${5 + i * 0.7}s`,
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? 'scale(1)' : 'scale(0)',
            transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${800 + i * 100}ms`,
          }}
        >
          <div
            className="p-2.5 rounded-xl shadow-sm backdrop-blur-sm border border-white/40"
            style={{ background: bg }}
          >
            <Icon size={size} color={color} strokeWidth={1.8} />
          </div>
        </div>
      ))}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* ═══════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════ */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold text-saffron-end mb-10 border border-saffron-start/20 bg-white/70 backdrop-blur-sm shadow-[0_2px_12px_rgba(255,106,0,0.06)]"
          style={{
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)',
          }}
        >
          <Crown size={14} className="text-saffron-start animate-glow-pulse" />
          Crowning India's Leadership & Democracy
        </div>

        {/* Main Headline with rotating word */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-[#071A3D] max-w-5xl leading-[1.08] mb-5">
          <span
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) 200ms',
              display: 'inline-block',
            }}
          >
            We Build
          </span>{' '}

          {/* Rotating Word */}
          <span className="relative inline-block min-w-[200px] sm:min-w-[280px] md:min-w-[380px] text-left">
            <span
              className="text-saffron-gradient inline-block"
              style={{
                opacity: isWordVisible && heroReady ? 1 : 0,
                transform: isWordVisible && heroReady
                  ? 'translateY(0) rotateX(0deg)'
                  : 'translateY(20px) rotateX(-40deg)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transformOrigin: 'bottom center',
              }}
            >
              {ROTATING_WORDS[currentWordIndex]}
            </span>
            <span
              className="inline-block w-[4px] h-[0.85em] bg-saffron-start/60 ml-1 align-baseline rounded-sm"
              style={{ animation: 'blinkCaret 1s step-end infinite' }}
            />
          </span>

          <br />
          <span
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) 500ms',
              display: 'inline-block',
            }}
          >
            That Win Elections.
          </span>
        </h1>

        {/* Punchy subtitle */}
        <p
          className="font-sans text-base sm:text-lg text-[#071A3D]/50 max-w-xl leading-relaxed mb-8 font-medium"
          style={{
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 700ms',
          }}
        >
          Data-driven strategy. Ground-level execution.<br className="hidden sm:block" />
          From booth to ballot — we engineer decisive mandates.
        </p>

        {/* Floating feature pills between subtitle and buttons */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          style={{
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.7s ease 800ms',
          }}
        >
          {[
            { icon: <Brain size={13} />, label: 'AI Sentiment', color: '#FF6A00' },
            { icon: <Target size={13} />, label: 'Booth Analytics', color: '#071A3D' },
            { icon: <Radio size={13} />, label: 'Live War Room', color: '#FF9A3C' },
            { icon: <Shield size={13} />, label: 'Secure Intel', color: '#C5A059' },
            { icon: <Zap size={13} />, label: '48hr Updates', color: '#00B4D8' },
          ].map((pill, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#071A3D]/5 text-[10px] font-display font-bold uppercase tracking-wider text-[#071A3D]/60 shadow-[0_1px_4px_rgba(7,26,61,0.04)] hover:border-saffron-start/30 hover:shadow-[0_4px_12px_rgba(255,106,0,0.08)] hover:text-[#071A3D] transition-all duration-300 cursor-default"
              style={{
                animationDelay: `${i * 100 + 900}ms`,
                color: pill.color,
              }}
            >
              <span style={{ color: pill.color }}>{pill.icon}</span>
              {pill.label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-5 items-center"
          style={{
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 950ms',
          }}
        >
          <AnimatedButton
            variant="primary"
            size="lg"
            onClick={() => onNavigate('contact')}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            }
          >
            Start Winning
          </AnimatedButton>

          <AnimatedButton
            variant="outline"
            size="lg"
            onClick={() => onNavigate('warroom')}
            icon={<span className="w-2 h-2 rounded-full bg-saffron-start animate-pulse" />}
          >
            Enter War Room
          </AnimatedButton>
        </div>

        {/* Stats Dashboard Card */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-14 sm:mt-18 w-full max-w-5xl relative">
            <div className="bg-white/85 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-[#071A3D]/5 shadow-[0_20px_60px_-15px_rgba(7,26,61,0.08)] relative hover-card">
              {/* Live badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-lg bg-[#071A3D] text-[9px] font-display font-semibold tracking-widest text-[#00E5FF] uppercase border border-[#00E5FF]/20">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
                  Live Analytics
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex flex-col gap-1.5 group cursor-default">
                    <span className="text-[10px] text-[#071A3D]/35 uppercase font-display tracking-widest font-bold">{stat.label}</span>
                    <span
                      className="font-display text-2xl sm:text-3xl font-black transition-all duration-300 group-hover:scale-105 group-hover:translate-x-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    <div className="w-full h-[2px] bg-[#071A3D]/5 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: heroReady ? '100%' : '0%',
                          background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
                          transitionDelay: `${1200 + i * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom trust bar */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-5 border-t border-[#071A3D]/5">
                {[
                  { icon: <Shield size={12} />, text: 'End-to-End Encrypted Operations' },
                  { icon: <Globe size={12} />, text: 'Pan-India Advisory Capability' },
                  { icon: <Users size={12} />, text: 'Dedicated Campaign War Rooms' },
                ].map((trust, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-[9px] font-display font-bold uppercase tracking-widest text-[#071A3D]/30"
                  >
                    <span className="text-saffron-start/50">{trust.icon}</span>
                    {trust.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
