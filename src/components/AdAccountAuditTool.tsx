import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  Download, 
  Copy, 
  Check,
  Zap,
  Activity
} from 'lucide-react';
import { AUDIT_QUESTIONS } from '../data/marketingToolsData';
import { AuditDiagnosticReport, PageId } from '../types';
import { formatINR } from '../utils/formatters';

interface AdAccountAuditToolProps {
  darkMode: boolean;
  onNavigate?: (page: PageId) => void;
  onSendAuditBrief?: (report: AuditDiagnosticReport) => void;
}

export const AdAccountAuditTool: React.FC<AdAccountAuditToolProps> = ({
  darkMode,
  onNavigate,
  onSendAuditBrief
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [report, setReport] = useState<AuditDiagnosticReport | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);

    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate final audit report
      generateReport(updated);
    }
  };

  const generateReport = (answers: number[]) => {
    let totalScore = 0;
    let totalLeak = 0;
    const recommendations: string[] = [];
    const strengths: string[] = [];

    answers.forEach((ansIndex, qIndex) => {
      const q = AUDIT_QUESTIONS[qIndex];
      const opt = q.options[ansIndex];
      totalScore += opt.score;
      totalLeak += opt.leakRiskINR;

      if (opt.score <= 15) {
        recommendations.push(`Fix ${q.category}: ${opt.insight}`);
      } else {
        strengths.push(`${q.category}: High performance standard met.`);
      }
    });

    let grade: 'A+' | 'B' | 'C' | 'Critical Leakage' = 'B';
    if (totalScore >= 90) grade = 'A+';
    else if (totalScore >= 70) grade = 'B';
    else if (totalScore >= 50) grade = 'C';
    else grade = 'Critical Leakage';

    const generatedReport: AuditDiagnosticReport = {
      score: totalScore,
      grade,
      estimatedLeakINR: totalLeak,
      recommendations: recommendations.length > 0 ? recommendations : ["Maintain your current high-velocity Advantage+ testing routine and expand to YouTube Shorts & Reels."],
      strengths,
      summary: `Your ad account achieved a score of ${totalScore}/100 with an estimated monthly signal/creative burn leakage of ₹${totalLeak.toLocaleString('en-IN')}.`
    };

    setReport(generatedReport);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setReport(null);
  };

  const handleCopyReport = () => {
    if (!report) return;
    const text = `[META ADS & CAPI HEALTH AUDIT REPORT]
Overall Account Score: ${report.score}/100 (Grade: ${report.grade})
Estimated Monthly Wasted Spend / Leakage: ₹${report.estimatedLeakINR.toLocaleString('en-IN')}
Key Fixes Recommended:
${report.recommendations.map(r => `• ${r}`).join('\n')}
Audited via Ali Asif P S Digital Marketing Engine`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeQuestion = AUDIT_QUESTIONS[currentStep];

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
            <Activity className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
            <span>Algorithmic Account Health Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            Meta Ads & CAPI Health Audit Tool
          </h3>
          <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
            Diagnose pixel signal loss, iOS attribution degradation, and creative fatigue burn in 60 seconds.
          </p>
        </div>

        {report && (
          <button
            onClick={handleReset}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border cursor-pointer self-start md:self-auto ${
              darkMode
                ? 'bg-[#222222] text-[#D4AF37] hover:bg-[#2A2A2A] border-[#2E2A22]'
                : 'bg-[#F9F8F6] text-[#0A192F] hover:bg-white border-[#E5E0D5]'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Audit</span>
          </button>
        )}
      </div>

      {!report ? (
        /* Question Flow */
        <div className="mt-8 space-y-6">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className={darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}>Diagnostic Step {currentStep + 1} of {AUDIT_QUESTIONS.length}</span>
            <span className={`font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{Math.round(((currentStep) / AUDIT_QUESTIONS.length) * 100)}% Complete</span>
          </div>
          <div className={`w-full h-2 rounded-full border overflow-hidden ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#E5E0D5] border-[#D5D0C5]'}`}>
            <div 
              className={`h-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-[#8A7120] via-[#D4AF37] to-[#F3E5AB]'
                  : 'bg-gradient-to-r from-[#0A192F] via-[#1E3A63] to-[#2E5894]'
              }`}
              style={{ width: `${((currentStep + 1) / AUDIT_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>

          {/* Current Question */}
          <div className={`p-6 rounded-2xl border text-left ${
            darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
          }`}>
            <span className={`text-xs font-mono uppercase font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Category: {activeQuestion.category}</span>
            <h4 className="text-xl font-bold font-heading mt-1">{activeQuestion.title}</h4>
            <p className={`text-xs mt-1 ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>{activeQuestion.subtitle}</p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {activeQuestion.options.map((opt, optIndex) => (
                <button
                  key={optIndex}
                  onClick={() => handleSelectOption(optIndex)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                    selectedAnswers[currentStep] === optIndex
                      ? darkMode
                        ? 'bg-[#1e1a12] border-[#D4AF37] text-white shadow-md'
                        : 'bg-white border-[#0A192F] text-[#0A192F] shadow-md ring-2 ring-[#0A192F]/20'
                      : darkMode
                      ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF]/80 hover:border-[#D4AF37]/50 hover:bg-[#222222]'
                      : 'bg-white border-[#E5E0D5] text-[#0A192F]/80 hover:border-[#0A192F]/40 hover:bg-[#F2EFE8]'
                  }`}
                >
                  <div>
                    <div className={`text-sm font-semibold transition-colors ${
                      darkMode ? 'text-white group-hover:text-[#D4AF37]' : 'text-[#0A192F] group-hover:text-[#0A192F]'
                    }`}>
                      {opt.label}
                    </div>
                    <div className={`text-[11px] mt-0.5 ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                      {opt.insight}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-all shrink-0 ml-4 ${
                    darkMode ? 'text-[#E8E6DF]/40 group-hover:text-[#D4AF37]' : 'text-[#0A192F]/40 group-hover:text-[#0A192F]'
                  }`} />
                </button>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* Results Report */
        <div className="mt-8 space-y-6 animate-fadeIn text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Score Card */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
            }`}>
              <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Overall Health Score</span>
              <div className="my-4">
                <div className="text-5xl font-black font-mono flex items-baseline gap-1">
                  <span>{report.score}</span>
                  <span className={`text-2xl ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>/100</span>
                </div>
                <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-white text-[#0A192F] border border-[#0A192F]/20'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Grade: {report.grade}</span>
                </div>
              </div>
              <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                Calculated across tracking integrity, creative burn rate, and ML liquidity.
              </p>
            </div>

            {/* Estimated Leakage */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#141414] border-rose-500/30' : 'bg-[#F9F8F6] border-rose-300'
            }`}>
              <span className="text-xs font-mono text-rose-500 font-bold uppercase">Estimated Monthly Leakage</span>
              <div className="my-4">
                <div className="text-4xl sm:text-5xl font-black font-mono text-rose-500">
                  {formatINR(report.estimatedLeakINR)}
                </div>
                <div className="mt-2 text-xs text-rose-400 font-medium">
                  {report.estimatedLeakINR > 0 ? "⚠️ Wasted on pixel drops & ad fatigue" : "✅ Zero budget leakage detected"}
                </div>
              </div>
              <p className={`text-[11px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>
                Recoverable through CAPI server hashing & 12 fresh AI creative variations/mo.
              </p>
            </div>

            {/* Quick Action Plan */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#141414] border-[#D4AF37]/40' : 'bg-[#F9F8F6] border-[#0A192F]/30'
            }`}>
              <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Priority Solution</span>
              <div className="my-2">
                <div className="text-lg font-bold font-heading">
                  {report.score < 70 ? "Full-Stack CAPI & Creative Sprint" : "Advantage+ Scaling Sprint"}
                </div>
                <p className={`text-xs mt-1 ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                  Plug tracking holes and deploy 12 high-retention AI 3D video ads within 5 business days.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyReport}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
                    darkMode
                      ? 'bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border-[#2E2A22]'
                      : 'bg-white hover:bg-[#F2EFE8] text-[#0A192F] border-[#E5E0D5]'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Audit'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Actionable Recommendations List */}
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F9F8F6] border-[#E5E0D5]'
          }`}>
            <h4 className="text-base font-bold font-heading flex items-center gap-2 mb-4">
              <Zap className={`w-4 h-4 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Tailored Optimization Roadmap for Your Ad Account</span>
            </h4>
            
            <div className="space-y-3">
              {report.recommendations.map((rec, i) => (
                <div key={i} className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-[#181818] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                }`}>
                  <div className={`p-1 rounded shrink-0 mt-0.5 font-mono text-[10px] font-bold ${
                    darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'
                  }`}>
                    0{i + 1}
                  </div>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#E8E6DF]/80' : 'text-[#0A192F]/80'}`}>{rec}</p>
                </div>
              ))}
            </div>

            {/* CTA bar */}
            <div className={`mt-6 pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
            }`}>
              <div className={`text-xs ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
                Want Ali Asif P S to review your live Meta Ads Manager on a 1-on-1 strategy call?
              </div>

              {onNavigate && (
                <button
                  onClick={() => {
                    if (onSendAuditBrief) onSendAuditBrief(report);
                    onNavigate('contact');
                  }}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F]'
                  }`}
                >
                  <span>Submit Audit for 1-on-1 Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
