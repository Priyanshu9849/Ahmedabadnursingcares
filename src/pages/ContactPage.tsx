import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquiryForm } from '../components/EnquiryForm';
import { SEOHead } from '../components/SEOHead';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Contact Ahmedabad Nursing Cares | Phone & WhatsApp Enquiry"
        description="Contact Ahmedabad Nursing Cares at 9506333650 for home nursing & patient attendant staffing in Ahmedabad. Fast coordination on phone and WhatsApp."
        canonicalPath="/contact"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Direct Contact
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Contact Our Ahmedabad Care Desk
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              For urgent patient-care staffing, shift enquiries, or transparent pricing quotations, call or message us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Phone card */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Primary Coordination Telephone
                </div>
                <div className="text-2xl font-black text-slate-900">
                  {BUSINESS_CONFIG.phoneDisplay}
                </div>
                <p className="text-xs text-slate-600">
                  Direct line to our Ahmedabad staffing desk. Available {BUSINESS_CONFIG.callingHours}.
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_CONFIG.phoneTelLink}
                    className="inline-flex items-center gap-2 py-2 px-4 bg-teal-800 text-white text-xs font-bold rounded-lg hover:bg-teal-900 transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now (tel:9506333650)</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="p-6 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  WhatsApp Messaging
                </div>
                <div className="text-xl font-bold text-emerald-950">
                  +{BUSINESS_CONFIG.whatsappNumber}
                </div>
                <p className="text-xs text-emerald-900">
                  Share your patient requirement, hospital discharge summary, or shift timings on WhatsApp for rapid availability feedback.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Operating model notice */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Coverage & Deployment Model:</span>
                </div>
                <p className="leading-relaxed">
                  We deploy nursing staff and patient attendants directly to residential addresses across Ahmedabad (including Satellite, Bopal, Bodakdev, SG Highway, Vastrapur, and Maninagar). We do not operate a walk-in clinic. All consultations and staff matching are managed via phone and WhatsApp.
                </p>
              </div>
            </div>

            {/* Right Column: Working Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm sourceTitle="Contact Us Page Form" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
