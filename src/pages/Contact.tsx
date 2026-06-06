import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Mail, Phone, MapPin, Send, Check, Bot, ArrowRight, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  // Contact Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [service, setService] = useState('bpo');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; msg?: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Chat Simulator states
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hello! I am Anaghadatta Tech Solutions AI. How can I assist you with our operational services today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [botTyping, setBotTyping] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; msg?: string } = {};
    if (!name) errors.name = 'Full name is required';
    if (!email || !email.includes('@')) errors.email = 'Valid corporate email is required';
    if (!msg || msg.length < 10) errors.msg = 'Message must be at least 10 characters';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06B6D4', '#8B5CF6', '#3B82F6'],
    });

    setTimeout(() => {
      setName('');
      setEmail('');
      setMsg('');
      setFormSubmitted(false);
    }, 5000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');
    setBotTyping(true);

    setTimeout(() => {
      let botResponse = 'Thank you for reaching out. A human account representative will analyze your query and contact you within 15 minutes.';
      
      const lowerText = userText.toLowerCase();
      if (lowerText.includes('bpo') || lowerText.includes('call center')) {
        botResponse = 'Our global BPO teams operate out of Manila and Bangalore. We provide Tier-1 and Tier-2 support with average speed of answers under 45 seconds under master service contracts.';
      } else if (lowerText.includes('pricing') || lowerText.includes('cost')) {
        botResponse = 'Our pricing models are completely custom and SLA-bound. Check out our Get a Quote page for immediate operations pricing estimations!';
      } else if (lowerText.includes('ai') || lowerText.includes('bot')) {
        botResponse = 'We deploy pre-trained LLM customer assistants integrated with Zendesk / Jira. Prototyping takes 2 weeks, and we guarantee 100% automated fallback options.';
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setBotTyping(false);
    }, 1200);
  };

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Contact Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Corporate Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Connect with Our <br />
          <span className="text-gradient-cyan-purple">Enterprise Directors</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Submit a secure operational RFP or chat instantly with our custom AI consultant to map response parameters.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Contact Form & Info Column */}
        <div className="lg:col-span-7 space-y-8">
          <GlassCard glowColor="cyan" className="p-8 text-left border-white/10 relative overflow-hidden">
            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center gap-6">
                <div className="w-12 h-12 bg-highlight-cyan/10 border border-highlight-cyan/30 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-highlight-cyan" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">RFP Message Hashed & Transmitted</h3>
                  <p className="text-xs text-neutral-muted max-w-md leading-relaxed">
                    Success, **{name}**! Your corporate inquiry has been encrypted and logged. A technical consultant has been assigned and will email you at **{email}** within 15 minutes.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-4">Submit Security RFP / Corporate Inquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Corporate Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-muted focus:outline-none focus:ring-1 transition-all ${
                        formErrors.name ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-highlight-cyan/50 focus:ring-highlight-cyan/20'
                      }`}
                    />
                    {formErrors.name && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{formErrors.name}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Business Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane.doe@company.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-muted focus:outline-none focus:ring-1 transition-all ${
                        formErrors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-highlight-cyan/50 focus:ring-highlight-cyan/20'
                      }`}
                    />
                    {formErrors.email && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{formErrors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Operational Segment</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-highlight-cyan/50 focus:ring-1 focus:ring-highlight-cyan/20"
                  >
                    <option value="bpo">BPO Customer Care Channels</option>
                    <option value="dev">Software Development (Web/Mobile)</option>
                    <option value="ai">AI Bot Integration & Automation</option>
                    <option value="support">Remote IT Helpdesk</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider block mb-1.5">Detailed Operational Requirements</label>
                  <textarea
                    rows={4}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Describe your active team scale, database connectivity needs, or software targets..."
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-muted focus:outline-none focus:ring-1 transition-all ${
                      formErrors.msg ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-highlight-cyan/50 focus:ring-highlight-cyan/20'
                    }`}
                  />
                  {formErrors.msg && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{formErrors.msg}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full text-center bg-gradient-to-r from-secondary-blue to-secondary-accent text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-1.5"
                >
                  Transmit Secure RFP <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </GlassCard>

          {/* Quick info buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: <MapPin className="text-highlight-cyan" />, label: 'San Francisco HQ', desc: '100 Enterprise Way, Suite 400' },
              { icon: <Phone className="text-highlight-purple" />, label: 'Toll-Free Operations', desc: '+1 (800) 555-0190' },
              { icon: <Mail className="text-secondary-accent" />, label: 'Corporate Desk', desc: 'operations@anaghadatta.com' },
            ].map((info, idx) => (
              <GlassCard key={idx} glowColor="none" className="p-5 flex flex-col justify-center text-left">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                  {info.icon}
                </div>
                <span className="font-bold text-xs text-white block mb-0.5">{info.label}</span>
                <span className="text-[10px] text-neutral-muted leading-relaxed">{info.desc}</span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* AI Chat Simulator Column */}
        <div className="lg:col-span-5 flex flex-col h-[520px]">
          <GlassCard glowColor="purple" className="p-0 border-white/10 flex flex-col h-full overflow-hidden text-left bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/5 flex items-center gap-2.5 bg-white/[0.01]">
              <div className="w-8 h-8 rounded-full bg-highlight-purple/10 border border-highlight-purple/20 flex items-center justify-center shrink-0">
                <Bot className="w-4.5 h-4.5 text-highlight-purple" />
              </div>
              <div>
                <span className="font-bold text-sm text-white block">Anaghadatta Tech Solutions AI Consultant</span>
                <span className="text-[10px] text-highlight-cyan font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight-cyan animate-pulse" />
                  Live Operational Bot
                </span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-xs">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                    m.sender === 'user' ? 'bg-white/5 border-white/10 text-white' : 'bg-highlight-purple/10 border-highlight-purple/20 text-highlight-purple'
                  }`}>
                    {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`rounded-2xl p-3 leading-relaxed border ${
                    m.sender === 'user' 
                      ? 'bg-secondary-blue/10 border-secondary-blue/20 text-white rounded-tr-none' 
                      : 'bg-white/5 border-white/5 text-neutral-muted rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {botTyping && (
                <div className="flex items-center gap-2 max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-highlight-purple/10 border border-highlight-purple/20 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-highlight-purple" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-neutral-muted rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-neutral-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 bg-neutral-muted rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/5 bg-white/[0.01] flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={botTyping}
                placeholder="Ask about BPO SLAs, Pricing, or AI..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-muted focus:outline-none focus:border-highlight-purple/50 focus:ring-1 focus:ring-highlight-purple/20"
              />
              <button
                type="submit"
                disabled={botTyping}
                className="bg-highlight-purple hover:scale-105 active:scale-95 transition-all text-white p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-highlight-purple/10"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
