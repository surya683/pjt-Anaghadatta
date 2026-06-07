import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { GlassCard } from '../components/GlassCard';
import { ArrowRight, Sparkles, Shield, Cpu, Headphones, TrendingUp, ArrowUpRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const textOptions = ['Operational Scaling', 'AI Orchestration', 'Software Innovation', 'Global BPO Excellence'];

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [typedText, setTypedText] = useState('');
  const [optionIndex, setOptionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeText = textOptions[optionIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText(activeText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = window.setTimeout(() => {
        setTypedText(activeText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === activeText.length) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setOptionIndex(prev => (prev + 1) % textOptions.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, optionIndex]);

  const servicesPreview = [
    {
      icon: <Headphones className="w-6 h-6 text-highlight-cyan" />,
      title: 'Global BPO Operations',
      desc: 'High-touch inbound and outbound customer channels, tech help desks, and back-office pipelines operating 24/7/365.',
      metrics: '50% operational cost cut',
      color: 'cyan' as const,
    },
    {
      icon: <Cpu className="w-6 h-6 text-highlight-purple" />,
      title: 'AI Automation & Agents',
      desc: 'Deploy custom intelligent LLM chatbots and workflow automatons to streamline redundant office bottlenecks.',
      metrics: '85% resolution rates',
      color: 'purple' as const,
    },
    {
      icon: <Cpu className="w-6 h-6 text-secondary-accent" />,
      title: 'Software Development',
      desc: 'Premium React frontend engineering, cloud applications, and high-performance cross-platform iOS & Android apps.',
      metrics: '100% cloud architectures',
      color: 'blue' as const,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#0F172A] z-0" />
        <div className="absolute -top-[30%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-secondary-blue/10 to-highlight-cyan/15 blur-[120px] animate-rotate-mesh" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-highlight-purple/10 to-secondary-accent/10 blur-[120px] animate-rotate-mesh" style={{ animationDirection: 'reverse' }} />

        {/* Interactive canvas particle background */}
        <ParticleCanvas />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center justify-center">
          {/* Centered Hero Content */}
          <div className="flex flex-col gap-6 items-center animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4.5 py-1.5 rounded-full w-fit backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-highlight-cyan animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-neutral-muted uppercase">Introducing AD TECH SOLUTIONS Enterprise</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Transforming Business Operations Through Technology, <span className="text-gradient-cyan-purple">{typedText}</span><span className="text-highlight-cyan animate-pulse">|</span>
            </h1>
            
            <p className="text-base md:text-lg text-neutral-muted max-w-2xl leading-relaxed">
              From global customer support channels and BPO services to bespoke software engineering and intelligent AI workflow automation, we help companies scale operations at unmatched speed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setCurrentPage('quote')}
                className="group relative bg-gradient-to-r from-secondary-blue to-secondary-accent text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-xl shadow-secondary-blue/20 hover:scale-105 hover:shadow-secondary-blue/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-highlight-cyan to-highlight-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */ }
  <section className="py-24 relative z-10 max-w-7xl mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
      <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full">
        Our Enterprise Offerings
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        Integrated Services Engineered for Unlocked Growth
      </h2>
      <p className="text-sm md:text-base text-neutral-muted leading-relaxed">
        AD TECH SOLUTIONS provides comprehensive operations management. We unify human labor with deep technical engineering and automated intelligence to scale enterprise capacities.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {servicesPreview.map((service, idx) => (
        <GlassCard key={idx} glowColor={service.color} className="flex flex-col gap-6 text-left group">
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/10">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <p className="text-sm text-neutral-muted leading-relaxed flex-grow">{service.desc}</p>

          <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs">
            <span className="text-highlight-cyan font-semibold uppercase tracking-wider">{service.metrics}</span>
            <button
              onClick={() => setCurrentPage('services')}
              className="flex items-center gap-1 font-bold text-white group-hover:text-highlight-cyan transition-colors"
            >
              Learn More <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </GlassCard>
      ))}
    </div>
  </section>

  {/* Why Choose Us (Metrics & Value Props) */ }
  <section className="py-24 bg-[#0F172A] relative z-10 border-t border-white/5 overflow-hidden">
    {/* Glow behind */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary-blue/5 rounded-full blur-[140px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      {/* Why Choose Us Left Text */}
      <div className="lg:col-span-5 flex flex-col gap-6 text-left relative z-10">
        <span className="text-xs font-bold text-highlight-purple uppercase tracking-widest bg-highlight-purple/10 border border-highlight-purple/20 px-3 py-1 rounded-full w-fit">
          The AD Tech Solutions Benchmark
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
          Why Global Enterprises Choose AD Tech Solutions
        </h2>
        <p className="text-sm md:text-base text-neutral-muted leading-relaxed">
          We do not just offer staffing or simple web design. We deploy fully integrated technical operational frameworks that combine elite software engineering and customer experience agents under a unified SLA.
        </p>
        <ul className="space-y-4 text-sm text-neutral-muted">
          <li className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-highlight-cyan shrink-0 mt-0.5" />
            <span><strong>Enterprise Compliance:</strong> ISO 27001 certified protocols, fully GDPR compliant, and secure network tunnels for back-office pipelines.</span>
          </li>
          <li className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-highlight-purple shrink-0 mt-0.5" />
            <span><strong>Contracted Uptime:</strong> Guaranteed 99.99% system availability and dedicated service managers assigned to every contract.</span>
          </li>
        </ul>
      </div>

      {/* Why Choose Us Right Metrics Grid */}
      <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative z-10">
        {[
          { value: '99.98%', label: 'Infrastructure Uptime SLA' },
          { value: '50%+', label: 'OpEx Cost Reduction' },
          { value: '250+', label: 'Software Frameworks Deployed' },
          { value: '15M+', label: 'Customer Queries Solved' },
        ].map((stat, idx) => (
          <GlassCard key={idx} glowColor="none" className="p-8 flex flex-col justify-center text-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white text-gradient-cyan-purple mb-2 block">{stat.value}</span>
            <span className="text-xs text-neutral-muted uppercase tracking-wider">{stat.label}</span>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>

  {/* Process Workflow Section */ }
  <section className="py-24 relative z-10 max-w-7xl mx-auto px-6 border-t border-white/5">
    <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
      <span className="text-xs font-bold text-secondary-accent uppercase tracking-widest bg-secondary-accent/10 border border-secondary-accent/20 px-3 py-1 rounded-full">
        Our Operations Blueprint
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        From Blueprint to Global Execution
      </h2>
      <p className="text-sm md:text-base text-neutral-muted leading-relaxed">
        We follow a streamlined, standard lifecycle of integration to guarantee secure software transitions and smooth customer operations scaling.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {[
        { step: '01', title: 'Consult & Audit', desc: 'We map operational blockages, examine current software stacks, and analyze client staffing ratios.' },
        { step: '02', title: 'Architect Blueprint', desc: 'Design customized data channels, configure call routing trees, and prototype automation modules.' },
        { step: '03', title: 'Beta & Train', desc: 'Train dedicated support agents, deploy custom database tunnels, and initiate secure sandbox trials.' },
        { step: '04', title: 'Scale & Optimize', desc: 'Launch full enterprise operations under contract SLAs, utilizing live dashboard reporting and optimization cycles.' },
      ].map((item, idx) => (
        <GlassCard key={idx} glowColor="none" className="p-8 text-left flex flex-col justify-between relative group h-full">
          <span className="text-5xl font-extrabold text-white/10 group-hover:text-highlight-cyan/20 transition-colors block mb-4 font-mono">{item.step}</span>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-neutral-muted leading-relaxed">{item.desc}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  </section>

  {/* Contact CTA Section */ }
  <section className="py-20 relative z-10 max-w-7xl mx-auto px-6">
    <GlassCard glowColor="purple" className="py-12 px-8 md:px-16 text-center md:text-left bg-gradient-to-r from-white/[0.02] to-white/[0.04]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Ready to Architect Your Enterprise Scaling Plan?</h2>
          <p className="text-sm text-neutral-muted max-w-2xl leading-relaxed">
            Connect with our senior consulting advisors to schedule a detailed audit of your business operations, support pipelines, and automation potential.
          </p>
        </div>

        <div className="shrink-0 flex gap-4">
          <button
            onClick={() => setCurrentPage('quote')}
            className="group relative bg-gradient-to-r from-secondary-blue to-secondary-accent text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-highlight-cyan to-highlight-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </GlassCard>
  </section>
    </div >
  );
};
