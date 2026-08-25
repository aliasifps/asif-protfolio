import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Play, 
  Film, 
  BarChart2, 
  ArrowUpRight,
  Clock,
  Award,
  Globe,
  Sliders,
  DollarSign,
  Activity,
  MessageSquare
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { AdHookGenerator } from '../components/AdHookGenerator';
import { AdAccountAuditTool } from '../components/AdAccountAuditTool';
import { CreativeVelocityCalculator } from '../components/CreativeVelocityCalculator';
import { AdCreativeCompareModal } from '../components/AdCreativeCompareModal';
import { PERSONAL_INFO, PROJECTS_DATA, SERVICES_DATA, TESTIMONIALS_DATA } from '../data/portfolioData';
import { PageId, ServicePackage, AdHookTemplate, AuditDiagnosticReport } from '../types';
import { formatINR, formatINRLakhs } from '../utils/formatters';

interface HomePageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
  onSelectServicePackage: (pkg: ServicePackage) => void;
  onOpenVideoModal?: (projectId: string) => void;
  onSelectHookForBrief?: (hook: AdHookTemplate) => void;
  onSendAuditBrief?: (report: AuditDiagnosticReport) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  darkMode,
  onNavigate,
  onSelectServicePackage,
  onOpenVideoModal,
  onSelectHookForBrief,
  onSendAuditBrief
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai-ads' | '3d-motion'>('all');
  const [marketerToolTab, setMarketerToolTab] = useState<'hooks' | 'audit' | 'velocity'>('hooks');
  const [isTeardownOpen, setIsTeardownOpen] = useState<boolean>(false);

  const featuredProjects = PROJECTS_DATA.filter(p => 
    activeTab === 'all' ? true : p.category === activeTab
  ).slice(0, 4);

  return (
    <div className="space-y-0">
      
      {/* SECTION 1: 3D Hero & Showreel Stage */}
      <HeroSection
        darkMode={darkMode}
        onOpenVideoModal={(id) => onNavigate('work')}
      />

      {/* SECTION 2: Omnichannel Performance & Live Metric Bento Grid */}
      <section className={`py-20 relative overflow-hidden transition-colors border-y ${
        darkMode ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
                darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
              }`}>
                <BarChart2 className="w-3.5 h-3.5" />
                <span>Verified Growth Telemetry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
                Predictable Scale in Numbers
              </h2>
              <p className={`mt-2 text-sm sm:text-base max-w-xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                Every campaign is engineered using mathematical testing frameworks, algorithmic creative hooks, and server-side signal tracking.
              </p>
            </div>

            <button
              onClick={() => onNavigate('calculator')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all self-start md:self-auto border cursor-pointer ${
                darkMode
                  ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/40 hover:bg-[#D4AF37]/20 hover:text-white'
                  : 'bg-white text-[#0A192F] border-[#0A192F]/20 hover:bg-[#0A192F] hover:text-[#F9F8F6]'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Simulate Your Brand's ROI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Bento Card 1 */}
            <div className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50'
                : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>Paid Media Managed</span>
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight mb-1">
                ₹3.8 Cr+
              </div>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                Managed across Meta Ads, Google Ads & YouTube Shorts with 0% wasted budget.
              </p>
              <div className={`mt-4 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <span className={darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}>Signal Match:</span>
                <span className="text-emerald-500 font-bold">9.4/10 EMQ (CAPI)</span>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50'
                : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Average Return</span>
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className={`text-3xl sm:text-4xl font-black font-mono tracking-tight mb-1 ${
                darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
              }`}>
                4.82x ROAS
              </div>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                Consistently beating the Indian D2C industry benchmark of 2.1x by 129%.
              </p>
              <div className={`mt-4 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <span className={darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}>Peak Campaign:</span>
                <span className={`font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>7.8x (Luxury Goods)</span>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50'
                : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>Creative Velocity</span>
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
                  <Film className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight mb-1">
                320+ Ads
              </div>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                High-resolution AI 3D video ads generated, voice-mastered, and split-tested.
              </p>
              <div className={`mt-4 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <span className={darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}>Avg 3s Hook Rate:</span>
                <span className={`font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>68.4% Retention</span>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50'
                : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>Attention Delivered</span>
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'}`}>
                  <Globe className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight mb-1">
                185M+
              </div>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                Organic and paid impressions generated across Reels, YouTube Shorts, and Meta.
              </p>
              <div className={`mt-4 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <span className={darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}>Client Locations:</span>
                <span className={`font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>India, UAE, US & SG</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: Digital Marketer Command Center / Growth Lab */}
      <section className={`py-20 relative overflow-hidden transition-colors border-b ${
        darkMode ? 'bg-[#121212] border-[#2E2A22] text-[#F5F5F3]' : 'bg-white border-[#E5E0D5] text-[#0A192F]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 ${
                darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Marketer Utility Hub • Built by a 15-Year Growth Lead</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
                Digital Marketer Command Center
              </h2>
              <p className={`mt-2 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                Interactive direct-response tools designed for performance media buyers, D2C founders, and marketing directors.
              </p>
            </div>

            {/* Tool Category Selector Tabs & A/B Teardown Trigger */}
            <div className="flex flex-wrap items-center gap-3">
              <div className={`flex items-center p-1 rounded-2xl border backdrop-blur-md ${
                darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5] shadow-sm'
              }`}>
                <button
                  onClick={() => setMarketerToolTab('hooks')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    marketerToolTab === 'hooks'
                      ? darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-md'
                        : 'bg-[#0A192F] text-[#F9F8F6] shadow-md'
                      : darkMode
                      ? 'text-[#E8E6DF]/70 hover:text-white'
                      : 'text-[#0A192F]/70 hover:text-[#0A192F]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Hook Generator</span>
                </button>

                <button
                  onClick={() => setMarketerToolTab('audit')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    marketerToolTab === 'audit'
                      ? darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-md'
                        : 'bg-[#0A192F] text-[#F9F8F6] shadow-md'
                      : darkMode
                      ? 'text-[#E8E6DF]/70 hover:text-white'
                      : 'text-[#0A192F]/70 hover:text-[#0A192F]'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Ad & CAPI Audit</span>
                </button>

                <button
                  onClick={() => setMarketerToolTab('velocity')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    marketerToolTab === 'velocity'
                      ? darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-md'
                        : 'bg-[#0A192F] text-[#F9F8F6] shadow-md'
                      : darkMode
                      ? 'text-[#E8E6DF]/70 hover:text-white'
                      : 'text-[#0A192F]/70 hover:text-[#0A192F]'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Creative Burn Modeler</span>
                </button>
              </div>

              <button
                onClick={() => setIsTeardownOpen(true)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                  darkMode
                    ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/40 hover:bg-[#D4AF37]/20'
                    : 'bg-white text-[#0A192F] border-[#0A192F]/30 hover:bg-[#F2EFE8]'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>View A/B Creative Teardown</span>
              </button>
            </div>
          </div>

          {/* Active Tool Render */}
          <div className="animate-fadeIn">
            {marketerToolTab === 'hooks' && (
              <AdHookGenerator
                darkMode={darkMode}
                onSelectHookForBrief={onSelectHookForBrief}
                onNavigate={onNavigate}
              />
            )}

            {marketerToolTab === 'audit' && (
              <AdAccountAuditTool
                darkMode={darkMode}
                onNavigate={onNavigate}
                onSendAuditBrief={onSendAuditBrief}
              />
            )}

            {marketerToolTab === 'velocity' && (
              <CreativeVelocityCalculator
                darkMode={darkMode}
                onNavigate={onNavigate}
              />
            )}
          </div>

        </div>
      </section>

      {/* SECTION 3: Featured Video Ads & Creative Testing Engine Showcase */}
      <section className={`py-24 relative overflow-hidden transition-colors ${
        darkMode ? 'bg-[#141414] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
                darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
              }`}>
                <Film className="w-3.5 h-3.5" />
                <span>Featured Ad Creatives</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
                AI Commercials That Stop The Scroll
              </h2>
              <p className={`mt-3 text-base max-w-2xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                We engineer hyper-realistic 3D product animations and dynamic hook scripts that overcome audience ad fatigue and drive direct purchases.
              </p>
            </div>

            <button
              onClick={() => onNavigate('work')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold shadow-md transition-all self-start md:self-auto cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB] shadow-[#D4AF37]/20'
                  : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F] shadow-[#0A192F]/20'
              }`}
            >
              <span>View All 320+ Video Ads</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className={`group rounded-3xl border overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50 hover:shadow-2xl'
                    : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 hover:shadow-xl'
                }`}
              >
                {/* Visual Media Poster */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#121212]/90 text-[#F5F5F3] border border-[#2E2A22] backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Highlight ROAS Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-black shadow-lg ${
                      darkMode ? 'bg-gradient-to-r from-[#B89324] to-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                    }`}>
                      {project.roas} ROAS
                    </span>
                  </div>

                  {/* Center Play Button Action */}
                  <button
                    onClick={() => {
                      if (onOpenVideoModal) onOpenVideoModal(project.id);
                      else onNavigate('work');
                    }}
                    className={`absolute inset-0 m-auto w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform cursor-pointer ${
                      darkMode
                        ? 'bg-[#D4AF37] text-[#121212] shadow-[#D4AF37]/40'
                        : 'bg-[#0A192F] text-[#F9F8F6] shadow-[#0A192F]/40'
                    }`}
                    aria-label={`Play preview for ${project.title}`}
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{project.client} • {project.industry}</span>
                    <h3 className={`text-lg sm:text-xl font-bold font-heading mt-1 transition-colors ${
                      darkMode ? 'group-hover:text-[#D4AF37]' : 'group-hover:text-[#0A192F]'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                    {project.summary}
                  </p>

                  {/* Metrics Row in INR */}
                  <div className={`grid grid-cols-3 gap-2 p-3 rounded-2xl border ${
                    darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
                  }`}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className={`text-[10px] truncate ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{metric.label}</p>
                        <p className={`text-xs sm:text-sm font-mono font-black ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          darkMode ? 'bg-[#222222] text-[#E8E6DF]/70 border border-[#2E2A22]' : 'bg-white text-[#0A192F]/70 border border-[#E5E0D5]'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('work')}
                      className={`text-xs font-bold flex items-center gap-1 cursor-pointer ${
                        darkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#0A192F] hover:opacity-80'
                      }`}
                    >
                      <span>Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Core Service Retainers & Scalability Pillars in INR */}
      <section className={`py-24 relative overflow-hidden transition-colors border-y ${
        darkMode ? 'bg-[#141414] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <Zap className="w-3.5 h-3.5" />
              <span>Transparent INR Pricing & Retainers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
              Growth Retainers Built to Scale
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Transparent, fixed pricing in Indian Rupee (INR ₹) with zero hidden agency markups. GST invoicing provided.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular
                    ? darkMode
                      ? 'border-[#D4AF37] bg-gradient-to-b from-[#1c1912] to-[#141414] shadow-2xl ring-1 ring-[#D4AF37]/50'
                      : 'border-[#0A192F] bg-white shadow-xl ring-1 ring-[#0A192F]/20'
                    : darkMode
                    ? 'bg-[#181818] border-[#2E2A22]'
                    : 'bg-white border-[#E5E0D5] shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-bold shadow-md ${
                    darkMode ? 'bg-gradient-to-r from-[#B89324] to-[#D4AF37] text-[#121212] font-black' : 'bg-[#0A192F] text-[#F9F8F6]'
                  }`}>
                    {pkg.badge || "MOST POPULAR"}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading">{pkg.title}</h3>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>{pkg.tagline}</p>
                  </div>

                  <div className={`pt-2 pb-4 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl sm:text-4xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                        {formatINR(pkg.price)}
                      </span>
                      <span className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                        / {pkg.billingPeriod}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                    {pkg.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className={`text-[11px] font-mono uppercase font-bold tracking-wider ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Key Deliverables:</p>
                    {pkg.features.slice(0, 4).map((feat, idx) => (
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
                    className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pkg.popular
                        ? darkMode
                          ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB] shadow-lg'
                          : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F] shadow-lg'
                        : darkMode
                        ? 'bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border border-[#2E2A22]'
                        : 'bg-[#F2EFE8] hover:bg-[#E5E0D5] text-[#0A192F] border border-[#E5E0D5]'
                    }`}
                  >
                    <span>Book Strategy Call for This Tier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className={`text-center text-[11px] font-mono ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>
                    Turnaround: {pkg.turnaroundTime}
                  </p>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className={`inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 cursor-pointer ${
                darkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#0A192F] hover:opacity-80'
              }`}
            >
              <span>Explore Detailed Deliverables Matrix & FAQ &rarr;</span>
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5: Verified Client Testimonial Wall */}
      <section className={`py-24 relative overflow-hidden transition-colors ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-white text-[#0A192F]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
                darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
              }`}>
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Verified Client Reviews</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
                Trusted by High-Growth Brands
              </h2>
              <p className={`mt-2 text-sm sm:text-base max-w-xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                See why CMOs, D2C Founders, and Growth Leads rely on Ali Asif P S for ad performance.
              </p>
            </div>

            <button
              onClick={() => onNavigate('testimonials')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all self-start md:self-auto border cursor-pointer ${
                darkMode
                  ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/40 hover:bg-[#D4AF37]/20'
                  : 'bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5] hover:bg-[#E5E0D5]'
              }`}
            >
              <span>View All Verified Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`p-7 rounded-3xl border flex flex-col justify-between ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5] shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex gap-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                      {testimonial.metricResult}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed italic ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center gap-3 ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={`w-10 h-10 rounded-xl object-cover border ${darkMode ? 'border-[#D4AF37]/30' : 'border-[#0A192F]/30'}`}
                  />
                  <div>
                    <h4 className="text-xs font-bold">{testimonial.name}</h4>
                    <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                      {testimonial.role}, <strong className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>{testimonial.company}</strong>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: Strategic Consultation Kickoff CTA Banner */}
      <section className={`py-20 relative overflow-hidden text-white border-t ${
        darkMode
          ? 'bg-gradient-to-r from-[#141414] via-[#1a1710] to-[#141414] border-[#D4AF37]/30'
          : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#0A192F] border-[#0A192F]/30'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
            darkMode
              ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/40'
              : 'bg-white/10 text-white border border-white/20'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>24-Hour Strategy Kickoff Response</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Ready to Beat Creative Fatigue & Scale ROAS?
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Submit your growth brief to receive a customized ad creative audit and schedule a 1-on-1 strategy call with <strong>Ali Asif P S</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className={`px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB] shadow-[#D4AF37]/30'
                  : 'bg-white text-[#0A192F] hover:bg-[#F2EFE8] shadow-black/20'
              }`}
            >
              <span>Submit Growth Brief & Book Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('calculator')}
              className={`px-6 py-4 rounded-xl font-bold text-sm border transition-all flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? 'border-[#D4AF37]/50 bg-[#181818] text-[#D4AF37] hover:bg-[#222222]'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Calculate Projected ROI (INR)</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-white'}`} />
              Strict NDA Protection
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-white'}`} />
              GST Invoicing for Indian Brands
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-white'}`} />
              100% IP & Raw Asset Ownership
            </span>
          </div>

        </div>
      </section>

      {/* A/B Creative Teardown Modal */}
      <AdCreativeCompareModal
        isOpen={isTeardownOpen}
        onClose={() => setIsTeardownOpen(false)}
        darkMode={darkMode}
        onNavigate={onNavigate}
      />

    </div>
  );
};

