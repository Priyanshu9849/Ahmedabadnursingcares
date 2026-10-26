import React from 'react';
import { ShieldCheck, Heart, UserCheck, Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="About Ahmedabad Nursing Cares | Home Healthcare Staffing Agency"
        description="Learn about Ahmedabad Nursing Cares, a home healthcare staffing agency serving families in Ahmedabad with qualified nurses and patient care attendants."
        canonicalPath="/about"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'About Us' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
              <span>Agency Profile & Philosophy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Ahmedabad Nursing Cares
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Ahmedabad Nursing Cares is a home healthcare staffing agency operating in Ahmedabad, Gujarat, India. Our sole focus is connecting families with competent, trustworthy nursing staff and patient-care attendants when home-based care is needed.
            </p>
          </div>

          {/* Transparent Mission */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Our Honest Business Model</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              When a family member faces a chronic illness, surgery discharge, or advanced age, finding the right caregiver can be stressful. We do not invent medical qualifications or claim to operate a hospital. Instead, we act as a disciplined healthcare staffing coordinator:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-800 font-bold">•</span>
                <span>We listen carefully to the patient’s medical diagnosis, doctor's discharge summary, and physical dependency.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-800 font-bold">•</span>
                <span>We maintain a verified network of qualified GNM/B.Sc nurses for clinical requirements and trained attendants for assisted living.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-800 font-bold">•</span>
                <span>We discuss candidate profiles directly with the family and deploy staff only once terms, timings, and prices are fully agreed.</span>
              </li>
            </ul>
          </div>

          {/* Clinical vs Non-Clinical Clarity */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Clear Separation of Duties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-2xs">
                <h3 className="font-bold text-sm text-slate-900 mb-2">Qualified Clinical Nurses</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hold GNM or B.Sc Nursing degrees. Trained in sterile wound dressing, IV drip management, urinary catheterization, Ryle's tube feeds, and vital signs documentation under doctor instructions.
                </p>
              </div>

              <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-2xs">
                <h3 className="font-bold text-sm text-slate-900 mb-2">Patient Care Attendants</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assist with daily living activities (sponge bathing, diaper changes, commode assistance, walker mobility, feeding support). Strictly non-clinical; they do not administer injections or change clinical dosages.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="p-8 bg-teal-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Have Questions or Need Staff Today?</h3>
              <p className="text-xs text-teal-200">
                Call our coordinator directly at <strong>{BUSINESS_CONFIG.phoneDisplay}</strong> or reach out on WhatsApp.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.phoneTelLink}
                className="px-5 py-2.5 bg-white text-teal-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:bg-teal-50 transition-colors"
              >
                Call Now
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 text-white font-semibold text-xs rounded-lg hover:bg-emerald-500 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
