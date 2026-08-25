import React, { useState } from 'react';
import { 
  Film, 
  Sparkles, 
  Play, 
  Layers, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Filter, 
  Zap, 
  Cpu, 
  Sliders, 
  Eye,
  ShieldCheck,
  X,
  Volume2
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { CategoryType, PageId, Project } from '../types';
import { formatINR } from '../utils/formatters';

interface WorkPageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
  onSelectProjectForBrief?: (projectName: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  darkMode,
  onNavigate,
  onSelectProjectForBrief
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Creative Assets' },
    { id: 'ai-ads', label: 'AI Video Ads' },
    { id: '3d-motion', label: '3D Motion & CGI' },
    { id: 'meta-growth', label: 'Meta Performance' },
    { id: 'social-reels', label: 'Viral Short-Form' },
    { id: 'seo-funnels', label: 'SEO & Search Funnels' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'}`}>
      
      {/* SECTION 1: Creative Engineering Philosophy & Work Hero */}
      <section className={`relative pt-32 pb-20 overflow-hidden border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold mb-4 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Film className="w-3.5 h-3.5" />
            <span>Ad Creative Testing Engine & Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Engineered For Direct Conversion & Scale
          </h1>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Explore our repository of AI-powered 3D commercial ads, Meta Advantage+ campaign funnels, and viral short-form assets that have generated over <strong>₹3.8 Cr+ in ad spend results</strong>.
          </p>

          {/* Quick Metrics Strip in INR */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Total AI Ad Iterations</p>
              <p className={`text-2xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>320+ Ads</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>12 batches/month</p>
            </div>

            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Average First 3s Hook</p>
              <p className="text-2xl font-black font-mono text-emerald-500">68.4%</p>
              <p className="text-[10px] text-emerald-500 font-bold">+31% vs traditional video</p>
            </div>

            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Blended Campaign ROAS</p>
              <p className={`text-2xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>4.82x</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Across e-comm & SaaS</p>
            </div>

            <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Attributed Revenue</p>
              <p className={`text-2xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹14.2 Cr+</p>
              <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Verified Client Invoicing</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Interactive Ad Gallery with Category Filter & Search */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-md'
                      : 'bg-[#0A192F] text-[#F9F8F6] shadow-md'
                    : darkMode
                    ? 'bg-[#181818] text-[#E8E6DF]/70 border border-[#2E2A22] hover:text-white'
                    : 'bg-white text-[#0A192F]/70 border border-[#E5E0D5] hover:text-[#0A192F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <input
              type="text"
              placeholder="Search by brand, tag, metric..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-white placeholder:text-[#E8E6DF]/40 focus:border-[#D4AF37]'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/40 focus:border-[#0A192F]'
              }`}
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50 hover:shadow-2xl'
                  : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/30 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Media Poster */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/80 text-[#F5F5F3] border border-[#2E2A22]">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/80 text-[#E8E6DF]/70 border border-[#2E2A22]">
                      {project.aspectRatio}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black ${
                      darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                    }`}>
                      {project.roas} ROAS
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className={`absolute inset-0 m-auto w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform cursor-pointer ${
                      darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                    }`}
                    aria-label={`Play ${project.title}`}
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className={`text-[11px] font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{project.client} • {project.industry}</span>
                    <h3 className={`text-base font-bold font-heading mt-0.5 transition-colors ${
                      darkMode ? 'group-hover:text-[#D4AF37]' : 'group-hover:text-[#0A192F]'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                    {project.summary}
                  </p>

                  {/* Metrics Bar */}
                  <div className={`grid grid-cols-3 gap-1.5 p-2.5 rounded-xl border ${
                    darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
                  }`}>
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <p className={`text-[9px] truncate ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{m.label}</p>
                        <p className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`p-5 pt-0 flex items-center justify-between border-t mt-3 pt-3 ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className={`text-xs font-bold flex items-center gap-1 cursor-pointer ${
                    darkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#0A192F] hover:opacity-80'
                  }`}
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => {
                    if (onSelectProjectForBrief) onSelectProjectForBrief(project.title);
                    onNavigate('contact');
                  }}
                  className={`px-3 py-1 rounded-lg text-[11px] font-semibold border cursor-pointer transition-colors ${
                    darkMode
                      ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/35 hover:bg-[#D4AF37]/20'
                      : 'bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5] hover:bg-[#E5E0D5]'
                  }`}
                >
                  Clone Angle
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SECTION 3: In-Depth Case Study Deep-Dive */}
      <section className={`py-20 border-y transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Full Campaign Dissections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
              Behind the 5x ROAS Numbers
            </h2>
            <p className={`mt-3 text-sm sm:text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Detailed technical blueprints of how we structure Advantage+ campaigns, craft pattern-interrupt hooks, and prevent ad fatigue.
            </p>
          </div>

          <div className="space-y-8">
            {PROJECTS_DATA.slice(0, 3).map((project, idx) => (
              <div
                key={project.id}
                className={`p-6 sm:p-8 rounded-3xl border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-md'
                }`}
              >
                <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden bg-black">
                  <img src={project.videoPoster} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs font-mono">
                    <span className={`font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-white'}`}>{project.client}</span>
                    <span className="text-emerald-400 font-bold">{project.roas} Return</span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                      darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F]'
                    }`}>
                      CASE STUDY #{idx + 1}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{project.industry}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading">{project.title}</h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                    {project.fullCaseStudy}
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className={`p-3 rounded-xl border text-center ${
                        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
                      }`}>
                        <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{m.label}</p>
                        <p className={`text-sm font-mono font-black ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.toolsUsed.map((tool, tIdx) => (
                        <span key={tIdx} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                          darkMode ? 'bg-[#222222] text-[#E8E6DF]/70 border-[#2E2A22]' : 'bg-white text-[#0A192F]/70 border-[#E5E0D5]'
                        }`}>
                          {tool}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        if (onSelectProjectForBrief) onSelectProjectForBrief(project.title);
                        onNavigate('contact');
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        darkMode
                          ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                          : 'bg-[#0A192F] text-[#F9F8F6] hover:bg-[#122A4E]'
                      }`}
                    >
                      <span>Deploy Similar Strategy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: The 5-Stage AI Video Creative Production Pipeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>Proprietary Creative Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            How We Produce 12+ 4K Ads Weekly
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Combining high-level direct-response copy frameworks with state-of-the-art neural generation algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Angle & Hook Audit',
              desc: 'Analyze competitor ad libraries, customer reviews, and winning hook angles to define 4 core psychological triggers.',
              badge: 'Day 1'
            },
            {
              step: '02',
              title: 'Prompt Engineering',
              desc: 'Craft bespoke Midjourney & 3D lighting prompts to generate hyper-realistic master product renders and spatial assets.',
              badge: 'Day 2'
            },
            {
              step: '03',
              title: 'Runway & Fluid CGI',
              desc: 'Neural video frame interpolation, macro camera movements, fluid dynamics, and exploded view product reveals in 4K.',
              badge: 'Day 3'
            },
            {
              step: '04',
              title: 'Voice & SFX Master',
              desc: 'Natural neural voiceovers in Indian/US accents, bass-heavy dynamic sound design, kinetic typography, and motion graphics.',
              badge: 'Day 4'
            },
            {
              step: '05',
              title: 'Advantage+ Deploy',
              desc: 'Upload 12 multi-aspect variations into Meta Ads Manager & Google Ads for automated algorithmic split-testing.',
              badge: 'Day 5'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border relative flex flex-col justify-between ${
                darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{item.step}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F]'
                  }`}>
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold font-heading mb-2">{item.title}</h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                  {item.desc}
                </p>
              </div>
              <div className={`mt-4 pt-3 border-t flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Automated SLA</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 5: Tech Stack & Production Arsenal */}
      <section className={`py-16 border-t transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-xs font-mono uppercase tracking-widest mb-8 ${
            darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'
          }`}>
            Powering Next-Gen Video Production & Media Buying:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Midjourney v6', role: 'Master Key Visuals' },
              { name: 'Runway Gen-3', role: 'Neural Motion & Physics' },
              { name: 'Cinema 4D / Blender', role: '3D CGI Product Modelling' },
              { name: 'ElevenLabs', role: 'Studio Voice Synthesis' },
              { name: 'Meta Ads Manager', role: 'Advantage+ Media Buying' },
              { name: 'Google Cloud CAPI', role: 'Server Signal Recovery' }
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-center ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
                }`}
              >
                <p className="text-xs font-bold font-heading">{tech.name}</p>
                <p className={`text-[10px] mt-1 ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Project Inquiry CTA Banner */}
      <section className={`py-20 text-white border-t ${
        darkMode
          ? 'bg-gradient-to-r from-[#141414] via-[#1a1710] to-[#141414] border-[#D4AF37]/30'
          : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#0A192F] border-[#0A192F]/30'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading">
            Need 12 High-Converting Video Ads This Week?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Book our monthly AI Video Ads Retainer for <strong>₹34,999/month</strong>. 4K renders, dynamic hook split-testing, and rapid 3-day turnaround.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className={`px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                  : 'bg-white text-[#0A192F] hover:bg-[#F2EFE8]'
              }`}
            >
              <span>Submit Project Brief in INR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className={`px-6 py-4 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                darkMode
                  ? 'border-[#D4AF37]/50 bg-[#181818] text-[#D4AF37] hover:bg-[#222222]'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Compare All Pricing Tiers
            </button>
          </div>
        </div>
      </section>

      {/* Project Quick View Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-6 ${
              darkMode ? 'bg-[#181818] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              <img src={activeProjectModal.videoPoster} alt={activeProjectModal.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setActiveProjectModal(null)}
                className={`absolute top-4 right-4 p-2 rounded-full border cursor-pointer ${
                  darkMode ? 'bg-black/80 text-white border-[#2E2A22]' : 'bg-white/80 text-[#0A192F] border-[#E5E0D5]'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{activeProjectModal.client} • {activeProjectModal.industry}</span>
                  <h3 className="text-xl font-bold font-heading mt-1">{activeProjectModal.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-black ${
                  darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#0A192F] text-[#F9F8F6]'
                }`}>
                  {activeProjectModal.roas} ROAS
                </span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                {activeProjectModal.fullCaseStudy}
              </p>

              <div className="grid grid-cols-3 gap-3">
                {activeProjectModal.metrics.map((m, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border text-center ${
                    darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                  }`}>
                    <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{m.label}</p>
                    <p className={`text-sm font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{m.value}</p>
                  </div>
                ))}
              </div>

              <div className={`pt-4 flex items-center justify-between border-t ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.toolsUsed.map((t, idx) => (
                    <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                      darkMode ? 'bg-[#222222] text-[#E8E6DF]/70 border-[#2E2A22]' : 'bg-white text-[#0A192F]/70 border-[#E5E0D5]'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (onSelectProjectForBrief) onSelectProjectForBrief(activeProjectModal.title);
                    setActiveProjectModal(null);
                    onNavigate('contact');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black'
                      : 'bg-[#0A192F] text-[#F9F8F6]'
                  }`}
                >
                  <span>Build Brief for This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
