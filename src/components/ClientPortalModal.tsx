import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  X, 
  TrendingUp, 
  IndianRupee, 
  CreditCard, 
  Bell, 
  Download, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Film, 
  RefreshCw, 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  BarChart2, 
  Clock, 
  Sparkles,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CampaignAnalytics, InvoiceItem, PushNotificationItem } from '../types';
import { CAMPAIGN_ANALYTICS_DATA, INITIAL_INVOICES, INITIAL_NOTIFICATIONS } from '../data/portfolioData';
import { formatINR, formatINRLakhs } from '../utils/formatters';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onTriggerNotification: (title: string, message: string) => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onTriggerNotification
}) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'video-queue' | 'billing' | 'push-settings' | 'offline-sync'>('analytics');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [invoices, setInvoices] = useState<InvoiceItem[]>(INITIAL_INVOICES);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [syncedDataTime, setSyncedDataTime] = useState('Just now (Local Cache Encrypted)');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOpen) return null;

  const totalSpend = CAMPAIGN_ANALYTICS_DATA.reduce((acc, curr) => acc + curr.spend, 0);
  const totalRevenue = CAMPAIGN_ANALYTICS_DATA.reduce((acc, curr) => acc + curr.revenue, 0);
  const blendedRoas = (totalRevenue / totalSpend).toFixed(2);
  const totalConversions = CAMPAIGN_ANALYTICS_DATA.reduce((acc, curr) => acc + curr.conversions, 0);

  const handleSimulatePayment = (planName: string, amount: number) => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      const newInvoice: InvoiceItem = {
        id: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        date: 'Today',
        service: `${planName} (Monthly Retainer)`,
        amount: amount,
        status: 'Paid',
        invoicePdfUrl: '#'
      };
      setInvoices([newInvoice, ...invoices]);
      
      onTriggerNotification(
        'Payment Confirmed in INR 💳',
        `${formatINR(amount)} processed successfully for ${planName}. Receipt ${newInvoice.id} generated.`
      );

      try {
        confetti({ particleCount: 60, spread: 60 });
      } catch (e) {}

      setTimeout(() => setPaymentSuccess(false), 4000);
    }, 1500);
  };

  const handleTestPushNotification = () => {
    onTriggerNotification(
      'Meta Campaign Scaled to 5.42x ROAS 🚀',
      'Cyberpunk Energy Video Ad Batch #3 just surpassed ₹18,70,000 in revenue today!'
    );
  };

  return (
    <div
      id="client-portal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl rounded-3xl border shadow-2xl overflow-hidden my-6 transition-all ${
          darkMode ? 'bg-[#181818] border-[#2E2A22] text-[#F5F5F3]' : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className={`flex flex-wrap items-center justify-between p-4 sm:p-6 border-b ${
          darkMode ? 'border-[#2E2A22] bg-[#141414]' : 'border-[#E5E0D5] bg-white'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md ${
              darkMode
                ? 'bg-gradient-to-tr from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] shadow-[#D4AF37]/20'
                : 'bg-gradient-to-tr from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] shadow-[#0A192F]/20'
            }`}>
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-heading">
                  Client Growth & Campaign Dashboard (INR ₹)
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live Portal
                </span>
              </div>
              <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                Managed by Ali Asif P S • AES-256 Cloud Sync • GST Compliant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            {/* Online/Offline indicator */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${
              isOnline 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' 
                : 'bg-amber-500/10 border-amber-500/30 text-amber-500'
            }`}>
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{isOnline ? 'Cloud Synced' : 'Offline Cache Active'}</span>
            </div>

            <button
              id="close-portal-modal-btn"
              onClick={onClose}
              className={`p-2 rounded-xl border cursor-pointer ${
                darkMode
                  ? 'bg-[#222222] border-[#2E2A22] text-[#E8E6DF]/70 hover:text-white'
                  : 'bg-[#F9F8F6] border-[#E5E0D5] text-[#0A192F]/70 hover:text-[#0A192F]'
              }`}
              aria-label="Close portal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`flex items-center gap-2 p-3 border-b overflow-x-auto no-scrollbar ${
          darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-[#F2EFE8] border-[#E5E0D5]'
        }`}>
          {[
            { id: 'analytics', label: 'Omnichannel Analytics', icon: BarChart2 },
            { id: 'video-queue', label: 'AI Video Production Queue', icon: Film },
            { id: 'billing', label: 'Retainer Billing & Invoices (INR)', icon: CreditCard },
            { id: 'push-settings', label: 'Push Notifications', icon: Bell },
            { id: 'offline-sync', label: 'Offline Sync & Cache', icon: RefreshCw }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black shadow-md shadow-[#D4AF37]/20'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] font-bold shadow-md shadow-[#0A192F]/20'
                    : darkMode
                    ? 'text-[#E8E6DF]/70 hover:text-[#D4AF37] hover:bg-[#222222]'
                    : 'text-[#0A192F]/70 hover:text-[#0A192F] hover:bg-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {/* 1. Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              
              {/* High Level KPI Metrics in INR */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                  <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Total Managed Spend</p>
                  <p className={`text-xl sm:text-2xl font-black font-mono mt-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                    {formatINR(totalSpend)}
                  </p>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Meta + Google + YouTube ({formatINRLakhs(totalSpend)})</p>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                  <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Attributed Revenue</p>
                  <p className="text-xl sm:text-2xl font-black font-mono text-emerald-500 mt-1">
                    {formatINR(totalRevenue)}
                  </p>
                  <p className="text-[10px] text-emerald-500 font-bold">+{formatINRLakhs(totalRevenue)} ({blendedRoas}x ROAS)</p>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                  <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Blended ROAS</p>
                  <p className={`text-xl sm:text-2xl font-black font-mono mt-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                    {blendedRoas}x
                  </p>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Industry benchmark: 2.1x</p>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                  <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Total Conversions</p>
                  <p className={`text-xl sm:text-2xl font-black font-mono mt-1 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                    {totalConversions.toLocaleString('en-IN')}
                  </p>
                  <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Purchases & High-Intent Leads</p>
                </div>
              </div>

              {/* Active Campaigns Table */}
              <div>
                <h4 className="text-sm font-bold font-heading mb-3 flex items-center justify-between">
                  <span>Active Scaling Campaigns (in INR)</span>
                  <span className={`text-xs font-mono font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>Auto-Optimizing via Server CAPI</span>
                </h4>

                <div className="space-y-3">
                  {CAMPAIGN_ANALYTICS_DATA.map((camp) => (
                    <div
                      key={camp.id}
                      className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-heading">{camp.name}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            darkMode ? 'bg-[#1e1a12] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-[#F2EFE8] text-[#0A192F] border border-[#0A192F]/20'
                          }`}>
                            {camp.platform}
                          </span>
                        </div>
                        <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                          {camp.impressions.toLocaleString('en-IN')} impressions • {camp.ctr}% CTR • {camp.conversions.toLocaleString('en-IN')} orders
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div>
                          <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Spend</p>
                          <p className="font-mono font-bold text-xs">{formatINR(camp.spend)}</p>
                        </div>
                        <div>
                          <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>Revenue</p>
                          <p className="font-mono font-bold text-xs text-emerald-500">{formatINR(camp.revenue)}</p>
                        </div>
                        <div>
                          <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/40' : 'text-[#0A192F]/40'}`}>ROAS</p>
                          <p className={`font-mono font-black text-sm ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{camp.roas}x</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap">
                          {camp.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* 2. AI Video Production Queue */}
          {activeTab === 'video-queue' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold font-heading">AI Video Creatives Pipeline (Batch #4)</h4>
                <span className={`text-xs font-mono font-semibold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>12 Variations Generated Weekly</span>
              </div>

              {[
                { title: 'Cyberpunk Macro Can Pour Hook', aspect: '9:16 (Instagram Reels)', status: 'Live & Scaled', progress: 100, roas: '5.8x' },
                { title: '3D Wireframe Kinetic Typography', aspect: '1:1 (Feed)', status: 'Live & Scaled', progress: 100, roas: '5.2x' },
                { title: 'AI Voice Actor Explainer Cutdown', aspect: '9:16 (YouTube Shorts)', status: 'A/B Testing Hook #3', progress: 85, roas: '4.1x' },
                { title: 'Cinematic 4K Liquid Explosion', aspect: '16:9 (YouTube)', status: 'Rendering in Midjourney/Runway', progress: 65, roas: 'Queue' },
                { title: 'Customer Unboxing Spatial CGI', aspect: '9:16 (Meta Advantage+)', status: 'Prompt Scripting', progress: 25, roas: 'Queue' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                  }`}
                >
                  <div className="space-y-1">
                    <p className="text-xs font-bold font-heading">{item.title}</p>
                    <p className={`text-[11px] font-mono ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      Format: {item.aspect} • Status: {item.status}
                    </p>
                    <div className={`w-48 rounded-full h-1.5 overflow-hidden ${darkMode ? 'bg-[#222222]' : 'bg-[#E5E0D5]'}`}>
                      <div className={`h-full rounded-full ${
                        darkMode ? 'bg-gradient-to-r from-[#B89324] to-[#D4AF37]' : 'bg-gradient-to-r from-[#0A192F] to-[#1E3A63]'
                      }`} style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>
                      ROAS: {item.roas}
                    </span>
                    <button className={`px-3 py-1 rounded-lg text-xs font-medium border cursor-pointer ${
                      darkMode
                        ? 'bg-[#1e1a12] text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/20'
                        : 'bg-[#F2EFE8] text-[#0A192F] border-[#0A192F]/20 hover:bg-white'
                    }`}>
                      Download 4K
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Retainer Billing & Invoices (in INR) */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              
              {/* Payment notification banner */}
              {paymentSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Payment Processed Successfully in INR! Retainer active and GST invoice generated.</span>
                </div>
              )}

              {/* Instant Retainer Checkout Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-bold text-sm">AI Video Ads Monthly Suite</h5>
                      <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>12 4K Video Creatives & Hook Split-Testing</p>
                    </div>
                    <span className={`text-lg font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹34,999</span>
                  </div>
                  <button
                    disabled={isProcessingPayment}
                    onClick={() => handleSimulatePayment('AI Video Ads Monthly Suite', 34999)}
                    className={`mt-3 w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F]'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>{isProcessingPayment ? 'Processing INR Payment...' : 'Pay via UPI / Card / NetBanking (₹34,999)'}</span>
                  </button>
                </div>

                <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5] shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-bold text-sm">Full-Stack Performance Scaling Retainer</h5>
                      <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>Media Buying, CAPI Setup & Unlimited Creatives</p>
                    </div>
                    <span className={`text-lg font-black font-mono ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>₹79,999</span>
                  </div>
                  <button
                    disabled={isProcessingPayment}
                    onClick={() => handleSimulatePayment('Full-Stack Performance Scaling Retainer', 79999)}
                    className={`mt-3 w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black hover:from-[#C5A028] hover:to-[#F3E5AB]'
                        : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6] hover:from-[#122A4E] hover:to-[#0A192F]'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>{isProcessingPayment ? 'Processing INR Payment...' : 'Pay via UPI / Card / NetBanking (₹79,999)'}</span>
                  </button>
                </div>
              </div>

              {/* Invoices List */}
              <div>
                <h4 className="text-sm font-bold font-heading mb-3">Billing & Tax Invoice Receipts (INR)</h4>
                <div className="space-y-2.5">
                  {invoices.map((inv) => (
                    <div
                      key={inv.id}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                      }`}
                    >
                      <div>
                        <p className={`text-xs font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{inv.id}</p>
                        <p className="text-xs font-semibold">{inv.service}</p>
                        <p className={`text-[10px] ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>Paid on {inv.date} • GST Included</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-mono font-bold text-xs">{formatINR(inv.amount, { showDecimals: true })}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-500">
                          {inv.status}
                        </span>
                        <button
                          onClick={() => alert(`Downloading official GST invoice PDF for ${inv.id}`)}
                          className={`p-1.5 rounded-lg border cursor-pointer ${
                            darkMode
                              ? 'border-[#2E2A22] text-[#E8E6DF]/70 hover:text-[#D4AF37]'
                              : 'border-[#E5E0D5] text-[#0A192F]/70 hover:text-[#0A192F]'
                          }`}
                          title="Download Receipt"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* 4. Push Notifications Settings & Simulation */}
          {activeTab === 'push-settings' && (
            <div className="space-y-6">
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold font-heading">Campaign Milestone Push Alerts</h4>
                    <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      Receive instant notifications when ROAS targets are broken or fresh AI video creatives finish rendering.
                    </p>
                  </div>
                  <button
                    onClick={() => setPushEnabled(!pushEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                      pushEnabled
                        ? darkMode ? 'bg-[#D4AF37]' : 'bg-[#0A192F]'
                        : 'bg-neutral-600'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        pushEnabled ? 'right-1' : 'left-1'
                      }`}
                    ></span>
                  </button>
                </div>

                <button
                  onClick={handleTestPushNotification}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212] font-black'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6]'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Send Test Milestone Push Alert</span>
                </button>
              </div>

              {/* Notification Feed */}
              <div>
                <h4 className="text-sm font-bold font-heading mb-3">Recent Milestone Feed</h4>
                <div className="space-y-3">
                  {INITIAL_NOTIFICATIONS.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 rounded-2xl border ${
                        darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold">{notif.title}</span>
                        <span className={`text-[10px] font-mono ${darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}`}>{notif.timeAgo}</span>
                      </div>
                      <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>{notif.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 5. Offline Sync & Cache */}
          {activeTab === 'offline-sync' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#141414] border-[#2E2A22]' : 'bg-white border-[#E5E0D5]'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    darkMode ? 'bg-[#1e1a12] text-[#D4AF37]' : 'bg-[#F2EFE8] text-[#0A192F]'
                  }`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading">Encrypted Client Cache Engine</h4>
                    <p className={`text-xs ${darkMode ? 'text-[#E8E6DF]/60' : 'text-[#0A192F]/60'}`}>
                      PWA Offline state keeps all campaigns, video assets, and invoices cached locally.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className={`flex justify-between py-2 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                    <span className={darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}>Network Connection:</span>
                    <span className="font-mono font-bold text-emerald-500">{isOnline ? 'Online (Fast 5G / Broadband)' : 'Offline (Local Sync)'}</span>
                  </div>
                  <div className={`flex justify-between py-2 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                    <span className={darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}>Last Synced Timestamp:</span>
                    <span className={`font-mono font-bold ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`}>{syncedDataTime}</span>
                  </div>
                  <div className={`flex justify-between py-2 border-b ${darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'}`}>
                    <span className={darkMode ? 'text-[#E8E6DF]/50' : 'text-[#0A192F]/50'}>Local Encrypted Storage:</span>
                    <span className="font-mono">IndexedDB + LocalStorage Active</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSyncedDataTime('Synced Just Now (0 ms delay)');
                    onTriggerNotification('Sync Complete 🔄', 'All client campaign data and invoices refreshed.');
                  }}
                  className={`mt-5 px-4 py-2.5 rounded-xl text-xs font-bold border flex items-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border-[#2E2A22]'
                      : 'bg-[#F2EFE8] hover:bg-[#E5E0D5] text-[#0A192F] border-[#E5E0D5]'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Force Re-sync Local Cache</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
