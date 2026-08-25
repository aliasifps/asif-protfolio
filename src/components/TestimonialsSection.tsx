import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="testimonials"
      className={`py-24 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode
              ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
              : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <ShieldCheck className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Verified Client Impact & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Backed by High-Growth Founders & CMOs
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
            Real testimonials and audited performance metrics from brands scaled with Ali Asif's AI advertising systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className={`relative p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-black/60'
                  : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Top Metrics Banner */}
                <div className={`flex items-center justify-between mb-4 pb-4 border-b ${
                  darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
                }`}>
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${darkMode ? 'fill-[#D4AF37] text-[#D4AF37]' : 'fill-[#0A192F] text-[#0A192F]'}`} />
                    ))}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold border ${
                    darkMode
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30'
                      : 'bg-[#0A192F]/10 text-[#0A192F] border-[#0A192F]/20'
                  }`}>
                    {item.metricResult}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className={`w-8 h-8 absolute -top-2 -left-2 -z-0 ${
                    darkMode ? 'text-[#D4AF37]/15' : 'text-[#0A192F]/10'
                  }`} />
                  <p className={`relative z-10 text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-[#E8E6DF]/85' : 'text-[#0A192F]/80'
                  }`}>
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Verification */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={`w-10 h-10 rounded-full object-cover border ${
                      darkMode ? 'border-[#D4AF37]/40' : 'border-[#0A192F]/30'
                    }`}
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1">
                      {item.name}
                      {item.verified && (
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                      )}
                    </h4>
                    <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] font-mono text-emerald-500 font-bold">
                    {item.metricLabel}
                  </p>
                  <p className={`text-[9px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                    {item.platform}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Brand Logos Trust Banner */}
        <div className={`mt-16 p-6 rounded-2xl border text-center ${
          darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
        }`}>
          <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${
            darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
          }`}>
            Campaigns Scaled Across Major Advertising Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider">META ADS</span>
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider">TIKTOK SPARK</span>
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider">GOOGLE P-MAX</span>
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider">SHOPIFY PLUS</span>
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider">YOUTUBE SHORTS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
