import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  IndianRupee,
  Layers,
  BarChart3
} from 'lucide-react';
import { formatINR, formatINRLakhs } from '../utils/formatters';

interface RoiCalculatorProps {
  darkMode: boolean;
  onApplyCalculationsToBrief?: (roiData: { spend: number; projectedRevenue: number; roas: number }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  darkMode,
  onApplyCalculationsToBrief
}) => {
  // Monthly ad spend in INR (default ₹1,50,000)
  const [monthlySpend, setMonthlySpend] = useState<number>(150000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.0);
  // Average Order Value in INR (default ₹2,500)
  const [avgOrderValue, setAvgOrderValue] = useState<number>(2500);
  const [niche, setNiche] = useState<string>('ecommerce');

  // Multiplier calculation based on historical campaign data by Ali Asif P S
  const calculations = useMemo(() => {
    // With AI Video Ads testing and Meta/Google optimization
    // Typically boosts ROAS by 1.8x to 2.4x
    const projectedRoas = Math.min(6.5, Number((currentRoas * 2.1).toFixed(2)));
    const currentRevenue = monthlySpend * currentRoas;
    const projectedRevenue = monthlySpend * projectedRoas;
    const additionalRevenue = projectedRevenue - currentRevenue;
    
    // Traditional studio video shoot cost in INR (₹1,50,000+) vs AI Video Suite (₹34,999)
    const traditionalCreativeCost = Math.round(monthlySpend * 0.45);
    const aiCreativeSavings = Math.max(65000, Math.round(traditionalCreativeCost * 0.75));
    const estimatedNewPurchases = Math.round(projectedRevenue / avgOrderValue);

    return {
      projectedRoas,
      currentRevenue,
      projectedRevenue,
      additionalRevenue,
      aiCreativeSavings,
      estimatedNewPurchases
    };
  }, [monthlySpend, currentRoas, avgOrderValue, niche]);

  return (
    <section
      id="calculator"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'
      }`}
    >
      {/* Background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
        darkMode ? 'bg-[#D4AF37]/8' : 'bg-[#0A192F]/5'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode
              ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35'
              : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Calculator className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Interactive ROI & Ad Spend Estimator (in INR ₹)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Calculate Your AI Video & Paid Scaling Multiplier
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
            See how high-retention AI video creatives and Meta/Google Ads optimization transform your ad spend into predictable revenue in Indian Rupees (₹).
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (Left 6 cols) */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
            darkMode ? 'bg-[#181818] border-[#2E2A22] backdrop-blur-xl' : 'bg-white border-[#E5E0D5] shadow-lg'
          }`}>
            <div className="space-y-6">
              
              {/* Niche Selector */}
              <div>
                <label className={`block text-xs font-mono uppercase font-bold mb-2 ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  Select Industry & Business Model
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'ecommerce', label: 'E-Commerce / D2C' },
                    { id: 'saas', label: 'B2B SaaS / Tech' },
                    { id: 'high-ticket', label: 'Services & Coaching' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setNiche(item.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        niche === item.id
                          ? darkMode
                            ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] shadow-sm font-bold'
                            : 'bg-[#0A192F] border-[#0A192F] text-[#F9F8F6] shadow-sm font-bold'
                          : darkMode
                          ? 'bg-[#222222] border-[#2E2A22] text-[#E8E6DF]/70 hover:text-white'
                          : 'bg-[#F2EFE8] border-[#E5E0D5] text-[#0A192F]/70 hover:text-[#0A192F]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Monthly Ad Spend in INR */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className={`text-xs font-bold font-heading uppercase ${
                    darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'
                  }`}>
                    Monthly Paid Ad Spend (Meta / Google / YouTube)
                  </label>
                  <span className={`font-mono text-base font-extrabold ${
                    darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                  }`}>
                    {formatINR(monthlySpend)} / mo
                  </span>
                </div>
                <input
                  id="monthly-spend-slider"
                  type="range"
                  min="25000"
                  max="2500000"
                  step="25000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                    darkMode
                      ? 'bg-[#222222] border border-[#2E2A22] accent-[#D4AF37]'
                      : 'bg-[#E5E0D5] border border-[#D5D0C5] accent-[#0A192F]'
                  }`}
                />
                <div className={`flex justify-between text-[10px] font-mono ${
                  darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'
                }`}>
                  <span>₹25,000/mo</span>
                  <span>₹10,00,000/mo (₹10L)</span>
                  <span>₹25,00,000/mo (₹25L)</span>
                </div>
              </div>

              {/* Slider 2: Current Benchmark ROAS */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className={`text-xs font-bold font-heading uppercase ${
                    darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'
                  }`}>
                    Current Return on Ad Spend (ROAS)
                  </label>
                  <span className={`font-mono text-base font-extrabold ${
                    darkMode ? 'text-[#F3E5AB]' : 'text-[#1E3A63]'
                  }`}>
                    {currentRoas.toFixed(1)}x
                  </span>
                </div>
                <input
                  id="current-roas-slider"
                  type="range"
                  min="0.8"
                  max="4.0"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                    darkMode
                      ? 'bg-[#222222] border border-[#2E2A22] accent-[#F3E5AB]'
                      : 'bg-[#E5E0D5] border border-[#D5D0C5] accent-[#1E3A63]'
                  }`}
                />
                <div className={`flex justify-between text-[10px] font-mono ${
                  darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'
                }`}>
                  <span>0.8x (Struggling)</span>
                  <span>2.0x (Average)</span>
                  <span>4.0x (Strong)</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value / Deal Size in INR */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className={`text-xs font-bold font-heading uppercase ${
                    darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'
                  }`}>
                    Average Order Value (AOV) / Lead Value
                  </label>
                  <span className="font-mono text-base font-extrabold text-emerald-500">
                    {formatINR(avgOrderValue)}
                  </span>
                </div>
                <input
                  id="avg-order-slider"
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                    darkMode
                      ? 'bg-[#222222] border border-[#2E2A22] accent-emerald-500'
                      : 'bg-[#E5E0D5] border border-[#D5D0C5] accent-emerald-600'
                  }`}
                />
                <div className={`flex justify-between text-[10px] font-mono ${
                  darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'
                }`}>
                  <span>₹500</span>
                  <span>₹10,000</span>
                  <span>₹25,000+</span>
                </div>
              </div>

            </div>

            {/* Strategic note */}
            <div className={`mt-8 pt-4 border-t flex items-start gap-2.5 text-xs ${
              darkMode ? 'border-[#2E2A22] text-[#E8E6DF]/60' : 'border-[#E5E0D5] text-[#0A192F]/65'
            }`}>
              <Zap className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>
                Calculations based on 320+ AI ad creatives deployed across Meta Advantage+ & Google Ads by Ali Asif P S.
              </span>
            </div>

          </div>

          {/* Results Visualizer Dashboard (Right 6 cols) */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
            darkMode 
              ? 'bg-gradient-to-br from-[#1c1a14] via-[#181818] to-[#121212] border-[#D4AF37]/30 shadow-2xl shadow-black/80' 
              : 'bg-gradient-to-br from-white via-[#F9F8F6] to-[#F2EFE8] border-[#E5E0D5] shadow-xl'
          }`}>
            
            <div>
              <div className={`flex items-center justify-between pb-4 border-b ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                  darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                }`}>
                  Projected Campaign Performance (INR)
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                  +{(calculations.projectedRoas - currentRoas).toFixed(1)}x ROAS Lift
                </span>
              </div>

              {/* Main Projected Revenue Big Stat */}
              <div className="my-6">
                <p className={`text-xs font-mono uppercase ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                  Projected Monthly Attributed Revenue
                </p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A028] bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#163259] to-[#244B7E] bg-clip-text text-transparent'
                  }`}>
                    {formatINR(calculations.projectedRevenue)}
                  </span>
                  <span className="text-sm font-mono text-emerald-500 font-bold">
                    / month
                  </span>
                </div>
                <p className={`text-xs mt-1 ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/75'}`}>
                  Additional revenue generated: <strong className="text-emerald-500">+{formatINR(calculations.additionalRevenue)}/mo ({formatINRLakhs(calculations.additionalRevenue)})</strong>
                </p>
              </div>

              {/* Visual Comparison Bar */}
              <div className={`space-y-3 my-6 p-4 rounded-2xl border ${
                darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
              }`}>
                <div>
                  <div className={`flex justify-between text-xs font-mono mb-1 ${
                    darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'
                  }`}>
                    <span>Current Benchmark ({currentRoas.toFixed(1)}x ROAS)</span>
                    <span>{formatINR(calculations.currentRevenue)}</span>
                  </div>
                  <div className={`w-full rounded-full h-2.5 overflow-hidden ${
                    darkMode ? 'bg-[#222222]' : 'bg-[#E5E0D5]'
                  }`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        darkMode ? 'bg-[#555555]' : 'bg-[#94A3B8]'
                      }`}
                      style={{ width: `${(calculations.currentRevenue / calculations.projectedRevenue) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className={`flex justify-between text-xs font-mono mb-1 font-bold ${
                    darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                  }`}>
                    <span>With Ali Asif's Growth Engine ({calculations.projectedRoas}x ROAS)</span>
                    <span>{formatINR(calculations.projectedRevenue)}</span>
                  </div>
                  <div className={`w-full rounded-full h-3 overflow-hidden ${
                    darkMode ? 'bg-[#222222]' : 'bg-[#E5E0D5]'
                  }`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-500 shadow-md ${
                        darkMode
                          ? 'bg-gradient-to-r from-[#B89324] to-[#D4AF37] shadow-[#D4AF37]/30'
                          : 'bg-gradient-to-r from-[#0A192F] to-[#244B7E] shadow-[#0A192F]/20'
                      }`}
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Additional Impact Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3.5 rounded-2xl border ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                }`}>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Creative Production Savings</p>
                  <p className={`text-base sm:text-lg font-mono font-extrabold mt-0.5 ${
                    darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
                  }`}>
                    ~{formatINR(calculations.aiCreativeSavings)}
                  </p>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>vs Live agency shoots</p>
                </div>

                <div className={`p-3.5 rounded-2xl border ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                }`}>
                  <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Estimated Monthly Orders</p>
                  <p className="text-base sm:text-lg font-mono font-extrabold text-emerald-500 mt-0.5">
                    {calculations.estimatedNewPurchases.toLocaleString('en-IN')}
                  </p>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>High-intent customers</p>
                </div>
              </div>

            </div>

            {/* CTA to lock in calculation */}
            <div className={`mt-6 pt-4 border-t flex flex-col sm:flex-row items-center gap-3 ${
              darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
            }`}>
              <a
                href="#contact"
                onClick={() => {
                  if (onApplyCalculationsToBrief) {
                    onApplyCalculationsToBrief({
                      spend: monthlySpend,
                      projectedRevenue: calculations.projectedRevenue,
                      roas: calculations.projectedRoas
                    });
                  }
                }}
                className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-[#D4AF37]/25 hover:from-[#C5A028] hover:to-[#F3E5AB]'
                    : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] shadow-[#0A192F]/20 hover:from-[#122A4E] hover:to-[#0A192F]'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Apply This Projection to Your Brief ({formatINR(monthlySpend)}/mo)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
