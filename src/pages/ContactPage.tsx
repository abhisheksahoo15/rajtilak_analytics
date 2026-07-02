import React from 'react';
import { Contact } from '../components/Contact';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const offices = [
    { 
      icon: <MapPin className="w-5 h-5 text-saffron-start" />, 
      title: 'Bhilai Headquarters', 
      info: (
        <span>
          Getsetai Innovations Block,<br />
          Vivekananda nagar Kohka,<br />
          Bhilai, Dist- Durg, 490023
        </span>
      ), 
      tag: 'EXECUTIVE OPERATIONS HUB' 
    },
    { 
      icon: <Mail className="w-5 h-5 text-saffron-end" />, 
      title: 'Direct Strategic Mail', 
      info: (
        <a href="mailto:strategy.rajtilak@gmail.com" className="hover:text-saffron-start transition-colors font-mono">
          strategy.rajtilak@gmail.com
        </a>
      ), 
      tag: 'SECURE ENCRYPTED INBOX' 
    },
    { 
      icon: <Phone className="w-5 h-5 text-gold-accent" />, 
      title: 'Liaison Hotlines', 
      info: (
        <div className="flex flex-col gap-1 font-mono text-[11px]">
          <a href="tel:+919479083110" className="hover:text-gold-accent transition-colors">+91 94790 83110</a>
          <a href="tel:+918349948003" className="hover:text-gold-accent transition-colors">+91 83499 48003</a>
          <a href="tel:+919907950975" className="hover:text-gold-accent transition-colors">+91 99079 50975</a>
          <a href="tel:+919202893485" className="hover:text-gold-accent transition-colors">+91 92028 93485</a>
        </div>
      ), 
      tag: '4 CHANNELS ACTIVE' 
    },
  ];

  return (
    <div className="animate-fade-in pt-24 bg-white">
      {/* Intro banner */}
      <section className="bg-[#F3F5F9]/60 border-b border-[#071A3D]/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <ScrollReveal direction="left">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-saffron-start/20 rounded-lg border border-saffron-start/30 mt-0.5 animate-pulse-ring">
                <Sparkles className="w-5 h-5 text-saffron-start" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h1 className="font-display text-lg font-black text-[#071A3D]">Liaison Command Coordinates</h1>
                <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed max-w-xl">
                  We coordinate campaign briefings with absolute confidentiality. Reach our regional liaison centers directly.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* Liaison Details */}
      <section className="py-16 bg-white border-t border-[#071A3D]/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 120}>
              <div className="p-6 bg-[#F3F5F9]/30 border border-[#071A3D]/5 rounded-2xl flex flex-col gap-3 hover-card tilt-card">
                <div className="animate-float-slow">{office.icon}</div>
                <h3 className="font-display text-sm font-black text-[#071A3D]">{office.title}</h3>
                <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed">{office.info}</p>
                <span className="text-[10px] font-mono text-saffron-end mt-2 block font-bold animate-breathe">{office.tag}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};
