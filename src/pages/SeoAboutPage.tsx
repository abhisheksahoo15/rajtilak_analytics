import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, Globe, Award, Users, BarChart2, Shield, Target, Cpu, BookOpen } from 'lucide-react';

/**
 * SEO-optimized hidden page for search engine crawlers.
 * Contains structured content about Rajtilak Analytics as a political strategy management firm,
 * team leadership, service areas, and location-based keywords for Chhattisgarh and India.
 * This page is accessible via hash route but not shown in the main navigation.
 */
export const SeoAboutPage: React.FC = () => {
  const services = [
    { title: 'Political Strategy Management', desc: 'End-to-end political campaign strategy design, coalition planning, and electoral roadmap development for candidates and parties across India.' },
    { title: 'Election Campaign Management', desc: 'Complete campaign execution including voter outreach, rally coordination, digital media planning, and ground-level mobilization.' },
    { title: 'Voter Analytics & Sentiment Analysis', desc: 'Data-driven voter demographic analysis, public sentiment tracking, and predictive modeling for constituency-level insights.' },
    { title: 'War Room Operations', desc: 'Real-time campaign monitoring dashboards, rapid response coordination, and live voter feedback processing from dedicated command centers.' },
    { title: 'Booth-Level Campaign Planning', desc: 'Micro-targeted campaign plans at the individual polling station level, volunteer coordination, and last-mile voter engagement.' },
    { title: 'Leader Branding & Communication', desc: 'Political leader image management, speech writing, social media strategy, and public perception optimization.' },
    { title: 'Political Intelligence & Research', desc: 'Comprehensive constituency mapping, opposition analysis, local influencer identification, and ground-level intelligence gathering.' },
    { title: 'Digital Campaign Strategy', desc: 'Social media campaign management, video content strategy, WhatsApp broadcast planning, and digital narrative building.' },
    { title: 'Reputation Management', desc: 'Crisis communication planning, negative narrative mitigation, and proactive reputation building for political leaders.' },
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white overflow-hidden border-b border-[#071A3D]/5">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
                <Globe className="w-3.5 h-3.5" /> India's Leading Political Strategy Firm
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Rajtilak Analytics — <br className="hidden sm:block" />
                <span className="text-saffron-gradient">Political Strategy Management</span> Firm
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-sans text-sm sm:text-base text-[#071A3D]/65 leading-relaxed mt-2 max-w-2xl">
                Rajtilak Analytics is India's premier political strategy management and election campaign consulting firm, headquartered in Bhilai, Chhattisgarh. We provide comprehensive political advisory services including voter analytics, campaign management, war room operations, and digital strategy to political leaders and parties across India.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About the Firm */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <ScrollReveal direction="left">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
                  About <span className="text-saffron-gradient">Rajtilak Analytics</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={100}>
                <div className="flex flex-col gap-4 text-sm text-[#071A3D]/70 leading-relaxed">
                  <p>
                    <strong>Rajtilak Analytics</strong> is a political management firm specializing in election campaign strategy, voter analytics, and political consulting. Founded with the mission to bring data-driven decision-making to Indian politics, we serve as a bridge between ground-level voter sentiment and strategic campaign execution.
                  </p>
                  <p>
                    As <strong>Chhattisgarh's leading political strategy management firm</strong> and one of <strong>India's top political consulting organizations</strong>, we combine advanced data analytics with field-level operations to deliver measurable campaign outcomes.
                  </p>
                  <p>
                    Our headquarters at GetSetAI Innovations Block in Bhilai, Durg district, Chhattisgarh serves as our primary operations center, from where we coordinate pan-India campaign management and advisory services.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex flex-col gap-6">
              <ScrollReveal direction="right">
                <h3 className="font-display text-xl font-bold text-[#071A3D]">Our Expertise</h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Target className="w-4 h-4 text-saffron-start" />, text: 'Political Strategy' },
                  { icon: <BarChart2 className="w-4 h-4 text-saffron-end" />, text: 'Voter Analytics' },
                  { icon: <Users className="w-4 h-4 text-[#071A3D]" />, text: 'Campaign Management' },
                  { icon: <Shield className="w-4 h-4 text-[#00E5FF]" />, text: 'War Room Operations' },
                  { icon: <Cpu className="w-4 h-4 text-gold-accent" />, text: 'Sentiment Analysis' },
                  { icon: <BookOpen className="w-4 h-4 text-saffron-start" />, text: 'Political Intelligence' },
                ].map((item, i) => (
                  <ScrollReveal key={i} direction="right" delay={i * 80}>
                    <div className="flex items-center gap-3 p-3 bg-[#F3F5F9]/50 border border-[#071A3D]/5 rounded-xl hover:border-saffron-start/20 transition-all duration-300">
                      <div className="p-2 bg-white border border-[#071A3D]/5 rounded-lg">{item.icon}</div>
                      <span className="font-display text-xs font-bold text-[#071A3D]">{item.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Areas */}
      <section className="py-16 sm:py-20 bg-[#F3F5F9]/30 border-t border-b border-[#071A3D]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
                Service Areas & <span className="text-saffron-gradient">Presence</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-sans text-sm text-[#071A3D]/60 max-w-lg leading-relaxed">
                Headquartered in Chhattisgarh with pan-India operational capabilities across all states and union territories.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { region: 'Chhattisgarh', detail: 'Headquarters — Bhilai, Durg District', isPrimary: true },
              { region: 'Madhya Pradesh', detail: 'Central India Operations Hub', isPrimary: false },
              { region: 'Uttar Pradesh', detail: 'North India Campaign Operations', isPrimary: false },
              { region: 'Maharashtra', detail: 'Western India Advisory Services', isPrimary: false },
              { region: 'Karnataka', detail: 'South India Analytics Center', isPrimary: false },
              { region: 'Pan-India', detail: 'All States & Union Territories', isPrimary: true },
            ].map((area, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className={`p-5 rounded-2xl border flex items-start gap-3 hover:shadow-md transition-all duration-300 ${
                  area.isPrimary 
                    ? 'bg-white border-saffron-start/20 shadow-sm' 
                    : 'bg-white border-[#071A3D]/5'
                }`}>
                  <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${area.isPrimary ? 'text-saffron-start' : 'text-[#071A3D]/40'}`} />
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-sm font-bold text-[#071A3D]">{area.region}</span>
                    <span className="text-xs text-[#071A3D]/55">{area.detail}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services List — SEO-rich content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
                Our <span className="text-saffron-gradient">Political Strategy</span> Services
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-sans text-sm text-[#071A3D]/60 max-w-lg leading-relaxed">
                Comprehensive political consulting and election campaign management services for leaders and parties across India.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 60}>
                <div className="bg-[#F3F5F9]/30 border border-[#071A3D]/5 rounded-2xl p-6 hover:border-saffron-start/20 hover:shadow-md transition-all duration-300 flex flex-col gap-3 h-full">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-saffron-start" />
                    <h3 className="font-display text-sm font-bold text-[#071A3D]">{svc.title}</h3>
                  </div>
                  <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rajtilak Analytics — keyword-rich section */}
      <section className="py-16 sm:py-20 bg-[#071A3D] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Why Choose <span className="text-saffron-gradient">Rajtilak Analytics</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-sans text-sm text-white/60 max-w-lg leading-relaxed">
                As India's leading political strategy management firm, we bring a unique combination of data science, field operations, and strategic advisory.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Data-Driven Political Strategy', desc: 'Every campaign decision is backed by voter data, demographic analysis, and sentiment research — not guesswork.' },
              { title: 'Pan-India Coverage', desc: 'From Chhattisgarh to every corner of India, our teams operate across all states with local expertise and cultural understanding.' },
              { title: 'Confidential & Secure Operations', desc: 'All client engagements, data, and strategies are handled with complete confidentiality and encrypted communication channels.' },
              { title: 'End-to-End Campaign Support', desc: 'From initial strategy design to election day war room monitoring, we provide complete campaign lifecycle support.' },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-saffron-start/30 transition-all duration-300">
                  <h3 className="font-display text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="font-sans text-xs text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#071A3D]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Get in Touch with <span className="text-saffron-gradient">Rajtilak Analytics</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-sans text-sm text-[#071A3D]/60 leading-relaxed max-w-lg">
              Ready to build a data-driven campaign strategy? Contact our political consulting team for a confidential discussion.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 items-center text-sm text-[#071A3D]/70">
              <a href="mailto:strategy.rajtilak@gmail.com" className="flex items-center gap-2 hover:text-saffron-start transition-colors font-mono">
                <span className="text-saffron-start font-bold">Email:</span> strategy.rajtilak@gmail.com
              </a>
              <span className="hidden sm:inline text-[#071A3D]/20">|</span>
              <a href="tel:+919479083110" className="flex items-center gap-2 hover:text-saffron-start transition-colors font-mono">
                <span className="text-saffron-start font-bold">Call:</span> +91 94790 83110
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <p className="font-sans text-xs text-[#071A3D]/40 mt-4">
              Rajtilak Analytics — Political Strategy Management | Election Campaign Consulting | Voter Analytics | Chhattisgarh | India
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
