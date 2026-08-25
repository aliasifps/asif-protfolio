import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  BarChart2, 
  ShieldCheck, 
  Zap, 
  PieChart, 
  Info
} from 'lucide-react';
import { PageId } from '../types';
import { formatINR, formatINRLakhs } from '../utils/formatters';

interface RoiCalculatorPageProps {
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
  onApplyCalculationsToBrief?: (roiData: { spendINR: number; projectedRevenueINR: number; roas: number }) => void;
}

export const RoiCalculatorPage: React.FC<RoiCalculatorPageProps> = ({
  darkMode,
  onNavigate,
  onApplyCalculationsToBrief
}) => {
  // Calculator States in INR
  const [monthlySpend, setMonthlySpend] = useState<number>(100000); // ₹1,00,000
  const [targetRoas, setTargetRoas] = useState<number>(4.8); // 4.8x
  const [aov, setAov] = useState<number>(2400); // ₹2,400 Average Order Value
  const [cvr, setCvr] = useState<number>(3.2); // 3.2% Conversion Rate

  // Computed Projections
  const { grossRevenue, netProfit, estimatedOrders, estimatedCpa, baselineRevenue, profitLift } = useMemo(() => {
    const gross = monthlySpend * targetRoas;
    const profit = gross - monthlySpend;
    const orders = Math.round(gross / aov);
    const cpa = orders > 0 ? Math.round(monthlySpend / orders) : 0;
    
    // Baseline at average 2.1x ROAS
    const baseRev = monthlySpend * 2.1;
    const baseProfit = baseRev - monthlySpend;
    const lift = profit - baseProfit;

    return {
      grossRevenue: gross,
      netProfit: profit,
      estimatedOrders: orders,
      estimatedCpa: cpa,
      baselineRevenue: baseRev,
      profitLift: lift
    };
  }, [monthlySpend, targetRoas, aov, cvr]);

  const handleApply = () => {
    if (onApplyCalculationsToBrief) {
      onApplyCalculationsToBrief({
        spendINR: monthlySpend,
        projectedRevenueINR: grossRevenue,
        roas: targetRoas
      });
    }
    onNavigate('contact');
  };

  const benchmarks = [
    { vertical: 'D2C Beauty & Skincare', avgCpc: '₹14 - ₹28', targetRoas: '3.8x - 5.2x', avgAov: '₹1,450', highlight: 'High LTV & Re-orders' },
    { vertical: 'Consumer Electronics & Audio', avgCpc: '₹22 - ₹45', targetRoas: '4.2x - 6.5x', avgAov: '₹3,800', highlight: 'Best for 3D Video Ads' },
    { vertical: 'Apparel & Fast Fashion', avgCpc: '₹9 - ₹19', targetRoas: '3.2x - 4.5x', avgAov: '₹1,850', highlight: 'High Creative Velocity' },
    { vertical: 'Health Supplements & Nutra', avgCpc: '₹18 - ₹35', targetRoas: '4.5x - 7.0x', avgAov: '₹2,200', highlight: 'Pattern-Interrupt Hooks' },
    { vertical: 'B2B SaaS & Tech Tools', avgCpc: '₹65 - ₹160', targetRoas: '3.0x - 4.8x', avgAov: '₹15,000+', highlight: '3D Spatial Demo Ads' }
  ];

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-[#F5F5F3]' : 'bg-[#F9F8F6] text-[#0A192F]'}`}>
      
      {/* SECTION 1: ROI Calculator Hero & Unit Economics Guide */}
      <section className={`relative pt-32 pb-16 overflow-hidden border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold mb-4 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Profit & ROAS Simulator in INR ₹</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Calculate Your Ad Scale & Profitability
          </h1>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Adjust your monthly ad budget, target ROAS, and average order value to model your projected gross revenue and net profit when running our AI video testing engine.
          </p>
        </div>
      </section>

      {/* SECTION 2: Interactive Ad Spend & Profit Multiplier Engine */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className={`lg:col-span-7 p-7 sm:p-9 rounded-3xl border ${
            darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-lg'
          }`}>
            <h2 className="text-xl sm:text-2xl font-bold font-heading mb-6 flex items-center gap-2">
              <Sliders className={`w-5 h-5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Campaign Parameter Controls</span>
            </h2>

            <div className="space-y-7">
              
              {/* Slider 1: Monthly Ad Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}>Monthly Ad Spend:</span>
                  <span className={`text-base font-black ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{formatINR(monthlySpend)}</span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1500000"
                  step="25000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className={`flex justify-between text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>
                  <span>₹25,000 / mo</span>
                  <span>₹5,00,000 / mo</span>
                  <span>₹15,00,000 / mo</span>
                </div>
              </div>

              {/* Slider 2: Target ROAS Multiplier */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}>Target Return on Ad Spend (ROAS):</span>
                  <span className="text-base font-black text-emerald-500">{targetRoas.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="7.5"
                  step="0.1"
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className={`flex justify-between text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>
                  <span>2.0x (Standard)</span>
                  <span>4.8x (Our Average)</span>
                  <span>7.5x (Peak AI Ads)</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value (AOV) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}>Average Order Value (AOV):</span>
                  <span className={`text-base font-black ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{formatINR(aov)}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className={`flex justify-between text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>
                  <span>₹500</span>
                  <span>₹5,000</span>
                  <span>₹15,000</span>
                </div>
              </div>

              {/* Preset Budget Chips */}
              <div className="pt-2">
                <p className={`text-[11px] font-mono uppercase font-bold mb-2 ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Quick Scale Presets:</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: '₹50k/mo', spend: 50000, roas: 3.8 },
                    { label: '₹1L/mo', spend: 100000, roas: 4.5 },
                    { label: '₹3L/mo', spend: 300000, roas: 5.2 },
                    { label: '₹10L/mo', spend: 1000000, roas: 5.6 }
                  ].map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setMonthlySpend(preset.spend);
                        setTargetRoas(preset.roas);
                      }}
                      className={`py-1.5 px-2 rounded-xl text-[11px] font-mono font-bold border transition-all text-center cursor-pointer ${
                        darkMode
                          ? 'bg-[#222222] hover:bg-[#2e2a22] text-[#E8E6DF]/80 hover:text-[#D4AF37] border-[#2E2A22]'
                          : 'bg-[#F2EFE8] hover:bg-[#E5E0D5] text-[#0A192F] border-[#E5E0D5]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results Column (Right) */}
          <div className={`lg:col-span-5 p-7 sm:p-9 rounded-3xl border relative overflow-hidden flex flex-col justify-between ${
            darkMode 
              ? 'bg-gradient-to-b from-[#1e1a12] via-[#181818] to-[#141414] border-[#D4AF37]/35 shadow-2xl shadow-[#D4AF37]/10' 
              : 'bg-gradient-to-b from-[#F2EFE8] to-white border-[#E5E0D5] shadow-xl'
          }`}>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Projected Output</span>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-black ${
                  darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                }`}>
                  {targetRoas.toFixed(1)}x ROAS
                </span>
              </div>

              {/* Main Revenue Card */}
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                <p className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Monthly Projected Gross Revenue</p>
                <p className="text-3xl sm:text-4xl font-black font-mono text-emerald-500 mt-1">
                  {formatINR(grossRevenue)}
                </p>
                <p className={`text-[11px] font-mono mt-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                  ≈ {formatINRLakhs(grossRevenue)}
                </p>
              </div>

              {/* Net Profit Card */}
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                <div className="flex justify-between items-center">
                  <p className={`text-xs font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Net Profit (Revenue - Ad Spend)</p>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">+{formatINR(profitLift)} vs benchmark</span>
                </div>
                <p className={`text-2xl sm:text-3xl font-black font-mono mt-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                  {formatINR(netProfit)}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3.5 rounded-xl border text-center ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Estimated Monthly Orders</p>
                  <p className="text-lg font-black font-mono mt-0.5">{estimatedOrders.toLocaleString('en-IN')}</p>
                </div>

                <div className={`p-3.5 rounded-xl border text-center ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Target CPA per Order</p>
                  <p className="text-lg font-black font-mono mt-0.5">{formatINR(estimatedCpa)}</p>
                </div>
              </div>
            </div>

            {/* CTA to Apply */}
            <div className={`mt-8 pt-6 border-t space-y-3 ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
              <button
                onClick={handleApply}
                className={`w-full py-4 rounded-xl font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                    : 'bg-[#0A192F] hover:bg-[#122A4E] text-[#F9F8F6]'
                }`}
              >
                <span>Apply This Budget to My Custom Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className={`text-center text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                Calculations transfer seamlessly into your project inquiry
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 3: Growth Scenario Comparison Matrix */}
      <section className={`py-20 border-y transition-colors ${
        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Scaling Scenarios at {formatINR(monthlySpend)} Ad Spend
            </h2>
            <p className={`mt-2 text-xs sm:text-sm ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
              Compare your return across standard agency results vs our AI video creative testing engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Scenario 1: Standard Agency */}
            <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <span className={`text-xs font-mono uppercase font-bold ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Standard Agency Baseline</span>
              <p className="text-2xl font-black font-mono mt-2">2.10x ROAS</p>
              <div className="my-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Monthly Revenue:</span>
                  <span className="font-mono font-bold">{formatINR(monthlySpend * 2.1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Net Profit:</span>
                  <span className="font-mono font-bold">{formatINR(monthlySpend * 1.1)}</span>
                </div>
              </div>
              <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Limited by creative fatigue & single monthly video shoots.</p>
            </div>

            {/* Scenario 2: AI Video Ads Engine (Our Standard) */}
            <div className={`p-6 rounded-3xl border shadow-xl ${
              darkMode ? 'bg-gradient-to-b from-[#1e1a12] to-[#181818] border-[#D4AF37]/50' : 'bg-white border-[#0A192F]/40'
            }`}>
              <div className="flex justify-between items-center">
                <span className={`text-xs font-mono uppercase font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>AI Video Engine</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                  darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                }`}>TARGET</span>
              </div>
              <p className={`text-2xl font-black font-mono mt-2 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>4.82x ROAS</p>
              <div className="my-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Monthly Revenue:</span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{formatINR(monthlySpend * 4.82)}</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Net Profit:</span>
                  <span className="font-mono font-bold text-emerald-500">{formatINR(monthlySpend * 3.82)}</span>
                </div>
              </div>
              <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>12+ fresh AI 3D ads weekly, beating ad fatigue with 68% hook retention.</p>
            </div>

            {/* Scenario 3: Peak Hyper-Scale */}
            <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
              <span className="text-xs font-mono text-emerald-500 uppercase font-bold">High-Scale Multiplier</span>
              <p className="text-2xl font-black font-mono text-emerald-500 mt-2">6.80x ROAS</p>
              <div className="my-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Monthly Revenue:</span>
                  <span className="font-mono font-bold text-emerald-500">{formatINR(monthlySpend * 6.8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Net Profit:</span>
                  <span className="font-mono font-bold text-emerald-500">{formatINR(monthlySpend * 5.8)}</span>
                </div>
              </div>
              <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Achieved in high-AOV luxury, electronics, and niche consumable products.</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: Industry Benchmark Data & Vertical Insights */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${
            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/35' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
          }`}>
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
            Indian & Global Vertical Benchmarks
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Real data points across Meta Ads and Google Performance Max campaigns managed by Ali Asif P S.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benchmarks.map((b, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border ${
                darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
              }`}
            >
              <h3 className={`text-base font-bold font-heading mb-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{b.vertical}</h3>
              <div className="space-y-2 text-xs">
                <div className={`flex justify-between pb-1 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Target ROAS:</span>
                  <span className="font-mono font-bold text-emerald-500">{b.targetRoas}</span>
                </div>
                <div className={`flex justify-between pb-1 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Average CPC:</span>
                  <span className="font-mono">{b.avgCpc}</span>
                </div>
                <div className={`flex justify-between pb-1 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                  <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Typical AOV:</span>
                  <span className="font-mono">{b.avgAov}</span>
                </div>
              </div>
              <div className={`mt-4 text-[11px] font-mono p-2 rounded-xl text-center border ${
                darkMode
                  ? 'text-[#D4AF37] bg-[#1e1a12] border-[#D4AF37]/35'
                  : 'text-[#0A192F] bg-[#F2EFE8] border-[#E5E0D5]'
              }`}>
                {b.highlight}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 5: Direct ROI to Campaign Brief Action Banner */}
      <section className={`py-20 text-white border-t ${
        darkMode
          ? 'bg-gradient-to-r from-[#141414] via-[#1a1710] to-[#141414] border-[#D4AF37]/30'
          : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#0A192F] border-[#0A192F]/30'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading">
            Lock In Your Growth Formula Today
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Book a 1-on-1 performance audit with <strong>Ali Asif P S</strong> to map your custom creative testing matrix and hit your {targetRoas.toFixed(1)}x ROAS target.
          </p>
          <div className="pt-2">
            <button
              onClick={handleApply}
              className={`px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                  : 'bg-white text-[#0A192F] hover:bg-[#F2EFE8]'
              }`}
            >
              <span>Submit Growth Brief & Schedule Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
