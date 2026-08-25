import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Film, 
  Calculator, 
  MessageCircle, 
  ChevronUp, 
  ChevronDown, 
  Layers, 
  Zap, 
  X,
  PhoneCall
} from 'lucide-react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingMarketerToolbarProps {
  darkMode: boolean;
  onOpenAudit: () => void;
  onOpenHookGen: () => void;
  onOpenBurnModeler: () => void;
  onOpenTeardown: () => void;
  onNavigate: (page: PageId) => void;
}

export const FloatingMarketerToolbar: React.FC<FloatingMarketerToolbarProps> = ({
  darkMode,
  onOpenAudit,
  onOpenHookGen,
  onOpenBurnModeler,
  onOpenTeardown,
  onNavigate
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Ali Asif, I saw your Digital Marketing portfolio and would like to discuss scaling our Meta & Google Ads / AI Video Creatives.");
    window.open(`https://wa.me/919846012345?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="Marketer Quick Toolkit" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Expanded Tools Menu */}
      {isOpen && (
        <div className={`p-3 rounded-2xl border shadow-2xl backdrop-blur-xl animate-scaleUp transition-all w-64 mb-2 ${
          darkMode ? 'bg-[#181818]/95 border-[#2E2A22] text-[#F5F5F3]' : 'bg-white/95 border-[#E5E0D5] text-[#0A192F]'
        }`}>
          <div className={`flex items-center justify-between px-2 py-1.5 border-b mb-2 ${
            darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
          }`}>
            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
              darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
            }`}>
              Marketer Quick Toolkit
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className={`p-1 cursor-pointer ${darkMode ? 'text-[#E8E6DF]/50 hover:text-white' : 'text-[#0A192F]/50 hover:text-[#0A192F]'}`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => {
                onOpenHookGen();
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer ${
                darkMode ? 'hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]' : 'hover:bg-[#0A192F]/10 hover:text-[#0A192F]'
              }`}
            >
              <Sparkles className={`w-4 h-4 shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>AI Video Hook Generator</span>
            </button>

            <button
              onClick={() => {
                onOpenAudit();
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer ${
                darkMode ? 'hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]' : 'hover:bg-[#0A192F]/10 hover:text-[#0A192F]'
              }`}
            >
              <Activity className={`w-4 h-4 shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Ad & CAPI Health Audit</span>
            </button>

            <button
              onClick={() => {
                onOpenBurnModeler();
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer ${
                darkMode ? 'hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]' : 'hover:bg-[#0A192F]/10 hover:text-[#0A192F]'
              }`}
            >
              <Film className={`w-4 h-4 shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Creative Burn Modeler</span>
            </button>

            <button
              onClick={() => {
                onOpenTeardown();
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer ${
                darkMode ? 'hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]' : 'hover:bg-[#0A192F]/10 hover:text-[#0A192F]'
              }`}
            >
              <Zap className={`w-4 h-4 shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>A/B Ad Creative Teardown</span>
            </button>

            <button
              onClick={() => {
                onNavigate('calculator');
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer ${
                darkMode ? 'hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]' : 'hover:bg-[#0A192F]/10 hover:text-[#0A192F]'
              }`}
            >
              <Calculator className={`w-4 h-4 shrink-0 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Interactive ROI Calculator</span>
            </button>

            <div className={`pt-2 border-t ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Ali Asif P S</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleWhatsApp}
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
          title="Direct WhatsApp with Ali Asif"
        >
          <MessageCircle className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-all cursor-pointer text-xs font-bold ${
            darkMode
              ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-[#D4AF37]/25'
              : 'bg-gradient-to-r from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6] shadow-[#0A192F]/20'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Marketer Tools</span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

    </aside>
  );
};
