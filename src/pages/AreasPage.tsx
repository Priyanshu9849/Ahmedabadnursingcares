import React from 'react';
import { MapPin, Phone, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { AHMEDABAD_LOCALITIES } from '../data/areasData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface AreasPageProps {
  onNavigate: (path: string) => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Home Nursing & Patient Care Service Areas in Ahmedabad"
        description="Check home nursing and patient attendant coverage across Ahmedabad: Satellite, Bopal, Bodakdev, Vastrapur, SG Highway, Thaltej, Maninagar, Gota & more."
        canonicalPath="/service-areas"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Service Areas' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Ahmedabad Locality Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Home Care Service Areas in Ahmedabad
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ahmedabad Nursing Cares coordinates door-to-door caregiver and nurse staffing across residential societies in Ahmedabad, Gujarat. We operate on a direct deployment model and do not have a public walk-in clinical branch.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AHMEDABAD_LOCALITIES.map((area) => (
              <div
                key={area.name}
                className="bg-slate-50/60 p-6 rounded-xl border border-slate-200 hover:border-teal-700/50 transition-colors shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    {area.zone} Ahmedabad
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Pin: {area.pincodeRange}</span>
                </div>

                <h2 className="text-lg font-bold text-slate-900">{area.name}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>

                <div className="pt-2 border-t border-slate-200/80">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Frequent Requests:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.commonRequests.map((req, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(`Hello Ahmedabad Nursing Cares, do you have home care staff available in ${area.name}?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-teal-800 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Check availability in {area.name.split(' &')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Coordination CTA */}
          <div className="p-8 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Don't see your specific society or area listed?</h3>
              <p className="text-xs text-slate-300">
                Call our coordinator at <strong>{BUSINESS_CONFIG.phoneDisplay}</strong>. We evaluate staff availability across all sectors in and around Ahmedabad.
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              Call Coordinator Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
