import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Layers, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  Film,
  BarChart3
} from 'lucide-react';
import { ServicePackage } from '../types';
import { SERVICES_DATA } from '../data/portfolioData';
import { formatINR } from '../utils/formatters';

interface ServicesSectionProps {
  darkMode: boolean;
  onSelectServicePackage: (pkg: ServicePackage) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  darkMode,
  onSelectServicePackage
}) => {
  const [activeTier, setActiveTier] = useState<string>('ai-video-ads-suite');

  return (
    <section
      id="services"
      className={`py-24 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode
              ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
              : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Growth Engineering Services (in INR ₹)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Tailored AI Video & Performance Packages
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
            Predictable creative generation and media buying structures designed to scale Indian and global brands profitably.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((pkg) => {
            const isFeatured = pkg.popular;
            return (
              <div
                key={pkg.id}
                id={`service-card-${pkg.id}`}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  isFeatured
                    ? darkMode
                      ? 'bg-gradient-to-b from-[#1c1a14] via-[#181818] to-[#121212] border-[#D4AF37] shadow-2xl shadow-black/80 scale-105 z-10'
                      : 'bg-white border-[#0A192F] shadow-2xl shadow-[#0A192F]/10 scale-105 z-10'
                    : darkMode
                    ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/40'
                    : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/30 shadow-sm'
                }`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 whitespace-nowrap shadow-md ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-[#D4AF37]/30'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6] shadow-[#0A192F]/20'
                    }`}>
                      <Sparkles className="w-3 h-3" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-extrabold font-heading">{pkg.title}</h3>
                    <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price in INR */}
                  <div className={`my-5 pb-5 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${
                        darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                      }`}>
                        {formatINR(pkg.price)}
                      </span>
                      <span className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                        / {pkg.billingPeriod}
                      </span>
                    </div>
                    <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                    }`}>
                      What's Included:
                    </p>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`p-0.5 rounded mt-0.5 shrink-0 ${
                          darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/85' : 'text-[#0A192F]/80'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables & Turnaround */}
                  <div className={`p-4 rounded-2xl border mb-6 ${
                    darkMode ? 'bg-[#1e1e1e] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
                  }`}>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold mb-1">
                      <Clock className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                      <span className={darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}>Turnaround: {pkg.turnaroundTime}</span>
                    </div>
                    <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      Target: {pkg.idealFor}
                    </p>
                  </div>
                </div>

                {/* Select Package CTA */}
                <button
                  id={`select-service-${pkg.id}`}
                  onClick={() => onSelectServicePackage(pkg)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-lg shadow-[#D4AF37]/20'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6] shadow-lg shadow-[#0A192F]/20'
                      : darkMode
                      ? 'bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#282828]'
                      : 'bg-[#0A192F] text-[#F9F8F6] hover:bg-[#162E50]'
                  }`}
                >
                  <span>Select & Request Package ({formatINR(pkg.price)})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Custom Scope / Enterprise Inquiries */}
        <div className={`mt-12 p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
        }`}>
          <div>
            <h4 className={`text-lg font-bold font-heading ${darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}`}>
              Need a Custom Multi-Channel Growth Architecture?
            </h4>
            <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
              Managing over ₹10 Lakhs/mo in ad spend or need custom AI model fine-tuning for your brand IP?
            </p>
          </div>
          <a
            href="#contact"
            className={`px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border cursor-pointer ${
              darkMode
                ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30 hover:bg-[#D4AF37]/20'
                : 'text-[#0A192F] bg-[#0A192F]/10 border-[#0A192F]/20 hover:bg-[#0A192F]/15'
            }`}
          >
            Request Enterprise Scope
          </a>
        </div>

      </div>
    </section>
  );
};
