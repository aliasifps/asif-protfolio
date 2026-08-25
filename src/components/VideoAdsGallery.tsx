import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Sparkles, 
  TrendingUp, 
  Eye, 
  ExternalLink, 
  Filter, 
  Search, 
  CheckCircle2, 
  X, 
  ArrowUpRight, 
  Zap, 
  SlidersHorizontal,
  Share2,
  Volume2,
  VolumeX,
  Maximize2
} from 'lucide-react';
import { Project, CategoryType } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface VideoAdsGalleryProps {
  darkMode: boolean;
  onSelectProjectForBrief?: (projectName: string) => void;
}

export const VideoAdsGallery: React.FC<VideoAdsGalleryProps> = ({
  darkMode,
  onSelectProjectForBrief
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVideoPlayingInModal, setIsVideoPlayingInModal] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Work (6)' },
    { id: 'ai-ads', label: 'AI Video Ads' },
    { id: 'meta-growth', label: 'Meta & Paid Scaling' },
    { id: '3d-motion', label: '3D Commercials' },
    { id: 'social-reels', label: 'Viral Social Reels' },
    { id: 'seo-funnels', label: 'SEO & Funnels' }
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleShare = (project: Project) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section
      id="portfolio"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode
                ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
                : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Proven Growth Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
              AI Video Ads & Commercial Campaigns
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
              High-converting AI visual assets and paid media funnels engineered to maximize return on ad spend (ROAS).
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className={`flex items-center gap-6 p-4 rounded-2xl border backdrop-blur-md ${
            darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
          }`}>
            <div>
              <p className={`text-2xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>4.82x</p>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Average ROAS</p>
            </div>
            <div className={`h-8 w-px ${darkMode ? 'bg-[#2E2A22]' : 'bg-[#E5E0D5]'}`}></div>
            <div>
              <p className={`text-2xl font-black font-mono ${darkMode ? 'text-[#F3E5AB]' : 'text-[#1E3A63]'}`}>185M+</p>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Video Views</p>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-md shadow-[#D4AF37]/20'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] font-bold shadow-md shadow-[#0A192F]/20'
                    : darkMode
                    ? 'bg-[#181818] border border-[#2E2A22] text-[#E8E6DF]/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/40'
                    : 'bg-white border border-[#E5E0D5] text-[#0A192F]/70 hover:text-[#0A192F] hover:border-[#0A192F]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-[#D4AF37]/70' : 'text-[#0A192F]/50'}`} />
            <input
              id="portfolio-search-input"
              type="text"
              placeholder="Search by client, niche, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium border transition-all focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-[#F5F5F3] placeholder:text-[#E8E6DF]/40 focus:ring-[#D4AF37]/50'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/40 focus:ring-[#0A192F]/30'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-3xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
            <p className={`text-base font-medium ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>No campaign matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className={`mt-3 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                darkMode
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30'
                  : 'text-[#0A192F] bg-[#0A192F]/10 border-[#0A192F]/20'
              }`}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-black/70'
                    : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 hover:shadow-xl hover:shadow-[#0A192F]/10'
                }`}
              >
                {/* Visual Media Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121212]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110 ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] shadow-[#D4AF37]/30'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6] shadow-[#0A192F]/30'
                    }`}>
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* ROAS & Category Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono uppercase backdrop-blur-md border ${
                      darkMode
                        ? 'bg-[#181818]/90 text-[#D4AF37] border-[#D4AF37]/30'
                        : 'bg-white/90 text-[#0A192F] border-[#E5E0D5]'
                    }`}>
                      {project.categoryLabel}
                    </span>
                    {project.roas !== 'N/A (Organic)' && (
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold font-mono shadow-md ${
                        darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                      }`}>
                        {project.roas} ROAS
                      </span>
                    )}
                  </div>

                  {/* Metrics Bar at bottom of media */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/95 font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {project.views}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.conversionBoost}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                        {project.client}
                      </span>
                      <span className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                        {project.industry}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold font-heading line-clamp-2 transition-colors ${
                      darkMode ? 'group-hover:text-[#D4AF37]' : 'group-hover:text-[#0A192F]'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`mt-2 text-xs sm:text-sm line-clamp-2 leading-relaxed ${
                      darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'
                    }`}>
                      {project.summary}
                    </p>
                  </div>

                  {/* Tag pills */}
                  <div className={`pt-4 mt-4 border-t flex flex-wrap items-center justify-between gap-2 ${
                    darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
                  }`}>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                            darkMode
                              ? 'bg-[#222222] text-[#E8E6DF] border border-[#2E2A22]'
                              : 'bg-[#F2EFE8] text-[#0A192F] border border-[#E5E0D5]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                      darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                    }`}>
                      View Case Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Deep Case Study & Video Preview Modal */}
      {selectedProject && (
        <div
          id="project-case-study-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden my-8 ${
              darkMode ? 'bg-[#181818] border-[#D4AF37]/30 text-[#F5F5F3]' : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className={`flex items-center justify-between p-4 sm:p-5 border-b ${
              darkMode ? 'border-[#2E2A22] bg-[#141414]' : 'border-[#E5E0D5] bg-white'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase ${
                  darkMode ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40' : 'bg-[#0A192F]/10 text-[#0A192F] border border-[#0A192F]/20'
                }`}>
                  {selectedProject.categoryLabel}
                </span>
                <span className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  Client: {selectedProject.client}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(selectedProject)}
                  className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                    darkMode ? 'bg-[#222222] border-[#2E2A22] hover:text-[#D4AF37] text-[#E8E6DF]' : 'bg-white border-[#E5E0D5] hover:text-[#0A192F]'
                  }`}
                  title="Share Case Study"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{copiedLink ? 'Copied Link!' : 'Share'}</span>
                </button>
                <button
                  id="close-case-study-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    darkMode ? 'bg-[#222222] border-[#2E2A22] text-[#E8E6DF] hover:text-white' : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:bg-[#F2EFE8]'
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Interactive Video Player Stage */}
              <div className={`relative aspect-video rounded-2xl overflow-hidden border bg-black shadow-xl ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <img
                  src={selectedProject.videoPoster}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Simulated Interactive Video Screen Elements */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-mono text-[#D4AF37]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>AI Neural Ad Creative (4K Ultra-HD)</span>
                    </div>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Center Play Indicator */}
                  <div className="flex flex-col items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlayingInModal(!isVideoPlayingInModal)}
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer ${
                        darkMode
                          ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212]'
                          : 'bg-gradient-to-r from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6]'
                      }`}
                    >
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </button>
                    <p className="mt-3 text-xs font-mono text-slate-200 tracking-wider">
                      Interactive AI Ad Simulation (Active)
                    </p>
                  </div>

                  {/* Video Progress Bar Simulation */}
                  <div className="space-y-1.5">
                    <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] h-full w-[65%] rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-300">
                      <span>00:18 / 00:30</span>
                      <span>1080x1920 (Feed Optimized)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Case Study Details */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className={`text-xs font-mono mt-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                  Niche: {selectedProject.industry} • Managed by Ali Asif P S
                </p>
              </div>

              {/* Verified Performance Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedProject.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border ${
                      darkMode ? 'bg-[#1e1e1e] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                    }`}
                  >
                    <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      {metric.label}
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className={`text-2xl font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                        {metric.value}
                      </span>
                      {metric.change && (
                        <span className="text-xs font-bold text-emerald-500">
                          {metric.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deep Strategy Breakdown */}
              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-[#1e1e1e] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
              }`}>
                <h4 className={`text-sm font-bold font-heading uppercase tracking-wider mb-2 flex items-center gap-2 ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  <Zap className="w-4 h-4" />
                  Strategy & Execution Architecture
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                  {selectedProject.fullCaseStudy}
                </p>
              </div>

              {/* Tools & Tech Stack */}
              <div>
                <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2.5 ${
                  darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'
                }`}>
                  Tools & Production Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        darkMode ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/30' : 'bg-[#0A192F]/10 text-[#0A192F] border-[#0A192F]/20'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger in Modal */}
              <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <div>
                  <p className={`text-xs font-semibold ${darkMode ? 'text-[#E8E6DF]' : 'text-[#0A192F]'}`}>Want similar ROAS for your brand?</p>
                  <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                    Ali Asif P S builds tailored AI video ad batches and handles paid media scaling.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => {
                    if (onSelectProjectForBrief) onSelectProjectForBrief(selectedProject.title);
                    setSelectedProject(null);
                  }}
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-center shadow-lg transition-all ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6]'
                  }`}
                >
                  Book Similar Campaign
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
