import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldAlert, Heart } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { SERVICES_DATA } from '../data/servicesData';
import { AHMEDABAD_LOCALITIES } from '../data/areasData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                ANC
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {BUSINESS_CONFIG.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Home nursing and patient-care staffing agency serving families across Ahmedabad, Gujarat. We assist families in matching qualified nurses and dedicated attendants for home convalescence, post-operative care, and elderly assistance.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-white">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enquiry & Booking: </span>
                <a href={BUSINESS_CONFIG.phoneTelLink} className="font-bold text-emerald-400 hover:underline">
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-white">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:underline"
                >
                  +{BUSINESS_CONFIG.whatsappNumber}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Direct door-step caregiver deployment across residential societies in Ahmedabad, Gujarat, India.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical & Nursing Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Nursing
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.filter(s => s.category === 'clinical').map(service => (
                <li key={service.id}>
                  <a
                    href={`/${service.slug}`}
                    onClick={(e) => handleNav(e, `/${service.slug}`)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Attendant & Elder Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Patient Attendants
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.filter(s => s.category !== 'clinical').map(service => (
                <li key={service.id}>
                  <a
                    href={`/${service.slug}`}
                    onClick={(e) => handleNav(e, `/${service.slug}`)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Coverage */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/cost-calculator" onClick={(e) => handleNav(e, '/cost-calculator')} className="hover:text-emerald-400 transition-colors">
                  Cost Calculator
                </a>
              </li>
              <li>
                <a href="/service-areas" onClick={(e) => handleNav(e, '/service-areas')} className="hover:text-emerald-400 transition-colors">
                  Ahmedabad Areas
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleNav(e, '/about')} className="hover:text-emerald-400 transition-colors">
                  About Our Agency
                </a>
              </li>
              <li>
                <a href="/faqs" onClick={(e) => handleNav(e, '/faqs')} className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleNav(e, '/contact')} className="hover:text-emerald-400 transition-colors">
                  Contact Care Desk
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => handleNav(e, '/privacy-policy')} className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" onClick={(e) => handleNav(e, '/terms')} className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Coverage Badges */}
        <div className="py-6 border-b border-slate-800">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Ahmedabad Service Zones:
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {AHMEDABAD_LOCALITIES.slice(0, 10).map((loc, idx) => (
              <span key={loc.name}>
                <a
                  href="/service-areas"
                  onClick={(e) => handleNav(e, '/service-areas')}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {loc.name.split(' &')[0]}
                </a>
                {idx < 9 && <span className="ml-2 text-slate-600">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Medical & Emergency Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Emergency Medical Notice</span>
          </div>
          <p className="leading-relaxed">
            Ahmedabad Nursing Cares is a home healthcare staffing coordination agency matching families with independent nursing professionals and home attendants based on availability. We do not provide acute hospital emergency rescue, ICU triage, or emergency ambulance transit. For life-threatening medical emergencies in Ahmedabad, immediately dial 108 or rush the patient to the nearest multi-specialty hospital emergency department.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved. Operating exclusively in Ahmedabad, Gujarat, India.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" onClick={(e) => handleNav(e, '/privacy-policy')} className="hover:underline">
              Privacy Notice
            </a>
            <span className="text-slate-700">|</span>
            <a href="/terms" onClick={(e) => handleNav(e, '/terms')} className="hover:underline">
              Staffing Terms
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">Direct Desk: {BUSINESS_CONFIG.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
