import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  Stethoscope,
  UserCheck,
  Sparkles,
  Info,
  AlertCircle
} from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { SERVICES_DATA } from '../data/servicesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquiryForm } from '../components/EnquiryForm';
import { SEOHead } from '../components/SEOHead';
import { SITE_IMAGES } from '../assets/images';

interface ServicePageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, onNavigate }) => {
  const customWhatsAppText = `Hello Ahmedabad Nursing Cares, I am interested in ${service.title}. Please provide availability and pricing for Ahmedabad.`;

  // Internal links: other related services
  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        schemaType="Service"
        schemaData={{
          serviceType: service.title,
          provider: {
            "@type": "MedicalBusiness",
            "name": BUSINESS_CONFIG.name,
            "telephone": BUSINESS_CONFIG.phoneDisplay
          },
          areaServed: {
            "@type": "City",
            "name": "Ahmedabad"
          }
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs
          items={[
            { label: 'Services', path: '/#services' },
            { label: service.shortTitle }
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Service Header / Hero */}
      <section className="bg-gradient-to-b from-teal-900 via-slate-900 to-slate-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-600/40 text-teal-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {service.category === 'clinical'
                  ? 'Certified Clinical Nursing Care'
                  : 'Dedicated Patient Caregiver Staffing'}
                {' · Ahmedabad'}
              </span>
            </div>

            {/* Exactly one descriptive H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.tagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_CONFIG.phoneTelLink}
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-lg transition-transform active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {BUSINESS_CONFIG.phone}</span>
              </a>

              <a
                href={getWhatsAppLink(customWhatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg flex items-center gap-2 transition-transform active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Detailed Service Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Visual Photography Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src={
                  service.id.includes('mother-baby')
                    ? SITE_IMAGES.motherBaby
                    : service.category === 'clinical'
                    ? SITE_IMAGES.clinicalNurse
                    : service.id.includes('elderly')
                    ? SITE_IMAGES.elderlyCare
                    : SITE_IMAGES.hero
                }
                alt={`${service.title} provided at home in Ahmedabad`}
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-72 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Staffing · Ahmedabad</span>
                </span>
                <span className="bg-teal-700/80 backdrop-blur-md px-2.5 py-1 rounded text-teal-100 font-semibold text-[11px]">
                  Direct Doorstep Deployment
                </span>
              </div>
            </div>

            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                About This Service in Ahmedabad
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.description}
              </p>

              {/* Qualifications */}
              <div className="p-4 bg-teal-50/70 border border-teal-200/60 rounded-xl text-xs text-teal-900 space-y-1">
                <div className="font-bold text-teal-950 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-teal-700" />
                  <span>Staff Qualifications & Screening:</span>
                </div>
                <p className="text-teal-800">{service.qualifications}</p>
              </div>
            </section>

            {/* Key Duties */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Key Responsibilities & Care Duties
              </h2>
              <div className="grid grid-cols-1 gap-2.5">
                {service.keyDuties.map((duty, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">{duty}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Scope vs Limitations (Mandatory Distinction) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Scope */}
              <div className="p-5 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3">
                <h3 className="font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Service Scope</span>
                </h3>
                <ul className="space-y-2 text-xs text-emerald-900">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div className="p-5 bg-amber-50/50 border border-amber-200 rounded-xl space-y-3">
                <h3 className="font-bold text-sm text-amber-950 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Limitations & Medical Boundaries</span>
                </h3>
                <ul className="space-y-2 text-xs text-amber-900">
                  {service.limitations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Shifts & Pricing Guidance */}
            <section className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Shift Formats & Pricing in Ahmedabad
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-900">Available Shifts:</div>
                  <ul className="mt-1 space-y-1 text-slate-600">
                    {service.shifts.map((sh, idx) => (
                      <li key={idx}>• {sh}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-900">Pricing Estimate:</div>
                  <p className="mt-1 text-slate-800 font-bold">
                    {service.pricingEstimate}
                  </p>
                </div>
              </div>

              {/* Patient Condition Note */}
              <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>दरें मरीज़ की स्थिति के अनुसार (Rates Depend on Patient Condition):</span>
                </div>
                <p className="text-[11px] leading-relaxed text-amber-900">
                  मरीज़ की शारीरिक स्थिति, वज़न, मेडिकल ज़रूरतें (कैथेटर, ऑक्सीजन, ड्रिप, बेडसोर) और शिफ्ट समय के आधार पर सही व सटीक दरें तय की जाती हैं।
                </p>
              </div>
            </section>

            {/* Service FAQs */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Frequently Asked Questions about {service.shortTitle}
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-lg bg-white p-4 open:shadow-2xs"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-teal-800 font-bold text-base group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 pt-2.5 border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Internal Links: Related Services */}
            <section className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Explore Related Care Options in Ahmedabad:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {otherServices.map((rel) => (
                  <a
                    key={rel.id}
                    href={`/${rel.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/${rel.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3 bg-white hover:bg-teal-50/50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:text-teal-900 transition-colors flex items-center justify-between"
                  >
                    <span>{rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Quick Enquiry & Direct Call Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Coordinator Calling Box */}
            <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Instant Staff Coordination
              </div>
              <h3 className="text-xl font-bold">
                Need {service.shortTitle} Today?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our care coordinator for urgent bedside requirements or post-discharge planning across Ahmedabad.
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href={BUSINESS_CONFIG.phoneTelLink}
                  className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>

                <a
                  href={getWhatsAppLink(customWhatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Dedicated Enquiry Form */}
            <div className="sticky top-24">
              <EnquiryForm
                initialService={service.title}
                sourceTitle={`${service.title} Page`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
