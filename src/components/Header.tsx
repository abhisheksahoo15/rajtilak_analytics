import React, { useState, useEffect, useCallback } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'War Room', page: 'warroom' },
    { name: 'Impact', page: 'impact' },
    { name: 'AI Engine', page: 'sentiment-engine' },
    { name: 'Trends', page: 'trends' },
    { name: 'Insights', page: 'blogs' },
    { name: 'Reports', page: 'reports' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = useCallback((page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  }, [onNavigate]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] py-3 ${
          isScrolled
            ? 'glass-nav px-4 md:px-8 mt-2 mx-2 md:mx-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(255,106,0,0.1)]'
            : 'bg-transparent px-6 md:px-12 mt-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center text-left focus:outline-none cursor-pointer group"
          >
            <Logo className="scale-90 origin-left group-hover:scale-95 transition-transform duration-300" lightText={false} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`relative px-3 py-2 font-display text-[10px] tracking-widest uppercase transition-all duration-300 font-bold focus:outline-none cursor-pointer rounded-lg group ${
                  currentPage === link.page
                    ? 'text-[#071A3D] bg-[#071A3D]/5'
                    : 'text-[#071A3D]/55 hover:text-[#071A3D] hover:bg-[#071A3D]/3'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.name}
                {/* Animated saffron underline */}
                <span 
                  className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-saffron-start to-saffron-end rounded-full transition-all duration-300 ${
                    currentPage === link.page ? 'w-3/4 opacity-100 shadow-[0_0_8px_#FF6A00]' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:flex magnetic-btn group relative px-5 py-2.5 rounded-xl border border-saffron-start/40 text-[#071A3D] font-display text-[10px] font-black uppercase tracking-widest hover:border-saffron-end overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(255,106,0,0.06)] hover:shadow-[0_0_25px_rgba(255,106,0,0.2)] bg-white/50 backdrop-blur-md cursor-pointer items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-saffron-start to-saffron-end opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Book Session
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-end animate-ping" />
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-[#071A3D] rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-[#071A3D] rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-[#071A3D] rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#071A3D]/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`w-full text-left px-4 py-3.5 rounded-xl font-display text-sm tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer ${
                  currentPage === link.page
                    ? 'text-saffron-start bg-saffron-start/8'
                    : 'text-[#071A3D]/70 hover:text-[#071A3D] hover:bg-[#071A3D]/3'
                }`}
                style={{
                  animation: mobileMenuOpen ? `slideInStagger 0.4s ${i * 60}ms both` : 'none',
                }}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-4 w-full px-4 py-3.5 rounded-xl bg-gradient-to-r from-saffron-start to-saffron-end text-white font-display text-sm font-bold uppercase tracking-widest cursor-pointer hover:shadow-[0_10px_25px_rgba(255,106,0,0.3)] transition-all duration-300"
              style={{
                animation: mobileMenuOpen ? `slideInStagger 0.4s ${navLinks.length * 60}ms both` : 'none',
              }}
            >
              Book Session ✦
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
