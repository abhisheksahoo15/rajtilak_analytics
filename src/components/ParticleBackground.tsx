import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse settings
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particles array
    interface Particle {
      x: number;
      y: number;
      ox: number; // origin x
      oy: number; // origin y
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      speed: number;
      type: 'saffron' | 'blue' | 'node';
    }

    const particles: Particle[] = [];
    const count = Math.min(100, Math.floor((width * height) / 15000));

    // Initialize particles
    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      let type: 'saffron' | 'blue' | 'node' = 'saffron';
      let color = '#FF6A00'; // saffron
      if (typeRand > 0.7) {
        type = 'blue';
        color = '#00B4D8'; // Electric blue (slightly darker for light theme contrast)
      } else if (typeRand > 0.5) {
        type = 'node';
        color = '#C5A059'; // Gold
      }

      const rx = Math.random() * width;
      const ry = Math.random() * height;

      particles.push({
        x: rx,
        y: ry,
        ox: rx,
        oy: ry,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 0.8,
        color,
        alpha: Math.random() * 0.4 + 0.3, // slightly higher opacity for light theme
      	speed: Math.random() * 0.05 + 0.01,
        type,
      });
    }

    // Main animation loop
    let animationFrameId: number;

    const animate = () => {
      // Clear with slight trailing opacity to make visual glow trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'; // light theme clear
      ctx.fillRect(0, 0, width, height);

      // Draw active cursor glow
      if (mouse.active) {
        ctx.save();
        const glowGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        glowGrad.addColorStop(0, 'rgba(255, 106, 0, 0.08)');
        glowGrad.addColorStop(0.5, 'rgba(0, 180, 216, 0.04)');
        glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw connections between nearby nodes
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = p1.type === 'blue' || p2.type === 'blue' 
              ? `rgba(0, 180, 216, ${opacity})`
              : `rgba(255, 106, 0, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Update and draw particles
      particles.forEach((p) => {
        // Drift movement
        p.x += p.vx;
        p.y += p.vy;

        // Keep inside bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // React to mouse cursor (attraction and push back)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            // Gravitate slightly towards cursor
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        
        // Add subtle glow for larger ones
        if (p.size > 2) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
        }

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};
