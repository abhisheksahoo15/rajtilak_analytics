import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Volume2, Sparkles, AlertCircle } from 'lucide-react';

interface CandidateProfile {
  id: string;
  name: string;
  constituency: string;
  focus: string;
  avatarText: string;
  bgColor: string;
  greeting: string;
}

interface Message {
  sender: 'user' | 'netaji';
  text: string;
  timestamp: string;
}

export const TalkWithNetaji: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<string>('leader1');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Hinglish');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [waveActive, setWaveActive] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const leaders: CandidateProfile[] = [
    {
      id: 'leader1',
      name: 'MLA Prachand Dev',
      constituency: 'Bhilai Outer',
      focus: 'Development & Youth Jobs',
      avatarText: 'PD',
      bgColor: 'bg-saffron-start',
      greeting: 'Pranam. I am Prachand Dev. Let\'s outline a strategy to address youth employment and highway corridor projects in our constituency.'
    },
    {
      id: 'leader2',
      name: 'Satyaveer Shastri',
      constituency: 'Vikas Nagar Rural',
      focus: 'Agrarian Welfare & Cooperatives',
      avatarText: 'SS',
      bgColor: 'bg-[#00E5FF]',
      greeting: 'Ram Ram. Satyaveer Shastri here. Let\'s coordinate direct farmers feedback and credit lines for rural wards.'
    },
    {
      id: 'leader3',
      name: 'Rudra Pratap Singh',
      constituency: 'Kashi Central',
      focus: 'Cultural Legacy & Tourism',
      avatarText: 'RP',
      bgColor: 'bg-amber-500',
      greeting: 'Namaskar. Rudra Pratap here. Let\'s align our cultural pride narratives with local heritage hub layouts.'
    }
  ];

  const presets = [
    { label: 'Draft Youth Rally Speech Outline', query: 'Draft a short, high-impact speech outline for a youth rally focusing on jobs and digital infrastructure.' },
    { label: 'Resolve Irrigation Delay Complaint', query: 'How should volunteers address local farmer complaints about water canal delays?' },
    { label: 'Outline WhatsApp Campaign Plan', query: 'Create a 3-part WhatsApp campaign template showcasing family health card benefits.' },
    { label: 'Respond to Rival Infrastructure Criticisms', query: 'How do we counter the opponent\'s claim that municipal lighting projects are lagging?' }
  ];

  const activeLeader = leaders.find(l => l.id === selectedLeader) || leaders[0];

  // Auto scroll chat list
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Initial welcome message on leader swap
  useEffect(() => {
    setMessages([
      {
        sender: 'netaji',
        text: activeLeader.greeting,
        timestamp: new Date().toTimeString().split(' ')[0].substring(0, 5)
      }
    ]);
  }, [selectedLeader]);

  // AI response mapping based on leader & language
  const simulateResponse = (query: string) => {
    setIsTyping(true);
    setWaveActive(true);

    setTimeout(() => {
      let responseText = '';
      const lower = query.toLowerCase();

      // Simple keyword triggers
      if (lower.includes('speech') || lower.includes('rally') || lower.includes('draft')) {
        if (selectedLeader === 'leader1') {
          responseText = `**YOUTH CORNERSTONE SPEECH BRIEF** [Tone: Energetic & Aspirational]\n\n1. **Hook:** "My young friends of Bhilai! The future is not in files, it is in your hands and mobile screens!"\n2. **Advantage Highlight:** Mention the new GetSetAI innovation corridor bringing 15,000 digital apprenticeships.\n3. **Core Pledge:** "Every village will have high-speed optical fiber and direct credit access for young startups!"\n4. **Call to Action:** Direct youth to register at the nearest booth command desk for digital cards.`;
        } else if (selectedLeader === 'leader2') {
          responseText = `**GRASSROOTS ASSEMBLY RALLY ADDRESS** [Tone: Grounded & Earnest]\n\n1. **Hook:** "My farming brothers and cooperative members. Our strength is the soil!"\n2. **Policy Focus:** Focus on direct solar pump subsidies and transparent crop insurance bank deposits.\n3. **Pledge:** "We will guarantee procurement prices and set up refrigeration blocks at every block within 100 days!"`;
        } else {
          responseText = `**CULTURAL RESURGENCE SPEECH SPECS** [Tone: Dignified & Proud]\n\n1. **Hook:** "This soil of Kashi is the beacon of civilizational heritage. We are guards of our legacy!"\n2. **Focus:** Discuss upgrading temple corridors, craft clusters for local artisans, and tourism grants.\n3. **Call to Action:** "Align local legacy with economic growth!"`;
        }
      } else if (lower.includes('irrigation') || lower.includes('farmer') || lower.includes('water')) {
        responseText = `**CRISIS DESK: GROUND INSTRUCTION SHEET**\n\n1. **Direct Validation:** Instruct booth volunteers to meet complaining farmers. "Don't debate, document."\n2. **Interim Mitigation:** Deploy direct coordination with district canal officers to publish local release schedules.\n3. **Messaging Anchor:** Remind them of the 35 completed check dams under GetSetAI monitoring.`;
      } else if (lower.includes('whatsapp') || lower.includes('campaign') || lower.includes('template')) {
        responseText = `**WHATSAPP BROADCAST SEQUENCE [3 MESSAGES]**\n\n*Message 1 (Morning):* "Did you know? Under our candidate's initiative, 8,200 families received cashless health cards last month. Secure your family's health! Click: rajtilakanalytics.in"\n\n*Message 2 (Afternoon):* "[Video Clip] Prachand Dev visiting constituency hospitals. Real people, real relief. Vote for Action!"\n\n*Message 3 (Evening):* "Volunteer Check: Connect with your Booth Agent tomorrow morning to claim your family insurance book."`;
      } else if (lower.includes('rival') || lower.includes('criticism') || lower.includes('claim')) {
        responseText = `**WAR ROOM COUNTER-NARRATIVE PLAN**\n\n1. **Acknowledge & Contextualize:** Admit lighting installations are in phase-2. Show progress figures: "78% done, remaining 22% complete by Friday."\n2. **Pivot to Contrast:** Contrast with opponent's historical record of complete darkness.\n3. **Action:** Deploy booth volunteers with physical map prints showing lighting hotspots.`;
      } else {
        responseText = `**STRATEGY NOTE FROM ${activeLeader.name}**\n\nUnderstood your query regarding "${query}". Under GetSetAI framework guidelines, we should immediately cross-verify this issue at the booth unit level. Let's arrange a ground survey panel and compile localized WhatsApp messaging matching this sentiment.`;
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'netaji',
          text: responseText,
          timestamp: new Date().toTimeString().split(' ')[0].substring(0, 5)
        }
      ]);
      setIsTyping(false);
      
      // Keep waveform active slightly after response to simulate finishing talking
      setTimeout(() => setWaveActive(false), 2000);
    }, 1800);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setMessages(prev => [
      ...prev,
      {
        sender: 'user',
        text: userMsg,
        timestamp: new Date().toTimeString().split(' ')[0].substring(0, 5)
      }
    ]);
    setInputValue('');
    simulateResponse(userMsg);
  };

  return (
    <>
      {/* FLOATING ACTION TRIGGER */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[999] magnetic-btn p-4 rounded-full bg-gradient-to-r from-saffron-start to-saffron-end text-white shadow-[0_10px_30px_rgba(255,106,0,0.35),0_0_0_4px_rgba(255,106,0,0.1)] hover:shadow-[0_15px_40px_rgba(255,106,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
      >
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 group-hover:scale-125 transition-transform" />
        <MessageSquare className="w-5 h-5 relative z-10" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out font-display text-[10px] font-black uppercase tracking-wider relative z-10 whitespace-nowrap">
          Talk with Netaji
        </span>
      </button>

      {/* STRATEGY DRAWER MODAL */}
      <div
        className={`fixed inset-y-0 right-0 z-[10000] w-full sm:w-[420px] bg-[#02020a]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* DRAWER HEADER */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#071A3D]/40">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-saffron-start/20 rounded-xl border border-saffron-start/35 animate-pulse-ring">
              <Sparkles className="w-4.5 h-4.5 text-saffron-start" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display text-sm font-black text-white uppercase tracking-wider">Netaji AI Engine</h3>
              <span className="font-mono text-[8px] text-[#00E5FF] font-bold uppercase tracking-widest">GetSetAI Strategy Synthesizer</span>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/5 text-white/60 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DRAWER CONTROLS PANEL */}
        <div className="p-4 border-b border-white/10 flex flex-col gap-4 bg-white/2">
          {/* Candidate selector */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-[9px] font-bold tracking-widest text-white/40 uppercase">Select Candidate Profile</span>
            <div className="grid grid-cols-3 gap-2">
              {leaders.map(l => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLeader(l.id)}
                  className={`p-2.5 rounded-xl border text-left flex flex-col justify-between gap-2.5 transition-all cursor-pointer ${
                    selectedLeader === l.id
                      ? 'border-saffron-start bg-saffron-start/10 shadow-lg'
                      : 'border-white/5 bg-white/3 hover:bg-white/5 hover:border-white/15'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-display font-black text-[9px] text-white ${l.bgColor}`}>
                    {l.avatarText}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[9px] font-black text-white leading-tight truncate">{l.name.replace('MLA ', '')}</span>
                    <span className="font-mono text-[6.5px] text-white/40 uppercase font-bold truncate">{l.constituency}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tone selector */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-display text-[9px] font-bold tracking-widest text-white/40 uppercase">Speech Register</span>
            <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/5">
              {['Hinglish', 'Formal Hindi', 'English'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-2.5 py-1 rounded text-[8px] font-display uppercase tracking-widest font-black transition-all cursor-pointer ${
                    selectedLanguage === lang
                      ? 'bg-white/10 text-white'
                      : 'text-white/40 hover:text-white hover:bg-white/3'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CHAT VIEWPORT */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-4 bg-[#010106] custom-scrollbar">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 max-w-[85%] ${
                msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
              }`}
            >
              <span className="font-mono text-[7px] text-white/30 font-bold">{msg.timestamp}</span>
              <div
                className={`p-3.5 rounded-2xl font-sans text-xs leading-relaxed whitespace-pre-line border ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-saffron-start to-saffron-end text-white border-saffron-start/20 shadow-md rounded-tr-none'
                    : 'bg-white/5 text-white/90 border-white/5 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* TYPING CALIBRATION */}
          {isTyping && (
            <div className="self-start flex flex-col gap-1 max-w-[85%]">
              <span className="font-mono text-[7px] text-white/30 font-bold">Synthesizing...</span>
              <div className="p-3 bg-white/5 text-white/60 border border-white/5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-start animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-end animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* AUDIO WAVE VISUALIZER */}
        {waveActive && (
          <div className="bg-[#05050d] border-t border-white/5 px-4 py-2.5 flex items-center justify-between gap-3 text-white/50 animate-fade-in">
            <div className="flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
              <span className="font-mono text-[8px] tracking-widest text-[#00E5FF] font-bold uppercase">Voice Calibration Engine Active</span>
            </div>
            
            {/* Animating Wave Lines */}
            <div className="flex gap-1 h-3 items-center">
              {[...Array(6)].map((_, idx) => (
                <span
                  key={idx}
                  className="w-[1.5px] bg-[#00E5FF] rounded-full animate-bounce"
                  style={{
                    height: `${30 + Math.random() * 70}%`,
                    animationDuration: `${0.4 + idx * 0.1}s`,
                    animationIterationCount: 'infinite'
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* DRAWER FOOTER & PRESETS */}
        <div className="p-4 border-t border-white/10 bg-[#02020a]/90 flex flex-col gap-3">
          {/* Quick presets (only show when no message logs are running except first) */}
          {messages.length <= 1 && !isTyping && (
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-[8px] font-bold tracking-widest text-white/35 uppercase flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-saffron-start" /> Quick Strategy Requests
              </span>
              <div className="flex flex-col gap-1">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessages(prev => [
                        ...prev,
                        { sender: 'user', text: preset.query, timestamp: new Date().toTimeString().split(' ')[0].substring(0, 5) }
                      ]);
                      simulateResponse(preset.query);
                    }}
                    className="w-full text-left p-2 rounded-lg bg-white/3 border border-white/5 hover:border-saffron-start/30 text-white/70 hover:text-white transition-all text-[9.5px] font-sans truncate cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Direct Input form */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask Netaji Strategy..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/3 border border-white/10 hover:border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 font-sans focus:outline-none focus:border-saffron-start/50 transition-colors"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-gradient-to-r from-saffron-start to-saffron-end text-white rounded-xl hover:shadow-[0_4px_15px_rgba(255,106,0,0.3)] transition-all flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center font-mono text-[7px] text-white/20 tracking-wider">
            SECURED TELEMETRY LINK • POWERED BY GETSETAI INNOVATIONS
          </div>
        </div>

      </div>
    </>
  );
};
