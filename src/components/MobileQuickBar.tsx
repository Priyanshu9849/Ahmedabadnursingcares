import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

interface MobileQuickBarProps {
  customWhatsAppText?: string;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ customWhatsAppText }) => {
  return (
    <aside
      aria-label="Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={BUSINESS_CONFIG.phoneTelLink}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-teal-800 text-white rounded-lg font-semibold text-xs shadow-sm active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-emerald-300 animate-pulse" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppLink(customWhatsAppText)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 text-white rounded-lg font-semibold text-xs shadow-sm active:scale-98 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
