import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="relative w-full pt-24 pb-16">
      {/* Privacy Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-left relative z-10 animate-fade-up">
        <span className="text-xs font-bold text-highlight-cyan uppercase tracking-widest bg-highlight-cyan/10 border border-highlight-cyan/20 px-3 py-1 rounded-full w-fit mb-4 block">
          Legal Operations
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Privacy Policy <br />
          <span className="text-gradient-cyan-purple">Data Governance & Protection</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-muted max-w-3xl leading-relaxed">
          At AD TECH SOLUTIONS, we enforce strict compliance, secure data transmission, and transparent logging practices. Review our standard privacy parameters below.
        </p>
      </section>

      {/* Privacy Policy Content */}
      <section className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        <GlassCard glowColor="cyan" className="p-8 space-y-8 bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4">
            <Shield className="w-6 h-6 text-highlight-cyan" />
            <span className="text-xs font-mono font-semibold text-highlight-cyan">Last Updated: June 2026</span>
          </div>

          <div className="space-y-6 text-sm text-neutral-muted leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-highlight-cyan" /> 1. Data Collection & Processing Scope
              </h3>
              <p>
                We collect corporate information submitted through our Request for Proposal (RFP) estimator, including names, company names, corporate email addresses, and project budget allocations. Additionally, technical telemetry data (such as IP addresses and browser headers) is securely logged to maintain network security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-highlight-cyan" /> 2. Security & Compliance Shield
              </h3>
              <p>
                All user and corporate data is hosted in ISO 27001 certified physical data centers. We implement active AES-256 encryption for data at rest and TLS 1.3 parameters for data in transit. Access to sensitive diagnostic records is strictly restricted to authorized corporate technicians under strict NDA policies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-highlight-cyan" /> 3. Data Retention & Third-Party Disclosure
              </h3>
              <p>
                We do not sell, rent, or lease corporate inquiry lists to third parties. Telemetry data is retained for a maximum of 90 days to satisfy server health monitoring requirements. Client database records and source code assets developed under contract are fully segregated to avoid cross-contamination.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">4. Your Regulatory Rights</h3>
              <p>
                Depending on your operational jurisdiction (including GDPR in Europe or CCPA/CPRA in California), you possess rights to inspect, update, or request the permanent deletion of your archived data. To exercise these privileges, contact our corporate desk at <a href="mailto:operations@adtechsolutions.com" className="text-highlight-cyan hover:underline">operations@adtechsolutions.com</a>.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-4 mt-6">
              <span className="font-bold text-white block text-xs mb-1">Company Notice</span>
              <p className="text-xs text-neutral-muted">
                This document serves as a standard legal placeholder. The operational definitions and compliance policies will be updated immediately upon receipt of official guidelines from the company's legal board.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
