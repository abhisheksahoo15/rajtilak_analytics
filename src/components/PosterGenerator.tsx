import React, { useState, useRef } from 'react';
import { Sparkles, Download, RefreshCw, Upload, Image as ImageIcon, CheckCircle } from 'lucide-react';

interface ThemePreset {
  id: string;
  name: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  saffronGradient: boolean;
}

export const PosterGenerator: React.FC = () => {
  const [name, setName] = useState('LEADER NAME');
  const [constituency, setConstituency] = useState('YOUR CONSTITUENCY');
  const [slogan, setSlogan] = useState('THE VOICE OF PROSPERITY & PROGRESS');
  const [selectedTheme, setSelectedTheme] = useState('saffron-pride');
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCardRef = useRef<HTMLDivElement>(null);

  const themes: ThemePreset[] = [
    {
      id: 'saffron-pride',
      name: 'Saffron Pride',
      bgColor: 'linear-gradient(135deg, #FFFDF9 0%, #FFF5EB 100%)',
      borderColor: 'border-saffron-start/30',
      textColor: 'text-[#071A3D]',
      accentColor: '#FF6A00',
      saffronGradient: true,
    },
    {
      id: 'royal-navy',
      name: 'Royal Navy',
      bgColor: 'linear-gradient(135deg, #F3F6FA 0%, #E6EDF5 100%)',
      borderColor: 'border-[#071A3D]/20',
      textColor: 'text-[#071A3D]',
      accentColor: '#071A3D',
      saffronGradient: false,
    },
    {
      id: 'golden-victory',
      name: 'Golden Victory',
      bgColor: 'linear-gradient(135deg, #FCFBF5 0%, #F5F1DF 100%)',
      borderColor: 'border-gold-accent/40',
      textColor: 'text-[#071A3D]',
      accentColor: '#D4AF37',
      saffronGradient: false,
    },
  ];

  const currentTheme = themes.find(t => t.id === selectedTheme) || themes[0];

  // Pre-load default template options
  const defaultSlogans = [
    'THE VOICE OF PROSPERITY & PROGRESS',
    'DEDICATED TO DEVELOPMENT & HERITAGE',
    'HONEST LEADERSHIP. DECISIVE ACTION.',
    'BUILDING THE FUTURE OF OUR CONSTITUENCY',
    'CROWNING PROGRESS THROUGH INTEGRITY',
  ];

  // Handle local image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    setName('LEADER NAME');
    setConstituency('YOUR CONSTITUENCY');
    setSlogan('THE VOICE OF PROSPERITY & PROGRESS');
    setSelectedTheme('saffron-pride');
    setImageSrc(null);
  };

  // Compile elements into a Canvas and download
  const handleDownload = async () => {
    setIsGenerating(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Poster canvas aspect ratio 3:4 (high res 1200x1600)
    canvas.width = 1200;
    canvas.height = 1600;

    // Draw Background Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (selectedTheme === 'saffron-pride') {
      gradient.addColorStop(0, '#FFFDF9');
      gradient.addColorStop(1, '#FFF5EB');
    } else if (selectedTheme === 'royal-navy') {
      gradient.addColorStop(0, '#F3F6FA');
      gradient.addColorStop(1, '#E6EDF5');
    } else {
      gradient.addColorStop(0, '#FCFBF5');
      gradient.addColorStop(1, '#F5F1DF');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Border
    ctx.strokeStyle = selectedTheme === 'saffron-pride' ? '#FF6A00' : selectedTheme === 'royal-navy' ? '#071A3D' : '#D4AF37';
    ctx.lineWidth = 32;
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);

    // Draw Inner border accent
    ctx.strokeStyle = 'rgba(7, 26, 61, 0.05)';
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Draw Header Tag
    ctx.fillStyle = 'rgba(7, 26, 61, 0.6)';
    ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '6px';
    ctx.fillText('RAJTILAK ELECTION CAMPAIGN MODEL', canvas.width / 2, 90);

    // Draw Candidate Image (circle or rounded rectangle in the center)
    const imgX = canvas.width / 2 - 250;
    const imgY = 180;
    const imgSize = 500;

    ctx.save();
    // Create circular path for avatar clip
    ctx.beginPath();
    ctx.arc(canvas.width / 2, imgY + 250, 240, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    if (imageSrc) {
      // Draw uploaded image
      const img = new Image();
      img.src = imageSrc;
      await new Promise<void>((resolve) => {
        img.onload = () => {
          // Aspect fill draw
          const aspect = img.width / img.height;
          let drawWidth = imgSize;
          let drawHeight = imgSize;
          let offsetX = 0;
          let offsetY = 0;

          if (aspect > 1) {
            drawWidth = imgSize * aspect;
            offsetX = -(drawWidth - imgSize) / 2;
          } else {
            drawHeight = imgSize / aspect;
            offsetY = -(drawHeight - imgSize) / 2;
          }

          ctx.drawImage(img, imgX + offsetX, imgY + offsetY, drawWidth, drawHeight);
          resolve();
        };
        img.onerror = () => resolve();
      });
    } else {
      // Draw placeholder avatar silhouette
      ctx.fillStyle = '#E2E8F0';
      ctx.fillRect(imgX, imgY, imgSize, imgSize);
      ctx.fillStyle = '#94A3B8';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, imgY + 200, 100, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, imgY + 450, 220, Math.PI, 0);
      ctx.fill();
    }
    ctx.restore();

    // Draw circular gold/orange frame around avatar
    ctx.strokeStyle = selectedTheme === 'saffron-pride' ? '#FF6A00' : selectedTheme === 'royal-navy' ? '#071A3D' : '#D4AF37';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, imgY + 250, 240, 0, Math.PI * 2);
    ctx.stroke();

    // Draw Tilak Symbol on top of the circle frame
    const tilakX = canvas.width / 2;
    const tilakY = imgY - 30;
    
    ctx.save();
    const flameGrad = ctx.createLinearGradient(tilakX, tilakY, tilakX, tilakY + 80);
    flameGrad.addColorStop(0, '#FF9A3C');
    flameGrad.addColorStop(1, '#FF6A00');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.moveTo(tilakX, tilakY);
    ctx.bezierCurveTo(tilakX + 12, tilakY + 45, tilakX + 16, tilakY + 68, tilakX + 16, tilakY + 80);
    ctx.bezierCurveTo(tilakX + 16, tilakY + 95, tilakX + 8, tilakY + 100, tilakX, tilakY + 100);
    ctx.bezierCurveTo(tilakX - 8, tilakY + 100, tilakX - 16, tilakY + 95, tilakX - 16, tilakY + 80);
    ctx.bezierCurveTo(tilakX - 16, tilakY + 68, tilakX - 12, tilakY + 45, tilakX, tilakY);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Draw "VOTE FOR" badge text
    ctx.fillStyle = '#071A3D';
    ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
    ctx.fillText('VOTE FOR', canvas.width / 2, 750);

    // Draw Leader Name
    ctx.fillStyle = selectedTheme === 'saffron-pride' ? '#FF6A00' : '#071A3D';
    ctx.font = '900 84px system-ui, -apple-system, sans-serif';
    ctx.fillText(name.toUpperCase(), canvas.width / 2, 860);

    // Draw Divider Line
    ctx.strokeStyle = 'rgba(7, 26, 61, 0.1)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 250, 930);
    ctx.lineTo(canvas.width / 2 + 250, 930);
    ctx.stroke();

    // Draw Constituency Details
    ctx.fillStyle = '#071A3D';
    ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
    ctx.fillText(`CONSTITUENCY: ${constituency.toUpperCase()}`, canvas.width / 2, 1010);

    // Draw Slogan Box
    const boxY = 1100;
    const boxW = 900;
    const boxH = 180;
    const boxX = (canvas.width - boxW) / 2;

    ctx.fillStyle = 'rgba(7, 26, 61, 0.03)';
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeStyle = 'rgba(7, 26, 61, 0.08)';
    ctx.lineWidth = 3;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    ctx.fillStyle = '#FF6A00';
    ctx.font = 'bold 32px system-ui, -apple-system, sans-serif';
    ctx.fillText(slogan.toUpperCase(), canvas.width / 2, boxY + 105);

    // Load and draw watermark brand logo
    const brandLogo = new Image();
    brandLogo.src = '/logo.png';
    await new Promise<void>((resolve) => {
      brandLogo.onload = () => {
        // Render it in bottom-center
        const logoW = 160;
        const logoH = 65;
        const logoX = (canvas.width - logoW) / 2;
        const logoY = 1350;
        ctx.drawImage(brandLogo, logoX, logoY, logoW, logoH);
        resolve();
      };
      brandLogo.onerror = () => resolve();
    });

    // Draw footer taglines
    ctx.fillStyle = 'rgba(7, 26, 61, 0.4)';
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.fillText('DESIGNED VIA RAJTILAK ANALYTICS DEMOCRATIC ENGINE', canvas.width / 2, 1470);

    // Process file download
    setTimeout(() => {
      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.download = `Rajtilak_Campaign_Poster_${name.replace(/\s+/g, '_')}.jpg`;
      link.href = dataUrl;
      link.click();
      
      setIsGenerating(false);
      setShowDownloadAlert(true);

      setTimeout(() => {
        setShowDownloadAlert(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-saffron-start/5 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#00B4D8]/5 rounded-full blur-[110px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Campaign Poster Engine
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D] max-w-2xl leading-tight">
            Design Your <span className="text-saffron-gradient">Election Campaign Poster</span>
          </h2>
          <p className="font-sans text-[#071A3D]/65 max-w-2xl text-sm leading-relaxed">
            Upload your photo, type your coordinates, and instantly render a premium, download-ready campaign poster. Give a visual face to your electoral mandate in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT PANEL: Inputs Console (Cols 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#071A3D]/5 shadow-xl justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-base font-black text-[#071A3D] uppercase tracking-wider border-b border-[#071A3D]/5 pb-3">
                Liaison Credentials
              </h3>

              {/* Photo Upload Area */}
              <div className="flex flex-col gap-2">
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Upload Portrait Photo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
                
                <div 
                  onClick={triggerFileInput}
                  className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:bg-[#F3F5F9]/50 ${
                    imageSrc ? 'border-saffron-start/60 bg-saffron-start/5' : 'border-[#071A3D]/10 hover:border-saffron-start/30'
                  }`}
                >
                  {imageSrc ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <CheckCircle className="w-8 h-8 text-saffron-start" />
                      <span className="font-sans text-xs font-semibold text-[#071A3D]">Photo Uploaded Successfully</span>
                      <button className="text-[10px] font-mono text-saffron-end uppercase font-bold tracking-wider mt-1 hover:underline">Change Photo</button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="p-3 bg-[#F3F5F9] rounded-xl border border-[#071A3D]/5">
                        <Upload className="w-5 h-5 text-saffron-start" />
                      </div>
                      <span className="font-sans text-xs font-semibold text-[#071A3D]">Select portrait files</span>
                      <p className="text-[10px] text-[#071A3D]/40 leading-relaxed max-w-[200px]">Upload front-facing headshots for optimal centering.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Leader Name Input */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Candidate Name
                </label>
                <input
                  type="text"
                  maxLength={25}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. RAJVARADHAN SINGH"
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3 text-xs text-[#071A3D] font-bold uppercase focus:outline-none focus:border-saffron-start focus:ring-1 focus:ring-saffron-start transition-all"
                />
              </div>

              {/* Constituency Input */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Constituency / Region
                </label>
                <input
                  type="text"
                  maxLength={25}
                  value={constituency}
                  onChange={e => setConstituency(e.target.value)}
                  placeholder="e.g. VARANASI (UP)"
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3 text-xs text-[#071A3D] font-bold uppercase focus:outline-none focus:border-saffron-start focus:ring-1 focus:ring-saffron-start transition-all"
                />
              </div>

              {/* Slogan Input Selector */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Select Slogan Text
                </label>
                <select
                  value={slogan}
                  onChange={e => setSlogan(e.target.value)}
                  className="bg-[#F3F5F9]/60 border border-[#071A3D]/10 rounded-xl px-4 py-3 text-xs text-[#071A3D]/80 focus:outline-none focus:border-saffron-start transition-all font-semibold"
                >
                  {defaultSlogans.map((s, idx) => (
                    <option key={idx} value={s} className="bg-white text-[#071A3D]">{s}</option>
                  ))}
                </select>
              </div>

              {/* Theme Selector */}
              <div className="flex flex-col gap-2.5">
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#071A3D]/50">
                  Select Design Theme
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {themes.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTheme(t.id)}
                      className={`py-2 px-3 rounded-xl border text-[10px] font-display font-bold uppercase transition-all tracking-wider ${
                        selectedTheme === t.id
                          ? 'border-saffron-start bg-saffron-start/15 text-saffron-end'
                          : 'border-[#071A3D]/10 bg-white text-[#071A3D]/60 hover:border-[#071A3D]/25'
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3.5 border border-[#071A3D]/10 hover:border-saffron-start/50 text-[#071A3D]/65 font-display text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#F3F5F9] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Details
              </button>
              
              <button
                type="button"
                onClick={handleDownload}
                disabled={isGenerating}
                className="flex-[2] py-3.5 bg-gradient-to-r from-saffron-start to-saffron-end text-white font-display text-[10px] font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(255,106,0,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    Crowning...
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    Download Poster
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: Live Visual Preview Card (Cols 7) */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 w-full max-w-[420px]">
              
              {/* Notification Banner */}
              {showDownloadAlert && (
                <div className="w-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 animate-fade-in">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Success! Your campaign blueprint poster downloaded.</span>
                </div>
              )}

              {/* Physical Preview Badge container */}
              <div 
                ref={previewCardRef}
                style={{ background: currentTheme.bgColor }}
                className={`w-full aspect-[3/4] border-8 rounded-3xl p-6 flex flex-col justify-between items-center transition-all duration-300 relative shadow-2xl overflow-hidden ${
                  selectedTheme === 'saffron-pride' 
                    ? 'border-saffron-start/30 shadow-saffron-start/5' 
                    : selectedTheme === 'royal-navy' 
                      ? 'border-[#071A3D]/20 shadow-[#071A3D]/5' 
                      : 'border-gold-accent/40 shadow-gold-accent/5'
                }`}
              >
                {/* Thin accent frame line inside */}
                <div className="absolute inset-2 border border-[#071A3D]/5 rounded-[18px] pointer-events-none" />

                {/* Sub-label banner */}
                <div className="text-[7px] font-display font-bold tracking-[0.4em] text-[#071A3D]/40 uppercase z-10 text-center select-none pt-1">
                  RAJTILAK ELECTION CAMPAIGN MODEL
                </div>

                {/* Circle Avatar Profile */}
                <div className="relative w-[150px] h-[150px] my-3">
                  <div className={`w-full h-full rounded-full border-4 overflow-hidden relative shadow-md flex items-center justify-center bg-white/70 ${
                    selectedTheme === 'saffron-pride' ? 'border-saffron-start' : selectedTheme === 'royal-navy' ? 'border-[#071A3D]' : 'border-gold-accent'
                  }`}>
                    {imageSrc ? (
                      <img src={imageSrc} alt="Preview Avatar" className="w-full h-full object-cover block select-none" />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-300 w-full h-full bg-slate-50 select-none">
                        <ImageIcon className="w-10 h-10" />
                        <span className="text-[8px] font-mono mt-1 text-slate-400">NO PHOTO</span>
                      </div>
                    )}
                  </div>

                  {/* Absolute positioning of Saffron Tilak at top center overlaying the avatar frame */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 drop-shadow-[0_2px_4px_rgba(255,106,0,0.3)]">
                    <svg width="22" height="30" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 50 16 C 53.2 42, 54.2 55, 54.2 62.5 C 54.2 68, 52 70, 50 70 C 48 70, 45.8 68, 45.8 62.5 C 45.8 55, 46.8 42, 50 16 Z"
                        fill="url(#previewTilak)"
                      />
                      <defs>
                        <linearGradient id="previewTilak" x1="50" y1="16" x2="50" y2="70">
                          <stop offset="0%" stopColor="#FF9A3C" />
                          <stop offset="100%" stopColor="#FF6A00" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Vote For Header Text */}
                <div className="flex flex-col items-center gap-1 w-full text-center z-10 mt-1">
                  <span className="text-[10px] font-display font-black tracking-widest text-[#071A3D]/60 uppercase">VOTE FOR</span>
                  
                  {/* Name */}
                  <h4 className={`text-xl sm:text-2xl font-display font-black tracking-wider uppercase truncate max-w-full px-2 ${
                    selectedTheme === 'saffron-pride' ? 'text-saffron-start' : 'text-[#071A3D]'
                  }`}>
                    {name || 'LEADER NAME'}
                  </h4>

                  {/* Horizontal Line Accent */}
                  <div className="w-[100px] h-[1.5px] bg-[#071A3D]/10 my-1" />

                  {/* Constituency details */}
                  <span className="text-[9px] font-display font-bold tracking-widest text-[#071A3D] uppercase truncate max-w-full px-2">
                    CONSTITUENCY: {constituency || 'YOUR CONSTITUENCY'}
                  </span>
                </div>

                {/* Slogan details box */}
                <div className="w-full bg-[#071A3D]/3 border border-[#071A3D]/5 rounded-xl py-3 px-4 text-center z-10 my-3 min-h-[50px] flex items-center justify-center">
                  <p className="text-[9px] font-display font-bold text-saffron-end uppercase tracking-wider leading-relaxed">
                    {slogan}
                  </p>
                </div>

                {/* Bottom brand logo overlay */}
                <div className="flex flex-col items-center gap-1 select-none z-10 pb-1">
                  <img src="/logo.png" alt="Rajtilak Logo" className="h-6 w-auto object-contain block opacity-75" />
                  <span className="text-[6px] font-mono text-[#071A3D]/35 font-bold uppercase tracking-wider">
                    RAJ TILAK ANALYTICS DEMOCRATIC MODELING
                  </span>
                </div>

              </div>

              {/* Label indicating this is a simulation */}
              <span className="text-[9px] font-mono text-[#071A3D]/40 uppercase tracking-widest text-center">
                Simulation Preview Only. Final renders exported at 1200 x 1600.
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Hidden canvas element for compilation download */}
      <canvas ref={canvasRef} className="hidden" />
    </section>
  );
};
