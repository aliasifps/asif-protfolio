import React from 'react';
import { ArrowUp, Sparkles, Heart, Mail, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface FooterProps {
  darkMode: boolean;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        darkMode
          ? 'bg-[#0e0e0e] border-[#2E2A22] text-[#E8E6DF]/70'
          : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b ${
          darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
        }`}>
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLinkClick('home')}
                className={`flex items-center justify-center w-10 h-10 rounded-xl font-bold shadow-md cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-tr from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] shadow-[#D4AF37]/20'
                    : 'bg-gradient-to-tr from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6] shadow-[#0A192F]/20'
                }`}
              >
                <span className="font-heading text-lg font-black">A</span>
              </button>
              <div>
                <span className={`font-heading font-extrabold text-xl tracking-tight ${
                  darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'
                }`}>
                  {PERSONAL_INFO.name}
                </span>
                <p className={`text-[11px] font-mono uppercase ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  {PERSONAL_INFO.tagline}
                </p>
              </div>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${
              darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'
            }`}>
              Engineering high-converting AI video ads, omnichannel Meta & TikTok media buying, and 3D product animations for elite brands worldwide.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`inline-flex items-center gap-2 text-xs font-mono font-semibold hover:underline ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className={`text-xs font-mono font-bold uppercase tracking-wider ${
              darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'
            }`}>
              7 Dedicated Pages
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('home')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Home / Index
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('work')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Work & Video Ads Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Services & Pricing Retainers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('calculator')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Interactive ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('testimonials')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Testimonials & Verified Proof
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('insights')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Growth Insights & Playbooks
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className={`transition-colors cursor-pointer text-left ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F] font-medium'
                }`}>
                  Contact & Strategy Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Outreach */}
          <div className="md:col-span-4 space-y-3">
            <p className={`text-xs font-mono font-bold uppercase tracking-wider ${
              darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'
            }`}>
              Connect & Social
            </p>
            <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Follow for daily breakdowns of winning AI video hooks and paid media scaling strategies.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: 'LinkedIn', url: PERSONAL_INFO.socials.linkedin },
                { label: 'Twitter / X', url: PERSONAL_INFO.socials.twitter },
                { label: 'Instagram', url: PERSONAL_INFO.socials.instagram },
                { label: 'YouTube', url: PERSONAL_INFO.socials.youtube },
                { label: 'Behance', url: PERSONAL_INFO.socials.behance }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                    darkMode
                      ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF]/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/50'
                      : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:bg-[#0A192F] hover:text-[#F9F8F6]'
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved. Kerala, India.</p>

          <div className="flex items-center gap-4">
            <span className={`flex items-center gap-1 text-[11px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
              <ShieldCheck className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              Verified Digital Marketer (Ali Asif P S)
            </span>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xl border flex items-center gap-1 font-semibold transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF]/80 hover:text-[#D4AF37]'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:bg-[#0A192F] hover:text-[#F9F8F6]'
              }`}
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
