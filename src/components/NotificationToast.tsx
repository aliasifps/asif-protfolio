import React from 'react';
import { Bell, X, Sparkles } from 'lucide-react';

interface ToastProps {
  title: string;
  message: string;
  onClose: () => void;
  darkMode: boolean;
}

export const NotificationToast: React.FC<ToastProps> = ({
  title,
  message,
  onClose,
  darkMode
}) => {
  return (
    <div
      id="live-notification-toast"
      className={`fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-2xl border shadow-2xl backdrop-blur-xl animate-bounce-in flex items-start gap-3 transition-all ${
        darkMode 
          ? 'bg-[#181818]/95 border-[#D4AF37]/50 text-[#F5F5F3] shadow-black/60' 
          : 'bg-[#F9F8F6]/95 border-[#0A192F]/30 text-[#0A192F] shadow-[#0A192F]/10'
      }`}
    >
      <div className={`p-2 rounded-xl text-white shrink-0 shadow-md ${
        darkMode
          ? 'bg-gradient-to-tr from-[#B89324] to-[#D4AF37] text-[#121212]'
          : 'bg-gradient-to-tr from-[#0A192F] to-[#1E3A63] text-[#F9F8F6]'
      }`}>
        <Bell className="w-4 h-4" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className={`text-xs font-bold font-heading truncate ${
            darkMode ? 'text-[#D4AF37]' : 'text-[#0A192F]'
          }`}>{title}</p>
          <button
            onClick={onClose}
            className={`p-1 rounded-lg transition-colors cursor-pointer ${
              darkMode ? 'text-[#E8E6DF]/50 hover:text-white' : 'text-[#0A192F]/50 hover:text-[#0A192F]'
            }`}
            aria-label="Dismiss alert"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className={`text-xs mt-0.5 leading-snug line-clamp-2 ${darkMode ? 'text-[#E8E6DF]/70' : 'text-[#0A192F]/70'}`}>
          {message}
        </p>
      </div>
    </div>
  );
};
