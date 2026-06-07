import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Code, Headphones, Settings, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    setMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services', hasMega: true },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Blog', id: 'blog' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/70 backdrop-blur-lg border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative w-9 h-9 bg-gradient-to-tr from-secondary-blue to-highlight-cyan rounded-lg flex items-center justify-center overflow-hidden shadow-lg shadow-secondary-blue/20">
            <span className="font-extrabold text-white text-lg">A</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-highlight-cyan transition-colors">
            AD TECH SOLUTIONS
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative group/menu">
              {item.hasMega ? (
                <button
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`flex items-center gap-1 font-medium text-sm transition-colors py-2 ${
                    currentPage === item.id || megaMenuOpen
                      ? 'text-highlight-cyan'
                      : 'text-neutral-muted hover:text-white'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium text-sm transition-colors py-2 relative ${
                    currentPage === item.id
                      ? 'text-white'
                      : 'text-neutral-muted hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-highlight-cyan to-secondary-accent rounded-full" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('quote')}
            className="relative overflow-hidden group bg-gradient-to-r from-secondary-blue to-secondary-accent text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-secondary-blue/10 hover:shadow-secondary-blue/30 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-highlight-cyan to-highlight-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-highlight-cyan transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Services Mega Menu (Desktop dropdown overlay) */}
      {megaMenuOpen && (
        <div
          onMouseLeave={() => setMegaMenuOpen(false)}
          className="hidden lg:block absolute left-0 top-full w-full bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl py-8 animate-scale-in"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
            <div className="border-r border-white/5 pr-6">
              <div className="flex items-center gap-2 mb-3 text-highlight-cyan">
                <Headphones className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider">BPO</h4>
              </div>
              <p className="text-xs text-neutral-muted mb-4">Enterprise Inbound, Outbound sales, and multi-channel customer operations.</p>
              <ul className="space-y-2 text-sm text-neutral-muted">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Customer Support</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Help Desk & Ticketing</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Outbound Operations</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Back Office Support</li>
              </ul>
            </div>

            <div className="border-r border-white/5 pr-6">
              <div className="flex items-center gap-2 mb-3 text-secondary-accent">
                <Code className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider">Software Dev</h4>
              </div>
              <p className="text-xs text-neutral-muted mb-4">End-to-end web architectures, responsive interfaces, and custom mobile apps.</p>
              <ul className="space-y-2 text-sm text-neutral-muted">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Web Application Dev</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Website Engineering</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Mobile App Engineering</li>
              </ul>
            </div>

            <div className="border-r border-white/5 pr-6">
              <div className="flex items-center gap-2 mb-3 text-highlight-purple">
                <Sparkles className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider">AI & Automation</h4>
              </div>
              <p className="text-xs text-neutral-muted mb-4">Transform operational bottlenecks with intelligent systems & bots.</p>
              <ul className="space-y-2 text-sm text-neutral-muted">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>AI Chatbot Development</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Intelligent Assistant Systems</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Business Automation</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-white">
                <Settings className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider">Technical Support</h4>
              </div>
              <p className="text-xs text-neutral-muted mb-4">Reliable IT operations management and server health diagnostics.</p>
              <ul className="space-y-2 text-sm text-neutral-muted">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Infrastructure Support</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>Cloud Support Desk</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('services')}>System Diagnostics</li>
              </ul>
              <button
                onClick={() => handleNavClick('services')}
                className="mt-6 flex items-center gap-1 text-xs font-bold text-highlight-cyan hover:underline"
              >
                View Services Catalog <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] ios-glass z-40 p-6 flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-semibold py-2 border-b border-white/5 ${
                  currentPage === item.id ? 'text-highlight-cyan' : 'text-neutral-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('quote')}
            className="w-full text-center bg-gradient-to-r from-secondary-blue to-secondary-accent text-white py-3 rounded-xl font-bold text-base shadow-lg shadow-secondary-blue/10 mt-auto"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};
