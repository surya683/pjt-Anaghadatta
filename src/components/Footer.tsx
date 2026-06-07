import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      };
      setLocalTime(now.toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate submission
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#06B6D4', '#3B82F6', '#8B5CF6'],
    });
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0F172A] border-t border-white/5 relative z-10 pt-16 pb-8 overflow-hidden">
      {/* Decorative Blur glow */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-highlight-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-highlight-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-tr from-secondary-blue to-highlight-cyan rounded flex items-center justify-center shadow-md">
              <span className="font-extrabold text-white text-base">A</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white">AD TECH SOLUTIONS</span>
          </div>
          <p className="text-sm text-neutral-muted leading-relaxed">
            Enterprise-grade IT consulting, multi-channel BPO operations, and cutting-edge artificial intelligence automation systems. Scaling organizations globally.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-muted hover:text-highlight-cyan hover:border-highlight-cyan/30 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-muted hover:text-highlight-cyan hover:border-highlight-cyan/30 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-muted hover:text-highlight-cyan hover:border-highlight-cyan/30 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-6">Service Pillars</h4>
          <ul className="space-y-3 text-sm text-neutral-muted">
            <li className="hover:text-highlight-cyan transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>BPO Solutions</li>
            <li className="hover:text-highlight-cyan transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>Software Engineering</li>
            <li className="hover:text-highlight-cyan transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>AI Agent & Bot Integration</li>
            <li className="hover:text-highlight-cyan transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>Enterprise Infrastructure IT</li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-6">HQ Operations</h4>
          <ul className="space-y-4 text-sm text-neutral-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-highlight-cyan shrink-0 mt-0.5" />
              <span>Plot No. 12, HITEC City, Hyderabad, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-highlight-cyan shrink-0" />
              <span>+1 (800) 555-0190</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-highlight-cyan shrink-0" />
              <span>operations@adtechsolutions.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-highlight-purple shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] text-neutral-muted/75 font-semibold uppercase tracking-wider">Live Local Time</span>
                <span className="font-mono text-xs text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded mt-0.5 shadow-inner">
                  {localTime || 'Loading...'}
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-6">Insights Dispatch</h4>
          <p className="text-sm text-neutral-muted mb-4 leading-relaxed">
            Subscribe to our weekly dispatch covering AI automation patterns, IT management benchmarks, and call center scaling metrics.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Enter corporate email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-muted focus:outline-none focus:border-highlight-cyan/50 focus:ring-1 focus:ring-highlight-cyan/20 transition-all"
            />
            <button
              type="submit"
              disabled={submitted}
              className="absolute right-2 top-2 p-1.5 rounded-lg bg-gradient-to-r from-secondary-blue to-secondary-accent text-white hover:scale-105 active:scale-95 transition-all shadow-md shadow-secondary-blue/10 flex items-center justify-center"
            >
              {submitted ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
          {submitted && (
            <p className="text-xs text-highlight-cyan font-semibold mt-2 animate-fade-in">
              Success! You have subscribed.
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-muted relative z-10">
        <div>
          © {new Date().getFullYear()} AD Tech Solutions Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-white transition-colors cursor-pointer" onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer" onClick={() => { setCurrentPage('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};
