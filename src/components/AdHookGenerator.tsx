import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  Layers, 
  Zap, 
  Video, 
  Target, 
  MessageSquare, 
  Volume2, 
  Sliders, 
  Film
} from 'lucide-react';
import { AD_HOOK_TEMPLATES } from '../data/marketingToolsData';
import { AdHookTemplate, PageId } from '../types';

interface AdHookGeneratorProps {
  darkMode: boolean;
  onSelectHookForBrief?: (hook: AdHookTemplate) => void;
  onNavigate?: (page: PageId) => void;
}

export const AdHookGenerator: React.FC<AdHookGeneratorProps> = ({
  darkMode,
  onSelectHookForBrief,
  onNavigate
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [customBrandName, setCustomBrandName] = useState<string>('');
  const [customCategory, setCustomCategory] = useState<string>('');
  const [customGeneratedHook, setCustomGeneratedHook] = useState<AdHookTemplate | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const industries = [
    'All Industries',
    'D2C E-Commerce & Retail',
    'B2B SaaS & Tech',
    'Ayurveda, Cosmetics & Health',
    'Fintech & Mobile Apps',
    'Luxury, Fashion & Timepieces'
  ];

  const filteredHooks = selectedIndustry === 'All Industries'
    ? AD_HOOK_TEMPLATES
    : AD_HOOK_TEMPLATES.filter(h => h.industry === selectedIndustry);

  const handleCopy = (hook: AdHookTemplate) => {
    const textToCopy = `[AI VIDEO AD HOOK SCRIPT - Curated by Ali Asif P S]
Industry: ${hook.industry}
Framework: ${hook.framework}
Hook Headline: ${hook.hookHeadline}
Visual Direction (3D / Prompt): ${hook.visualPrompt}
Voiceover Script: ${hook.voiceoverScript}
Caption Overlay: ${hook.captionOverlay}
Call to Action: ${hook.ctaText}
Expected 3-Sec Hook Rate: ${hook.estimatedHookRate} | Target ROAS: ${hook.roasPotential}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(hook.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const handleGenerateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customBrandName) return;

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const newCustom: AdHookTemplate = {
        id: `custom-hook-${Date.now()}`,
        industry: customCategory || 'Custom D2C / High-Growth Brand',
        objective: 'Meta Advantage+ Scaling & Reels Virality',
        framework: 'Pattern Interrupt + Neuro-Spatial Depth',
        hookHeadline: `The ${customBrandName} Anomaly Hook`,
        visualPrompt: `3D dynamic macro explode cut of ${customBrandName} featuring photorealistic cinematic lighting, particle physics simulations, and sharp specular reflections (4K Blender / Runway Gen-3 pipeline).`,
        voiceoverScript: `Stop scrolling if you care about quality. Most people don't realize why ${customBrandName} is outperforming legacy alternatives by 400%. Here is the exact reason why.`,
        captionOverlay: `⚠️ Why 10,000+ customers switched to ${customBrandName} this month`,
        ctaText: `Explore ${customBrandName} VIP Offer →`,
        estimatedHookRate: '72.5%',
        roasPotential: '5.2x - 6.8x',
        tags: ['Custom AI Hook', 'High Retention', 'Direct Response']
      };
      setCustomGeneratedHook(newCustom);
    }, 800);
  };

  return (
    <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
      darkMode ? 'bg-[#181818] border-[#2E2A22] backdrop-blur-xl' : 'bg-white border-[#E5E0D5] shadow-xl'
    }`}>
      
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b ${
        darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
      }`}>
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-2 ${
            darkMode
              ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
              : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Direct-Response Marketing Utility</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            Interactive AI Video Ad Hook Generator
          </h3>
          <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Tested 3-second visual interrupt archetypes, voiceover scripts, and kinetic text overlays used across ₹3.8 Cr+ in ad spend.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-[#222222] border-[#2E2A22] text-[#F5F5F3] focus:ring-[#D4AF37]'
                : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F] focus:ring-[#0A192F]'
            }`}
          >
            {industries.map((ind, i) => (
              <option key={i} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Custom Brand Generator Input */}
      <form onSubmit={handleGenerateCustom} className={`mt-6 p-4 rounded-2xl border grid grid-cols-1 sm:grid-cols-12 gap-3 items-center ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
      }`}>
        <div className="sm:col-span-4">
          <input
            type="text"
            placeholder="Your Brand / Product Name (e.g. VoltGlow Optics)"
            value={customBrandName}
            onChange={(e) => setCustomBrandName(e.target.value)}
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-[#222222] border-[#2E2A22] text-[#F5F5F3] placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
            }`}
          />
        </div>
        <div className="sm:col-span-4">
          <input
            type="text"
            placeholder="Niche (e.g. Premium Sunglasses, E-Commerce)"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-[#222222] border-[#2E2A22] text-[#F5F5F3] placeholder:text-[#E8E6DF]/30 focus:ring-[#D4AF37]'
                : 'bg-white border-[#E5E0D5] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:ring-[#0A192F]'
            }`}
          />
        </div>
        <div className="sm:col-span-4">
          <button
            type="submit"
            disabled={!customBrandName || isGenerating}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
              darkMode
                ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-[#D4AF37]/20 hover:from-[#C5A028] hover:to-[#F3E5AB]'
                : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] shadow-[#0A192F]/20 hover:from-[#122A4E] hover:to-[#0A192F]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{isGenerating ? 'Synthesizing...' : 'Generate Custom Hook Script'}</span>
          </button>
        </div>
      </form>

      {/* Custom Generated Hook Card If Available */}
      {customGeneratedHook && (
        <div className={`mt-6 p-5 rounded-2xl border text-left animate-fadeIn ${
          darkMode ? 'border-[#D4AF37] bg-[#1a1710]' : 'border-[#0A192F] bg-white'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold ${
              darkMode
                ? 'bg-gradient-to-r from-[#B89324] to-[#D4AF37] text-[#121212]'
                : 'bg-gradient-to-r from-[#0A192F] to-[#1E3A63] text-[#F9F8F6]'
            }`}>
              ⚡ LIVE CUSTOM GENERATED ANGLE
            </span>
            <button
              onClick={() => handleCopy(customGeneratedHook)}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold border cursor-pointer ${
                darkMode
                  ? 'bg-[#D4AF37]/15 text-[#D4AF37] hover:bg-[#D4AF37]/25 border-[#D4AF37]/40'
                  : 'bg-[#0A192F]/10 text-[#0A192F] hover:bg-[#0A192F]/15 border-[#0A192F]/20'
              }`}
            >
              {copiedId === customGeneratedHook.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === customGeneratedHook.id ? 'Copied!' : 'Copy Script'}</span>
            </button>
          </div>

          <h4 className="text-base font-bold font-heading">{customGeneratedHook.hookHeadline}</h4>
          
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className={`p-3 rounded-xl border ${darkMode ? 'bg-[#222222] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
              <span className={`text-[10px] font-mono block mb-1 font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>🎬 Visual Action (3D Camera Direction)</span>
              <p className={`leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>{customGeneratedHook.visualPrompt}</p>
            </div>
            <div className={`p-3 rounded-xl border ${darkMode ? 'bg-[#222222] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
              <span className="text-[10px] font-mono text-emerald-500 block mb-1 font-semibold">🎙️ Voiceover Hook Script (0-5s)</span>
              <p className={`italic leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>"{customGeneratedHook.voiceoverScript}"</p>
            </div>
          </div>

          <div className={`mt-3 flex items-center justify-between pt-2 border-t text-xs ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
            <span className={`font-mono ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
              Caption: <strong className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>{customGeneratedHook.captionOverlay}</strong>
            </span>
            {onNavigate && (
              <button
                onClick={() => {
                  if (onSelectHookForBrief) onSelectHookForBrief(customGeneratedHook);
                  onNavigate('contact');
                }}
                className={`text-xs font-bold flex items-center gap-1 cursor-pointer ${
                  darkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#0A192F] hover:text-[#0A192F]/80'
                }`}
              >
                <span>Produce This Ad with Ali Asif</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Grid of Tested Hook Templates */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHooks.map((hook) => {
          const isCopied = copiedId === hook.id;
          return (
            <div
              key={hook.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] hover:border-[#D4AF37]/40 hover:shadow-lg'
                  : 'bg-[#F9F8F6] border-[#E5E0D5] hover:border-[#0A192F]/30 hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                
                {/* Meta row */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    darkMode
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30'
                      : 'text-[#0A192F] bg-white border-[#0A192F]/20'
                  }`}>
                    {hook.framework}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      darkMode ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-[#0A192F] bg-white'
                    }`}>
                      Hook Rate: {hook.estimatedHookRate}
                    </span>
                    <button
                      onClick={() => handleCopy(hook)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        isCopied 
                          ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' 
                          : darkMode
                          ? 'bg-[#222222] text-[#E8E6DF]/80 hover:text-[#D4AF37] border-[#2E2A22]'
                          : 'bg-white text-[#0A192F] hover:bg-[#0A192F] hover:text-white border-[#E5E0D5]'
                      }`}
                      title="Copy Hook Script"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <h4 className="text-base font-bold font-heading">{hook.hookHeadline}</h4>
                <p className={`text-[11px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{hook.industry} • {hook.objective}</p>

                {/* Script details */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                    <span className={`text-[10px] font-mono block mb-1 font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>🎬 3D Camera / Visual Action</span>
                    <p className={`leading-relaxed text-[11px] ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                      {hook.visualPrompt}
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                    <span className={`text-[10px] font-mono block mb-1 font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>🎙️ Voiceover Script (Word-for-Word)</span>
                    <p className={`leading-relaxed italic text-[11px] ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                      "{hook.voiceoverScript}"
                    </p>
                  </div>

                  <div className={`p-2.5 rounded-xl border text-[11px] flex items-center justify-between ${
                    darkMode ? 'bg-[#1e1a12] border-[#D4AF37]/20' : 'bg-white border-[#0A192F]/10'
                  }`}>
                    <span className={`font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Overlay Text:</span>
                    <span className={`font-bold font-mono truncate ml-2 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{hook.captionOverlay}</span>
                  </div>
                </div>

              </div>

              {/* Card Footer CTA */}
              <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <span className={`text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                  Target ROAS: <strong className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>{hook.roasPotential}</strong>
                </span>

                {onNavigate && (
                  <button
                    onClick={() => {
                      if (onSelectHookForBrief) onSelectHookForBrief(hook);
                      onNavigate('contact');
                    }}
                    className={`text-xs font-bold flex items-center gap-1 cursor-pointer ${
                      darkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#0A192F] hover:text-[#0A192F]/80'
                    }`}
                  >
                    <span>Deploy in Creative Sprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
