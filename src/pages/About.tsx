import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Target, Eye, Shield, Users, Award, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const leaders = [
    {
      name: 'Dr. Evelyn Vance',
      role: 'Chief Executive Officer',
      bio: 'Former AI Fellow at IBM and Stanford CS PhD, Evelyn spent 15 years designing intelligent scaling solutions for Fortune 500 operations.',
      accent: 'cyan' as const,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Operating Officer',
      roleDescription: 'Former Operations Partner at Accenture, Marcus specializes in high-scale global BPO deployment and contact center engineering.',
      bio: 'Former Operations Partner at Accenture, Marcus specializes in high-scale global BPO deployment and contact center engineering.',
      accent: 'blue' as const,
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Technology Officer',
      bio: 'Former Principal Architect at Salesforce, Sarah spearheads AD Tech Solutions cloud pipelines, compliance infrastructure, and custom software systems.',
      accent: 'purple' as const,
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Corporate Heritage
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Architecting the Future of <br />
          <span className="text-gradient-cyan-purple">Enterprise IT & Global BPO</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Founded by tech executives and consulting veterans, AD Tech Solutions was built to bridge the gap between heavy software engineering capability and massive client support operations.
        </p>
      </section>

      {/* Mission & Vision Panels */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
        <GlassCard glowColor="cyan" className="p-8 text-left h-full flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-highlight-cyan/10 border border-highlight-cyan/20 flex items-center justify-center mb-6 group-hover:bg-highlight-cyan/20 transition-colors">
              <Target className="w-6 h-6 text-highlight-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Corporate Mission</h3>
            <p className="text-sm md:text-base text-neutral-muted leading-relaxed">
              To empower scaling enterprises by providing hyper-compliant, technologically superior IT backbones coupled with highly trained global customer experience operations. We eliminate operational drag.
            </p>
          </div>
        </GlassCard>

        <GlassCard glowColor="purple" className="p-8 text-left h-full flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-highlight-purple/10 border border-highlight-purple/20 flex items-center justify-center mb-6 group-hover:bg-highlight-purple/20 transition-colors">
              <Eye className="w-6 h-6 text-highlight-purple" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Operations Vision</h3>
            <p className="text-sm md:text-base text-neutral-muted leading-relaxed">
              To build a global, decentralized enterprise network where human empathy, software agility, and intelligent AI agents merge seamlessly, guaranteeing elite performance outcomes under a single, unified contract.
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Core Values Section */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01] relative z-10 mb-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight">Our Core Operational Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="text-highlight-cyan" />, title: 'Hyper Compliance', desc: 'Operating with strict corporate governance, active encryption, and audited data safety parameters.' },
              { icon: <Zap className="text-highlight-purple" />, title: 'Agile Engineering', desc: 'Treating operations as code: iteratively improving software modules and customer support scripts.' },
              { icon: <Users className="text-secondary-accent" />, title: 'Global Inclusion', desc: 'Fostering elite culture across Manila, SF, and Bangalore office environments to drive high retention.' },
              { icon: <Award className="text-white" />, title: 'SLA Accountability', desc: 'Aligning completely with client targets through contractual transparency, live logs, and performance metrics.' },
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                  {value.icon}
                </div>
                <h4 className="font-bold text-white text-base">{value.title}</h4>
                <p className="text-xs text-neutral-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Leadership Directors</h2>
        <p className="text-sm text-neutral-muted max-w-2xl leading-relaxed mb-12">
          Meet the founding architects guiding AD Tech Solutions global software pipelines and decentralized BPO networks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((l, idx) => (
            <GlassCard key={idx} glowColor={l.accent} className="p-6 flex flex-col justify-between h-full group text-left">
              <div>
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-white/5">
                  <img src={l.img} alt={l.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-highlight-cyan transition-colors">{l.name}</h3>
                <span className="text-xs text-neutral-muted block mb-4 uppercase tracking-wider font-semibold">{l.role}</span>
                <p className="text-xs text-neutral-muted leading-relaxed">
                  {l.bio}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
