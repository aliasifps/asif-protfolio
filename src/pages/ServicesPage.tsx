import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  FileText, 
  BarChart2, 
  Code,
  DollarSign
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { PageId, ServicePackage } from '../types';
import { formatINR } from '../utils/formatters';

interface ServicesPageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
  onSelectServicePackage: (pkg: ServicePackage) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  darkMode,
  onNavigate,
  onSelectServicePackage
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const extendedPackages: (ServicePackage & { enterprise?: boolean })[] = [
    ...SERVICES_DATA,
    {
      id: "enterprise-growth-architecture",
      title: "Omnichannel Enterprise Growth & AI Pipeline",
      tagline: "Custom Architecture for Multi-Brand & High-Volume Scale",
      price: 149999,
      billingPeriod: "per month",
      badge: "Enterprise Custom",
      description: "Dedicated enterprise growth engine combining high-frequency AI creative generation (24+ ads/mo), bespoke 3D CGI product animation, full-funnel media buying across Meta, Google & TikTok, and server-side signal pipelines.",
      features: [
        "24+ Custom 4K AI Video Commercials & Motion Cutdowns per month",
        "Dedicated Media Buying across Meta, Google PMax, YouTube & TikTok",
        "Custom Cloud Server CAPI Signal Bridge & 99% Event Match Quality",
        "Bi-weekly Strategy Masterminds with Ali Asif P S",
        "Priority 48-Hour Creative Turnaround & Unlimited Hook Tweaks",
        "Custom Looker Studio Omnichannel Business Intelligence Hub"
      ],
      deliverables: [
        "24 Ultra-HD Master Creatives",
        "72 Dynamic Hook & Copy Matrix Iterations",
        "Dedicated Senior Media Buyer & AI Prompt Engineer"
      ],
      turnaroundTime: "Priority 48-72h Turnaround",
      idealFor: "High-growth D2C brands, venture-backed tech companies, and enterprise retailers spending ₹10L - ₹1 Cr/mo.",
      accentColor: "border-[#D4AF37]/50 shadow-[#D4AF37]/10 text-[#D4AF37]",
      enterprise: true
    }
  ];

  const comparisonFeatures = [
    { name: '4K AI Video Creatives / Mo', aiVideo: '12 Creatives', fullStack: 'Unlimited Tests', commercial3d: '1 Hero + 3 Cuts', enterprise: '24+ Master Ads' },
    { name: 'Paid Media Buying (Meta & Google)', aiVideo: 'Creative Only', fullStack: 'Full Active Buying', commercial3d: 'Add-on Available', enterprise: 'Full Multi-Channel' },
    { name: 'Ad Hook Split-Testing Matrix', aiVideo: '36 Hooks/mo', fullStack: 'Daily Iterations', commercial3d: '3 Hooks', enterprise: '72+ Hooks/mo' },
    { name: 'Server-Side CAPI Tracking Setup', aiVideo: 'Guidance only', fullStack: 'Included & Managed', commercial3d: 'N/A', enterprise: 'Custom Cloud CAPI' },
    { name: 'Shopify / Funnel CRO Audits', aiVideo: 'Basic Advice', fullStack: 'Bi-Weekly Sprints', commercial3d: 'Page Banner Assets', enterprise: 'Continuous Testing' },
    { name: 'Turnaround SLA', aiVideo: '3-5 Business Days', fullStack: 'Daily Management', commercial3d: '7-10 Days', enterprise: 'Priority 48h SLA' },
    { name: 'Direct WhatsApp/Slack Access', aiVideo: 'Standard Support', fullStack: 'Direct with Asif', commercial3d: 'Project Channel', enterprise: 'VIP 24/7 Dedicated' },
    { name: 'GST Invoice & Compliance', aiVideo: 'Yes (18% GST)', fullStack: 'Yes (18% GST)', commercial3d: 'Yes (18% GST)', enterprise: 'Yes (18% GST)' }
  ];

  const faqs = [
    {
      q: "How does the AI Video Ads production workflow operate?",
      a: "After you submit your brief, we review your brand assets, target persona, and competitor ad libraries. Within 48 hours, we generate dynamic scripts and hook angles. Once approved, our AI rendering pipeline (Runway Gen-3, Midjourney v6, ElevenLabs, and After Effects) produces 12 finished 4K video ads ready to upload into your Ads Manager."
    },
    {
      q: "Are all prices in Indian Rupee (INR ₹) and is GST invoicing available?",
      a: "Yes! All prices listed on this site are in INR ₹ and we provide official GST-compliant tax invoices for Indian registered companies. International clients can also pay via Stripe, Wire Transfer, or PayPal in equivalent USD/EUR."
    },
    {
      q: "Do you require long-term contracts?",
      a: "No lock-in contracts. Our retainers operate on a rolling 30-day basis. We earn your business every month through tangible ROAS, low acquisition costs, and high-converting creative volume."
    },
    {
      q: "Who manages the actual ad spend and accounts?",
      a: "Under the Full-Stack Performance and Enterprise tiers, Ali Asif P S directly manages your Meta Ads Manager and Google Ads accounts. You retain 100% account ownership and pay ad spend directly to the advertising platforms."
    },
    {
      q: "What makes your AI video ads outperform traditional agency shoots?",
      a: "Traditional agencies take 4 weeks and ₹2,00,000+ for a single video shoot. If that angle fails, your ad spend tanks. Our AI testing engine allows us to deploy 12-24 distinct visual hypotheses and psychological hooks weekly at a fraction of the cost, finding winning angles exponentially faster."
    }
  ];

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'}`}>
      
      {/* SECTION 1: Services Hero & Strategic Positioning */}
      <section className={`relative pt-32 pb-20 overflow-hidden border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold mb-4 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Zap className="w-3.5 h-3.5" />
            <span>Clear, Predictable Retainer Packages in INR ₹</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            High-ROAS Growth Retainers
          </h1>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Select a specialized creative testing engine or complete full-stack performance media management. Transparent pricing, no lock-in contracts, and direct strategy access to <strong>Ali Asif P S</strong>.
          </p>

          <div className={`mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
            <span className="flex items-center gap-2">
              <CheckCircle2 className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              Rolling 30-Day Retainers
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              100% Raw Creative Ownership
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              GST Invoices for Indian Businesses
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Retainer Packages Matrix in INR */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {extendedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                pkg.popular
                  ? darkMode
                    ? 'border-[#D4AF37] bg-gradient-to-b from-[#1e1a12] via-[#181818] to-[#181818] shadow-xl shadow-[#D4AF37]/10'
                    : 'border-[#0A192F] bg-white shadow-xl'
                  : darkMode
                  ? 'bg-[#181818] border-[#2E2A22]'
                  : 'bg-white border-[#E5E0D5] shadow-md'
              }`}
            >
              {pkg.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  pkg.popular
                    ? darkMode
                      ? 'bg-[#D4AF37] text-[#121212]'
                      : 'bg-[#0A192F] text-[#F9F8F6]'
                    : darkMode
                    ? 'bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/35'
                    : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold font-heading">{pkg.title}</h3>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{pkg.tagline}</p>
                </div>

                <div className={`pt-2 pb-4 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-2xl sm:text-3xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                      {formatINR(pkg.price)}
                    </span>
                    <span className={`text-[11px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                      / {pkg.billingPeriod}
                    </span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  {pkg.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className={`text-[10px] font-mono uppercase font-bold tracking-wider ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Features Included:</p>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                      <span className={darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t space-y-3 ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                <button
                  onClick={() => {
                    onSelectServicePackage(pkg);
                    onNavigate('contact');
                  }}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    pkg.popular
                      ? darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB] shadow-lg'
                        : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6] shadow-lg'
                      : darkMode
                      ? 'bg-[#222222] hover:bg-[#2a2a2a] text-[#F5F5F3] border border-[#2E2A22]'
                      : 'bg-[#F2EFE8] hover:bg-[#E5E0D5] text-[#0A192F]'
                  }`}
                >
                  <span>Select & Book Brief</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <p className={`text-center text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                  {pkg.turnaroundTime}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SECTION 3: Deliverables & Methodology Comparison Table */}
      <section className={`py-20 border-y transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Package Deliverables Comparison Matrix
            </h2>
            <p className={`mt-2 text-xs sm:text-sm ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Compare capabilities side-by-side to determine the optimal growth tier for your monthly goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className={`w-full text-left text-xs rounded-2xl overflow-hidden border ${
              darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
            }`}>
              <thead className={darkMode ? 'bg-[#141414] text-[#D4AF37] border-b border-[#2E2A22]' : 'bg-[#F2EFE8] text-[#0A192F] border-b border-[#E5E0D5]'}>
                <tr>
                  <th className="p-4 font-mono uppercase">Feature / Capability</th>
                  <th className="p-4 font-mono uppercase">AI Video Suite (₹35k)</th>
                  <th className="p-4 font-mono uppercase">Full-Stack Retainer (₹80k)</th>
                  <th className="p-4 font-mono uppercase">3D Commercial (₹45k)</th>
                  <th className="p-4 font-mono uppercase">Enterprise (₹1.5L)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-[#2E2A22]' : 'divide-[#E5E0D5]'}`}>
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? (darkMode ? 'bg-[#141414]/50' : 'bg-[#F9F8F6]') : ''}>
                    <td className={`p-4 font-semibold ${darkMode ? 'text-[#E8E6DF]' : 'text-[#0A192F]'}`}>{row.name}</td>
                    <td className={`p-4 font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{row.aiVideo}</td>
                    <td className={`p-4 font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{row.fullStack}</td>
                    <td className={`p-4 font-mono ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>{row.commercial3d}</td>
                    <td className={`p-4 font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 4: Growth Sprint Add-Ons & Infrastructure */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Layers className="w-3.5 h-3.5" />
            <span>Infrastructure Add-Ons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
            Specialized Growth Sprints
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Standalone performance upgrades available to bolt onto any monthly retainer or project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className={`p-6 rounded-3xl border ${
            darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
          }`}>
            <div className={`p-3 rounded-2xl w-fit mb-4 ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading">Meta CAPI & Cloud Gateway Setup</h3>
            <p className={`text-sm font-mono font-bold my-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹18,500 <span className="text-xs opacity-60 font-normal">one-time</span></p>
            <p className={`text-xs leading-relaxed mt-2 ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
              Recover lost iOS conversion signals with server-side CAPI tagging via Google Cloud Run and achieve a 9.2+ Event Match Quality score.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border ${
            darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
          }`}>
            <div className={`p-3 rounded-2xl w-fit mb-4 ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading">Shopify Conversion Rate Audit & CRO</h3>
            <p className={`text-sm font-mono font-bold my-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹24,999 <span className="text-xs opacity-60 font-normal">one-time</span></p>
            <p className={`text-xs leading-relaxed mt-2 ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
              Complete UX analysis of product pages, cart funnels, mobile speed optimization, and offer restructuring to lift baseline conversion rate by 25-50%.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border ${
            darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
          }`}>
            <div className={`p-3 rounded-2xl w-fit mb-4 ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading">AI Virtual UGC Brand Ambassador</h3>
            <p className={`text-sm font-mono font-bold my-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹29,999 <span className="text-xs opacity-60 font-normal">per avatar</span></p>
            <p className={`text-xs leading-relaxed mt-2 ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
              Creation of a proprietary, photorealistic AI spokesperson persona with consistent face, voice clone, and multi-language lip-sync capability.
            </p>
          </div>

        </div>

      </section>

      {/* SECTION 5: Retainer Protocol & Frequently Asked Questions */}
      <section className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Retainer Guidelines & FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className={`text-lg font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className={`p-5 pt-0 text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className={`px-8 py-4 rounded-xl font-bold text-xs shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                  : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6]'
              }`}
            >
              <span>Schedule 1-on-1 Strategy Call with Ali Asif P S</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
