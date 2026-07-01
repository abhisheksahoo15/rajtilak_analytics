import React from 'react';
import { Hero } from '../components/Hero';
import { PosterGenerator } from '../components/PosterGenerator';
import { SentimentDetector } from '../components/SentimentDetector';
import { ExitPollDashboard } from '../components/ExitPollDashboard';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedButton } from '../components/AnimatedButton';
import { 
  TrendingUp, 
  Compass, 
  Award, 
  Target, 
  BarChart2, 
  MessageCircle, 
  Flame, 
  MapPin, 
  PenTool, 
  Search, 
  Megaphone, 
  ShieldCheck, 
  Zap,
  Lock,
  RefreshCw,
  LineChart
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Campaign Poster Generator - Upload photo, add details, generate & download poster */}
      <PosterGenerator />

      {/* 3. Sentiment Word Detector */}
      <SentimentDetector onNavigate={onNavigate} />

      {/* 3.5. Exit Poll vs Actual Seat Results Dashboard */}
      <ExitPollDashboard />

      {/* 3. Why Our Analytics is the Best */}
      <section className="py-20 bg-gradient-to-b from-[#F3F5F9]/20 to-white border-t border-[#071A3D]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <ScrollReveal direction="left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
                  Why Our Analytics is the Best
                </span>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={100}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D] leading-tight heading-underline">
                  Engineered for Victory: <br />
                  <span className="text-saffron-gradient">Our Analytics Advantage</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={200}>
                <p className="font-sans text-[#071A3D]/65 text-sm leading-relaxed">
                  Conventional polls miss volatile shifts. We integrate real-time digital intelligence and ground networks to secure a decisive edge.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={300}>
                <div className="p-4 bg-white border border-[#071A3D]/5 rounded-2xl shadow-sm flex items-center gap-4 mt-2 hover-card">
                  <span className="text-3xl font-display font-black text-saffron-start animate-glow-pulse">98.4%</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#071A3D]">Predictive Precision</span>
                    <span className="text-[10px] text-[#071A3D]/50 font-mono font-bold uppercase">PROVEN OVER 48 CAMPAIGNS</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side - Feature points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { num: '1', title: 'Real-Time 48h Updates', desc: 'We capture local sentiment fluctuations and adjust campaign hooks within 48 hours.', color: 'saffron-start' },
                { num: '2', title: 'Heritage Narrative Sync', desc: 'Aligning voter demands with civilizational pride and native registers.', color: '[#071A3D]' },
                { num: '3', title: 'Doorstep Ground Sync', desc: 'Crosschecking computer forecasts against direct interview panels daily.', color: 'gold-accent' },
                { num: '4', title: 'Zero Jargon Output', desc: 'Simple booth-level checklists that volunteers deploy immediately.', color: 'saffron-end' },
              ].map((item, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 120}>
                  <div className="flex gap-4 feature-card p-4 rounded-2xl bg-white/50 border border-transparent hover:border-[#071A3D]/5">
                    <div className={`w-9 h-9 rounded-full bg-${item.color}/15 flex items-center justify-center font-display font-black text-xs text-${item.color} shrink-0 animate-pulse-ring`}>
                      {item.num}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display text-sm font-bold text-[#071A3D]">{item.title}</h4>
                      <p className="font-sans text-[11px] text-[#071A3D]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Highlights */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-black text-[#071A3D] heading-underline inline-block">
                What Sets Us Apart
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Compass className="w-6 h-6 text-saffron-start" />, title: 'Civilizational Wisdom', desc: 'Narratives aligned with cultural heritage and regional aspirations of local electorates.', bgColor: 'saffron-start' },
              { icon: <TrendingUp className="w-6 h-6 text-[#071A3D]" />, title: 'AI-Powered Analytics', desc: 'From 100+ word sentiment dictionaries to booth-level demographic forecasts.', bgColor: '[#071A3D]' },
              { icon: <Award className="w-6 h-6 text-saffron-end" />, title: 'Victory Blueprint', desc: 'Structured volunteer coordinates and satellite rally timelines for decisive margins.', bgColor: 'saffron-end' },
            ].map((feature, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className="p-8 bg-[#F3F5F9]/50 border border-[#071A3D]/5 rounded-2xl flex flex-col gap-4 feature-card relative">
                  <div className={`p-3 bg-${feature.bgColor}/15 border border-${feature.bgColor}/20 rounded-xl w-fit`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg font-black text-[#071A3D]">{feature.title}</h3>
                  <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Victory Solutions Suite (12 Core Services Showcase) */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F3F5F9]/40 border-t border-[#071A3D]/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
                Victory Solutions Suite
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D] leading-tight heading-underline">
                Our Strategic <span className="text-saffron-gradient">Command Verticals</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-sans text-[#071A3D]/65 text-xs max-w-lg leading-relaxed mt-1 text-center">
                We operate across 12 specialized operations pillars, linking predictive algorithms with real-time ground execution.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'Campaign Strategy', desc: 'Formulating end-to-end coalition blueprints, poll manifesto strategies, and structural campaign plans.', icon: <Target className="w-5 h-5 text-saffron-start" /> },
              { name: 'AI Voter Analytics', desc: 'Deep learning-based demographic evaluation, voter cohort clustering, and predictive victory forecasting.', icon: <BarChart2 className="w-5 h-5 text-saffron-end" /> },
              { name: 'Psychology Design', desc: 'Decoding voter sentiment drivers, aspiration mappings, and behavioral conversion mechanics.', icon: <Compass className="w-5 h-5 text-[#071A3D]" /> },
              { name: 'Sentiment Building', desc: 'Forging emotional connects, civic pride narratives, and community alignment campaigns.', icon: <MessageCircle className="w-5 h-5 text-[#071A3D]" /> },
              { name: 'Leader Branding', desc: 'Calibrating leadership profiles with civilizational authority and regional charisma.', icon: <Award className="w-5 h-5 text-saffron-start" /> },
              { name: 'Election War Room', desc: 'Full-scale command operations managing real-time data flow and campaign adjustments.', icon: <Flame className="w-5 h-5 text-saffron-end" /> },
              { name: 'Social Media Growth', desc: 'Accelerating online footprint, micro-content propagation, and narrative amplification.', icon: <TrendingUp className="w-5 h-5 text-[#071A3D]" /> },
              { name: 'Booth Planning', desc: 'Micro-targeting demographics at the single polling station level to secure local majorities.', icon: <MapPin className="w-5 h-5 text-[#071A3D]" /> },
              { name: 'Speech Writing', desc: 'Drafting impact-optimized speeches with regional phrases and cadence mapping.', icon: <PenTool className="w-5 h-5 text-saffron-start" /> },
              { name: 'Political Intelligence', desc: 'Comprehensive mapping of constituency dynamics, local influencers, and opponent paths.', icon: <Search className="w-5 h-5 text-saffron-end" /> },
              { name: 'Digital Campaigns', desc: 'AI-driven targeting, WhatsApp network propagation, and narrative shaping.', icon: <Megaphone className="w-5 h-5 text-[#071A3D]" /> },
              { name: 'Reputation Management', desc: 'Mitigating negative waves, structural leaks, and executing counter-strategies.', icon: <ShieldCheck className="w-5 h-5 text-saffron-start" /> },
            ].map((svc, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 50}>
                <div 
                  onClick={() => onNavigate('services')}
                  className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-[#071A3D]/5 hover:border-saffron-start/20 hover:shadow-[0_8px_25px_rgba(255,106,0,0.06)] transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
                >
                  <div className="flex flex-col gap-3">
                    <div className="p-2.5 bg-[#F3F5F9] border border-[#071A3D]/5 rounded-xl w-fit group-hover:bg-saffron-start/10 group-hover:border-saffron-start/20 transition-all duration-300">
                      {svc.icon}
                    </div>
                    <h4 className="font-display text-sm font-bold text-[#071A3D] group-hover:text-saffron-end transition-colors duration-300">
                      {svc.name}
                    </h4>
                    <p className="font-sans text-[11px] text-[#071A3D]/65 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <span className="text-[9px] font-display font-black text-saffron-start/0 group-hover:text-saffron-start transition-all duration-300 self-end mt-4 flex items-center gap-1">
                    Details ✦
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4.7 "Why Partner With Us" Section (Competitive Advantages described everywhere) */}
      <section className="py-24 bg-[#071A3D] text-white relative overflow-hidden border-t border-b border-saffron-start/15">
        <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[350px] bg-saffron-start/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col - Briefing info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal direction="left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-saffron-start/35 text-[10px] font-black tracking-widest uppercase text-saffron-end w-fit">
                  Why Partner With Us
                </span>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={100}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                  The Rajtilak Analytics <span className="text-saffron-gradient">Victory Edge</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={200}>
                <p className="font-sans text-white/60 text-xs leading-relaxed max-w-sm">
                  We don\'t just count numbers; we engineer majorities. Discover why political leaders and coalition coordinators trust our data matrix.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={300}>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:border-saffron-start/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-saffron-start/20 flex items-center justify-center border border-saffron-start/30 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-saffron-start" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-saffron-start font-black uppercase tracking-wider">Operational Integrity</span>
                    <span className="text-[11px] text-white/80 font-sans mt-0.5">Powered by GetSetAI Innovations.</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Col - Core Strengths Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '98.4% Predictive Precision', desc: 'Proven victory calibration models deployed across 48 state and parliamentary campaigns.', icon: <LineChart className="w-5 h-5 text-saffron-start" /> },
                { title: 'GetSetAI Proprietary Core', desc: 'Configured with custom regional NLP dictionaries mapping regional slangs and dialogues.', icon: <Zap className="w-5 h-5 text-saffron-end" /> },
                { title: 'Absolute Leak-Proof Isolation', desc: 'Zero data exposure via fully encrypted sandboxed systems and private server hosts.', icon: <Lock className="w-5 h-5 text-[#00E5FF]" /> },
                { title: 'Rapid 24h Message Adjustment', desc: 'Adjust public speech hooks and micro-campaign angles within 24 hours of narrative shifts.', icon: <RefreshCw className="w-5 h-5 text-gold-accent" /> },
              ].map((strength, idx) => (
                <ScrollReveal key={idx} direction="right" delay={idx * 100}>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-2xl flex flex-col gap-3.5 hover:border-saffron-start/30 transition-all duration-300">
                    <div className="p-2.5 bg-white/5 rounded-xl w-fit border border-white/5">
                      {strength.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display text-sm font-bold text-white tracking-wide">
                        {strength.title}
                      </h4>
                      <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
          
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#071A3D] to-[#0A1830] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-saffron-start/5 rounded-full blur-[140px] animate-breathe pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10 relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Launch Your Path to <span className="text-saffron-gradient">Democratic Coronation</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="font-sans text-white/60 text-sm max-w-xl leading-relaxed">
              Navigate through our specialized portals to deploy surveys, explore campaign footprints, or enter the tactical war-room command.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <AnimatedButton variant="outline" onClick={() => onNavigate('services')} className="border-white/15 text-white hover:border-saffron-start/50 hover:bg-white/10">
                Explore Services
              </AnimatedButton>
              <AnimatedButton variant="primary" onClick={() => onNavigate('warroom')}>
                Enter War Room Command
              </AnimatedButton>
              <AnimatedButton variant="outline" onClick={() => onNavigate('impact')} className="border-white/15 text-white hover:border-saffron-start/50 hover:bg-white/10">
                View Campaign Impact
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
