import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  FileText, 
  ArrowRight,
  ExternalLink,
  MessageSquare,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SERVICES_DATA } from '../data/portfolioData';
import { LeadFormData, PageId } from '../types';

interface ContactPageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
  prefilledService?: string;
  prefilledBudget?: string;
  prefilledDescription?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  darkMode,
  onNavigate,
  prefilledService,
  prefilledBudget,
  prefilledDescription
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    serviceCategory: prefilledService || 'AI Video Ads & Creative Testing Engine (₹34,999/mo)',
    monthlyBudget: prefilledBudget || '₹50,000 - ₹2,00,000 / month',
    projectTimeline: 'Within 7 Business Days',
    projectDescription: prefilledDescription || '',
    targetPlatform: ['Meta (FB & Instagram)', 'YouTube Shorts'],
    preferredMeetingSlot: 'Morning (10:00 AM - 1:00 PM IST)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceCategory: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledBudget) {
      setFormData(prev => ({ ...prev, monthlyBudget: prefilledBudget }));
    }
  }, [prefilledBudget]);

  useEffect(() => {
    if (prefilledDescription) {
      setFormData(prev => ({ ...prev, projectDescription: prefilledDescription }));
    }
  }, [prefilledDescription]);

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => {
      const exists = prev.targetPlatform.includes(platform);
      return {
        ...prev,
        targetPlatform: exists
          ? prev.targetPlatform.filter(p => p !== platform)
          : [...prev.targetPlatform, platform]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback safe
      }

      // Save submission locally
      const existing = JSON.parse(localStorage.getItem('asifps_leads') || '[]');
      existing.unshift({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('asifps_leads', JSON.stringify(existing));
    }, 1200);
  };

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'}`}>
      
      {/* SECTION 1: Contact Hero & Project Kickoff Intro */}
      <section className={`relative pt-32 pb-16 overflow-hidden border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold mb-4 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Strategy Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Let's Engineer Your Next Scale Phase
          </h1>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Fill out your campaign parameters below to receive a custom performance creative audit and schedule a 1-on-1 strategy call with <strong>Ali Asif P S</strong>.
          </p>

          <div className={`mt-6 flex flex-wrap justify-center gap-6 text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
            <span className="flex items-center gap-1.5">
              <Clock className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              24-Hour Response SLA
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              100% Confidentiality & NDA
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              GST Invoicing in INR
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Growth Brief & Project Configurator */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brief Form Column (Left 7 cols) */}
          <div className={`lg:col-span-7 p-7 sm:p-9 rounded-3xl border ${
            darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-xl'
          }`}>
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                  darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/40' : 'bg-[#0A192F]/10 text-[#0A192F] border border-[#0A192F]/30'
                }`}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-black font-heading">
                  Growth Brief Transmitted!
                </h2>

                <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  Thank you, <strong>{formData.name}</strong>. Ali Asif P S has received your brief for <strong>{formData.serviceCategory}</strong>. We will review your ad account requirements and email you within 24 hours to coordinate our strategy call.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      darkMode ? 'bg-[#222222] hover:bg-[#2e2a22] text-[#E8E6DF]' : 'bg-[#F2EFE8] hover:bg-[#E5E0D5] text-[#0A192F]'
                    }`}
                  >
                    Submit Another Brief
                  </button>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] to-[#E5C158] text-[#121212] font-black hover:brightness-110'
                        : 'bg-[#0A192F] text-[#F9F8F6] hover:bg-[#122A4E]'
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <h2 className="text-xl font-bold font-heading mb-1">Campaign Parameters Brief</h2>
                  <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                    Configure your current stage and required deliverables.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                          : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                          : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                      }`}
                    />
                  </div>
                </div>

                {/* Company & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold">Company / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. VoltGlow Optics"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                          : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold">Website / Store URL</label>
                    <input
                      type="url"
                      placeholder="e.g. https://yourbrand.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                          : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                      }`}
                    />
                  </div>
                </div>

                {/* Desired Service Package */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold">Primary Growth Service Tier (INR ₹) *</label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                        : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                    }`}
                  >
                    <option value="AI Video Ads & Creative Testing Engine (₹34,999/mo)">
                      AI Video Ads & Creative Testing Engine (₹34,999/month) - Most Popular
                    </option>
                    <option value="Full-Stack Performance Marketing & Scale (₹79,999/mo)">
                      Full-Stack Performance Marketing & Media Buying (₹79,999/month)
                    </option>
                    <option value="Cinematic 3D Commercial Product Reveal (₹45,000/project)">
                      Cinematic 3D Commercial Product Reveal (₹45,000/project)
                    </option>
                    <option value="Omnichannel Enterprise Growth & AI Pipeline (₹1,49,999/mo)">
                      Omnichannel Enterprise Growth & AI Pipeline (₹1,49,999/month)
                    </option>
                    <option value="Custom Project / Specific Consulting">
                      Custom Growth Sprint / Specific Consultation
                    </option>
                  </select>
                </div>

                {/* Monthly Ad Budget in INR */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold">Planned Monthly Ad Spend (INR ₹) *</label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                        : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                    }`}
                  >
                    <option value="₹25,000 - ₹50,000 / month">₹25,000 - ₹50,000 / month (Testing Phase)</option>
                    <option value="₹50,000 - ₹2,00,000 / month">₹50,000 - ₹2,00,000 / month (Scaling Base)</option>
                    <option value="₹2,00,000 - ₹5,00,000 / month">₹2,00,000 - ₹5,00,000 / month (High Growth)</option>
                    <option value="₹5,00,000 - ₹15,00,000 / month">₹5,00,000 - ₹15,00,000 / month (Advantage+ Aggressive)</option>
                    <option value="₹15,00,000+ / month (Enterprise)">₹15,00,000+ / month (Enterprise Scale)</option>
                  </select>
                </div>

                {/* Target Channels Multi-Select */}
                <div className="space-y-2">
                  <label className="text-xs font-bold">Target Channels of Focus:</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Meta (FB & Instagram)',
                      'YouTube Shorts / Ads',
                      'TikTok Spark Ads',
                      'Google PMax & Search',
                      'Programmatic SEO'
                    ].map((platform, idx) => {
                      const isSelected = formData.targetPlatform.includes(platform);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handlePlatformToggle(platform)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? darkMode
                                ? 'bg-[#D4AF37] text-[#121212] font-black'
                                : 'bg-[#0A192F] text-[#F9F8F6] font-bold'
                              : darkMode
                              ? 'bg-[#141414] border border-[#2E2A22] text-[#E8E6DF]/70 hover:border-[#D4AF37]/40'
                              : 'bg-[#F2EFE8] border border-[#E5E0D5] text-[#0A192F]/70 hover:border-[#0A192F]/40'
                          }`}
                        >
                          {platform} {isSelected && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Bottleneck Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold">Current Bottlenecks & Campaign Objectives</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We are experiencing creative fatigue on Meta, current ROAS is 1.8x, looking to scale to 4x with 3D AI video ads..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                        : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                      : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6]'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Transmitting Growth Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Brief & Request Strategy Call</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Direct Channels & Hub Info (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Card */}
            <div className={`p-7 rounded-3xl border ${
              darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
            }`}>
              <h3 className="text-base font-bold font-heading mb-4">Direct Contact & Channels</h3>
              
              <div className="space-y-4 text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/35 hover:bg-[#282215]'
                      : 'bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5] hover:bg-[#E5E0D5]'
                  }`}
                >
                  <Mail className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                  <div>
                    <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Direct Email</p>
                    <p className="font-mono font-bold">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919846012345?text=Hi%20Ali%20Asif,%20I'd%20like%20to%20discuss%20scaling%20our%20ads%20and%20AI%20video%20creatives."
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/40'
                      : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <div>
                    <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>WhatsApp Direct Line</p>
                    <p className="font-mono font-bold">+91 98460 12345 (Instant Chat)</p>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-[#141414] text-[#E8E6DF] border-[#2E2A22] hover:border-[#D4AF37]/40'
                      : 'bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5] hover:bg-[#E5E0D5]'
                  }`}
                >
                  <Linkedin className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                  <div>
                    <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>LinkedIn Profile</p>
                    <p className="font-mono font-bold">linkedin.com/in/aliasifps</p>
                  </div>
                </a>

                <div className={`p-3 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                    <div>
                      <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Location Hub</p>
                      <p className="font-bold">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>

                <div className={`p-3 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <div>
                      <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Active Timezone</p>
                      <p className="font-bold">IST (Indian Standard Time, UTC +5:30)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Pricing Summary in INR */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Active Packages in INR ₹</span>
              
              <div className="mt-3 space-y-2 text-xs">
                <div className={`flex justify-between pb-1 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>AI Video Ads Suite:</span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹34,999 / mo</span>
                </div>
                <div className={`flex justify-between pb-1 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Full-Stack Performance:</span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹79,999 / mo</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>3D Product Commercial:</span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹45,000 / proj</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 3: The 3-Step Onboarding Roadmap */}
      <section className={`py-20 border-y transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              What Happens After You Submit
            </h2>
            <p className={`mt-2 text-xs sm:text-sm ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Our frictionless onboarding sequence gets your ad tests live in under 5 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                day: "Day 1",
                title: "Brief Audit & Angle Mapping",
                desc: "Ali Asif reviews your website, ad account metrics, and competitor library to formulate 4 distinct psychological hook angles."
              },
              {
                day: "Day 2-3",
                title: "AI Scripting & 3D Rendering",
                desc: "Our neural generation pipeline produces 12 custom 4K AI video ads with studio voiceovers, kinetic text, and motion graphics."
              },
              {
                day: "Day 5",
                title: "Live Deployment in Ads Manager",
                desc: "Creatives are uploaded directly into your Meta or Google Ads Manager with dynamic Advantage+ testing ad sets configured."
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
                }`}
              >
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                  darkMode
                    ? 'text-[#D4AF37] bg-[#1e1a12] border-[#D4AF37]/35'
                    : 'text-[#0A192F] bg-[#F2EFE8] border-[#E5E0D5]'
                }`}>
                  {step.day}
                </span>
                <h3 className="text-base font-bold font-heading mt-4 mb-2">{step.title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Security, Confidentiality & GST Billing Terms */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-3xl border ${
          darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <ShieldCheck className={`w-6 h-6 mx-auto md:mx-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <h4 className="text-sm font-bold font-heading">Mutual NDA Security</h4>
              <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                Complete protection of your product designs, revenue metrics, and proprietary business data.
              </p>
            </div>

            <div className="space-y-1">
              <FileText className={`w-6 h-6 mx-auto md:mx-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <h4 className="text-sm font-bold font-heading">GST-Compliant Invoicing</h4>
              <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                18% GST input tax credit available for Indian corporate entities with automatic invoice generation.
              </p>
            </div>

            <div className="space-y-1">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto md:mx-0" />
              <h4 className="text-sm font-bold font-heading">100% Asset Ownership</h4>
              <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                You retain full broadcast rights, raw render files, and master scripts with zero licensing restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
