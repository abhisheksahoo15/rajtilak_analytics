import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#071A3D] text-white pt-24 pb-12 overflow-hidden border-t border-saffron-start/15">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Saffron and Navy glow backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-saffron-start/5 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-[#00E5FF]/5 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      {/* BACKGROUND GRAPHIC: Dot-matrix Map of India */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 800 850" className="w-full max-w-[500px] h-auto object-contain">
          {/* Group of circles forming a grid of India shape */}
          <g fill="#00E5FF" className="animate-pulse-slow">
            {/* Delhi & North coordinates */}
            <circle cx="400" cy="180" r="3" />
            <circle cx="410" cy="160" r="3" />
            <circle cx="390" cy="170" r="3" />
            <circle cx="405" cy="195" r="3" />
            <circle cx="420" cy="170" r="3" />
            
            {/* East / UP coordinates */}
            <circle cx="430" cy="230" r="3" />
            <circle cx="450" cy="240" r="3" />
            <circle cx="470" cy="250" r="3" />
            <circle cx="490" cy="260" r="3" />
            <circle cx="510" cy="270" r="3" />
            <circle cx="440" cy="210" r="3" />
            <circle cx="460" cy="220" r="3" />
            <circle cx="480" cy="230" r="3" />
            
            {/* West / Gujarat coordinates */}
            <circle cx="330" cy="290" r="3" />
            <circle cx="340" cy="310" r="3" />
            <circle cx="310" cy="300" r="3" />
            <circle cx="325" cy="320" r="3" />
            <circle cx="350" cy="330" r="3" />
            
            {/* Central coordinates */}
            <circle cx="390" cy="270" r="3" />
            <circle cx="410" cy="290" r="3" />
            <circle cx="400" cy="310" r="3" />
            <circle cx="420" cy="330" r="3" />
            <circle cx="380" cy="300" r="3" />
            
            {/* South coordinates */}
            <circle cx="400" cy="420" r="3" />
            <circle cx="410" cy="450" r="3" />
            <circle cx="390" cy="480" r="3" />
            <circle cx="405" cy="510" r="3" />
            <circle cx="400" cy="540" r="3" />
            <circle cx="395" cy="570" r="3" />
            <circle cx="415" cy="490" r="3" />
            <circle cx="380" cy="460" r="3" />
            <circle cx="370" cy="430" r="3" />
            <circle cx="385" cy="400" r="3" />
            <circle cx="425" cy="410" r="3" />
            <circle cx="430" cy="440" r="3" />
            <circle cx="420" cy="470" r="3" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Company Intro & Logo (Cols 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <button onClick={() => onNavigate('home')} className="text-left focus:outline-none cursor-pointer">
              <Logo lightText={true} size="lg" />
            </button>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm">
              Rajtilak Analytics is India's leading political strategy management and election campaign consulting firm, providing data-driven voter analytics, sentiment analysis, and campaign intelligence services.
            </p>
            {/* Custom SVG Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="X / Twitter" className="p-2.5 rounded-lg bg-[#050505]/60 hover:bg-saffron-start hover:text-white border border-white/5 transition-all text-white/60">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-lg bg-[#050505]/60 hover:bg-saffron-start hover:text-white border border-white/5 transition-all text-white/60">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/rajtilakanalytics.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 rounded-lg bg-[#050505]/60 hover:bg-saffron-start hover:text-white border border-white/5 transition-all text-white/60">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links: Company (Cols 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              Company
            </span>
            <div className="flex flex-col gap-3 font-sans text-xs text-white/60">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Home</button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Who We Are</button>
              <button onClick={() => onNavigate('services')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Services</button>
              <button onClick={() => onNavigate('impact')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Milestones</button>
            </div>
          </div>

          {/* Quick links: Resources (Cols 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-saffron-end">
              Resources
            </span>
            <div className="flex flex-col gap-3 font-sans text-xs text-white/60">
              <button onClick={() => onNavigate('warroom')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">War Room Console</button>
              <button onClick={() => onNavigate('sentiment-engine')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">AI Sentiment Models</button>
              <button onClick={() => onNavigate('trends')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Trends & Sentiment</button>
              <button onClick={() => onNavigate('blogs')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Insights & Blogs</button>
              <button onClick={() => onNavigate('reports')} className="text-left hover:text-saffron-end transition-colors cursor-pointer focus:outline-none">Analysis Reports</button>
            </div>
          </div>

          {/* Contact coordinates (Cols 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-gold-accent">
              Contact Details
            </span>
            <div className="flex flex-col gap-4 font-sans text-xs text-white/60">
              <div className="flex items-start gap-3">
                <span className="text-[#00E5FF] font-black font-mono mt-0.5">HQ:</span>
                <span className="leading-relaxed">Getsetai Innovations Block, Vivekananda nagar Kohka, Bhilai, Dist- Durg, 490023</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-saffron-start font-black font-mono">Mail:</span>
                <a href="mailto:strategy.rajtilak@gmail.com" className="hover:text-saffron-start transition-colors font-mono">strategy.rajtilak@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-saffron-end font-black font-mono mt-0.5">Call:</span>
                <div className="flex flex-col gap-1.5 font-mono">
                  <a href="tel:+919479083110" className="hover:text-saffron-end transition-colors">+91 94790 83110</a>
                  <a href="tel:+918349948003" className="hover:text-saffron-end transition-colors">+91 83499 48003</a>
                  <a href="tel:+919907950975" className="hover:text-saffron-end transition-colors">+91 99079 50975</a>
                  <a href="tel:+919202893485" className="hover:text-saffron-end transition-colors">+91 92028 93485</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Centerpiece: Glowing Rajtilak Symbol quote */}
        <div className="border-t border-white/10 pt-16 flex flex-col items-center gap-6">
          {/* Animated Glowing centerpiece using the official logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-saffron-start rounded-full blur-xl opacity-40 scale-125 animate-pulse" />
            <div className="relative z-10 bg-white p-2.5 rounded-2xl border border-white/25 shadow-2xl">
              <img 
                src="/logo.png" 
                alt="Rajtilak Logo Centerpiece" 
                className="h-20 w-auto object-contain block"
              />
            </div>
          </div>

          <span className="font-serif italic text-2xl tracking-[0.25em] text-white select-none">
            DATA. STRATEGY. <span className="text-saffron-gradient font-bold">LEADERSHIP.</span>
          </span>
          <div className="w-[120px] h-[1.5px] bg-gradient-to-r from-transparent via-saffron-start to-transparent shadow-[0_0_6px_#FF6A00]" />
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-white/30 border-t border-white/5 pt-8 mt-4 gap-4">
          <span>© 2026 RAJTILAK ANALYTICS. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">PRIVACY BLUEPRINT</a>
            <a href="#" className="hover:text-white">COMPLIANCE SECURITY</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
