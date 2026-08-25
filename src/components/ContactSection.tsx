import React, { useState } from 'react';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  Calendar, 
  IndianRupee, 
  MessageSquare, 
  Phone, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Linkedin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  darkMode: boolean;
  prefilledService?: string;
  prefilledBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  darkMode,
  prefilledService,
  prefilledBudget
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    serviceCategory: prefilledService || 'AI Video Ads & Creative Testing Engine',
    monthlyBudget: prefilledBudget || '₹50,000 - ₹1,50,000 / month',
    projectTimeline: 'Immediately (Next 7 days)',
    projectDescription: '',
    targetPlatform: ['Meta Ads (Facebook & Instagram)'],
    preferredMeetingSlot: 'Tomorrow at 3:00 PM IST'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePlatformToggle = (platform: string) => {
    if (formData.targetPlatform.includes(platform)) {
      setFormData({
        ...formData,
        targetPlatform: formData.targetPlatform.filter(p => p !== platform)
      });
    } else {
      setFormData({
        ...formData,
        targetPlatform: [...formData.targetPlatform, platform]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Save lead to localStorage for offline resilience & client history
    const existingLeads = JSON.parse(localStorage.getItem('asifps_leads') || '[]');
    const newLead = {
      ...formData,
      id: 'LEAD-' + Date.now(),
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('asifps_leads', JSON.stringify([newLead, ...existingLeads]));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti blast
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti triggered');
      }
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      {/* Glow */}
      <div className={`absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        darkMode ? 'bg-[#D4AF37]/8' : 'bg-[#0A192F]/5'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode
              ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
              : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Direct Strategy & Project Booking (INR ₹)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Ready to Scale Your Ad Performance?
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
            Submit your brand details below to receive a custom AI creative audit and a 1-on-1 strategy call with Ali Asif P S.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? 'bg-[#181818] border-[#2E2A22] backdrop-blur-xl' : 'bg-white border-[#E5E0D5] shadow-md'
            }`}>
              <h3 className="text-xl font-bold font-heading mb-2">Direct Contact Channels</h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                Have questions or an immediate marketing campaign deadline? Reach out directly.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className={`flex items-center gap-3.5 p-3.5 rounded-2xl border transition-colors cursor-pointer ${
                    darkMode ? 'bg-[#1e1e1e] border-[#2E2A22] hover:border-[#D4AF37]/50 text-[#F5F5F3]' : 'bg-[#F2EFE8] border-[#E5E0D5] hover:border-[#0A192F]/40 text-[#0A192F]'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-mono uppercase ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Primary Email</p>
                    <p className="text-xs sm:text-sm font-semibold truncate">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3.5 p-3.5 rounded-2xl border transition-colors cursor-pointer ${
                    darkMode 
                      ? 'bg-[#1e1e1e] border-[#2E2A22] hover:border-[#D4AF37]/50 text-[#F5F5F3]' 
                      : 'bg-[#F2EFE8] border-[#E5E0D5] hover:border-[#0A192F]/40 text-[#0A192F]'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'}`}>
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-[11px] font-mono uppercase ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>LinkedIn Direct</p>
                      <span className={`text-[10px] font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Connect &rarr;</span>
                    </div>
                    <p className={`text-xs sm:text-sm font-semibold truncate ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>linkedin.com/in/aliasifps</p>
                  </div>
                </a>

                <div className={`flex items-center gap-3.5 p-3.5 rounded-2xl border ${
                  darkMode ? 'bg-[#1e1e1e] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]'
                }`}>
                  <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'}`}>
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-mono uppercase ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Location & Hub</p>
                    <p className="text-xs sm:text-sm font-semibold">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-3.5 p-3.5 rounded-2xl border ${
                  darkMode ? 'bg-[#1e1e1e] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]'
                }`}>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-500">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-mono uppercase ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Availability</p>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-500">Open for New Retainers (Q3/Q4 2026)</p>
                  </div>
                </div>
              </div>

              {/* Service Level Guarantee */}
              <div className={`mt-6 pt-6 border-t space-y-2.5 ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                <div className={`flex items-center gap-2 text-xs font-semibold ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                  <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                  <span>24-Hour Strategy Brief Response SLA</span>
                </div>
                <div className={`flex items-center gap-2 text-xs font-semibold ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                  <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                  <span>Free Initial Creative Hook & ROAS Audit</span>
                </div>
                <div className={`flex items-center gap-2 text-xs font-semibold ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                  <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                  <span>GST Invoicing & Indian Payment Gateways</span>
                </div>
              </div>

            </div>

            {/* Social handles list */}
            <div className={`p-6 rounded-3xl border flex items-center justify-between ${
              darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
            }`}>
              <span className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Official Socials:</span>
              <div className="flex gap-2">
                {[
                  { label: 'LI', url: PERSONAL_INFO.socials.linkedin },
                  { label: 'X', url: PERSONAL_INFO.socials.twitter },
                  { label: 'IG', url: PERSONAL_INFO.socials.instagram },
                  { label: 'YT', url: PERSONAL_INFO.socials.youtube }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      darkMode
                        ? 'bg-[#222222] hover:bg-[#D4AF37] hover:text-[#121212] text-[#F5F5F3]'
                        : 'bg-[#F2EFE8] hover:bg-[#0A192F] hover:text-[#F9F8F6] text-[#0A192F]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Form: Interactive Brief Builder */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? 'bg-[#181818] border-[#2E2A22] backdrop-blur-xl' : 'bg-white border-[#E5E0D5] shadow-xl'
            }`}>
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Growth Brief Received!</h3>
                  <p className={`text-xs sm:text-sm max-w-md mx-auto ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                    Thank you, <strong className={darkMode ? 'text-white' : 'text-[#0A192F]'}>{formData.name}</strong>. Ali Asif P S will review your brand details and reach out within 24 hours to schedule your strategy kickoff.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        companyName: '',
                        websiteUrl: '',
                        serviceCategory: 'AI Video Ads & Creative Testing Engine',
                        monthlyBudget: '₹50,000 - ₹1,50,000 / month',
                        projectTimeline: 'Immediately (Next 7 days)',
                        projectDescription: '',
                        targetPlatform: ['Meta Ads (Facebook & Instagram)'],
                        preferredMeetingSlot: 'Tomorrow at 3:00 PM IST'
                      });
                    }}
                    className={`mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold cursor-pointer border ${
                      darkMode
                        ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30 hover:bg-[#D4AF37]/20'
                        : 'text-[#0A192F] bg-[#0A192F]/10 border-[#0A192F]/20 hover:bg-[#0A192F]/15'
                    }`}
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Package / Service Required */}
                  <div>
                    <label className={`block text-xs font-mono uppercase font-bold mb-2 ${
                      darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                    }`}>
                      1. Required Service Track
                    </label>
                    <select
                      id="contact-service-select"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-semibold border transition-all focus:outline-none focus:ring-2 ${
                        darkMode
                          ? 'bg-[#222222] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]'
                          : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                      }`}
                    >
                      <option value="AI Video Ads & Creative Testing Engine">
                        AI Video Ads & Creative Testing Engine (₹34,999/mo)
                      </option>
                      <option value="Full-Stack Paid Marketing & Scale">
                        Full-Stack Performance Marketing & Media Buying (₹79,999/mo)
                      </option>
                      <option value="Cinematic 3D Commercial & Brand Launch">
                        Cinematic 3D Commercial & Product Launch (₹45,000/project)
                      </option>
                      <option value="Programmatic SEO & Conversion Funnel">
                        Programmatic SEO & High-Intent Search Funnels
                      </option>
                      <option value="Custom Enterprise Growth Architecture">
                        Custom Enterprise Growth Architecture (₹1,50,000+/mo)
                      </option>
                    </select>
                  </div>

                  {/* Step 2: Target Ad Platforms */}
                  <div>
                    <label className={`block text-xs font-mono uppercase font-bold mb-2 ${
                      darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                    }`}>
                      2. Target Ad & Marketing Platforms
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Meta Ads (FB & IG)',
                        'Google Ads (P-Max)',
                        'YouTube Shorts',
                        'Instagram Reels',
                        'LinkedIn Video',
                        'Organic Social Video'
                      ].map((platform) => {
                        const isSelected = formData.targetPlatform.includes(platform);
                        return (
                          <button
                            type="button"
                            key={platform}
                            onClick={() => handlePlatformToggle(platform)}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? darkMode
                                  ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                                  : 'bg-[#0A192F] border-[#0A192F] text-[#F9F8F6]'
                                : darkMode
                                ? 'bg-[#222222] border-[#2E2A22] text-[#E8E6DF]/70 hover:text-white'
                                : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]/70 hover:text-[#0A192F]'
                            }`}
                          >
                            <span className="truncate">{platform}</span>
                            {isSelected && (
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ml-1 ${
                                darkMode ? 'text-[#D4AF37]' : 'text-[#F9F8F6]'
                              }`} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Contact and Brand Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="e.g. Rahul Nambiar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                          darkMode
                            ? 'bg-[#222222] border-[#2E2A22] text-white placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                            : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        placeholder="rahul@yourbrand.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                          darkMode
                            ? 'bg-[#222222] border-[#2E2A22] text-white placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                            : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold mb-1.5">
                        Brand / Company Name
                      </label>
                      <input
                        id="contact-company-input"
                        type="text"
                        placeholder="e.g. Solis Health Tech"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                          darkMode
                            ? 'bg-[#222222] border-[#2E2A22] text-white placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                            : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold mb-1.5">
                        Website / Store URL
                      </label>
                      <input
                        id="contact-website-input"
                        type="text"
                        placeholder="https://yourbrand.in"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                          darkMode
                            ? 'bg-[#222222] border-[#2E2A22] text-white placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                            : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Step 4: Budget & Timeline (INR) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold mb-1.5">
                        Monthly Paid Ad Spend (INR ₹)
                      </label>
                      <select
                        id="contact-budget-select"
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                          darkMode
                            ? 'bg-[#222222] border-[#2E2A22] text-white focus:ring-[#D4AF37]'
                            : 'bg-white border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                        }`}
                      >
                        <option value="₹25,000 - ₹50,000 / month">₹25,000 – ₹50,000 / mo</option>
                        <option value="₹50,000 - ₹1,50,000 / month">₹50,000 – ₹1,50,000 / mo</option>
                        <option value="₹1,50,000 - ₹5,00,000 / month">₹1,50,000 – ₹5,00,000 / mo</option>
                        <option value="₹5,00,000 - ₹25,00,000+ / month">₹5,00,000 – ₹25,00,000+ / mo (Scale)</option>
                        <option value="Single Project / Launch (₹35k - ₹75k)">Single Project (₹35k – ₹75k)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold mb-1.5">
                        Target Kickoff Date
                      </label>
                      <select
                        id="contact-timeline-select"
                        value={formData.projectTimeline}
                        onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                          darkMode
                            ? 'bg-[#222222] border-[#2E2A22] text-white focus:ring-[#D4AF37]'
                            : 'bg-white border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                        }`}
                      >
                        <option value="Immediately (Next 7 days)">Immediately (Next 7 days)</option>
                        <option value="Within 2-3 weeks">Within 2-3 weeks</option>
                        <option value="Next month">Next month</option>
                        <option value="Exploring possibilities">Exploring possibilities</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 5: Notes & Goals */}
                  <div>
                    <label className="block text-xs font-heading font-semibold mb-1.5">
                      Current Marketing Bottlenecks & Targets
                    </label>
                    <textarea
                      id="contact-description-input"
                      rows={3}
                      placeholder="Tell us about your current ROAS, CAC challenges, target audience, or the visual styles you want to explore..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 ${
                        darkMode
                          ? 'bg-[#222222] border-[#2E2A22] text-white placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                          : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
                      }`}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-growth-brief-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-[#D4AF37]/25 hover:from-[#C5A028] hover:to-[#F3E5AB]'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] shadow-[#0A192F]/20 hover:from-[#122A4E] hover:to-[#0A192F]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                        Transmitting Growth Brief...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Book Strategy Call & Submit Brief</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className={`text-center text-[11px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                    🔒 Protected under strict NDA & client data encryption. No spam, ever.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
