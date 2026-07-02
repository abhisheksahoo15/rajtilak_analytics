import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

type PreloaderStep = 'loading' | 'fadeOut';

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState<PreloaderStep>('loading');

  // Smooth ease-out progress charging up to 100% over exactly 4 seconds (faster for better UX)
  useEffect(() => {
    const duration = 4000;
    const intervalTime = 16;
    const startTime = Date.now();
    let timeoutId: any;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(1, elapsed / duration);
      
      const easeOutCubic = 1 - Math.pow(1 - t, 3);
      const currentProgress = easeOutCubic * 100;
      
      setProgress(currentProgress);

      if (t >= 1) {
        clearInterval(interval);
        setStep('fadeOut');
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
      <style>{`
        @keyframes preloader-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-preloader-fade {
          animation: preloader-fade-in 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes orange-glow-pulse {
          0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.55; transform: translate(-50%, -50%) scale(1.08); }
        }
        .animate-orange-glow {
          animation: orange-glow-pulse 3s ease-in-out infinite;
        }
        @keyframes parliament-fade-in {
          from { opacity: 0; }
          to { opacity: 0.06; }
        }
        .animate-parliament-fade {
          animation: parliament-fade-in 2s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>

      {/* ═══ LIGHT ORANGE GLOW behind logo ═══ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full pointer-events-none z-0 animate-orange-glow"
        style={{
          background: 'radial-gradient(circle, rgba(255,154,60,0.35) 0%, rgba(255,106,0,0.15) 40%, rgba(255,106,0,0.05) 65%, transparent 85%)',
        }}
      />

      {/* Secondary warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-100/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ════════════════════════════════════════════════
          LEFT EDGE STRATEGIC PANEL
          ════════════════════════════════════════════════ */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-7 z-20 select-none animate-preloader-fade">
        {/* Crown - Leadership */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25l3 11.25h7.5l3-11.25-4.5 5.25-3.75-6.75-3.75 6.75-4.5-5.25z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18.75h13.5" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">LEAD</span>
        </div>
        <div className="w-[1px] h-10 bg-[#071A3D]/10" />
        {/* Megaphone */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">VOICE</span>
        </div>
        <div className="w-[1px] h-10 bg-[#071A3D]/10" />
        {/* Scales */}
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 7h18M6 7l2 6h-4l2-6zm12 0l2 6h-4l2-6zM12 21h4m-8 0h4" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">POLICY</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          RIGHT EDGE STRATEGIC PANEL
          ════════════════════════════════════════════════ */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-7 z-20 select-none animate-preloader-fade">
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a3 3 0 003-3V12a3 3 0 10-6 0v3.72a3 3 0 003 3zM6 18.72a3 3 0 003-3V12a3 3 0 10-6 0v3.72a3 3 0 003 3zM12 9a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6v6" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">INTEL</span>
        </div>
        <div className="w-[1px] h-10 bg-[#071A3D]/10" />
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 17v-4m4 4V9m4 8v-6m4 6V5" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">DATA</span>
        </div>
        <div className="w-[1px] h-10 bg-[#071A3D]/10" />
        <div className="flex flex-col items-center gap-2 opacity-25 hover:opacity-75 transition-opacity duration-300">
          <svg className="w-5 h-5 text-[#071A3D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0012 20.25a11.38 11.38 0 00-3-1.013V19.12c0-1.113.285-2.16.786-3.07M9 19.128a9.38 9.38 0 01-2.625.372 9.337 9.337 0 01-4.121-.952 4.125 4.125 0 017.533-2.493M9 19.128v-.003c0-1.112.285-2.16.786-3.07M12 12a3 3 0 100-6 3 3 0 000 6zm-7 0a3 3 0 100-6 3 3 0 000 6zm14 0a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#071A3D] uppercase font-bold">VOTERS</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          PARLIAMENT BUILDING — TRANSPARENT BACKGROUND SVG
          Enhanced with more detail and subtle orange tint
          ════════════════════════════════════════════════ */}
      <div className="absolute inset-x-0 bottom-[-5%] top-[12%] flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <svg 
          viewBox="0 0 400 200" 
          className="w-[95%] max-w-[800px] h-auto animate-parliament-fade"
          fill="none"
          style={{ color: '#8B6914' }}
        >
          {/* Ground / Foundation line */}
          <line x1="20" y1="168" x2="380" y2="168" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Plinth Base steps */}
          <line x1="30" y1="162" x2="370" y2="162" stroke="currentColor" strokeWidth="1.2" />
          <line x1="36" y1="158" x2="364" y2="158" stroke="currentColor" strokeWidth="0.8" />
          <line x1="42" y1="154" x2="358" y2="154" stroke="currentColor" strokeWidth="0.6" />

          {/* Colonnade Columns */}
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

          {/* Entablature */}
          <line x1="42" y1="100" x2="358" y2="100" stroke="currentColor" strokeWidth="0.6" />
          <line x1="36" y1="96" x2="364" y2="96" stroke="currentColor" strokeWidth="0.8" />
          <line x1="30" y1="92" x2="370" y2="92" stroke="currentColor" strokeWidth="1.2" />

          {/* Dome Drum */}
          <rect x="165" y="70" width="70" height="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
          {[172, 179, 186, 193, 207, 214, 221, 228].map(x => (
            <line key={x} x1={x} y1={70} x2={x} y2={92} stroke="currentColor" strokeWidth="0.5" />
          ))}

          {/* Dome Shell */}
          <path d="M 168,70 C 168,36 232,36 232,70" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 184,70 C 184,48 200,48 200,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 216,70 C 216,48 200,48 200,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="40" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" />

          {/* Cupola */}
          <rect x="195" y="32" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 193,32 C 193,27 207,27 207,32" fill="none" stroke="currentColor" strokeWidth="0.8" />

          {/* Ashoka Chakra-inspired circle on dome */}
          <circle cx="200" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="200" cy="55" r="2" fill="none" stroke="currentColor" strokeWidth="0.4" />
          {[0, 30, 60, 90, 120, 150].map(angle => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line key={angle} x1={200 + 2.5 * Math.cos(rad)} y1={55 + 2.5 * Math.sin(rad)} x2={200 + 5.5 * Math.cos(rad)} y2={55 + 5.5 * Math.sin(rad)} stroke="currentColor" strokeWidth="0.3" />
            );
          })}

          {/* Flag Staff & Flag */}
          <line x1="200" y1="27" x2="200" y2="8" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 200,8 L 210,11 L 200,14 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />

          {/* Side Wings / Extensions */}
          <line x1="30" y1="125" x2="42" y2="125" stroke="currentColor" strokeWidth="0.6" />
          <line x1="358" y1="125" x2="370" y2="125" stroke="currentColor" strokeWidth="0.6" />
          <line x1="30" y1="92" x2="30" y2="162" stroke="currentColor" strokeWidth="0.5" />
          <line x1="370" y1="92" x2="370" y2="162" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ════════════════════════════════════════════════
          Welcome Console Content Card
          ════════════════════════════════════════════════ */}
      <div 
        className="z-10 flex flex-col items-center gap-6 sm:gap-8 text-center max-w-[480px] px-4 sm:px-6 select-none transition-all duration-1000 animate-preloader-fade"
        style={{
          opacity: step === 'loading' ? 1 : 0,
          transform: step === 'loading' ? 'translateY(0px)' : 'translateY(-15px)',
        }}
      >
        {/* Logo Shield with ORANGE GLOW */}
        <div className="relative">
          {/* Orange glow ring behind logo */}
          <div className="absolute inset-0 -m-4 sm:-m-6 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,106,0,0.25) 0%, rgba(255,154,60,0.12) 50%, transparent 75%)',
              filter: 'blur(8px)',
            }}
          />
          <div className="relative bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#D4AF37]/15 shadow-[0_20px_50px_rgba(255,106,0,0.12),0_1px_1px_rgba(255,255,255,1)_inset]">
            <img 
              src="/logo.png" 
              alt="Rajtilak Analytics - Political Strategy Management Firm" 
              className="h-16 sm:h-20 w-auto object-contain block"
              loading="eager"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-3">
          <h1 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-[#071A3D] tracking-tight leading-none">
            RAJTILAK ANALYTICS
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-saffron-start/30" />
            <p className="text-[#071A3D]/45 font-display text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-bold">
              Political Strategy & Campaign Intelligence
            </p>
            <span className="h-[1px] w-6 bg-saffron-start/30" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-[180px] sm:w-[200px] flex flex-col gap-2.5 items-center mt-2">
          <div className="w-full h-[2.5px] bg-[#071A3D]/5 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-[80ms] ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #D4AF37 0%, #FF9A3C 50%, #FF6A00 100%)',
              }}
            />
          </div>
          <span className="font-mono text-[8px] sm:text-[9px] text-[#071A3D]/40 uppercase tracking-[0.2em] font-bold">
            LOADING... {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};
