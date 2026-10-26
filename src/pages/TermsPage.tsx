import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Ahmedabad Nursing Cares"
        description="Standard terms of staffing and service arrangement for Ahmedabad Nursing Cares."
        canonicalPath="/terms"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Terms of Healthcare Staffing
            </h1>
            <p className="text-slate-500 text-xs">Last updated: October 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Nature of Agency Services</h2>
            <p>
              Ahmedabad Nursing Cares operates as a home healthcare staffing coordination agency. We match and arrange qualified freelance nurses and trained attendants to provide home-based care for private households in Ahmedabad, Gujarat.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Medical Authority & Emergency Exclusions</h2>
            <p>
              Our staff executes care pursuant to orders issued by the patient’s licensed physician. Caregivers and nurses do not make medical diagnoses, prescribe prescription medications, or alter medical dosages independently. In case of acute respiratory distress, severe instability, or cardiac arrest, the client family must immediately contact hospital emergency transport or dial 108.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Working Hours & Shift Rules</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>12-Hour Shifts:</strong> Staff are assigned for 12 continuous hours (Day Shift: 8:00 AM – 8:00 PM, Night Shift: 8:00 PM – 8:00 AM). Staff must be relieved punctually at the end of the shift.</li>
              <li><strong>24-Hour Live-in Care:</strong> Staff reside with the patient. The client household provides reasonable accommodation, meals, and at least 6 to 8 hours of sleep/rest during the 24-hour cycle.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Replacement Assistance</h2>
            <p>
              Should a matched caregiver request personal leave or prove unsuitable for the patient's routine, we make best efforts to coordinate a replacement caregiver subject to current roster availability.
            </p>
          </section>
        </div>
      </section>
    </>
  );
};
