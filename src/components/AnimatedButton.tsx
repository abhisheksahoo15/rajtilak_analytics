import React, { useRef, useCallback } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  glowColor?: string;
  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  glowColor,
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Ripple effect on click
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    const button = buttonRef.current;
    if (!button) return;

    // Create ripple
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: ${variant === 'primary' ? 'rgba(255,255,255,0.35)' : 'rgba(255,106,0,0.2)'};
      transform: scale(0);
      animation: ripple 0.6s ease-out forwards;
      pointer-events: none;
      z-index: 10;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // Create floating particles burst
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('span');
      const angle = (i / 6) * Math.PI * 2;
      const distance = 30 + Math.random() * 30;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        left: ${e.clientX - rect.left}px;
        top: ${e.clientY - rect.top}px;
        border-radius: 50%;
        background: ${variant === 'primary' ? '#ffffff' : '#FF6A00'};
        pointer-events: none;
        z-index: 10;
        transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        opacity: 1;
      `;
      button.appendChild(particle);
      
      requestAnimationFrame(() => {
        particle.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
        particle.style.opacity = '0';
      });
      
      setTimeout(() => particle.remove(), 500);
    }

    onClick?.();
  }, [onClick, variant, disabled]);

  // Magnetic hover & spotlight tracker
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Magnetic shift
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    buttonRef.current.style.transform = `translate(${x}px, ${y}px) translateY(-3px) scale(1.03)`;

    // Spotlight cursor tracking coordinates
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    buttonRef.current.style.setProperty('--mouse-x', `${localX}px`);
    buttonRef.current.style.setProperty('--mouse-y', `${localY}px`);
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = '';
    buttonRef.current.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
  }, []);

  const baseStyles = 'group relative overflow-hidden font-display uppercase tracking-widest font-bold cursor-pointer transition-all duration-300 flex items-center gap-2 justify-center';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-[10px] rounded-lg',
    md: 'px-6 py-3 text-xs rounded-xl',
    lg: 'px-8 py-4 text-sm rounded-xl',
  };

  const variantStyles = {
    primary: `bg-gradient-to-r from-saffron-start to-saffron-end text-white hover:shadow-[0_15px_35px_rgba(255,106,0,0.4),0_0_60px_rgba(255,106,0,0.15)]`,
    secondary: `bg-[#071A3D] text-white hover:bg-[#0A2550] hover:shadow-[0_15px_35px_rgba(7,26,61,0.3)]`,
    outline: `border-2 border-[#071A3D]/15 text-[#071A3D] hover:border-saffron-start/50 hover:bg-saffron-start/5 backdrop-blur-md`,
    ghost: `text-[#071A3D] hover:bg-[#071A3D]/5 hover:text-saffron-start`,
  };

  const customStyle = {
    ...glowColor ? { boxShadow: `0 0 20px ${glowColor}` } : {},
    '--mouse-x': '50%',
    '--mouse-y': '50%'
  } as React.CSSProperties;

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={customStyle}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 80px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.22), transparent 100%)`
        }}
      />
      
      {/* Light sweep overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transform group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </button>
  );
};
