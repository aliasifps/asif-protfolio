import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ClientPortalModal } from './components/ClientPortalModal';
import { NotificationToast } from './components/NotificationToast';
import { FloatingMarketerToolbar } from './components/FloatingMarketerToolbar';
import { AdCreativeCompareModal } from './components/AdCreativeCompareModal';

// 7 Dedicated Multi-Section Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { RoiCalculatorPage } from './pages/RoiCalculatorPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

import { PageId, ServicePackage, AdHookTemplate, AuditDiagnosticReport } from './types';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('asifps_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  // State-based Page Router (Defaults to 'home' / index)
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase() as PageId;
    const validPages: PageId[] = ['home', 'work', 'services', 'calculator', 'testimonials', 'insights', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isTeardownModalOpen, setIsTeardownModalOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<{ title: string; message: string } | null>(null);
  const [unreadCount, setUnreadCount] = useState(2);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledBudget, setPrefilledBudget] = useState<string | undefined>(undefined);
  const [prefilledDescription, setPrefilledDescription] = useState<string | undefined>(undefined);

  // Sync dark mode class on HTML document
  useEffect(() => {
    localStorage.setItem('asifps_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.className = 'bg-[#121212] text-[#F5F5F3] antialiased selection:bg-[#D4AF37] selection:text-[#121212] transition-colors duration-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.className = 'bg-[#F9F8F6] text-[#0A192F] antialiased selection:bg-[#0A192F] selection:text-[#F9F8F6] transition-colors duration-300';
    }
  }, [darkMode]);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase() as PageId;
      const validPages: PageId[] = ['home', 'work', 'services', 'calculator', 'testimonials', 'insights', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerNotification = (title: string, message: string) => {
    setActiveToast({ title, message });
    setUnreadCount((prev) => prev + 1);
  };

  const handleSelectServicePackage = (pkg: ServicePackage) => {
    setPrefilledService(`${pkg.title} (₹${pkg.price.toLocaleString('en-IN')})`);
    handleNavigate('contact');
  };

  const handleApplyRoiToBrief = (roiData: { spendINR: number; projectedRevenueINR: number; roas: number }) => {
    const spendLakhs = (roiData.spendINR / 100000).toFixed(1);
    setPrefilledBudget(`₹${spendLakhs} Lakhs / month (Target ROAS: ${roiData.roas.toFixed(2)}x)`);
    handleNavigate('contact');
  };

  const handleSelectHookForBrief = (hook: AdHookTemplate) => {
    setPrefilledService("AI Video Ads & Creative Testing Engine (₹34,999/mo)");
    setPrefilledDescription(`[AI VIDEO AD BRIEF REQUEST]
Framework: ${hook.framework}
Industry: ${hook.industry}
Selected Angle: "${hook.hookHeadline}"
Visual Action: ${hook.visualPrompt}
Target Hook Rate: ${hook.estimatedHookRate} (ROAS Goal: ${hook.roasPotential})`);
    handleNavigate('contact');
  };

  const handleSendAuditBrief = (report: AuditDiagnosticReport) => {
    setPrefilledService("Full-Stack Performance Marketing & Scale (₹79,999/mo)");
    setPrefilledDescription(`[META ADS & CAPI ACCOUNT HEALTH AUDIT SUBMISSION]
Account Health Score: ${report.score}/100 (Grade: ${report.grade})
Estimated Monthly Signal/Fatigue Leakage: ₹${report.estimatedLeakINR.toLocaleString('en-IN')}
Priority Recommendations:
${report.recommendations.map(r => `• ${r}`).join('\n')}

I would like Ali Asif P S to review our live Ad Account and CAPI setup on a 1-on-1 strategy call.`);
    handleNavigate('contact');
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      
      {/* Top Fixed Consistent Header Section */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenNotifications={() => setIsPortalOpen(true)}
        unreadCount={unreadCount}
      />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            darkMode={darkMode}
            onNavigate={handleNavigate}
            onSelectServicePackage={handleSelectServicePackage}
            onSelectHookForBrief={handleSelectHookForBrief}
            onSendAuditBrief={handleSendAuditBrief}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            darkMode={darkMode}
            onNavigate={handleNavigate}
            onSelectProjectForBrief={(projectName) => {
              setPrefilledService(`Creative Sprint based on: ${projectName}`);
              handleNavigate('contact');
            }}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            darkMode={darkMode}
            onNavigate={handleNavigate}
            onSelectPackage={handleSelectServicePackage}
          />
        )}

        {currentPage === 'calculator' && (
          <RoiCalculatorPage
            darkMode={darkMode}
            onNavigate={handleNavigate}
            onApplyCalculationsToBrief={handleApplyRoiToBrief}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            darkMode={darkMode}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            darkMode={darkMode}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            darkMode={darkMode}
            onNavigate={handleNavigate}
            prefilledService={prefilledService}
            prefilledBudget={prefilledBudget}
            prefilledDescription={prefilledDescription}
          />
        )}
      </main>

      {/* Persistent Footer Section */}
      <Footer
        darkMode={darkMode}
        onNavigate={handleNavigate}
      />

      {/* Floating Marketer Quick Toolbar */}
      <FloatingMarketerToolbar
        darkMode={darkMode}
        onOpenAudit={() => {
          handleNavigate('home');
        }}
        onOpenHookGen={() => {
          handleNavigate('home');
        }}
        onOpenBurnModeler={() => {
          handleNavigate('home');
        }}
        onOpenTeardown={() => setIsTeardownModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Global A/B Creative Teardown Modal */}
      <AdCreativeCompareModal
        isOpen={isTeardownModalOpen}
        onClose={() => setIsTeardownModalOpen(false)}
        darkMode={darkMode}
        onNavigate={handleNavigate}
      />

      {/* Interactive Client Portal Modal */}
      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        darkMode={darkMode}
        onTriggerNotification={triggerNotification}
      />

      {/* Real-time Notification Toast */}
      {activeToast && (
        <NotificationToast
          title={activeToast.title}
          message={activeToast.message}
          onClose={() => setActiveToast(null)}
          darkMode={darkMode}
        />
      )}

    </div>
  );
}

