import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Search, Calendar, Clock, ArrowRight, X, BookOpen, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'dev' | 'support' | 'tech'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const categories = [
    { label: 'All Articles', id: 'all' as const },
    { label: 'Artificial Intelligence', id: 'ai' as const },
    { label: 'Software Dev', id: 'dev' as const },
    { label: 'Customer Support', id: 'support' as const },
    { label: 'Tech Infrastructure', id: 'tech' as const },
  ];

  const posts = [
    {
      id: 'llm-bpo',
      category: 'ai',
      categoryLabel: 'Artificial Intelligence',
      title: 'The LLM Paradigm: Integrating Custom Chatbots into Global Call Centers',
      summary: 'Explore how pre-trained LLM models and custom database context reduce human support burdens by up to 60% while maintaining absolute compliance.',
      author: 'Dr. Evelyn Vance',
      date: 'May 28, 2026',
      readTime: '6 Min Read',
      glow: 'purple' as const,
      content: `The integration of Large Language Models (LLMs) into enterprise customer experience pipelines represents the single most significant operational shift of the decade. Traditionally, customer support scaling meant linear staffing growth. Today, intelligent RAG (Retrieval-Augmented Generation) systems enable companies to resolve up to 85% of tier-1 support tickets instantly.

At Anaghadatta Tech Solutions, our LLM chatbot framework incorporates context-aware database lookups that pull from client-validated knowledgebase vaults. By parsing queries through automated safety and validation filters, we ensure that bot responses remain fully compliant under PCI and GDPR guidelines. If sentiment analysis flags a spike in user frustration or a payment question requires human credential access, our system triggers an automated fallback: transparently bridging the full chat history directly to a live Philippine or Indian support agent.

This hybrid orchestration ensures absolute reliability. Companies operating under Anaghadatta Tech Solutions contracts experience an average first-contact resolution (FCR) increase of 30%, coupled with a massive 50% decrease in operational staffing drag over a 12-month cycle.`,
    },
    {
      id: 'react-19-architecture',
      category: 'dev',
      categoryLabel: 'Software Development',
      title: 'Architecting Enterprise Web Portals: What React 19 Means for SaaS Apps',
      summary: 'A detailed look into Vite bundlers, lazy-loading structures, Tailwind configurations, and TypeScript type-safeties to secure Lighthouse 95+ scores.',
      author: 'Sarah Jenkins',
      date: 'May 15, 2026',
      readTime: '8 Min Read',
      glow: 'blue' as const,
      content: `React 19 introduces critical hooks and architectural patterns designed to streamline enterprise SaaS portal layouts. By introducing direct server component compilations and a built-in React compiler, modern frameworks decrease JS bundle sizes, offering instant visual loading times.

To secure a certified 98+/100 Lighthouse performance rating for Anaghadatta Tech Solutions client portals, our software engineering team applies absolute type safety via strict TypeScript boundaries. Combined with Vite lazy-loaded route splitters and the brand-new Tailwind CSS v4 styling rules, our code eliminates redundant styling blocks. 

Tailwind v4's direct CSS configuration layer allows us to declare custom corporate tokens inside a single global @theme stylesheet. This architecture completely prevents post-CSS compilation parsing errors, reducing CSS assets sizes while supporting hardware-accelerated 3D transforms. The final outcome is a secure, responsive, lightning-fast application capable of handling high concurrent traffic spikes without database drops.`,
    },
    {
      id: 'sla-benchmarks',
      category: 'support',
      categoryLabel: 'Customer Support',
      title: 'Operational Support Benchmarks: Crucial Metrics Your Team Lead Should Audit',
      summary: 'How global BPO hubs analyze average speeds of answer (ASA), first contact resolutions (FCR), and supervisor QA pipelines to hit contract targets.',
      author: 'Marcus Chen',
      date: 'Apr 29, 2026',
      readTime: '5 Min Read',
      glow: 'cyan' as const,
      content: `Maintaining high-performance global call center operations requires continuous data auditing. Without strict metric baselines, support teams face operational drift, long wait times, and degraded customer satisfaction.

Every professional BPO supervisor at Anaghadatta Tech Solutions tracks three core pillars:
1. **Average Speed of Answer (ASA)**: Our targets demand an answer latency below 45 seconds for telephone queues, and under 30 seconds for live webchats.
2. **First Contact Resolution (FCR)**: Resolving customer queries during the initial touchpoint completely eliminates redundant ticket loads, cutting costs.
3. **Quality Assurance Score (QA)**: Weekly audio call audits evaluated by automated scoring models to ensure compliance.

By coaching agents in Manila and Bangalore under standard scripts while leveraging instant AI assist widgets, Anaghadatta Tech Solutions consistently achieves a verified 97.2% CSAT average. This contractual accountability is backed by live operational dashboard access provided directly to client executives.`,
    },
    {
      id: 'secure-vpn-tunnels',
      category: 'tech',
      categoryLabel: 'Tech Infrastructure',
      title: 'Securing Decentralized Networks: Configuring Secure IPsec VPN Tunnels',
      summary: 'Practical configuration walkthroughs for remote NOC technicians establishing secure cloud database access paths for global support pods.',
      author: 'Alex Mercer (Lead NetOps)',
      date: 'Apr 12, 2026',
      readTime: '10 Min Read',
      glow: 'none' as const,
      content: `Operating a decentralized BPO workforce requires absolute corporate compliance and strict security shielding. Establishing secure site-to-site tunnels ensures that remote Philippine and Indian helpdesk agents can access cloud databases without exposing ports to public scans.

We mandate the configuration of IPsec VPN tunnels with advanced AES-256 encryption keys and SHA-256 integrity checkers. By isolating support pods within dedicated virtual private clouds (VPCs) and binding connections through audited firewalls, public vectors are eliminated.

Our Network Operations Center (NOC) monitors active tunnels 24/7/365 using automated Nagios health diagnostics. If a database packet drop or latency increase occurs, systems automatically trigger redundant secondary routes, maintaining a contracted 99.99% network uptime SLA.`,
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Blog Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Corporate Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Anaghadatta Tech Solutions Knowledgebase & <br />
          <span className="text-gradient-cyan-purple">Operational Dispatches</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Deep-dives into AI chatbot deployment, software scaling architectures, back-office compliance parameters, and remote helpdesk benchmarks.
        </p>
      </section>

      {/* Search & Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <input
            type="text"
            placeholder="Search articles by title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-muted focus:outline-none focus:border-highlight-cyan/50 focus:ring-1 focus:ring-highlight-cyan/20 transition-all"
          />
          <Search className="w-4 h-4 text-neutral-muted absolute left-3.5 top-3.5" />
        </div>

        {/* Categories toggler */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all ${
                activeCategory === cat.id
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-transparent border-white/5 text-neutral-muted hover:text-white hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mb-16 text-left">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <GlassCard
              key={post.id}
              glowColor={post.glow}
              onClick={() => setSelectedPost(post)}
              className="p-8 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-neutral-muted mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-highlight-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-neutral-muted leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Author & Read button */}
              <div className="border-t border-white/5 pt-6 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-xs uppercase">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-xs text-white font-medium">{post.author}</span>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid triggering card onClick twice
                    setSelectedPost(post);
                  }}
                  className="flex items-center gap-1 text-xs font-bold text-highlight-cyan group-hover:underline cursor-pointer"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </GlassCard>
          ))
        ) : (
          <GlassCard glowColor="none" className="p-12 col-span-2 text-center text-neutral-muted">
            No insights articles match your query. Try a different search query.
          </GlassCard>
        )}
      </section>

      {/* ARTICLE READER MODAL (WORKING ARTICLE PREVIEW!) */}
      {selectedPost && (
        <div className="fixed inset-0 bg-[#0F172A]/85 backdrop-blur-xl z-[100] flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-[#111827] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-highlight-cyan">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-highlight-cyan uppercase tracking-wider bg-highlight-cyan/10 border border-highlight-cyan/20 px-2 py-0.5 rounded-full">
                    {selectedPost.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-muted ml-3">{selectedPost.date}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-muted hover:text-white hover:border-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6 text-left font-sans">
              <h2 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                {selectedPost.title}
              </h2>

              {/* Author & Read Time block */}
              <div className="flex items-center justify-between border-y border-white/5 py-3 text-xs text-neutral-muted">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-highlight-cyan" />
                  <span>By <strong className="text-white font-medium">{selectedPost.author}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-highlight-purple" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Dynamic Paragraph render */}
              <div className="space-y-4 text-sm text-neutral-muted leading-relaxed">
                {selectedPost.content.split('\n\n').map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
