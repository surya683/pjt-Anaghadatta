import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { ArrowUpRight, Check, X, Cpu, Headphones, Settings, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  category: string;
  icon: React.ReactNode;
  title: string;
  client: string;
  summary: string;
  metricValue: string;
  metricLabel: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  accent: 'cyan' | 'blue' | 'purple' | 'none';
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bpo' | 'dev' | 'ai' | 'support'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', id: 'all' as const },
    { label: 'BPO Solutions', id: 'bpo' as const },
    { label: 'Software Dev', id: 'dev' as const },
    { label: 'AI Automation', id: 'ai' as const },
    { label: 'IT Support', id: 'support' as const },
  ];

  const projects = [
    {
      id: 'zenith-bpo',
      category: 'bpo',
      icon: <Headphones className="w-5 h-5 text-highlight-cyan" />,
      title: 'Zenith E-Commerce Multi-Channel Support',
      client: 'Zenith Retail Group',
      summary: 'Scaled a global customer support team from 5 to 80 agents in 4 months, maintaining massive transaction flows.',
      metricValue: '45% Cost Cut',
      metricLabel: 'Operational Savings achieved',
      problem: 'Zenith experienced 300% order volume spikes during winter sales, leading to 15-minute wait times and abandoned carts.',
      solution: 'We deployed a hybrid workforce model out of Manila, integrated customized Zendesk workflows, and built instant chat response scripts.',
      results: [
        'Guaranteed average answer time dropped to under 28 seconds.',
        'Customer satisfaction (CSAT) score rose to 97.2%.',
        'Handled over 140,000 queries monthly without backlogs.',
      ],
      tech: ['Zendesk Suite', 'SIP Call Routing', 'Speech QA Tools'],
      accent: 'cyan' as const,
    },
    {
      id: 'nova-fintech',
      category: 'dev',
      icon: <Cpu className="w-5 h-5 text-secondary-accent" />,
      title: 'Nova Wealth React SaaS & Mobile App',
      client: 'Nova Fintech LLC',
      summary: 'Engineered a modern banking web portal and React Native iOS/Android app with offline capabilities and premium animations.',
      metricValue: '1.2M Users',
      metricLabel: 'Active monthly application hits',
      problem: 'Nova legacy portal was slow, failing under high traffic concurrent loads, and lacked a unified codebase for iOS and Android.',
      solution: 'We engineered a unified TypeScript repository using React Native and Next.js, with cloud caching structures to resist massive loads.',
      results: [
        'Lighthouse performance scores reached a verified 98/100.',
        'Unified core logic decreased development costs by 40%.',
        'Bank-grade offline encryption triggers configured.',
      ],
      tech: ['React Native', 'Next.js', 'Tailwind CSS', 'AWS Serverless'],
      accent: 'blue' as const,
    },
    {
      id: 'helios-ai',
      category: 'ai',
      icon: <Sparkles className="w-5 h-5 text-highlight-purple" />,
      title: 'Helios Logistics Intelligent Manifesto Audit',
      client: 'Helios Logistics Global',
      summary: 'Deployed custom AI document parsers and LLM routing agents to automatically process international customs documents.',
      metricValue: '90% Speedup',
      metricLabel: 'Document validation times slashed',
      problem: 'Manifest audits were done manually by specialists, taking 24 hours per container ship and creating massive port delays.',
      solution: 'We engineered a custom document parser using structured LLM schemas to extract manifests, run validation checks, and alert officers.',
      results: [
        'Parsing time plummeted from 24 hours to 4 minutes.',
        'Operational ingestion errors fell below 0.05%.',
        'Automatic routing directly mapped to port databases.',
      ],
      tech: ['Python LLM Models', 'Zod Schema Validation', 'Docker', 'FastAPI'],
      accent: 'purple' as const,
    },
    {
      id: 'vanguard-support',
      category: 'support',
      icon: <Settings className="w-5 h-5 text-white" />,
      title: 'Vanguard Global Remote Network Support',
      client: 'Vanguard Insurance Partners',
      summary: 'Organized and managed comprehensive infrastructure support desks and secure network tunnels across 4 global offices.',
      metricValue: '99.99% Uptime',
      metricLabel: 'Corporate server infrastructure',
      problem: 'Vanguard lacked a dedicated network operations center, facing database dropouts and slow employee resolution desks.',
      solution: 'Established a 24/7 Remote Monitoring and Network Operations Desk (NOC) using secure IPsec VPN layouts and immediate response SLA protocols.',
      results: [
        'Average resolution ticket speeds fell below 12 minutes.',
        'Secured absolute corporate IP shielding against port scanning.',
        'Zero unplanned database system dropouts over 12 months.',
      ],
      tech: ['IPsec Tunnels', 'Nagios Monitoring', 'Jira Support Desk', 'Linux Server Admin'],
      accent: 'none' as const,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Portfolio Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Enterprise Deployments
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Proven Success Cases <br />
          <span className="text-gradient-cyan-purple">Under Contract SLAs</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Explore real-world case studies detailing how AD Tech Solutions software frameworks, customer support teams, and AI bots drive tangible efficiency improvements for clients.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10 overflow-x-auto no-scrollbar flex">
        <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 gap-2 backdrop-blur-md">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-secondary-blue to-secondary-accent text-white shadow-lg'
                  : 'text-neutral-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {filteredProjects.map((project) => (
          <GlassCard
            key={project.id}
            glowColor={project.accent}
            className="flex flex-col justify-between h-full group text-left p-8"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {project.icon}
                </div>
                <span className="text-[11px] font-bold text-highlight-cyan uppercase tracking-wider bg-highlight-cyan/10 border border-highlight-cyan/20 px-2.5 py-0.5 rounded-full">
                  {project.client}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-highlight-cyan transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-neutral-muted leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Metrics highlight block inside card */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-5 mb-6 flex items-center gap-4">
                <div className="shrink-0">
                  <span className="text-2xl font-extrabold text-white text-gradient-cyan-purple">{project.metricValue}</span>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <span className="text-xs text-neutral-muted block leading-relaxed">{project.metricLabel}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-gradient-to-r hover:from-secondary-blue hover:to-secondary-accent hover:border-transparent text-white font-semibold text-xs transition-all duration-300"
            >
              Analyze Case Study <ArrowUpRight className="w-4 h-4" />
            </button>
          </GlassCard>
        ))}
      </section>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#0F172A]/85 backdrop-blur-xl z-[100] flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-[#111827] border border-white/10 rounded-2xl w-full max-w-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">{selectedProject.title}</h3>
                  <span className="text-xs text-neutral-muted">{selectedProject.client}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-muted hover:text-white hover:border-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6 text-left">
              {/* Stat callout in modal */}
              <div className="bg-gradient-to-r from-secondary-blue/10 to-highlight-cyan/10 border border-secondary-blue/20 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-muted uppercase tracking-wider block">Verified Outcome</span>
                  <span className="text-2xl font-extrabold text-white text-gradient-cyan-purple mt-1 block">{selectedProject.metricValue}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-muted">{selectedProject.metricLabel}</span>
                </div>
              </div>

              {/* Case Study breakdown grid */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-highlight-cyan uppercase tracking-wider mb-1.5">Business Challenge</h4>
                  <p className="text-sm text-neutral-muted leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-secondary-accent uppercase tracking-wider mb-1.5">Deployed Solution</h4>
                  <p className="text-sm text-neutral-muted leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-highlight-purple uppercase tracking-wider mb-3">Key Results & Outcomes</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((r: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-muted">
                        <Check className="w-4.5 h-4.5 text-highlight-cyan shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack tags */}
              <div className="border-t border-white/5 pt-6">
                <span className="text-xs font-bold text-neutral-muted uppercase tracking-wider block mb-3">Technological Stack</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string, idx: number) => (
                    <span key={idx} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all border border-white/10"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
