import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Layers, 
  ArrowRight, 
  Volume2, 
  VolumeX,
  Film,
  CheckCircle2,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  darkMode: boolean;
  onOpenVideoModal?: (videoId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ darkMode, onOpenVideoModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'3d-interface' | 'video-cinema'>('3d-interface');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeMetricHover, setActiveMetricHover] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax 3D tilt calculations
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-[92vh] pt-28 pb-16 overflow-hidden flex flex-col justify-center transition-colors duration-500 ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      {/* Background Animated Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyber grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

        {/* Ambient Glow Orbs */}
        {darkMode ? (
          <>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#D4AF37]/8 rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute top-20 left-10 w-[400px] h-[350px] bg-[#C5A028]/10 rounded-full blur-[120px] pointer-events-none"></div>
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A192F]/6 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#162E50]/6 rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute top-20 left-10 w-[400px] h-[350px] bg-[#D4AF37]/8 rounded-full blur-[120px] pointer-events-none"></div>
          </>
        )}

        {/* Floating Particle Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill={darkMode ? '#D4AF37' : '#0A192F'} opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Badges & Strategic Positioning */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md transition-all shadow-sm ${
            darkMode
              ? 'bg-[#1e1a12]/90 border-[#D4AF37]/40 text-[#D4AF37]'
              : 'bg-white border-[#0A192F]/20 text-[#0A192F]'
          }`}>
            <span className={`w-2 h-2 rounded-full animate-ping ${darkMode ? 'bg-[#D4AF37]' : 'bg-[#0A192F]'}`}></span>
            <span>Available for Meta & Google Ads Scaling • Pricing in INR (₹)</span>
          </div>

          {/* View Mode Switcher */}
          <div className={`hidden sm:flex items-center p-1 rounded-xl border text-xs font-medium backdrop-blur-md ${
            darkMode ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF]/70' : 'bg-white border-[#E5E0D5] text-[#0A192F]/70 shadow-sm'
          }`}>
            <button
              id="hero-mode-3d-btn"
              onClick={() => setActiveTab('3d-interface')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === '3d-interface'
                  ? darkMode
                    ? 'bg-[#D4AF37] text-[#121212] font-bold shadow-sm'
                    : 'bg-[#0A192F] text-[#F9F8F6] font-bold shadow-sm'
                  : darkMode
                  ? 'hover:text-[#D4AF37]'
                  : 'hover:text-[#0A192F]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Hologram Interface</span>
            </button>
            <button
              id="hero-mode-cinema-btn"
              onClick={() => setActiveTab('video-cinema')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'video-cinema'
                  ? darkMode
                    ? 'bg-[#D4AF37] text-[#121212] font-bold shadow-sm'
                    : 'bg-[#0A192F] text-[#F9F8F6] font-bold shadow-sm'
                  : darkMode
                  ? 'hover:text-[#D4AF37]'
                  : 'hover:text-[#0A192F]'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Cinematic Showreel</span>
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Headline & Strategic Copy + 3D Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Personal Brand Identity & Impact Metrics */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`h-px w-8 ${darkMode ? 'bg-[#D4AF37]' : 'bg-[#0A192F]'}`}></span>
                <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  {PERSONAL_INFO.title} • Kerala, India
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.08]">
                <span className={`block ${darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}`}>
                  {PERSONAL_INFO.name}
                </span>
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  darkMode
                    ? 'from-[#D4AF37] via-[#F3E5AB] to-[#C5A028]'
                    : 'from-[#0A192F] via-[#163259] to-[#244B7E]'
                }`}>
                  Digital Marketing & AI Video Ads
                </span>
              </h1>

              {/* Tagline pill */}
              <div className={`mt-3 flex items-center gap-2 text-sm font-mono font-medium ${
                darkMode ? 'text-[#D4AF37]/90' : 'text-[#0A192F]/85'
              }`}>
                <span className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>◆</span> Strategy 
                <span className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>◆</span> Performance 
                <span className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>◆</span> Scale
              </div>
            </div>

            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/85' : 'text-[#0A192F]/80'}`}>
              Scaling Indian and global e-commerce, D2C, and SaaS brands through high-converting <strong>AI 3D video ads</strong>, 
              algorithmic <strong>Meta & Google Ads media buying</strong>, and server-side conversion architectures that maximize ROAS in INR.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-explore-work-btn"
                href="#portfolio"
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all hover:scale-[1.02] cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] hover:from-[#C5A028] hover:to-[#F3E5AB] text-[#121212] font-black shadow-[#D4AF37]/20'
                    : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] hover:from-[#122A4E] hover:to-[#0A192F] text-[#F9F8F6] shadow-[#0A192F]/20'
                }`}
              >
                <span>Explore AI Video Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-calc-roi-btn"
                href="#calculator"
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-[#181818] border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#222222] hover:border-[#D4AF37]/60'
                    : 'bg-white border-[#0A192F]/20 text-[#0A192F] hover:bg-[#F2EFE8]'
                }`}
              >
                <TrendingUp className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                <span>Calculate ROI (INR)</span>
              </a>

              <a
                id="hero-linkedin-connect-btn"
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm border transition-all ${
                  darkMode
                    ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF] hover:text-[#0077b5] hover:border-[#0077b5]/50'
                    : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:text-[#0077b5] hover:border-[#0077b5]/40'
                }`}
                title="Connect with Ali Asif P S on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn (@aliasifps)</span>
              </a>
            </div>

            {/* Quick Proof Pillars in INR */}
            <div className={`grid grid-cols-2 gap-3 pt-4 border-t ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
              <div className="flex items-start gap-2.5">
                <div className={`p-1.5 rounded-lg ${darkMode ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'}`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹3.8 Cr+ Spend</p>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>Meta & Google managed</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className={`p-1.5 rounded-lg ${darkMode ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'}`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>4.82x Avg ROAS</p>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>E-comm & D2C benchmark</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Holographic Stage Replicating Uploaded Video Scene */}
          <div className="lg:col-span-7 relative">
            
            {/* Interactive 3D Card Stage Container */}
            <div 
              id="hero-3d-stage"
              className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border shadow-2xl backdrop-blur-2xl ${
                darkMode
                  ? 'border-[#D4AF37]/40 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] shadow-black/80'
                  : 'border-[#E5E0D5] bg-gradient-to-b from-white via-[#F9F8F6] to-[#F2EFE8] shadow-[#0A192F]/15'
              }`}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
            >
              {/* Background Digital Grid Line Animation */}
              <div className={`absolute inset-0 ${darkMode ? 'bg-[#121212]' : 'bg-[#F9F8F6]'}`}>
                {/* Simulated Digital Marketer Avatar in Sharp Black Suit & Cyber Graphics */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                    alt="Ali Asif P S - Digital Marketing Strategist & AI Video Creator"
                    className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity filter contrast-125"
                  />
                  {/* Studio Dark Cyber Overlay Gradient */}
                  <div className={`absolute inset-0 ${
                    darkMode
                      ? 'bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/80'
                      : 'bg-gradient-to-t from-[#F9F8F6] via-transparent to-[#F9F8F6]/80'
                  }`}></div>
                  <div className={`absolute inset-0 ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#121212] via-transparent to-[#121212]'
                      : 'bg-gradient-to-r from-[#F9F8F6] via-transparent to-[#F9F8F6]'
                  }`}></div>
                </div>

                {/* Animated Waveform SVG in Background */}
                <svg className={`absolute bottom-6 left-0 right-0 w-full h-32 opacity-25 pointer-events-none ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`} viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path d="M0,100 C150,150 200,20 350,80 C400,120 450,40 500,60 L500,150 L0,150 Z" fill="currentColor" opacity="0.15" />
                  <path d="M0,80 C120,40 220,130 360,50 C420,10 470,90 500,40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Holographic 3D Floating Widgets */}
              
              {/* Card 1: Meta Advertising Campaign (Top Right) */}
              <div 
                id="hero-widget-meta"
                onMouseEnter={() => setActiveMetricHover('meta')}
                onMouseLeave={() => setActiveMetricHover(null)}
                className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-48 sm:w-56 p-3 sm:p-3.5 rounded-2xl backdrop-blur-xl border shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer z-20 group ${
                  darkMode
                    ? 'bg-[#181818]/90 border-[#D4AF37]/40 shadow-black/80'
                    : 'bg-white/95 border-[#E5E0D5] shadow-[#0A192F]/10'
                }`}
                style={{
                  transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 20px)`
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] ${
                      darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'
                    }`}>
                      ∞
                    </div>
                    <span className={`text-[11px] font-bold ${darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}`}>Meta Ads Engine</span>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                    darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#0A192F]/10 text-[#0A192F]'
                  }`}>
                    +18.9% CTR
                  </span>
                </div>

                <div className={`text-[10px] mb-1 flex justify-between ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                  <span>Conversion Growth</span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>5.42x ROAS</span>
                </div>

                {/* Mini Graph Bar */}
                <div className="h-10 w-full flex items-end gap-1 pt-2">
                  <div className={`h-4 w-1/6 rounded-t ${darkMode ? 'bg-[#333333]' : 'bg-[#E5E0D5]'}`}></div>
                  <div className={`h-6 w-1/6 rounded-t ${darkMode ? 'bg-[#444444]' : 'bg-[#CBD5E1]'}`}></div>
                  <div className={`h-5 w-1/6 rounded-t ${darkMode ? 'bg-[#555555]' : 'bg-[#94A3B8]'}`}></div>
                  <div className={`h-8 w-1/6 rounded-t ${darkMode ? 'bg-[#D4AF37]/60' : 'bg-[#1E3A63]/60'}`}></div>
                  <div className={`h-7 w-1/6 rounded-t ${darkMode ? 'bg-[#D4AF37]/80' : 'bg-[#162E50]/80'}`}></div>
                  <div className={`h-10 w-1/6 rounded-t animate-pulse ${
                    darkMode
                      ? 'bg-gradient-to-t from-[#B89324] to-[#D4AF37]'
                      : 'bg-gradient-to-t from-[#0A192F] to-[#244B7E]'
                  }`}></div>
                </div>
              </div>

              {/* Card 2: SEO Search-Growth & Organic Visibility (Bottom Center) */}
              <div 
                id="hero-widget-seo"
                onMouseEnter={() => setActiveMetricHover('seo')}
                onMouseLeave={() => setActiveMetricHover(null)}
                className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-52 sm:w-60 p-3 sm:p-3.5 rounded-2xl backdrop-blur-xl border shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer z-20 ${
                  darkMode
                    ? 'bg-[#181818]/90 border-[#D4AF37]/35 shadow-black/80'
                    : 'bg-white/95 border-[#E5E0D5] shadow-[#0A192F]/10'
                }`}
                style={{
                  transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 30px)`
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>SEO Search Growth</span>
                  <span className={`text-[10px] font-mono font-semibold ${darkMode ? 'text-[#F3E5AB]' : 'text-[#1E3A63]'}`}>+9.25% MoM</span>
                </div>
                <div className="flex items-center gap-2 my-1">
                  <div className={`text-lg font-mono font-extrabold tracking-tight ${darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}`}>310,000</div>
                  <span className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>Monthly Organic Leads</span>
                </div>
                <div className={`w-full rounded-full h-1.5 overflow-hidden ${darkMode ? 'bg-[#2A2A2A]' : 'bg-[#E5E0D5]'}`}>
                  <div className={`h-full w-[85%] rounded-full ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] to-[#D4AF37]'
                      : 'bg-gradient-to-r from-[#0A192F] to-[#1E3A63]'
                  }`}></div>
                </div>
              </div>

              {/* Card 3: Social Marketing Campaign & Hook Retainer (Top Left) */}
              <div 
                id="hero-widget-social"
                className={`hidden sm:block absolute top-6 left-6 w-48 p-3 rounded-2xl backdrop-blur-xl border shadow-lg z-20 ${
                  darkMode
                    ? 'bg-[#181818]/90 border-[#2E2A22] text-[#E8E6DF]'
                    : 'bg-white/95 border-[#E5E0D5] text-[#0A192F]'
                }`}
                style={{
                  transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 15px)`
                }}
              >
                <div className="flex items-center justify-between text-[10px] font-semibold mb-1">
                  <span>AI Video Retention</span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>68.4%</span>
                </div>
                <p className={`text-[9px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>3-second Hook Rate</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full animate-ping ${darkMode ? 'bg-[#D4AF37]' : 'bg-[#0A192F]'}`}></span>
                  <span className={`text-[9px] font-mono ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>12 Variations Split-Tested</span>
                </div>
              </div>

              {/* Card 4: Audience Insight Rings (Bottom Right) */}
              <div 
                id="hero-widget-audience"
                className={`hidden sm:block absolute bottom-6 right-6 w-44 p-3 rounded-2xl backdrop-blur-xl border shadow-lg z-20 ${
                  darkMode
                    ? 'bg-[#181818]/90 border-[#2E2A22]'
                    : 'bg-white/95 border-[#E5E0D5]'
                }`}
                style={{
                  transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 25px)`
                }}
              >
                <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                  <span className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>Audience Insight</span>
                  <span className={`text-[9px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>High-Intent</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span>Conversion</span>
                  <span className={`font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>95%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono mt-0.5">
                  <span>Engagement</span>
                  <span className={`font-bold ${darkMode ? 'text-[#F3E5AB]' : 'text-[#1E3A63]'}`}>85%</span>
                </div>
              </div>

              {/* Center Hologram Overlay Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                <div className="text-center px-4">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono mb-2 shadow-lg backdrop-blur-md ${
                    darkMode
                      ? 'bg-[#181818]/90 border-[#D4AF37]/40 text-[#D4AF37]'
                      : 'bg-white/90 border-[#0A192F]/20 text-[#0A192F]'
                  }`}>
                    <Sparkles className="w-3 h-3" />
                    <span>AI Video & Performance Marketing</span>
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-heading font-black tracking-wider drop-shadow-md ${
                    darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'
                  }`}>
                    ALI ASIF P S
                  </h2>
                  <p className={`text-xs sm:text-sm font-medium tracking-widest uppercase ${
                    darkMode ? 'text-[#D4AF37]/90' : 'text-[#0A192F]/80'
                  }`}>
                    Strategy • Performance • Growth
                  </p>
                </div>
              </div>

              {/* Interactive Player Controls in Bottom Bar */}
              <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs ${
                darkMode
                  ? 'bg-[#181818]/90 border-[#D4AF37]/30 text-[#E8E6DF]'
                  : 'bg-white/90 border-[#E5E0D5] text-[#0A192F]'
              }`}>
                <button
                  id="hero-video-play-toggle"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-1 rounded-full transition-colors cursor-pointer ${
                    darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F]'
                  }`}
                  aria-label={isPlaying ? "Pause animation preview" : "Play animation preview"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <div className={`h-3 w-px ${darkMode ? 'bg-[#2E2A22]' : 'bg-[#E5E0D5]'}`}></div>
                <span className={`text-[10px] font-mono flex items-center gap-1 ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${darkMode ? 'bg-[#D4AF37]' : 'bg-[#0A192F]'}`}></span>
                  4K 60FPS AI Ad Simulation
                </span>
                <div className={`h-3 w-px ${darkMode ? 'bg-[#2E2A22]' : 'bg-[#E5E0D5]'}`}></div>
                <button
                  id="hero-video-sound-toggle"
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-1 rounded-full transition-colors cursor-pointer ${
                    darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F]'
                  }`}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

            {/* Sub-label under video container */}
            <div className={`flex items-center justify-between mt-3 px-2 text-xs ${
              darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'
            }`}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                Interactive 3D Stage (Move cursor or touch to inspect)
              </span>
              <span className="font-mono text-[11px]">
                Kerala, India • Serving Brands Globally
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
