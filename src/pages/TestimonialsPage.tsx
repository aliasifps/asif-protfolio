import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Quote, 
  BarChart2, 
  Lock, 
  Clock, 
  Zap,
  Globe
} from 'lucide-react';
import { TESTIMONIALS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface TestimonialsPageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  darkMode,
  onNavigate
}) => {
  const extendedTestimonials = [
    ...TESTIMONIALS_DATA,
    {
      id: "test-4",
      name: "Siddharth Menon",
      role: "Head of Marketing",
      company: "AuraClean Naturals",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote: "Ali Asif's programmatic SEO quiz funnel paired with high-impact 3D video ads on Instagram skyrocketed our organic and paid subscriber base. Monthly revenue jumped from ₹12 Lakhs to ₹34.5 Lakhs in just 4 months.",
      metricResult: "₹34.5L/mo",
      metricLabel: "Organic & Paid Growth",
      platform: "Meta Ads & SEO Funnels",
      verified: true
    },
    {
      id: "test-5",
      name: "Chloe Dupont",
      role: "Creative Director",
      company: "Chronos Horlogerie",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote: "The 3D exploded view CGI animation Asif created for our luxury watch pre-order was astonishing. It felt like an Apple keynote reveal. We generated ₹98.5 Lakhs in pre-orders within 72 hours of launching the ad campaign.",
      metricResult: "₹98.5 Lakhs",
      metricLabel: "Pre-Orders in 72h",
      platform: "3D Product Commercial",
      verified: true
    },
    {
      id: "test-6",
      name: "Karan Verma",
      role: "Founder & CEO",
      company: "VoltGlow Performance",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote: "Creative fatigue used to burn through our budget every 10 days. With Asif's AI Video Ads testing engine, we get 12 fresh 4K video ads delivered every month. Our ROAS hasn't dropped below 5.4x in 6 consecutive months.",
      metricResult: "5.42x ROAS",
      metricLabel: "6-Month Sustained",
      platform: "AI Video Ads Suite",
      verified: true
    }
  ];

  const caseProofCards = [
    {
      brand: "VoltGlow Performance",
      stat1: "5.42x",
      stat1Label: "Blended ROAS",
      stat2: "-42.5%",
      stat2Label: "CAC Reduction",
      stat3: "₹81 Lakhs",
      stat3Label: "Monthly Revenue",
      proof: "Scaled Advantage+ ad sets from ₹5k/day to ₹50k/day without CTR decay."
    },
    {
      brand: "FinVault Global",
      stat1: "48,200",
      stat1Label: "Funded Users",
      stat2: "₹175",
      stat2Label: "Cost Per Install",
      stat3: "6.2:1",
      stat3Label: "LTV to CAC Ratio",
      proof: "Server-side CAPI integration recovered 38% lost iOS purchase signals."
    },
    {
      brand: "AuraClean Beauty",
      stat1: "74.2%",
      stat1Label: "Quiz Completion",
      stat2: "₹34.5L",
      stat2Label: "Organic Revenue",
      stat3: "+160%",
      stat3Label: "Search Traffic",
      proof: "Programmatic SEO funnels converted high-intent searchers into subscribers."
    }
  ];

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'}`}>
      
      {/* SECTION 1: Testimonials Hero & Trust Scorecard */}
      <section className={`relative pt-32 pb-20 overflow-hidden border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold mb-4 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Award className="w-3.5 h-3.5" />
            <span>Verified Executive Reviews & Evidence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Client Success & Verified Case Proof
          </h1>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Real testimonials from CMOs, D2C Founders, and Media Buying Directors who partner with <strong>Ali Asif P S</strong> to drive profitable growth in INR.
          </p>

          {/* Trust Scorecard Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <div className="flex text-[#D4AF37] gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className={`text-xl font-black font-mono ${darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}`}>4.98 / 5.0</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Average Client Rating</p>
            </div>

            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className={`text-xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹3.8 Cr+</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Managed Ad Spend</p>
              <p className="text-[10px] text-emerald-500 font-mono">0% Budget Wastage</p>
            </div>

            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className="text-xl font-black font-mono text-emerald-500">4.82x</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Blended ROAS Avg</p>
              <p className={`text-[10px] font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>+129% vs Industry</p>
            </div>

            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className={`text-xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>100%</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>On-Time Creative SLA</p>
              <p className={`text-[10px] font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>3-5 Day Batches</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Verified Executive Reviews Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extendedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                darkMode 
                  ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/10' 
                  : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 hover:shadow-xl'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37] gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{testimonial.metricResult}</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed italic ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                  "{testimonial.quote}"
                </p>

                <div className={`text-[10px] font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                  Channel: {testimonial.platform}
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center gap-3 ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-xl object-cover border border-[#D4AF37]/30 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold font-heading">{testimonial.name}</h4>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                    {testimonial.role}, <strong className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>{testimonial.company}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SECTION 3: Verified Client Case Metric Snapshots & Evidence Hub */}
      <section className={`py-20 border-y transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Attribution Logs & Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
              Live Verified Case Data
            </h2>
            <p className={`mt-3 text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Concrete campaign data points extracted directly from Meta Ads Manager and Triple Whale attribution dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseProofCards.map((card, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-3xl border ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-md'
                }`}
              >
                <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{card.brand}</span>
                
                <div className={`grid grid-cols-3 gap-2 my-6 p-4 rounded-2xl border text-center ${
                  darkMode ? 'bg-[#121212] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
                }`}>
                  <div>
                    <p className={`text-lg font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{card.stat1}</p>
                    <p className={`text-[9px] truncate ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{card.stat1Label}</p>
                  </div>
                  <div>
                    <p className="text-lg font-black font-mono text-emerald-500">{card.stat2}</p>
                    <p className={`text-[9px] truncate ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{card.stat2Label}</p>
                  </div>
                  <div>
                    <p className={`text-lg font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{card.stat3}</p>
                    <p className={`text-[9px] truncate ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{card.stat3Label}</p>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  {card.proof}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Brand Ecosystem & Partner Network */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`text-xs font-mono uppercase tracking-widest mb-8 ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
          Brands Scaled Across India, UAE, US & Singapore
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "VoltGlow", loc: "Mumbai / D2C" },
            { name: "Solis Health", loc: "Bangalore / Tech" },
            { name: "FinVault", loc: "Dubai / Fintech" },
            { name: "Chronos", loc: "Geneva / Luxury" },
            { name: "AuraClean", loc: "Kerala / Ayurveda" },
            { name: "NeuroSync", loc: "San Francisco / SaaS" }
          ].map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border ${
                darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
              }`}
            >
              <p className="text-sm font-bold font-heading">{b.name}</p>
              <p className={`text-[10px] font-mono mt-1 ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{b.loc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Quality Guarantee & SLA Commitment */}
      <section className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 rounded-3xl border ${
            darkMode ? 'bg-[#181818] border-[#D4AF37]/35' : 'bg-white border-[#0A192F]/20 shadow-xl'
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`p-4 rounded-2xl shrink-0 ${
                darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'
              }`}>
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl font-bold font-heading">The Ali Asif P S Quality Guarantee</h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  Every campaign operates under strict mutual NDAs. We provide 100% intellectual property and raw creative project transfer. If our first batch of AI video ads does not meet your brand guidelines, we perform unlimited rapid revisions within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Project Kickoff CTA */}
      <section className={`py-20 text-center border-t ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading">
            Join the Next 5x ROAS Case Study
          </h2>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Book a 1-on-1 performance review with <strong>Ali Asif P S</strong>. Get an audit of your ad creatives and unlock high-converting AI hooks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className={`px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                  : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6]'
              }`}
            >
              <span>Submit Project Brief & Request Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
