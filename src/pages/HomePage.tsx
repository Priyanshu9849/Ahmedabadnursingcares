import React from 'react';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
  FileText,
  UserCheck,
  ChevronRight,
  ArrowRight,
  Stethoscope,
  Users,
  Sparkles
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { SERVICES_DATA } from '../data/servicesData';
import { AHMEDABAD_LOCALITIES } from '../data/areasData';
import { GENERAL_FAQS } from '../data/faqsData';
import { EnquiryForm } from '../components/EnquiryForm';
import { CostCalculator } from '../components/CostCalculator';
import { ReviewsSection } from '../components/ReviewsSection';
import { SEOHead } from '../components/SEOHead';
import { SITE_IMAGES } from '../assets/images';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Home Nursing & Patient Care Services in Ahmedabad"
        description="Looking for nursing or patient-care support at home in Ahmedabad? Qualified GNM/B.Sc nurses & trained attendants. Call 9506333650 for staff availability."
        canonicalPath="/"
        schemaType="MedicalBusiness"
      />

      {/* Section B: Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 overflow-hidden">
        {/* Subtle geometric pattern backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & High Conversion CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800/80 border border-teal-600/50 text-teal-200 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Home Healthcare Staffing · Ahmedabad, Gujarat</span>
              </div>

              {/* Exact H1 Headline requested */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Home Nursing & Patient Care Services in Ahmedabad
              </h1>

              {/* Exact Supporting Text requested */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Looking for nursing or patient-care support at home? Tell us about your requirements and our team can help you explore suitable care options based on availability.
              </p>

              {/* Prominent Direct Phone Number Highlight */}
              <div className="p-4 rounded-xl bg-slate-800/90 border border-teal-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-teal-300 font-medium">Ahmedabad Coordination Desk</div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-wide">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </div>
                  </div>
                </div>

                <a
                  href={BUSINESS_CONFIG.phoneTelLink}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg text-center transition-all shadow-md active:scale-95"
                >
                  Direct Call
                </a>
              </div>

              {/* Action Buttons: Request a Caregiver, Call Now, WhatsApp */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-lg active:scale-98"
                >
                  Request a Caregiver
                </button>

                <a
                  href={BUSINESS_CONFIG.phoneTelLink}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-600 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call: {BUSINESS_CONFIG.phone}</span>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Shift Options Strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="border border-slate-700/60 rounded-lg p-2.5 bg-slate-800/40">
                  <div className="font-semibold text-white">12-Hr Day Shift</div>
                  <div className="text-slate-400 text-[11px]">8:00 AM – 8:00 PM</div>
                </div>
                <div className="border border-slate-700/60 rounded-lg p-2.5 bg-slate-800/40">
                  <div className="font-semibold text-white">12-Hr Night Shift</div>
                  <div className="text-slate-400 text-[11px]">8:00 PM – 8:00 AM</div>
                </div>
                <div className="border border-slate-700/60 rounded-lg p-2.5 bg-slate-800/40">
                  <div className="font-semibold text-white">24-Hr Live-in</div>
                  <div className="text-slate-400 text-[11px]">Stay-at-home care</div>
                </div>
                <div className="border border-slate-700/60 rounded-lg p-2.5 bg-slate-800/40">
                  <div className="font-semibold text-white">Procedure Visit</div>
                  <div className="text-slate-400 text-[11px]">Short clinical visit</div>
                </div>
              </div>
            </div>

            {/* Right Column: Real Hero Photo Card + Instant Enquiry Form */}
            <div id="enquiry-section" className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 shadow-2xl">
                <img
                  src={SITE_IMAGES.hero}
                  alt="Professional home nursing and patient care at home in Ahmedabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 sm:h-52 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Doorstep Nursing in Ahmedabad</span>
                  </div>
                  <span className="text-[11px] bg-teal-800/80 px-2 py-0.5 rounded text-teal-200 font-medium">
                    Satellite · Bopal · Bodakdev
                  </span>
                </div>
              </div>

              <EnquiryForm sourceTitle="Hero Section Lead" />
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Services Overview */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Available Care Staffing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
              Home Nursing & Patient Attendant Services in Ahmedabad
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We arrange both clinical nursing (medication, IV, injections, wound care) and non-clinical patient attendants (mobility, hygiene, diaper changing, feeding). Select a service below to explore full duties, limitations, and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 hover:border-teal-700/50 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-sm ${
                        service.category === 'clinical'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : service.category === 'specialized'
                          ? 'bg-purple-50 text-purple-800 border border-purple-200'
                          : 'bg-teal-50 text-teal-800 border border-teal-200'
                      }`}
                    >
                      {service.category === 'clinical'
                        ? 'Clinical Nursing'
                        : service.category === 'specialized'
                        ? 'Specialized Care'
                        : 'Patient Attendant'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Ahmedabad</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider">
                      Key Care Duties:
                    </div>
                    {service.keyDuties.slice(0, 3).map((duty, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{duty}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 bg-slate-50 p-2.5 rounded-lg text-[11px] text-slate-700">
                    <span className="font-semibold text-slate-900">Estimate: </span>
                    <span>{service.pricingEstimate.split('(')[0]}</span>
                    <span className="block text-[10px] text-amber-700 font-medium mt-0.5">
                      *दरें मरीज़ की स्थिति के अनुसार (Varies by condition)
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/${service.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1"
                  >
                    <span>Full Details & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={BUSINESS_CONFIG.phoneTelLink}
                    className="p-2 text-slate-600 hover:text-teal-800 rounded-md hover:bg-slate-100"
                    title={`Call for ${service.shortTitle}`}
                    aria-label={`Call for ${service.shortTitle}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Prominent Bilingual Pricing & Patient Acuity Notice */}
          <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 via-teal-50/50 to-white border-2 border-amber-300/80 rounded-2xl shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-200/60 text-amber-950 font-bold text-xs rounded-full">
                  <AlertCircle className="w-4 h-4 text-amber-800" />
                  <span>दरें मरीज़ की स्थिति व देखभाल की ज़रूरत के अनुसार</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  Rate Information: Final Quotation is Based on Patient Condition
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  प्रत्येक मरीज़ की ज़रूरतें भिन्न होती हैं। मरीज़ का वज़न, हिलने-डुलने की क्षमता (Mobility), मेडिकल उपकरण (IV Drip, Catheter, Suction, Oxygen) और शिफ्ट की अवधि (12h या 24h) देखकर सही व पारदर्शी दरें तय की जाती हैं। कोई छुपा हुआ शुल्क नहीं।
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
                <a
                  href={BUSINESS_CONFIG.phoneTelLink}
                  className="px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs rounded-lg text-center flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {BUSINESS_CONFIG.phone}</span>
                </a>
                <a
                  href={getWhatsAppLink("Hello Ahmedabad Nursing Cares, please share exact rates based on my patient condition in Ahmedabad.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg text-center flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Care Visual Gallery Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Dedicated Home Caregiving
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Compassionate Care at Home in Ahmedabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Realistic, dignified care provided at the patient's bedside by qualified staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Photo 1 */}
            <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xs hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={SITE_IMAGES.hero}
                  alt="Qualified home nurse checking blood pressure of senior patient in Ahmedabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-slate-900">Clinical Home Nursing</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Vitals monitoring, BP checks, injections & sterile IV management.</p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xs hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={SITE_IMAGES.elderlyCare}
                  alt="Attendant assisting elderly grandfather walking at home in Ahmedabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-slate-900">Elderly Mobility Support</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Walking assistance, fall prevention, sponge bathing & companionship.</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xs hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={SITE_IMAGES.clinicalNurse}
                  alt="Clinical home nurse managing IV drip and patient monitoring in Ahmedabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-slate-900">Post-Op & Bedside Care</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Surgical wound care, IV infusion, catheter management & charting.</p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xs hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={SITE_IMAGES.motherBaby}
                  alt="Japa maid caregiver cradling newborn baby with mother resting peacefully in Ahmedabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-slate-900">Mother & Newborn Japa Care</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Ayurvedic baby oil massage, warm bath & mother postnatal rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Care Cost Calculator Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Direct Budget Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Plan Your Home Care Expenses in Ahmedabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Calculate realistic daily and monthly costs for Attendants and Certified Nurses. You can also customize your target rate.
            </p>
          </div>

          <CostCalculator />
        </div>
      </section>

      {/* Section E: Why Choose Us (Honest, Uninvented) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Straightforward Staffing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Why Families in Ahmedabad Contact Us Directly
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              We do not make unrealistic promises. We focus on transparent communication, thorough patient requirement understanding, appropriate staff matching, and clear quotations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-teal-800" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Thorough Needs Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We take time to understand the patient’s exact clinical or physical condition, doctor instructions, and family schedule before suggesting candidates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5 text-teal-800" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Appropriate Staff Matching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We clearly separate certified clinical nurses from non-clinical attendants, ensuring you get the exact skill tier required without paying for unnecessary services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-teal-800" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Transparent Quotations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All daily and monthly charges are explained upfront before candidate deployment. No surprise add-ons or hidden agency commissions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-teal-800" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Active Replacement Coordination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the deployed caregiver takes planned leave or is not a good mutual fit, we actively coordinate suitable substitute staff based on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section F: How It Works (Strictly 4 Steps from prompt) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              How Home Care Staffing Works
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Straightforward coordination designed to get trusted care to your doorstep in Ahmedabad with zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
              <div className="text-3xl font-extrabold text-teal-800 mb-3">01</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Share Care Requirements</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Call us at <strong>{BUSINESS_CONFIG.phone}</strong> or send a message on WhatsApp with the patient’s diagnosis, shift timings, and Ahmedabad locality.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
              <div className="text-3xl font-extrabold text-teal-800 mb-3">02</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Discuss Needs With Team</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our care coordinator discusses the medical background, whether clinical nursing or personal attendant care is required, and any language preference.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
              <div className="text-3xl font-extrabold text-teal-800 mb-3">03</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Confirm Availability & Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We verify staff availability in your Ahmedabad neighborhood, share candidate details, and provide a clear written quotation.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
              <div className="text-3xl font-extrabold text-teal-800 mb-3">04</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Arrange the Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Once terms and start dates are agreed, the caregiver is deployed to your home to commence patient care according to schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section G: Service Areas in Ahmedabad */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Coverage Across Ahmedabad
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Residential Localities We Genuinely Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We arrange door-step patient care and nursing staff across these Ahmedabad neighborhoods:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {AHMEDABAD_LOCALITIES.map((area) => (
              <div
                key={area.name}
                className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs hover:border-teal-700/40 transition-colors"
              >
                <div className="font-bold text-sm text-slate-900">{area.name}</div>
                <div className="text-[11px] text-teal-700 font-medium mt-0.5">Pincode: {area.pincodeRange}</div>
                <div className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                  {area.commonRequests.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/service-areas"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/service-areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 hover:text-teal-900"
            >
              <span>View full Ahmedabad locality details & zone map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Section H: FAQs */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Clear answers regarding home nursing, attendant responsibilities, shifts, and costs in Ahmedabad.
            </p>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-xl bg-slate-50/50 p-5 open:bg-white open:shadow-xs transition-all"
              >
                <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-teal-800 font-bold text-lg group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/faqs"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/faqs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-teal-800 hover:underline"
            >
              Explore all 20+ Frequently Asked Questions →
            </a>
          </div>
        </div>
      </section>

      {/* Section I: Reviews / Feedback Process */}
      <ReviewsSection />

      {/* Section J: Final Call To Action */}
      <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Staff Available for Dispatch in Ahmedabad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need Patient Care at Home in Ahmedabad?
          </h2>

          <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our care coordinator today. We will understand your patient’s condition and check immediate staff availability across your neighborhood.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="px-6 py-3.5 bg-white text-teal-950 font-bold text-sm rounded-lg hover:bg-teal-50 transition-colors shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-800" />
              <span>Call Now: {BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 text-white font-semibold text-sm rounded-lg hover:bg-emerald-500 transition-colors shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              type="button"
              onClick={scrollToEnquiry}
              className="px-6 py-3.5 bg-teal-800 text-teal-100 border border-teal-700 font-semibold text-sm rounded-lg hover:bg-teal-700 transition-colors"
            >
              Request a Callback
            </button>
          </div>

          <div className="text-xs text-teal-200 pt-2">
            No upfront registration fee · Direct telephone support: <strong>{BUSINESS_CONFIG.phoneDisplay}</strong>
          </div>
        </div>
      </section>
    </>
  );
};
