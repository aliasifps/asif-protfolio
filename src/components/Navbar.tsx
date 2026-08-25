import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Menu, X, ArrowUpRight, ShieldCheck, Activity, Bell, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPortal: () => void;
  onOpenNotifications: () => void;
  unreadCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activePage,
  onNavigate,
  onOpenPortal,
  onOpenNotifications,
  unreadCount
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: PageId }[] = [
    { name: 'Work', page: 'work' },
    { name: 'Services', page: 'services' },
    { name: 'ROI Calculator', page: 'calculator' },
    { name: 'Testimonials', page: 'testimonials' },
    { name: 'Insights', page: 'insights' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, page: PageId) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#121212]/92 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg shadow-black/60 py-3'
            : 'bg-[#F9F8F6]/92 backdrop-blur-xl border-b border-[#E5E0D5] shadow-md shadow-[#0A192F]/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-link"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl font-bold shadow-md transition-transform group-hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-tr from-[#B89324] via-[#D4AF37] to-[#F3E5AB] text-[#121212] shadow-[#D4AF37]/20'
                : 'bg-gradient-to-tr from-[#0A192F] via-[#162E50] to-[#244B7E] text-[#F9F8F6] shadow-[#0A192F]/20'
            }`}>
              <span className="font-heading tracking-tighter text-lg font-black">A</span>
              <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 animate-pulse ${
                darkMode ? 'bg-[#D4AF37] border-[#121212]' : 'bg-[#D4AF37] border-[#F9F8F6]'
              }`}></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-heading font-extrabold text-xl tracking-tight ${
                  darkMode ? 'text-[#F5F5F3]' : 'text-[#0A192F]'
                }`}>
                  {PERSONAL_INFO.name}
                </span>
                <span className={`hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider ${
                  darkMode
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/35'
                    : 'bg-[#0A192F]/10 text-[#0A192F] border border-[#0A192F]/20'
                }`}>
                  PRO
                </span>
              </div>
              <p className={`text-[11px] font-medium tracking-wide uppercase ${
                darkMode ? 'text-[#D4AF37]/80' : 'text-[#0A192F]/70'
              }`}>
                AI Video & Digital Growth
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.page)}
                  className={`text-sm font-medium transition-all relative py-1 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-[#D4AF37] font-bold'
                        : 'text-[#0A192F] font-bold'
                      : darkMode
                      ? 'text-[#E8E6DF]/80 hover:text-[#D4AF37]'
                      : 'text-[#0A192F]/75 hover:text-[#0A192F]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      darkMode
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-sm shadow-[#D4AF37]/50'
                        : 'bg-gradient-to-r from-[#0A192F] to-[#1E3A63] shadow-sm shadow-[#0A192F]/30'
                    }`}></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Notification Bell */}
            <button
              id="notification-bell-btn"
              onClick={onOpenNotifications}
              className={`relative p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF] hover:text-[#D4AF37] hover:border-[#D4AF37]/50'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:text-[#0A192F] hover:border-[#0A192F]/40'
              }`}
              title="Campaign Alerts & Notifications"
              aria-label="Campaign Alerts & Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center animate-pulse ${
                  darkMode ? 'bg-[#D4AF37] text-[#121212]' : 'bg-[#0A192F] text-[#F9F8F6]'
                }`}>
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Client Portal Button */}
            <button
              id="open-client-portal-btn"
              onClick={onOpenPortal}
              className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#181818] border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#202020] hover:border-[#D4AF37]/60 shadow-sm'
                  : 'bg-white border-[#0A192F]/20 text-[#0A192F] hover:bg-[#F2EFE8] hover:border-[#0A192F]/40 shadow-sm'
              }`}
              title="Client Growth Dashboard & Invoices"
            >
              <Activity className={`w-3.5 h-3.5 ${darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'}`} />
              <span>Client Portal</span>
            </button>

            {/* LinkedIn Profile Link */}
            <a
              id="navbar-linkedin-btn"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF] hover:text-[#D4AF37] hover:border-[#D4AF37]/40'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:text-[#0077b5] hover:border-[#0077b5]/50'
              }`}
              title="LinkedIn Profile: aliasifps"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-[#D4AF37] hover:bg-[#222222] hover:border-[#D4AF37]/50'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F] hover:bg-[#F2EFE8] hover:border-[#0A192F]/40'
              }`}
              title={darkMode ? 'Switch to Luxury Light (Ivory & Midnight Navy)' : 'Switch to Luxury Dark (Charcoal & Champagne Gold)'}
              aria-label={darkMode ? 'Switch to Luxury Light Mode' : 'Switch to Luxury Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary CTA - Luxury Champagne Gold in Dark, Midnight Navy in Light */}
            <button
              id="book-strategy-call-nav-btn"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer shadow-md ${
                darkMode
                  ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] hover:from-[#C5A028] hover:to-[#F3E5AB] text-[#121212] shadow-[#D4AF37]/20 font-black'
                  : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] hover:from-[#122A4E] hover:to-[#0A192F] text-[#F9F8F6] shadow-[#0A192F]/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-[#181818] border-[#2E2A22] text-[#E8E6DF]'
                  : 'bg-white border-[#E5E0D5] text-[#0A192F]'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className={`md:hidden mt-3 p-4 rounded-2xl border transition-all ${
              darkMode
                ? 'bg-[#181818]/96 border-[#D4AF37]/30 shadow-2xl text-[#E8E6DF] backdrop-blur-xl'
                : 'bg-[#F9F8F6]/96 border-[#E5E0D5] shadow-xl text-[#0A192F] backdrop-blur-xl'
            }`}
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={(e) => handleNavClick(e, 'home')}
                className={`py-2 px-3 rounded-lg text-sm font-medium text-left transition-colors cursor-pointer ${
                  activePage === 'home'
                    ? darkMode
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold border border-[#D4AF37]/30'
                      : 'bg-[#0A192F]/10 text-[#0A192F] font-bold border border-[#0A192F]/20'
                    : darkMode
                    ? 'hover:bg-[#222222] hover:text-[#D4AF37] text-[#E8E6DF]'
                    : 'hover:bg-[#EFECE6] hover:text-[#0A192F] text-[#0A192F]'
                }`}
              >
                Home / Index
              </button>

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.page)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium text-left transition-colors cursor-pointer ${
                    activePage === link.page
                      ? darkMode
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold border border-[#D4AF37]/30'
                        : 'bg-[#0A192F]/10 text-[#0A192F] font-bold border border-[#0A192F]/20'
                      : darkMode
                      ? 'hover:bg-[#222222] hover:text-[#D4AF37] text-[#E8E6DF]'
                      : 'hover:bg-[#EFECE6] hover:text-[#0A192F] text-[#0A192F]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              <div className={`pt-3 border-t flex flex-col gap-2 ${
                darkMode ? 'border-[#2E2A22]' : 'border-[#E5E0D5]'
              }`}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-xs font-semibold cursor-pointer ${
                    darkMode
                      ? 'bg-[#1f1f1f] border-[#D4AF37]/30 text-[#D4AF37]'
                      : 'bg-white border-[#0A192F]/20 text-[#0A192F]'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  Client Growth Dashboard
                </button>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-xs font-semibold ${
                    darkMode
                      ? 'bg-[#1f1f1f] border-[#2E2A22] text-[#E8E6DF] hover:text-[#D4AF37]'
                      : 'bg-white border-[#E5E0D5] text-[#0A192F]'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  LinkedIn Profile (aliasifps)
                </a>
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#B89324] via-[#D4AF37] to-[#E5C158] text-[#121212]'
                      : 'bg-gradient-to-r from-[#0A192F] via-[#122A4E] to-[#1E3A63] text-[#F9F8F6]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Book Strategy Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
