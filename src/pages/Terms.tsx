import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { FileText, ShieldAlert, Award, FileCode } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Terms Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Legal Operations
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Terms & Conditions <br />
          <span className="text-gradient-cyan-purple">Master Service Agreement Standards</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          Operational framework parameters, intellectual property ownership, and service level agreement guidelines.
        </p>
      </section>

      {/* Terms Policy Content */}
      <section className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        <GlassCard glowColor="purple" className="p-8 space-y-8 bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4">
            <FileText className="w-6 h-6 text-highlight-purple" />
            <span className="text-xs font-mono font-semibold text-highlight-purple">Last Updated: June 2026</span>
          </div>

          <div className="space-y-6 text-sm text-neutral-muted leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-highlight-purple" /> 1. Operational Services & Scope
              </h3>
              <p>
                AD TECH SOLUTIONS delivers professional custom software development, IT support NOC services, and remote BPO staffing operations. The specific scopes of work, headcount levels, SLA thresholds, and payment milestones are strictly defined in individual Statement of Work (SOW) documents bound to these Master Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-highlight-purple" /> 2. Intellectual Property Rights
              </h3>
              <p>
                Unless stated otherwise in a specific SOW agreement, all design assets, database structures, APIs, and custom software code written specifically for a client by our developers are 100% owned by the client upon full payment of the agreed milestones. AD TECH SOLUTIONS retains ownership of its proprietary pre-built AI agent engines and library foundations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-highlight-purple" /> 3. Service Level Commitments & Liabilities
              </h3>
              <p>
                Our BPO customer support operations target a contractual 97% CSAT average. IT NOC support services operate under active 15-minute response targets for critical server issues. Our liabilities are contractually capped at the fees paid by the client in the 3 months preceding any validated operational dispute.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">4. Termination & Dispute Jurisdiction</h3>
              <p>
                Either party may terminate an active service agreement with a 30-day written notice, subject to outstanding milestone settlement. These Terms are governed by local commercial business laws. Any formal legal disputes will be resolved through arbitration processes prior to pursuing court actions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-4 mt-6">
              <span className="font-bold text-white block text-xs mb-1">Company Notice</span>
              <p className="text-xs text-neutral-muted">
                These terms serve as a standard legal template. These parameters will be updated to reflect final terms when the company supplies their official legal policies.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
