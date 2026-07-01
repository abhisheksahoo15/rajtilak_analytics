import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

type PreloaderStep = 'loading' | 'fadeOut';

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState<PreloaderStep>('loading');

  // Smooth ease-out progress charging up to 100% over exactly 5 seconds
  useEffect(() => {
    const duration = 5000; // 5000ms (5 seconds)
    const intervalTime = 16; // Smooth 60fps updates (16.67ms)
    const startTime = Date.now();
    let timeoutId: any;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(1, elapsed / duration);
      
      // Cubic ease-out curve for natural and premium acceleration/deceleration feel
      const easeOutCubic = 1 - Math.pow(1 - t, 3);
      const currentProgress = easeOutCubic * 100;
      
      setProgress(currentProgress);

      if (t >= 1) {
        clearInterval(interval);
        setStep('fadeOut');
        // Let the fadeOut animation run for 800ms before calling onComplete to hide the preloader
        timeoutId = setTimeout(onComplete, 800);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-[800ms] ease-in-out ${
        step === 'fadeOut' 
          ? 'opacity-0 scale-105 pointer-events-none' 
          : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 40%, #FDFDFB 0%, #FAF6EE 50%, #F1E9DB 100%)',
      }}
    >
      {/* Slow fade-in on mount for a premium, gentle arrival */}
      <style>{`
        @keyframes preloader-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-preloader-fade {
          animation: preloader-fade-in 1.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* Decorative Warm Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ────────────────────────────────────────────────────────────────
          LEFT EDGE STRATEGIC PANEL (Not in corners)
          ──────────────────────────────────────────────────────────────── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-7 z-20 select-none animate-preloader-fade">
        {/* Crown - Leadership */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25l3 11.25h7.5l3-11.25-4.5 5.25-3.75-6.75-3.75 6.75-4.5-5.25z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18.75h13.5" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">
            LEAD
          </span>
        </div>

        <div className="w-[1px] h-10 bg-[#071A3D]/10" />

        {/* Megaphone - Voice */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">
            VOICE
          </span>
        </div>

        <div className="w-[1px] h-10 bg-[#071A3D]/10" />

        {/* Scales - Democracy */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 7h18M6 7l2 6h-4l2-6zm12 0l2 6h-4l2-6zM12 21h4m-8 0h4" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">
            POLICY
          </span>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────
          RIGHT EDGE STRATEGIC PANEL (Not in corners)
          ──────────────────────────────────────────────────────────────── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-7 z-20 select-none animate-preloader-fade">
        {/* Network - Intelligence */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a3 3 0 003-3V12a3 3 0 10-6 0v3.72a3 3 0 003 3zM6 18.72a3 3 0 003-3V12a3 3 0 10-6 0v3.72a3 3 0 003 3zM12 9a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6v6" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">
            INTEL
          </span>
        </div>

        <div className="w-[1px] h-10 bg-[#071A3D]/10" />

        {/* Chart - Analytics */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 17v-4m4 4V9m4 8v-6m4 6V5" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">
            DATA
          </span>
        </div>

        <div className="w-[1px] h-10 bg-[#071A3D]/10" />

        {/* Group - Voters */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0012 20.25a11.38 11.38 0 00-3-1.013V19.12c0-1.113.285-2.16.786-3.07M9 19.128a9.38 9.38 0 01-2.625.372 9.337 9.337 0 01-4.121-.952 4.125 4.125 0 017.533-2.493M9 19.128v-.003c0-1.112.285-2.16.786-3.07M12 12a3 3 0 100-6 3 3 0 000 6zm-7 0a3 3 0 100-6 3 3 0 000 6zm14 0a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">
            VOTERS
          </span>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────
          INDIAN PARLIAMENT BUILDING OUTLINE WATERMARK (ARCHITECTURAL BLUEPRINT)
          ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-[-5%] top-[15%] flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <svg 
          viewBox="0 0 400 200" 
          className="w-[95%] max-w-[750px] h-auto opacity-[0.055] text-[#071A3D] transition-opacity duration-1000"
          fill="none"
        >
          {/* Plinth Base steps */}
          <line x1="30" y1="162" x2="370" y2="162" stroke="currentColor" strokeWidth="1.2" />
          <line x1="36" y1="158" x2="364" y2="158" stroke="currentColor" strokeWidth="0.8" />
          <line x1="42" y1="154" x2="358" y2="154" stroke="currentColor" strokeWidth="0.6" />

          {/* Colonnade Columns (Perspective spaced) */}
          {Array.from({ length: 36 }).map((_, i) => {
            const numColumns = 36;
            const C = 200;
            const R = 158;
            const angleLimit = 78;
            const angleDeg = -angleLimit + (i * (angleLimit * 2)) / (numColumns - 1);
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = C + R * Math.sin(angleRad);
            const opacity = 0.2 + 0.8 * Math.cos(angleRad);
            return (
              <g key={i} style={{ opacity }}>
                <line x1={x} y1={100} x2={x} y2={154} stroke="currentColor" strokeWidth="0.8" />
                <line x1={x - 1.5} y1={100} x2={x + 1.5} y2={100} stroke="currentColor" strokeWidth="0.8" />
                <line x1={x - 1.5} y1={154} x2={x + 1.5} y2={154} stroke="currentColor" strokeWidth="0.8" />
              </g>
            );
          })}

          {/* Entablature (Roof Beam structure) */}
          <line x1="42" y1="100" x2="358" y2="100" stroke="currentColor" strokeWidth="0.6" />
          <line x1="36" y1="96" x2="364" y2="96" stroke="currentColor" strokeWidth="0.8" />
          <line x1="30" y1="92" x2="370" y2="92" stroke="currentColor" strokeWidth="1.2" />

          {/* Dome Drum */}
          <rect x="165" y="70" width="70" height="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <line x1="172" y1="70" x2="172" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="179" y1="70" x2="179" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="186" y1="70" x2="186" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="193" y1="70" x2="193" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="207" y1="70" x2="207" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="214" y1="70" x2="214" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="221" y1="70" x2="221" y2="92" stroke="currentColor" strokeWidth="0.5" />
          <line x1="228" y1="70" x2="228" y2="92" stroke="currentColor" strokeWidth="0.5" />

          {/* Dome Shell (Subtle curve) */}
          <path d="M 168,70 C 168,36 232,36 232,70" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 184,70 C 184,48 200,48 200,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 216,70 C 216,48 200,48 200,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="40" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" />

          {/* Cupola / Lantern */}
          <rect x="195" y="32" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 193,32 C 193,27 207,27 207,32" fill="none" stroke="currentColor" strokeWidth="0.8" />

          {/* Flag Staff & National Tricolor Flag */}
          <line x1="200" y1="27" x2="200" y2="8" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 200,8 L 210,11 L 200,14 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Welcome Console Content Card */}
      <div 
        className="z-10 flex flex-col items-center gap-8 text-center max-w-[480px] px-6 select-none transition-all duration-1000 animate-preloader-fade"
        style={{
          opacity: step === 'loading' ? 1 : 0,
          transform: step === 'loading' ? 'translateY(0px)' : 'translateY(-15px)',
        }}
      >
        {/* Logo Shield - Professional with Gold Shadowing and Soft Border */}
        <div className="bg-white/95 backdrop-blur-md p-5 rounded-3xl border border-[#D4AF37]/15 shadow-[0_20px_50px_rgba(212,175,55,0.08),0_1px_1px_rgba(255,255,255,1)_inset]">
          <img 
            src="/logo.png" 
            alt="Rajtilak Logo" 
            className="h-20 sm:h-22 w-auto object-contain block transition-transform duration-700 hover:scale-102"
          />
        </div>

        {/* Elegant Typography Stack */}
        <div className="space-y-3">
          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#071A3D] tracking-tight leading-none">
            CROWNING INDIA'S LEADERSHIP
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#D4AF37]/30" />
            <p className="text-[#071A3D]/45 font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold">
              Voice of Indian Politics
            </p>
            <span className="h-[1px] w-6 bg-[#D4AF37]/30" />
          </div>
        </div>

        {/* Micro-Progress Charging Component */}
        <div className="w-[200px] flex flex-col gap-2.5 items-center mt-2">
          {/* Clean minimal progress bar */}
          <div className="w-full h-[2.5px] bg-[#071A3D]/5 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-[80ms] ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #D4AF37 0%, #FF9A3C 50%, #FF6A00 100%)',
              }}
            />
          </div>
          <span className="font-mono text-[9px] text-[#071A3D]/40 uppercase tracking-[0.2em] font-bold">
            INITIALIZING SYSTEM... {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};
