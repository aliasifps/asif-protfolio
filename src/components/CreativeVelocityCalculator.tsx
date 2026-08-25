import React, { useState } from 'react';
import { 
  Film, 
  TrendingDown, 
  Sparkles, 
  DollarSign, 
  ArrowRight, 
  Layers, 
  Zap, 
  Clock, 
  Calculator,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { formatINR } from '../utils/formatters';

interface CreativeVelocityCalculatorProps {
  darkMode: boolean;
  onNavigate?: (page: PageId) => void;
}

export const CreativeVelocityCalculator: React.FC<CreativeVelocityCalculatorProps> = ({
  darkMode,
  onNavigate
}) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(350000); // 3.5 Lakhs
  const [cpm, setCpm] = useState<number>(220); // ₹220 average Indian e-comm CPM
  const [targetFrequency, setTargetFrequency] = useState<number>(2.4);

  // Calculations
  const totalImpressions = (monthlySpend / cpm) * 1000;
  const weeklyImpressions = totalImpressions / 4.33;
  
  // High-performance media buying math:
  // After ~250k impressions per individual creative asset in mid-sized Indian/global audiences, CTR drops by ~40%
  const impressionsPerCreativeThreshold = 220000;
  const creativesNeededPerMonth = Math.max(4, Math.ceil(totalImpressions / impressionsPerCreativeThreshold));
  const weeklyVelocity = Math.ceil(creativesNeededPerMonth / 4);
  const fatigueDays = Math.max(3, Math.round(30 / creativesNeededPerMonth));

  // Traditional agency video production cost (₹25,000 per video shoot + editing)
  const traditionalCost = creativesNeededPerMonth * 22000;
  // Ali Asif AI Video Suite Monthly Retainer (₹34,999 for 12 videos)
  const aliAsifCost = 34999;
  const costSavings = Math.max(0, traditionalCost - aliAsifCost);

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
            <Film className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Performance Media Buying Engine</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            Creative Velocity & Ad Fatigue Modeler
          </h3>
          <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Calculate the exact number of fresh AI video hooks required each month to beat Meta frequency decay and prevent ROAS drop-off.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        
        {/* Sliders Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Slider 1: Monthly Ad Spend */}
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <label className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                Monthly Ad Spend (INR)
              </label>
              <span className={`text-base font-mono font-black ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                {formatINR(monthlySpend)}
              </span>
            </div>
            <input
              type="range"
              min={50000}
              max={5000000}
              step={25000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                darkMode ? 'bg-[#222222] accent-[#D4AF37]' : 'bg-[#E5E0D5] accent-[#0A192F]'
              }`}
            />
            <div className={`flex justify-between text-[10px] font-mono mt-1 ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>
              <span>₹50,000</span>
              <span>₹25 Lakhs</span>
              <span>₹50 Lakhs</span>
            </div>
          </div>

          {/* Slider 2: Average CPM */}
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <label className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                Estimated CPM (Cost Per 1,000 Impressions)
              </label>
              <span className={`text-base font-mono font-black ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                ₹{cpm}
              </span>
            </div>
            <input
              type="range"
              min={80}
              max={600}
              step={10}
              value={cpm}
              onChange={(e) => setCpm(Number(e.target.value))}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                darkMode ? 'bg-[#222222] accent-[#D4AF37]' : 'bg-[#E5E0D5] accent-[#0A192F]'
              }`}
            />
            <div className={`flex justify-between text-[10px] font-mono mt-1 ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>
              <span>₹80 (Broad India Feed)</span>
              <span>₹220 (E-Comm Reels)</span>
              <span>₹600 (High-Ticket / Global)</span>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
              <span className={`text-[10px] font-mono block ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Monthly Impressions</span>
              <span className="text-xl font-bold font-mono">
                {(totalImpressions / 1000000).toFixed(2)}M
              </span>
            </div>
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'}`}>
              <span className={`text-[10px] font-mono block ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Creative Fatigue Window</span>
              <span className={`text-xl font-bold font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                Every {fatigueDays} Days
              </span>
            </div>
          </div>

        </div>

        {/* Output & Comparison Column */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-[#141414] border-[#D4AF37]/35' : 'bg-[#F9F8F6] border-[#0A192F]/20'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Recommended Velocity</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
              }`}>
                Optimal ROAS Protection
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-black font-mono mb-2">
              {creativesNeededPerMonth} <span className={`text-xl ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>AI Video Hooks / mo</span>
            </div>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>
              At your spend of {formatINR(monthlySpend)}, your audience hits ad fatigue every <strong className={darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}>{fatigueDays} days</strong>. Launching <strong>{weeklyVelocity} fresh video iterations per week</strong> prevents CPM spikes and maintains 4.8x+ ROAS.
            </p>
          </div>

          {/* Cost Comparison vs Traditional Agency */}
          <div className={`p-5 rounded-2xl border space-y-3 ${
            darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
          }`}>
            <span className={`text-xs font-mono font-bold uppercase block ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
              Budget Efficiency Comparison
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20">
                <span className={darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}>Traditional Agency Studio ({creativesNeededPerMonth} video shoots):</span>
                <span className="font-mono font-bold text-rose-500">{formatINR(traditionalCost)}/mo</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <span className="font-medium">Ali Asif AI Video Ads Suite (12+ variations):</span>
                <span className="font-mono font-bold text-emerald-500">{formatINR(aliAsifCost)}/mo</span>
              </div>
            </div>

            <div className={`pt-3 border-t flex items-center justify-between text-xs ${
              darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
            }`}>
              <span className={darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}>Monthly Creative Budget Saved:</span>
              <span className="font-mono font-black text-emerald-500 text-sm">
                + {formatINR(costSavings)} / month
              </span>
            </div>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('services')}
              className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                  : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F]'
              }`}
            >
              <span>Subscribe to AI Video Ads Suite (₹34,999/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

        </div>

      </div>

    </div>
  );
};
