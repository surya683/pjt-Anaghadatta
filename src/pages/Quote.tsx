import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { ArrowRight, ArrowLeft, Check, Sparkles, Cpu, Headphones, Settings, ShieldCheck, Mail, Building, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Quote: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [service, setService] = useState<'bpo' | 'dev' | 'ai' | 'support'>('bpo');
  
  // Parameter states
  const [headcount, setHeadcount] = useState<number>(10);
  const [complexity, setComplexity] = useState<'basic' | 'advanced' | 'enterprise'>('advanced');
  const [botChannels, setBotChannels] = useState<string[]>(['web']);
  
  // User info states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState<number>(25000);
  const [desc, setDesc] = useState('');
  
  // Validation Errors
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});
  const [reportId] = useState(() => Math.floor(100000 + Math.random() * 900000));

  const handleNext = () => {
    if (step === 3) {
      // Validate step 3 fields
      const newErrors: { name?: string; email?: string; company?: string } = {};
      if (!name) newErrors.name = 'Full name is required';
      if (!company) newErrors.company = 'Company name is required';
      if (!email || !email.includes('@')) newErrors.email = 'Valid corporate email is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      
      setErrors({});
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#8B5CF6', '#3B82F6'],
      });
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleChannelToggle = (channel: string) => {
    setBotChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]
    );
  };

  // Calculations for dynamic estimation
  const calculateEstimates = () => {
    let setupCost = 0;
    let monthlyCost = 0;
    let savings = 0;

    if (service === 'bpo') {
      setupCost = 1500 + headcount * 200;
      monthlyCost = headcount * 2800; // Manila/BLR rates
      savings = headcount * 4500; // Savings vs onshore staffing ($7.3k/mo)
    } else if (service === 'dev') {
      const complexityMultiplier = complexity === 'basic' ? 1 : complexity === 'advanced' ? 2.5 : 5;
      setupCost = 8000 * complexityMultiplier;
      monthlyCost = complexity === 'basic' ? 300 : complexity === 'advanced' ? 800 : 2500; // SLA support
      savings = setupCost * 0.4;
    } else if (service === 'ai') {
      const channelCount = botChannels.length;
      setupCost = 5000 + channelCount * 1500;
      monthlyCost = 450 + channelCount * 250;
      savings = 12000; // Projected monthly customer experience (CX) agent cost cuts
    } else if (service === 'support') {
      setupCost = 2500;
      monthlyCost = 3500; // Dedicated support team NOC
      savings = 8000;
    }

    return {
      setup: setupCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
      monthly: monthlyCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
      savings: savings.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
    };
  };

  const estimates = calculateEstimates();

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Quote Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          RFP Estimator
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Interactive Operations <br />
          <span className="text-gradient-cyan-purple">RFP Quote Architect</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Configure your service requirements below. Our calculator instantly processes headcount, complexities, and integration scopes to map financial estimates.
        </p>
      </section>

      {/* Steps Form Wizard */}
      <section className="max-w-3xl mx-auto px-6 relative z-10 text-left">
        {/* Step Indicator Header */}
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <span className="text-xs font-bold text-neutral-muted uppercase tracking-wider">Step {step} of 4</span>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <span
                key={s}
                className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                  s === step
                    ? 'bg-highlight-cyan shadow-md shadow-highlight-cyan/25'
                    : s < step
                    ? 'bg-gradient-to-r from-secondary-blue to-secondary-accent'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: Select service pillar */}
        {step === 1 && (
          <GlassCard glowColor="cyan" className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">Select Your Primary Operational Target</h3>
            <p className="text-xs text-neutral-muted">Which service segment will Anaghadatta Tech Solutions manage or architect for your company?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'bpo' as const, label: 'Global BPO & Call Center', desc: 'Inbound care, telesales, & back-office teams', icon: <Headphones className="w-5 h-5 text-highlight-cyan" /> },
                { id: 'dev' as const, label: 'Software Engineering', desc: 'Bespoke corporate SaaS, apps, & custom systems', icon: <Cpu className="w-5 h-5 text-secondary-accent" /> },
                { id: 'ai' as const, label: 'AI Bots & Automatons', desc: 'LLM knowledge chatbots & workflow cron triggers', icon: <Sparkles className="w-5 h-5 text-highlight-purple" /> },
                { id: 'support' as const, label: 'Technical IT Support NOC', desc: '24/7 remote infrastructure & employee helpdesks', icon: <Settings className="w-5 h-5 text-white" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setService(item.id)}
                  className={`w-full p-5 rounded-xl border text-left flex gap-4 transition-all duration-300 ${
                    service === item.id
                      ? 'bg-white/5 border-highlight-cyan/30 text-white shadow-lg'
                      : 'bg-transparent border-white/5 text-neutral-muted hover:border-white/10 hover:text-white'
                  }`}
                >
                  <span className={`p-2 rounded-lg border shrink-0 ${service === item.id ? 'bg-highlight-cyan/10 border-highlight-cyan/25' : 'bg-white/5 border-white/5'}`}>
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.label}</h4>
                    <p className="text-xs text-neutral-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={handleNext}
                className="group relative bg-gradient-to-r from-secondary-blue to-secondary-accent text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Continue parameters
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-highlight-cyan to-highlight-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </GlassCard>
        )}

        {/* STEP 2: Configure Service Parameters */}
        {step === 2 && (
          <GlassCard glowColor="cyan" className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">Configure Operational Parameters</h3>
            <p className="text-xs text-neutral-muted">Configure the size or complexity parameters for the service model.</p>

            {/* BPO Parameter Slider */}
            {service === 'bpo' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider">Required Dedicated Headcount</label>
                  <span className="font-mono text-base font-extrabold text-highlight-cyan bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-0.5 rounded">
                    {headcount} Agents
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={headcount}
                  onChange={(e) => setHeadcount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-highlight-cyan"
                />
                <div className="flex justify-between text-[10px] text-neutral-muted">
                  <span>5 agents (Start scale)</span>
                  <span>100 agents (Enterprise pod)</span>
                </div>
              </div>
            )}

            {/* Software Dev Complexity Selector */}
            {service === 'dev' && (
              <div className="space-y-4">
                <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider block">Application Complexity Tier</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'basic' as const, label: 'Web Showcase', desc: 'Lighthouse 95+ corporate websites with minimal inputs' },
                    { id: 'advanced' as const, label: 'SaaS / Mobile Portal', desc: 'Complex web dashboard + functional offline mobile app' },
                    { id: 'enterprise' as const, label: 'Legacy Integration', desc: 'Heavy database, multi-API cloud hooks, custom CRM integration' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setComplexity(tier.id)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-full transition-all duration-300 ${
                        complexity === tier.id
                          ? 'bg-white/5 border-highlight-cyan/30 text-white shadow-lg'
                          : 'bg-transparent border-white/5 text-neutral-muted hover:border-white/10'
                      }`}
                    >
                      <h4 className="font-bold text-sm text-white mb-2 uppercase tracking-wide">{tier.label}</h4>
                      <p className="text-[11px] text-neutral-muted leading-relaxed">{tier.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* AI Channels checkboxes */}
            {service === 'ai' && (
              <div className="space-y-4">
                <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider block">Intelligent Chatbot Deployment Channels</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'web', label: 'Corporate Website Widget' },
                    { id: 'whatsapp', label: 'WhatsApp / SMS Webhook' },
                    { id: 'slack', label: 'Slack / Discord Internal' },
                    { id: 'zendesk', label: 'Zendesk / Helpdesk Integration' },
                  ].map((chan) => {
                    const isChecked = botChannels.includes(chan.id);
                    return (
                      <button
                        key={chan.id}
                        onClick={() => handleChannelToggle(chan.id)}
                        className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-white/5 border-highlight-cyan/30 text-white shadow-lg'
                            : 'bg-transparent border-white/5 text-neutral-muted hover:border-white/10'
                        }`}
                      >
                        <span className="text-xs font-bold">{chan.label}</span>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${isChecked ? 'bg-highlight-cyan border-transparent text-white' : 'border-white/10'}`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* IT Support parameters info */}
            {service === 'support' && (
              <div className="bg-white/5 border border-white/5 rounded-xl p-5 text-neutral-muted space-y-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-white/5 pb-2">IT Support Coverage Parameters</span>
                <p className="text-xs leading-relaxed">
                  Remote Infrastructure Monitoring (NOC) support models cover server monitoring, IPsec database VPN tunnels, active Jira employee helpdesks, and emergency SLA responses.
                </p>
                <ul className="space-y-2 text-[11px]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-highlight-cyan shrink-0" /> 15 Min SLA Critical Response Target</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-highlight-cyan shrink-0" /> Unlimited Database Diagnostics</li>
                </ul>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-1 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <button
                onClick={handleNext}
                className="group relative bg-gradient-to-r from-secondary-blue to-secondary-accent text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Input Corporate Info
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-highlight-cyan to-highlight-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </GlassCard>
        )}

        {/* STEP 3: Corporate Info Form */}
        {step === 3 && (
          <GlassCard glowColor="cyan" className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">Corporate Information</h3>
            <p className="text-xs text-neutral-muted">Enter credentials to hash your operational report estimation record.</p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Your Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="E.g. Jane Doe"
                      className={`w-full bg-white/5 border rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all ${
                        errors.name ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-highlight-cyan/50 focus:ring-highlight-cyan/20'
                      }`}
                    />
                    <Building className="w-3.5 h-3.5 text-neutral-muted absolute left-3 top-3.5" />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Company Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="E.g. Acme Corp"
                      className={`w-full bg-white/5 border rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all ${
                        errors.company ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-highlight-cyan/50 focus:ring-highlight-cyan/20'
                      }`}
                    />
                    <Building className="w-3.5 h-3.5 text-neutral-muted absolute left-3 top-3.5" />
                  </div>
                  {errors.company && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.company}</span>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Corporate Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane.doe@company.com"
                    className={`w-full bg-white/5 border rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-highlight-cyan/50 focus:ring-highlight-cyan/20'
                    }`}
                  />
                  <Mail className="w-3.5 h-3.5 text-neutral-muted absolute left-3 top-3.5" />
                </div>
                {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.email}</span>}
              </div>

              {/* Dynamic Budget Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block">Project Budget Allocation</label>
                  <span className="font-mono text-xs font-bold text-highlight-cyan bg-highlight-cyan/10 px-2 py-0.5 rounded border border-highlight-cyan/20">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-highlight-cyan"
                />
              </div>

              {/* Project description */}
              <div>
                <label className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Optional Details & Scope</label>
                <textarea
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="E.g. multi-lingual routing targets, HIPAA cloud credentials needed..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-muted focus:outline-none focus:border-highlight-cyan/50 focus:ring-1 focus:ring-highlight-cyan/20"
                />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-1 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <button
                onClick={handleNext}
                className="group relative bg-gradient-to-r from-secondary-blue to-secondary-accent text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Calculate RFP Estimate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-highlight-cyan to-highlight-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </GlassCard>
        )}

        {/* STEP 4: Render RFP Estimate Report */}
        {step === 4 && (
          <GlassCard glowColor="purple" className="p-8 space-y-6 relative overflow-hidden bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
            {/* Header visual */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">RFP Operations Estimate</h3>
                <span className="text-xs text-highlight-cyan font-mono font-semibold">Report ID: ADT-{reportId}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-highlight-purple/10 border border-highlight-purple/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-highlight-purple" />
              </div>
            </div>

            {/* Corporate Summary */}
            <div className="grid grid-cols-2 gap-4 text-xs text-neutral-muted border-b border-white/5 pb-4">
              <div>
                <span className="block font-bold text-white/50 uppercase tracking-wider text-[10px]">Client Company</span>
                <span className="font-bold text-white text-sm mt-0.5 block">{company || 'Enterprise'}</span>
              </div>
              <div>
                <span className="block font-bold text-white/50 uppercase tracking-wider text-[10px]">Assigned Contact</span>
                <span className="font-bold text-white text-sm mt-0.5 block">{name || 'Client representative'}</span>
              </div>
            </div>

            {/* Estimates Financial breakdown */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block">Financial Framework Estimates</span>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                  <span className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block">Setup & Architecture</span>
                  <span className="text-xl font-extrabold text-white text-gradient-cyan-purple mt-2 block">{estimates.setup}</span>
                  <span className="text-[9px] text-neutral-muted/75 mt-1 block">One-time development</span>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                  <span className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block">Monthly Operations</span>
                  <span className="text-xl font-extrabold text-white text-gradient-cyan-purple mt-2 block">{estimates.monthly}</span>
                  <span className="text-[9px] text-neutral-muted/75 mt-1 block">Headcount & SLA support</span>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                  <span className="text-[10px] font-bold text-neutral-muted uppercase tracking-wider block">Projected Savings</span>
                  <span className="text-xl font-extrabold text-highlight-cyan mt-2 block">{estimates.savings}</span>
                  <span className="text-[9px] text-neutral-muted/75 mt-1 block">Vs onshore staffing models</span>
                </div>
              </div>
            </div>

            {/* Compliance Guarantee */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex gap-3 text-xs text-neutral-muted items-start">
              <ShieldCheck className="w-5 h-5 text-highlight-cyan shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Contractual SLA & Compliance Shield Active</span>
                <p className="text-[11px] mt-1 leading-relaxed">
                  These estimates are framed under master service agreement standards including secure isolated cloud databases, ISO 27001 data center compliances, and dedicated team managers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3.5 rounded-xl font-bold text-xs transition-all"
              >
                Reset Architect
              </button>

              <button
                onClick={() => {
                  confetti({ particleCount: 30, spread: 40 });
                  alert('Thank you! A senior technical director has locked these parameters and will contact you shortly with a formal master service agreement proposal.');
                }}
                className="w-2/3 text-center bg-gradient-to-r from-secondary-blue to-secondary-accent text-white py-3.5 rounded-xl font-bold text-xs transition-all hover:scale-[1.01]"
              >
                Download Formal Proposal
              </button>
            </div>
          </GlassCard>
        )}
      </section>
    </div>
  );
};
