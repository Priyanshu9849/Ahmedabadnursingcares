import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Ahmedabad Nursing Cares"
        description="Privacy policy and patient confidential information protection standards for Ahmedabad Nursing Cares."
        canonicalPath="/privacy-policy"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Privacy Notice & Patient Confidentiality
            </h1>
            <p className="text-slate-500 text-xs">Last updated: October 2026</p>
          </div>

          <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
            <div className="text-xs text-teal-950">
              <strong>Patient Confidentiality Commitment:</strong> We never sell, broadcast, or share medical history, discharge summaries, or contact numbers with third-party advertisers or lead brokers.
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you enquire for home nursing or attendant services, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Customer contact details: Full name, active mobile number, and general residential locality in Ahmedabad.</li>
              <li>Patient care requirements: General diagnosis, mobility status, shift requirements (e.g. 12-hour day/night or 24-hour), and expected start timeline.</li>
              <li>Doctor’s prescription: Only when clinical procedures (injections, catheterization, IV drips) are requested to ensure safe medical practice.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. How Information is Used</h2>
            <p>
              Your information is exclusively used to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluate staff availability in your neighborhood in Ahmedabad.</li>
              <li>Brief candidate nurses or attendants regarding the patient’s physical and clinical requirements.</li>
              <li>Share transparent quotations and confirm shift schedules with your family.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Contacting Us Regarding Data</h2>
            <p>
              If you wish to update or delete your enquiry details from our records, you may call our coordination desk at <strong>{BUSINESS_CONFIG.phoneDisplay}</strong> or message us via WhatsApp.
            </p>
          </section>
        </div>
      </section>
    </>
  );
};
