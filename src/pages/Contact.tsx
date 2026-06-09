import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  // Contact Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [service, setService] = useState('bpo');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; msg?: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Contact Header */}
      <section className="max-w-3xl mx-auto px-6 mb-12 text-center flex flex-col items-center relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Corporate Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Connect with Our <br />
          <span className="text-gradient-cyan-purple">Enterprise Directors</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-2xl leading-relaxed">
          Submit a secure operational RFP to begin designing your enterprise solution.
        </p>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="space-y-8 animate-fade-up">
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
              { icon: <MapPin className="text-highlight-cyan" />, label: 'Hyderabad HQ', desc: 'Plot No. 12, HITEC City, Hyderabad, India' },
              { icon: <Phone className="text-highlight-purple" />, label: 'Toll-Free Operations', desc: '+1 (800) 555-0190' },
              { icon: <Mail className="text-secondary-accent" />, label: 'Corporate Desk', desc: 'operations@adtechsolutions.com' },
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
      </section>
    </div>
  );
};
