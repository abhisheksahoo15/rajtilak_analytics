import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Eye, Network, BarChart } from 'lucide-react';

interface EngineItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
  activeNodes: number[];
}

export const AIEngine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeEngine, setActiveEngine] = useState<string>('sentiment');

  const engines: EngineItem[] = [
    {
      id: 'sentiment',
      name: 'Sentiment Analysis',
      desc: 'Real-time extraction of voter tone, policy appreciation margins, and negative narrative spikes across digital streams.',
      icon: <Eye className="w-5 h-5 text-saffron-start" />,
      activeNodes: [0, 2, 4, 6],
    },
    {
      id: 'segmentation',
      name: 'Voter Segmentation',
      desc: 'Clustering demographic data into micro-targeted cohorts based on livelihood, education, age, and regional factors.',
      icon: <Network className="w-5 h-5 text-[#071A3D]" />,
      activeNodes: [1, 3, 5, 7],
    },
    {
      id: 'predictive',
      name: 'Predictive Modeling',
      desc: 'Simulating swing shifts and voting trends using historic outcomes, demographic patterns, and polling dynamics.',
      icon: <Cpu className="w-5 h-5 text-gold-accent" />,
      activeNodes: [8, 9, 10, 11],
    },
    {
      id: 'political',
      name: 'Political Intelligence',
      desc: 'Structuring manifesto blueprints and campaign targets based on speech impact models and local alignments.',
      icon: <BarChart className="w-5 h-5 text-saffron-end" />,
      activeNodes: [0, 3, 8, 11],
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Nodes representation
    interface Node3D {
      x: number;
      y: number;
      z: number;
      px: number; // projected x
      py: number; // projected y
      size: number;
    }

    const nodes: Node3D[] = [
      { x: -100, y: -100, z: -100, px: 0, py: 0, size: 4 },
      { x: 100, y: -100, z: -100, px: 0, py: 0, size: 4 },
      { x: 100, y: 100, z: -100, px: 0, py: 0, size: 4 },
      { x: -100, y: 100, z: -100, px: 0, py: 0, size: 4 },
      { x: -100, y: -100, z: 100, px: 0, py: 0, size: 4 },
      { x: 100, y: -100, z: 100, px: 0, py: 0, size: 4 },
      { x: 100, y: 100, z: 100, px: 0, py: 0, size: 4 },
      { x: -100, y: 100, z: 100, px: 0, py: 0, size: 4 },
      { x: 0, y: -150, z: 0, px: 0, py: 0, size: 5 },
      { x: 0, y: 150, z: 0, px: 0, py: 0, size: 5 },
      { x: -150, y: 0, z: 0, px: 0, py: 0, size: 5 },
      { x: 150, y: 0, z: 0, px: 0, py: 0, size: 5 },
    ];

    // Node connections
    const links = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7], // columns
      [8, 0], [8, 1], [8, 4], [8, 5], // top connections
      [9, 2], [9, 3], [9, 6], [9, 7], // bottom connections
      [10, 0], [10, 3], [10, 4], [10, 7], // left connections
      [11, 1], [11, 2], [11, 5], [11, 6], // right connections
    ];

    // Data packets flowing along paths
    interface Packet {
      from: number;
      to: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [];

    // Helper to spawn a packet
    const spawnPacket = () => {
      const link = links[Math.floor(Math.random() * links.length)];
      const currentEngine = engines.find(e => e.id === activeEngine);
      
      let color = '#FF6A00'; // Default saffron
      if (currentEngine) {
        if (currentEngine.activeNodes.includes(link[0]) || currentEngine.activeNodes.includes(link[1])) {
          color = '#00B4D8'; // Highlight active paths in Electric Blue
        }
      }

      packets.push({
        from: link[0],
        to: link[1],
        progress: 0,
        speed: Math.random() * 0.015 + 0.008,
        color,
      });
    };

    // Rotation angles
    let angleX = 0.005;
    let angleY = 0.005;

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate nodes around axis
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      nodes.forEach(node => {
        // Rotate Y
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;
        
        // Rotate X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        node.x = x1;
        node.y = y2;
        node.z = z2;

        // Project 3D onto 2D screen coordinate
        const scale = 260 / (260 + z2);
        node.px = width / 2 + x1 * scale;
        node.py = height / 2 + y2 * scale;
        node.size = Math.max(1, 4 * scale);
      });

      // Draw connections
      ctx.save();
      links.forEach(([fromIdx, toIdx]) => {
        const fromNode = nodes[fromIdx];
        const toNode = nodes[toIdx];

        const activeEngineItem = engines.find(e => e.id === activeEngine);
        const isActive = activeEngineItem?.activeNodes.includes(fromIdx) && activeEngineItem?.activeNodes.includes(toIdx);

        ctx.strokeStyle = isActive 
          ? 'rgba(0, 180, 216, 0.45)' 
          : 'rgba(7, 26, 61, 0.06)';
        ctx.lineWidth = isActive ? 1.5 : 0.8;
        
        ctx.beginPath();
        ctx.moveTo(fromNode.px, fromNode.py);
        ctx.lineTo(toNode.px, toNode.py);
        ctx.stroke();
      });
      ctx.restore();

      // Update and draw packets
      if (Math.random() < 0.12 && packets.length < 35) {
        spawnPacket();
      }

      ctx.save();
      packets.forEach((p, idx) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          packets.splice(idx, 1);
          return;
        }

        const fromNode = nodes[p.from];
        const toNode = nodes[p.to];
        const px = fromNode.px + (toNode.px - fromNode.px) * p.progress;
        const py = fromNode.py + (toNode.py - fromNode.py) * p.progress;

        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Draw nodes
      nodes.forEach((node, idx) => {
        const activeEngineItem = engines.find(e => e.id === activeEngine);
        const isNodeActive = activeEngineItem?.activeNodes.includes(idx);

        ctx.save();
        ctx.shadowBlur = isNodeActive ? 12 : 4;
        ctx.shadowColor = isNodeActive ? '#00B4D8' : '#FF6A00';
        ctx.fillStyle = isNodeActive ? '#00B4D8' : 'rgba(255, 106, 0, 0.65)';
        
        ctx.beginPath();
        ctx.arc(node.px, node.py, isNodeActive ? node.size * 1.5 : node.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeEngine]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-navy-royal/5 rounded-full blur-[170px] opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Interactive engines console */}
        <div className="flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
              AI Prediction Matrix
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D] leading-tight">
              Futuristic <br />
              <span className="text-saffron-gradient">AI Analytics Engine</span>
            </h2>
            <p className="font-sans text-[#071A3D]/60 max-w-md text-sm leading-relaxed">
              Activate any node matrix module on the panel below to recalibrate the 3D neural connection mesh in real-time.
            </p>
          </div>

          {/* Engine Cards selection stack */}
          <div className="flex flex-col gap-4">
            {engines.map(engine => {
              const isActive = engine.id === activeEngine;
              return (
                <button
                  key={engine.id}
                  onClick={() => setActiveEngine(engine.id)}
                  className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#F3F5F9] border-saffron-start shadow-[0_0_20px_rgba(255,106,0,0.06)] scale-[1.02]'
                      : 'bg-white border-[#071A3D]/8 hover:border-[#071A3D]/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border ${
                    isActive ? 'bg-saffron-start/20 border-saffron-start/30' : 'bg-[#F3F5F9] border-[#071A3D]/5'
                  }`}>
                    {engine.icon}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-base font-bold text-[#071A3D]">
                      {engine.name}
                    </span>
                    {isActive && (
                      <p className="font-sans text-xs text-[#071A3D]/70 leading-relaxed mt-1 animate-fade-in">
                        {engine.desc}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Neural Network Canvas */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Circular scanner overlay */}
          <div className="absolute inset-0 border border-[#071A3D]/5 rounded-full scale-75 animate-pulse-slow pointer-events-none" />
          
          <div className="w-full h-full relative z-10 glass-panel p-4 rounded-3xl border-[#071A3D]/8 shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Dynamic system label overlay */}
            <div className="absolute top-6 left-6 flex flex-col gap-0.5">
              <span className="text-[10px] font-display font-bold tracking-widest text-saffron-start uppercase">
                NEURAL CORE FEED
              </span>
              <span className="text-[8px] font-mono text-[#071A3D]/50 uppercase">
                MODEL: {activeEngine.toUpperCase()}_NET
              </span>
            </div>

            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-[#071A3D]/40">
              FPS: 60.0 / SYNAPSE: ACTIVE
            </div>

            {/* Neural Net Canvas */}
            <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};
