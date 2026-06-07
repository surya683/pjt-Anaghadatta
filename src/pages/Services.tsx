import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Headphones, Code, Sparkles, Settings, ArrowRight, ShieldCheck, Hourglass } from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bpo' | 'dev' | 'ai' | 'support'>('all');

  const tabs = [
    { label: 'All Operations', id: 'all' as const },
    { label: 'BPO', id: 'bpo' as const },
    { label: 'Software Dev', id: 'dev' as const },
    { label: 'AI & Automation', id: 'ai' as const },
    { label: 'Technical IT Support', id: 'support' as const },
  ];

  const services = [
    {
      id: 'bpo-customer',
      category: 'bpo',
      icon: <Headphones className="w-6 h-6 text-highlight-cyan" />,
      title: 'Global Customer Support',
      desc: 'Tier-1 and Tier-2 customer service channels operating 24/7/365 in English and multi-lingual options. Scaled staffing models.',
      benefits: ['Guaranteed <45s average speed of answer', '100% HIPAA and PCI compliance', 'Dedicated Team Leaders assigned to pods'],
      accent: 'cyan' as const,
    },
    {
      id: 'bpo-callcenter',
      category: 'bpo',
      icon: <Headphones className="w-6 h-6 text-highlight-cyan" />,
      title: 'Outbound Telesales & Inbound Support',
      desc: 'Active cold outbound growth campaigns and reactive call routing frameworks built to boost conversion and manage spikes.',
      benefits: ['Integrated interactive voice response (IVR)', 'Dialer system efficiency optimization', 'Automated QA call recording reviews'],
      accent: 'cyan' as const,
    },
    {
      id: 'bpo-backoffice',
      category: 'bpo',
      icon: <Hourglass className="w-6 h-6 text-highlight-cyan" />,
      title: 'Back Office & Data Processing',
      desc: 'Heavy data catalog entry, legal content review pipelines, validation audits, and automated document ingestion management.',
      benefits: ['99.98% processing accuracy SLA', 'Secure sandbox terminal connections', 'High volume batch scaling formats'],
      accent: 'cyan' as const,
    },
    {
      id: 'dev-web',
      category: 'dev',
      icon: <Code className="w-6 h-6 text-secondary-accent" />,
      title: 'Enterprise Web Applications',
      desc: 'Bespoke corporate solutions built using React, Next.js, and TypeScript. Complex dashboards, data visuals, and SaaS portals.',
      benefits: ['Fast, lazy-loaded architectures', 'Strict TypeScript type safety', 'Fully modular component frameworks'],
      accent: 'blue' as const,
    },
    {
      id: 'dev-mobile',
      category: 'dev',
      icon: <Code className="w-6 h-6 text-secondary-accent" />,
      title: 'Mobile App Development',
      desc: 'Native iOS and Android app engineering using Swift, Kotlin, and React Native. Optimized performance and secure offline caching.',
      benefits: ['Published App Store deployment support', 'Offline capability design patterns', 'Stunning smooth 60 FPS transitions'],
      accent: 'blue' as const,
    },
    {
      id: 'ai-bots',
      category: 'ai',
      icon: <Sparkles className="w-6 h-6 text-highlight-purple" />,
      title: 'AI Chatbot Engineering',
      desc: 'Next-generation intelligent LLM customer assistants trained on internal company knowledgebases. Instant support answers.',
      benefits: ['Multi-platform webhook integrations', 'Dynamic database query lookups', 'Safe fallback to human operators'],
      accent: 'purple' as const,
    },
    {
      id: 'ai-assistants',
      category: 'ai',
      icon: <Sparkles className="w-6 h-6 text-highlight-purple" />,
      title: 'Business Workflow Automation',
      desc: 'Orchestrating complex automated cron tasks, invoice parsers, email auto-responders, and digital employee modules.',
      benefits: ['Up to 80% time savings on admin tasks', 'Zod schema parameter validations', 'Custom API bridge triggers'],
      accent: 'purple' as const,
    },
    {
      id: 'support-it',
      category: 'support',
      icon: <Settings className="w-6 h-6 text-white" />,
      title: 'Enterprise IT Help Desk',
      desc: 'Internal corporate technician support desk managing active computer issues, secure network channels, and hardware diagnostic logs.',
      benefits: ['Fast response resolution targets', 'Integrated Zendesk / Jira workflows', 'Weekly analytics report outputs'],
      accent: 'none' as const,
    },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Operational Catalog
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          World-Class Services <br />
          <span className="text-gradient-cyan-purple">Engineered for Massive Scale</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Filter through our technical disciplines. Every segment operates under strict service level agreements (SLAs) and detailed quality assurance guidelines.
        </p>
      </section>

      {/* Tabs Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10 overflow-x-auto no-scrollbar flex">
        <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 gap-2 backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-secondary-blue to-secondary-accent text-white shadow-lg'
                  : 'text-neutral-muted hover:text-white hover:bg-white/5'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredServices.map((service) => (
          <GlassCard
            key={service.id}
            glowColor={service.accent}
            className="flex flex-col justify-between h-full group text-left p-8"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-highlight-cyan transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-neutral-muted leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Benefits Checklist */}
              <div className="border-t border-white/5 pt-6 mb-6">
                <span className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block mb-3">Service Guarantees</span>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-muted">
                      <ShieldCheck className="w-4 h-4 text-highlight-cyan shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('quote')}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-gradient-to-r hover:from-secondary-blue hover:to-secondary-accent hover:border-transparent text-white font-semibold text-xs transition-all duration-300"
            >
              Book Service Setup <ArrowRight className="w-4 h-4" />
            </button>
          </GlassCard>
        ))}
      </section>
    </div>
  );
};
