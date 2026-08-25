import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Tag, 
  X, 
  Share2, 
  Bookmark, 
  Send,
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface BlogInsightsSectionProps {
  darkMode: boolean;
}

export const BlogInsightsSection: React.FC<BlogInsightsSectionProps> = ({ darkMode }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(item => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  const handleShareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section
      id="insights"
      className={`py-24 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode
                ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
                : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <BookOpen className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Industry Insights & Playbooks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
              AI Video & Paid Media Strategies
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
              Battle-tested frameworks on beating ad fatigue, CAPI tracking, and neural 3D video marketing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-xs font-mono font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
              Authored by Ali Asif P S
            </span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setSelectedArticle(post)}
              className={`group rounded-3xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/5'
                  : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 hover:shadow-xl shadow-sm'
              }`}
            >
              <div>
                {/* Visual Header Banner */}
                <div className={`w-full h-44 rounded-2xl bg-gradient-to-br ${post.coverGradient} p-5 flex flex-col justify-between mb-5 relative overflow-hidden border border-white/10`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                      {post.category}
                    </span>
                    <button
                      onClick={(e) => toggleBookmark(post.id, e)}
                      className="p-1.5 rounded-lg bg-black/50 text-[#E8E6DF]/80 hover:text-[#D4AF37] transition-colors cursor-pointer"
                      aria-label="Bookmark article"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(post.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <h3 className={`text-lg font-bold font-heading line-clamp-2 transition-colors ${
                  darkMode ? 'group-hover:text-[#D4AF37]' : 'group-hover:text-[#0A192F]'
                }`}>
                  {post.title}
                </h3>
                <p className={`mt-2.5 text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                  darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'
                }`}>
                  {post.excerpt}
                </p>
              </div>

              {/* Footer details */}
              <div className={`pt-4 mt-5 border-t flex items-center justify-between ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Tag className={`w-3 h-3 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                  <span className={`text-[11px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                    {post.tags[0]}
                  </span>
                </div>
                <span className={`text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  Read Playbook
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription Box */}
        <div className={`mt-16 p-8 sm:p-10 rounded-3xl border relative overflow-hidden ${
          darkMode 
            ? 'bg-gradient-to-r from-[#181818] via-[#141414] to-[#181818] border-[#2E2A22] shadow-2xl' 
            : 'bg-gradient-to-r from-white via-[#F2EFE8] to-white border-[#E5E0D5] shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-2 ${
                darkMode
                  ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
                  : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
              }`}>
                <Sparkles className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
                <span>Weekly Growth Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Get Weekly AI Ad Prompt Stacks & Meta Algorithm Updates
              </h3>
              <p className={`mt-2 text-xs sm:text-sm ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
                Join 14,000+ e-commerce founders and media buyers receiving Ali Asif's vetted creative test logs.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubmitted ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>You are subscribed! Check your inbox for the AI Video Hook Template.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={`flex-1 px-4 py-3 rounded-xl text-xs font-medium border transition-all focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-[#222222] border-[#2E2A22] text-[#F5F5F3] placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                        : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
                    }`}
                  />
                  <button
                    type="submit"
                    id="newsletter-subscribe-btn"
                    className={`px-5 py-3 rounded-xl text-xs font-bold shadow-md whitespace-nowrap transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-[#D4AF37]/20 hover:from-[#C5A028] hover:to-[#F3E5AB]'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] shadow-[#0A192F]/20 hover:from-[#122A4E] hover:to-[#0A192F]'
                    }`}
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          id="article-reader-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 ${
              darkMode ? 'bg-[#181818] border-[#2E2A22] text-[#F5F5F3]' : 'bg-white border-[#E5E0D5] text-[#0A192F]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-4 sm:p-5 border-b ${
              darkMode ? 'border-[#2E2A22] bg-[#141414]' : 'border-[#E5E0D5] bg-[#F2EFE8]'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border ${
                  darkMode
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/30'
                    : 'bg-[#0A192F]/10 text-[#0A192F] border-[#0A192F]/20'
                }`}>
                  {selectedArticle.category}
                </span>
                <span className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  {selectedArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareArticle}
                  className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 cursor-pointer ${
                    darkMode ? 'bg-[#222222] border-[#2E2A22] hover:text-[#D4AF37] text-[#E8E6DF]/80' : 'bg-white border-[#E5E0D5] hover:bg-[#0A192F] hover:text-white'
                  }`}
                  title="Copy link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className={`p-2 rounded-xl border cursor-pointer ${
                    darkMode ? 'bg-[#222222] border-[#2E2A22] text-[#E8E6DF]/70 hover:text-white' : 'bg-white border-[#E5E0D5] text-[#0A192F]/70 hover:text-[#0A192F]'
                  }`}
                  aria-label="Close article"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>

              {/* Author pill */}
              <div className={`flex items-center gap-3 pb-4 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md ${
                  darkMode
                    ? 'bg-gradient-to-tr from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212]'
                    : 'bg-gradient-to-tr from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6]'
                }`}>
                  AA
                </div>
                <div>
                  <p className="text-xs font-bold font-heading">{selectedArticle.author.name}</p>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                    {selectedArticle.author.role} • Published {selectedArticle.publishedAt}
                  </p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                {selectedArticle.content.map((p, i) => (
                  <p key={i} className={darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Key SEO Tags */}
              <div className={`pt-6 border-t ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                <p className={`text-xs font-mono uppercase mb-2 ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                  Target Keywords & SEO Topics:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.seoKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                        darkMode
                          ? 'bg-[#222222] text-[#D4AF37] border-[#D4AF37]/30'
                          : 'bg-[#F2EFE8] text-[#0A192F] border-[#0A192F]/20'
                      }`}
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Consultation CTA */}
              <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
                darkMode ? 'bg-[#222222] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
              }`}>
                <div>
                  <p className={`text-xs font-bold ${darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'}`}>Need this implemented for your brand?</p>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                    Schedule a 1-on-1 strategy teardown directly with Ali Asif P S.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6]'
                  }`}
                >
                  Book Teardown Call
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
