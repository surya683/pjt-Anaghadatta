import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { ChevronDown, Headphones, Cpu, Sparkles, AlertCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'bpo' | 'ai' | 'dev' | 'support'>('bpo');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { label: 'BPO', id: 'bpo' as const, icon: <Headphones className="w-4 h-4" /> },
    { label: 'AI Bots & Automation', id: 'ai' as const, icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Software Engineering', id: 'dev' as const, icon: <Cpu className="w-4 h-4" /> },
    { label: 'Contract SLAs & IT Support', id: 'support' as const, icon: <AlertCircle className="w-4 h-4" /> },
  ];

  const faqs = {
    bpo: [
      {
        q: 'How fast can AD Tech Solutions scale up support agent teams for seasonal volume spikes?',
        a: 'We can ramp up support teams from 5 agents to 50+ in under 4 weeks. We pull from our pre-vetted recruiter pipelines in Manila and Bangalore, applying immediate training regimens built around your internal SOP documents.',
      },
      {
        q: 'Do you offer 24/7/365 multi-channel customer support channels?',
        a: 'Yes. We operate around the clock, providing multi-channel customer care across email, live chat, inbound telephone, outbound campaigns, and social media escalations.',
      },
      {
        q: 'What compliance security models does AD Tech Solutions support?',
        a: 'AD Tech Solutions operates out of ISO 27001 audited physical centers. We support strict HIPAA, SOC2 Type II compliance, and PCI-DSS standards for fintech transactional customer support pipelines.',
      },
    ],
    ai: [
      {
        q: 'How long does it take to deploy a custom enterprise LLM chatbot?',
        a: 'A custom chatbot integrated with your corporate knowledgebase can be prototyped in 2 weeks and fully launched to staging within 4 weeks, including extensive Zod parameter safety checks.',
      },
      {
        q: 'Does your AI chatbot automatically pass complex queries to human BPO agents?',
        a: 'Absolutely. We establish smart fallback triggers. If a user asks a complex payment question or expresses sentiment spikes, the bot transparently hands off the full chat transcript history to an active human operator.',
      },
    ],
    dev: [
      {
        q: 'What frontend and mobile software architectures do you specialize in?',
        a: 'We specialize in React 19, TypeScript, Tailwind CSS, Next.js, and Vite for fast web architectures. For mobile projects, we engineer native Swift/Kotlin systems or cross-platform React Native projects.',
      },
      {
        q: 'Do you provide full source code ownership upon contract completion?',
        a: 'Yes. All custom codebases, design assets, and database schemas engineered by AD Tech Solutions are 100% owned by the client upon completion of milestones.',
      },
    ],
    support: [
      {
        q: 'What is your average ticket response SLA guarantee for network operations support?',
        a: 'Our Remote NOC Desk guarantees a Critical Ticket SLA response under 15 minutes, with normal IT employee issues resolved within 2 hours under standard master service agreements.',
      },
      {
        q: 'How are custom quotes and monthly scaling budgets calculated?',
        a: 'Custom quotes are based on active dedicated support headcount hours, software engineering scope complexity, and active API usage thresholds for AI Bots. Use our interactive Quote Builder page to generate an estimate.',
      },
    ],
  };

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* FAQ Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Support Accordion
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Frequently Answered <br />
          <span className="text-gradient-cyan-purple">Operational Inquiries</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Select a category to explore answers relating to global BPO compliance, AI agent training times, software code ownerships, and SLA guarantees.
        </p>
      </section>

      {/* Accordion Layout */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Category Toggles Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3 text-left">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0); // Reset accordion to first item in new cat
              }}
              className={`w-full p-4 rounded-xl border font-bold text-sm transition-all flex items-center gap-3 ${activeCategory === cat.id
                  ? 'bg-white/5 border-highlight-cyan/30 text-white shadow-lg'
                  : 'bg-transparent border-white/5 text-neutral-muted hover:border-white/10 hover:text-white'
                }`}
            >
              <span className={`p-1.5 rounded-lg border ${activeCategory === cat.id ? 'bg-highlight-cyan/10 border-highlight-cyan/20 text-highlight-cyan' : 'bg-white/5 border-white/5 text-neutral-muted'}`}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Accordions Content List */}
        <div className="lg:col-span-8 space-y-4 text-left">
          {faqs[activeCategory].map((faq, idx) => (
            <GlassCard
              key={idx}
              glowColor="none"
              className="p-5 overflow-hidden transition-all duration-300 border-white/10"
            >
              {/* Question Toggler */}
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-between font-bold text-base text-white hover:text-highlight-cyan transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-muted transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-highlight-cyan' : ''}`} />
              </button>

              {/* Answer Expandable Wrapper */}
              <div
                className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIndex === idx ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
              >
                <p className="text-sm text-neutral-muted leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
