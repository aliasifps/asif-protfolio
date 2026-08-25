import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Layers, 
  Zap, 
  Eye, 
  Play,
  Film
} from 'lucide-react';
import { AD_TEARDOWN_COMPARISON } from '../data/marketingToolsData';
import { PageId } from '../types';

interface AdCreativeCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onNavigate?: (page: PageId) => void;
}

export const AdCreativeCompareModal: React.FC<AdCreativeCompareModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onNavigate
}) => {
  const [activeHighlight, setActiveHighlight] = useState<number>(0);

  if (!isOpen) return null;

  const teardown = AD_TEARDOWN_COMPARISON;

  const anatomicalHighlights = [
    {
      title: "0.0s - 1.8s: The Neuro-Visual Pattern Interrupt",
      description: "Standard static ads allow the user's thumb to scroll past without conscious engagement. Ali Asif's 3D fluid explosion disrupts visual flow, generating a 68.4% 3-second hook retention rate.",
      impact: "+240% CTR Lift"
    },
    {
      title: "2.0s - 5.0s: Tactile Ownership & 3D Spatial Depth",
      description: "Macro camera rotations with realistic lighting reflections trick the consumer's visual cortex into perceiving tactile physical mass before ever buying.",
      impact: "+188% Conversion Rate"
    },
    {
      title: "6.0s - 10.0s: Dynamic High-Contrast Kinetic Captions",
      description: "85% of social users view ads on mute. High-contrast, center-aligned cyan typography ensures 100% value proposition comprehension without sound.",
      impact: "-42% Cost Per Acquisition"
    },
    {
      title: "11.0s - 15.0s: Irresistible Risk-Reversal & Clear CTA",
      description: "Direct urgency badge + explicit money-back guarantee eradicates purchase hesitation at the final decision junction.",
      impact: "5.42x Sustained ROAS"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-5xl rounded-3xl border overflow-hidden shadow-2xl transition-all my-8 ${
        darkMode ? 'bg-[#181818] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F]'
      }`}>
        
        {/* Modal Top Bar */}
        <div className={`p-5 sm:p-6 border-b flex items-center justify-between ${
          darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl ${
              darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-white text-[#0A192F] border border-[#0A192F]/15'
            }`}>
              <Film className={`w-5 h-5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            </div>
            <div>
              <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
              }`}>
                Direct-Response Case Study Teardown
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                {teardown.title} ({teardown.industry})
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-[#222222] text-[#E8E6DF]/70 hover:text-white border-[#2E2A22]'
                : 'bg-white text-[#0A192F]/70 hover:text-[#0A192F] border-[#E5E0D5]'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Side by Side Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Control: Losing Ad */}
            <div className={`p-6 rounded-2xl border text-left space-y-4 ${
              darkMode ? 'bg-[#141414] border-rose-500/30' : 'bg-white border-rose-300'
            }`}>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/15 text-rose-500 border border-rose-500/30">
                  ❌ CONTROL (Losing Static Ad)
                </span>
                <span className={`text-xs font-mono font-bold ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Standard Agency</span>
              </div>

              {/* Mock Media Visual */}
              <div className={`relative aspect-video rounded-xl border flex flex-col items-center justify-center p-4 overflow-hidden ${
                darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
              }`}>
                <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-2">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <span className={`text-xs font-medium text-center ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                  Flat 2D Stock Graphic with Static Text
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>ROAS</span>
                  <span className="text-sm font-bold text-rose-500 font-mono">{teardown.controlAd.roas}</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Hook Rate</span>
                  <span className="text-sm font-bold font-mono">{teardown.controlAd.hookRate}</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>CTR</span>
                  <span className="text-sm font-bold font-mono">{teardown.controlAd.ctr}</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>CAC</span>
                  <span className="text-sm font-bold text-rose-500 font-mono">{teardown.controlAd.cac}</span>
                </div>
              </div>

              {/* Flaws List */}
              <div className="space-y-2 pt-2">
                <span className={`text-xs font-mono font-bold uppercase block ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Identified Conversion Flaws:</span>
                {teardown.controlAd.flaws.map((flaw, i) => (
                  <div key={i} className="text-xs text-rose-500/80 flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>{flaw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Variant B: Winning AI 3D Ad */}
            <div className={`p-6 rounded-2xl border text-left space-y-4 shadow-lg ${
              darkMode
                ? 'bg-[#141414] border-[#D4AF37]/50 shadow-[#D4AF37]/5'
                : 'bg-white border-[#0A192F]/40 shadow-[#0A192F]/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  darkMode
                    ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
                    : 'bg-[#0A192F] text-[#F9F8F6]'
                }`}>
                  ✅ WINNER: Ali Asif AI 3D Commercial
                </span>
                <span className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>+282% ROAS Lift</span>
              </div>

              {/* Mock Media Visual */}
              <div className={`relative aspect-video rounded-xl border flex flex-col items-center justify-center p-4 overflow-hidden ${
                darkMode ? 'bg-[#1a1710] border-[#D4AF37]/30' : 'bg-[#F2EFE8] border-[#0A192F]/20'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-lg ${
                  darkMode ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37]' : 'bg-[#0A192F]/10 border border-[#0A192F]/30 text-[#0A192F]'
                }`}>
                  <Sparkles className="w-8 h-8" />
                </div>
                <span className={`relative text-xs font-bold text-center ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                  Photorealistic 3D Macro Simulation + Neural Audio
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>ROAS</span>
                  <span className={`text-sm font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{teardown.variantAd.roas}</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Hook Rate</span>
                  <span className="text-sm font-black font-mono">{teardown.variantAd.hookRate}</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>CTR</span>
                  <span className="text-sm font-black font-mono">{teardown.variantAd.ctr}</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
                  <span className={`text-[10px] block font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>CAC</span>
                  <span className="text-sm font-black text-emerald-500 font-mono">{teardown.variantAd.cac}</span>
                </div>
              </div>

              {/* Strengths List */}
              <div className="space-y-2 pt-2">
                <span className={`text-xs font-mono font-bold uppercase block ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Why This Creative Won:</span>
                {teardown.variantAd.strengths.map((str, i) => (
                  <div key={i} className={`text-xs flex items-start gap-2 ${darkMode ? 'text-[#E8E6DF]/90' : 'text-[#0A192F]/90'}`}>
                    <span className={`font-bold shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>✓</span>
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Timeline Breakdown */}
          <div className={`p-6 rounded-2xl border text-left space-y-4 ${
            darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
          }`}>
            <h4 className="text-base font-bold font-heading flex items-center gap-2">
              <Layers className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Second-by-Second Creative Engineering Breakdown</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {anatomicalHighlights.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHighlight(index)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    activeHighlight === index
                      ? darkMode
                        ? 'bg-[#1e1a12] border-[#D4AF37] shadow-md'
                        : 'bg-[#F2EFE8] border-[#0A192F] shadow-sm'
                      : darkMode
                      ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF]/70 hover:border-[#D4AF37]/50'
                      : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F]/70 hover:border-[#0A192F]/30'
                  }`}
                >
                  <div className="text-xs font-bold mb-1">{item.title}</div>
                  <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>{item.description}</p>
                  <div className={`mt-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded inline-block ${
                    darkMode ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-[#0A192F] bg-white border border-[#0A192F]/20'
                  }`}>
                    {item.impact}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-5 sm:p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-[#2E2A22] bg-[#141414]' : 'border-[#E5E0D5] bg-[#F9F8F6]'
        }`}>
          <span className={`text-xs ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Scale your brand's ROAS with custom AI 3D Video Creatives.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                darkMode
                  ? 'bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border-[#2E2A22]'
                  : 'bg-white hover:bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5]'
              }`}
            >
              Close Teardown
            </button>

            {onNavigate && (
              <button
                onClick={() => {
                  onClose();
                  onNavigate('services');
                }}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                    : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F]'
                }`}
              >
                <span>View Creative Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
