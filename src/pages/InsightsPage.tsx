import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Tag, 
  Download, 
  FileText, 
  Share2, 
  CheckCircle2, 
  Layers, 
  Zap, 
  X,
  Mail
} from 'lucide-react';
import { BLOG_POSTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { BlogPost, PageId } from '../types';

interface InsightsPageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  darkMode,
  onNavigate
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const extendedPosts: BlogPost[] = [
    ...BLOG_POSTS_DATA,
    {
      id: "10-hook-archetypes-2026",
      slug: "10-hook-archetypes-reels-shorts",
      title: "The 10 Pattern-Interrupt Hook Archetypes That Stopped 185M+ Scrolls",
      excerpt: "Why standard 'POV' and 'Stop Scrolling' hooks are failing, and the 10 neuro-aesthetic visual interrupt formulas that guarantee 65%+ 3-second retention.",
      content: [
        "In short-form video advertising across Instagram Reels, YouTube Shorts, and TikTok, your creative lives or dies in the first 1.8 seconds.",
        "Archetype 1: The Macro-Physical Anomaly. Starting with a 3D close-up of a product defying gravity or slicing in half with liquid splashes.",
        "Archetype 2: The Counter-Intuitive Truth. Challenging common industry myths in the very first sentence with bold contrasting typography.",
        "Archetype 3: The Split-Screen AI Comparison. Showing standard low-res results on the left vs neural 4K performance on the right.",
        "By systematically cycling through these 10 archetypes in every 12-ad creative batch, we eliminate creative fatigue and sustain high ROAS."
      ],
      category: "Creative Strategy",
      readTime: "6 min read",
      publishedAt: "Aug 2026",
      author: {
        name: "Ali Asif P S",
        role: "Digital Marketer & AI Specialist",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Video Hooks", "Reels Ads", "YouTube Shorts", "Direct Response"],
      seoKeywords: ["Video Ad Hooks", "3 Second Retention", "Pattern Interrupt Formats"],
      coverGradient: "from-teal-900/60 to-cyan-900/40"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  const handleDownloadResource = (resourceName: string) => {
    setDownloadNotification(`Preparing download: "${resourceName}"...`);
    setTimeout(() => {
      setDownloadNotification(`✓ Download started for "${resourceName}"`);
      setTimeout(() => setDownloadNotification(null), 3000);
    }, 1000);
  };

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'}`}>
      
      {/* SECTION 1: Insights & Playbooks Hero */}
      <section className={`relative pt-32 pb-20 overflow-hidden border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold mb-4 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Growth Intelligence & Ad Frameworks</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Performance Marketing & AI Playbooks
          </h1>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Tactical breakdowns, AI video prompt engineering workflows, and Meta Advantage+ bidding frameworks curated by <strong>Ali Asif P S</strong>.
          </p>
        </div>
      </section>

      {/* Download feedback notification */}
      {downloadNotification && (
        <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce ${
          darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
        }`}>
          <CheckCircle2 className="w-4 h-4" />
          <span>{downloadNotification}</span>
        </div>
      )}

      {/* SECTION 2: Comprehensive Article Reader & Playbooks Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extendedPosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                darkMode 
                  ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10' 
                  : 'bg-white border-[#E5E0D5] hover:border-[#0A192F]/40 hover:shadow-xl'
              }`}
            >
              <div className="p-7 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                    darkMode
                      ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/35'
                      : 'bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5]'
                  }`}>
                    {post.category}
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className={`text-xl sm:text-2xl font-bold font-heading transition-colors ${
                  darkMode ? 'hover:text-[#D4AF37]' : 'hover:text-[#0A192F]'
                }`}>
                  {post.title}
                </h2>

                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2.5 py-0.5 rounded text-[10px] font-mono ${
                      darkMode ? 'bg-[#222222] text-[#E8E6DF]/70' : 'bg-[#F2EFE8] text-[#0A192F]/70'
                    }`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-7 sm:p-8 pt-0 border-t mt-4 pt-4 flex items-center justify-between ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <div className="flex items-center gap-2.5">
                  <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]/30" />
                  <div>
                    <p className="text-xs font-bold">{post.author.name}</p>
                    <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{post.publishedAt}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1 cursor-pointer ${
                    darkMode
                      ? 'text-[#D4AF37] hover:bg-[#1e1a12] border-[#D4AF37]/35'
                      : 'text-[#0A192F] hover:bg-[#F2EFE8] border-[#E5E0D5]'
                  }`}
                >
                  <span>Read Playbook</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* SECTION 3: The 4-Stage Anatomy of a 5x ROAS AI Video Ad */}
      <section className={`py-20 border-y transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
              darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
            }`}>
              <Zap className="w-3.5 h-3.5" />
              <span>Video Ad Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
              Anatomy of a High-ROAS Video Ad
            </h2>
            <p className={`mt-3 text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Every second of our AI-generated video commercials is timed for maximum psychological conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                time: "0.0s - 2.5s",
                phase: "Pattern Interrupt",
                goal: "Shatter the user's scroll trance",
                detail: "High-speed 3D macro rotation, bold text overlays, and sound FX anomaly to secure >65% 3-second retention.",
                color: darkMode ? "text-[#D4AF37]" : "text-[#0A192F]"
              },
              {
                time: "2.5s - 8.0s",
                phase: "Agitation & Core Pain",
                goal: "Establish deep problem resonance",
                detail: "Highlight the specific frustration your target audience experiences with current market alternatives.",
                color: "text-purple-400"
              },
              {
                time: "8.0s - 20.0s",
                phase: "The Spatial Reveal",
                goal: "Visual demonstration of the product",
                detail: "Photorealistic 3D exploded view CGI renders or AI feature demos demonstrating proprietary mechanisms.",
                color: "text-blue-400"
              },
              {
                time: "20.0s - 30.0s",
                phase: "Irresistible Offer & CTA",
                goal: "Drive direct frictionless clicks",
                detail: "Clear value proposition, risk reversal guarantee, and compelling discount/scarcity call-to-action.",
                color: "text-emerald-400"
              }
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
                }`}
              >
                <span className={`text-xs font-mono font-bold ${phase.color}`}>{phase.time}</span>
                <h3 className="text-lg font-bold font-heading mt-1 mb-2">{phase.phase}</h3>
                <p className={`text-xs font-mono mb-3 font-semibold ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{phase.goal}</p>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Free Downloadable Growth & Media Buying Resources */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Download className="w-3.5 h-3.5" />
            <span>Swipe Files & Growth Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
            Free Performance Marketing Toolkits
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Directly applicable spreadsheets, hook templates, and ad audit checklists used internally by our agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "100 High-Retention Ad Hook Templates",
              format: "PDF & Notion Swipe File",
              desc: "Field-tested ad opening lines and visual framing scripts for Meta Ads, Reels, and TikTok.",
              fileName: "100_High_Retention_Hooks_Asif.pdf"
            },
            {
              title: "Meta Ad Account Audit Checklist (2026)",
              format: "Interactive Google Sheet",
              desc: "42-point structural audit checking Advantage+ settings, CAPI event match scores, and bidding caps.",
              fileName: "Meta_Account_Audit_Matrix_2026.xlsx"
            },
            {
              title: "ROAS & Unit Economics Modeling Tool (INR)",
              format: "Financial Model Template",
              desc: "Calculate break-even ROAS, CAC targets, and inventory forecasting in Indian Rupee format.",
              fileName: "ROAS_Unit_Economics_Model_INR.xlsx"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border flex flex-col justify-between ${
                darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className={`p-3 rounded-2xl w-fit ${
                  darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'
                }`}>
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading">{item.title}</h3>
                <p className={`text-xs font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{item.format}</p>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => handleDownloadResource(item.title)}
                className={`mt-6 w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-[#222222] hover:bg-[#2e2a22] text-[#E8E6DF] hover:text-[#D4AF37]'
                    : 'bg-[#F2EFE8] hover:bg-[#E5E0D5] text-[#0A192F]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Instant Download</span>
              </button>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 5: Weekly Growth Newsletter Dispatch */}
      <section className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className={`p-3 rounded-2xl w-fit mx-auto ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'
          }`}>
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-heading">
            Join 12,000+ Performance Marketers
          </h2>

          <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Get a weekly breakdown of new AI video prompt templates, Meta algorithm updates, and live ROAS case studies delivered to your inbox every Tuesday.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className={`flex-grow px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
                darkMode 
                  ? 'bg-[#181818] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]' 
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
              }`}
            />
            <button
              type="submit"
              className={`px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                  : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6]'
              }`}
            >
              {newsletterSubscribed ? 'Subscribed!' : 'Get Free Dispatch'}
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs font-mono text-emerald-500">
              ✓ You're in! Welcome to the Performance Creative Dispatch.
            </p>
          )}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-6 p-6 sm:p-9 ${
              darkMode ? 'bg-[#181818] border-[#D4AF37]/35 text-[#F5F5F3]' : 'bg-white border-[#E5E0D5] text-[#0A192F]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                darkMode
                  ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/35'
                  : 'bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5]'
              }`}>
                {selectedPost.category} • {selectedPost.readTime}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className={`p-2 rounded-full cursor-pointer ${
                  darkMode ? 'bg-[#222222] text-[#E8E6DF] hover:bg-[#2e2a22]' : 'bg-[#F2EFE8] text-[#0A192F] hover:bg-[#E5E0D5]'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black font-heading leading-tight mb-4">
              {selectedPost.title}
            </h1>

            <div className={`flex items-center gap-3 pb-6 border-b mb-6 text-xs ${
              darkMode ? 'border-[#2E2A22] text-[#E8E6DF]/60' : 'border-[#E5E0D5] text-[#0A192F]/60'
            }`}>
              <span>By {selectedPost.author.name}</span>
              <span>•</span>
              <span>Published {selectedPost.publishedAt}</span>
            </div>

            <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
              darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
            }`}>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onNavigate('contact');
                }}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                    : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6]'
                }`}
              >
                <span>Discuss Implementing This Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedPost(null)}
                className={`text-xs font-bold cursor-pointer ${
                  darkMode ? 'text-[#E8E6DF]/60 hover:text-[#D4AF37]' : 'text-[#0A192F]/60 hover:text-[#0A192F]'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
