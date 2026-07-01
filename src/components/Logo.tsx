import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  animate?: boolean;
  lightText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showName?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  lightText = false,
  size = 'md',
  showName = true,
}) => {
  const sizeMap = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-16',
    xl: 'h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`p-1 rounded-lg transition-all duration-300 ${
        lightText 
          ? 'bg-white/95 shadow-[0_2px_12px_rgba(255,255,255,0.1)] border border-white/25' 
          : 'bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(7,26,61,0.04)] border border-[#071A3D]/5'
      }`}>
        <img 
          src="/logo.png" 
          alt="Rajtilak Analytics Logo" 
          className={`${sizeMap[size]} w-auto object-contain block`}
        />
      </div>

      {/* Brand Name Text */}
      {showName && (
        <div className="flex flex-col leading-none select-none">
          <span className={`font-display text-[15px] sm:text-[17px] font-black tracking-[0.12em] uppercase ${
            lightText ? 'text-white' : 'text-[#071A3D]'
          }`}>
            <span>RAJT</span>
            <span className="text-saffron-start">I</span>
            <span>LAK</span>
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`h-[1px] flex-1 ${lightText ? 'bg-white/20' : 'bg-[#071A3D]/10'}`} />
            <span className={`font-display text-[7px] sm:text-[8px] font-bold tracking-[0.3em] uppercase ${
              lightText ? 'text-saffron-start/80' : 'text-saffron-start'
            }`}>
              ANALYTICS
            </span>
            <span className={`h-[1px] flex-1 ${lightText ? 'bg-white/20' : 'bg-[#071A3D]/10'}`} />
          </div>
          <span className={`font-display text-[5px] sm:text-[5.5px] font-semibold tracking-[0.2em] uppercase text-center mt-[2px] ${
            lightText ? 'text-white/40' : 'text-[#071A3D]/35'
          }`}>
            By GetSetAI Innovations
          </span>
        </div>
      )}
    </div>
  );
};
