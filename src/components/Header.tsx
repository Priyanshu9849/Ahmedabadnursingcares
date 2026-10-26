import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/#services" },
    { label: "Calculator", path: "/cost-calculator" },
    { label: "Service Areas", path: "/service-areas" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Home Healthcare Staffing in Ahmedabad, Gujarat · Direct Caregiver Matching</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 hidden sm:inline">Coordinator Desk: {BUSINESS_CONFIG.phoneDisplay}</span>
            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2 text-slate-900 group shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ANC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors whitespace-nowrap">
                Ahmedabad Nursing Cares
              </span>
              <span className="text-[11px] font-medium text-teal-700 tracking-wide uppercase">
                Home Health Staffing
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`transition-colors whitespace-nowrap hover:text-teal-800 ${
                  currentPath === link.path ? 'text-teal-800 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Conversion CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md hover:bg-emerald-100 transition-colors whitespace-nowrap"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-800 rounded-md hover:bg-teal-900 shadow-sm transition-colors whitespace-nowrap"
              aria-label="Call Ahmedabad Nursing Cares"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="p-2 text-white bg-teal-800 rounded-md sm:hidden"
              aria-label="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 rounded-md hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-900"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={BUSINESS_CONFIG.phoneTelLink}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-teal-800 rounded-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call: {BUSINESS_CONFIG.phone}</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
