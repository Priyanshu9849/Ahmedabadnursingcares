import React, { useState } from 'react';
import { Search, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';
import { GENERAL_FAQS } from '../data/faqsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'services' | 'pricing' | 'staffing'>('all');

  const filteredFaqs = GENERAL_FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions (FAQs) | Ahmedabad Nursing Cares"
        description="Common questions about home nursing, patient attendants, 12-hour/24-hour shift costs, and staff matching in Ahmedabad. Clear answers before booking."
        canonicalPath="/faqs"
        schemaType="FAQPage"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'FAQs' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Clear Healthcare Information
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about arranging certified home nursing and patient attendants in Ahmedabad.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic (e.g., night shift, pricing, injection, attendant)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'services', label: 'Services & Duties' },
              { id: 'pricing', label: 'Pricing & Charges' },
              { id: 'staffing', label: 'Staff Matching & Shifts' },
              { id: 'general', label: 'General & Policies' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-teal-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <details
                  key={idx}
                  open={idx === 0 && !searchTerm}
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
              ))
            ) : (
              <div className="text-center py-10 text-slate-500 text-xs">
                No matching questions found for "{searchTerm}". Call us directly at {BUSINESS_CONFIG.phone} to ask your question.
              </div>
            )}
          </div>

          {/* Direct CTA */}
          <div className="p-6 bg-slate-900 text-white rounded-xl text-center space-y-4">
            <h3 className="text-lg font-bold">Have a Specific Patient Situation in Mind?</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Every patient recovery is unique. Our Ahmedabad coordination desk is happy to answer your specific questions on staff availability, timings, and rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={BUSINESS_CONFIG.phoneTelLink}
                className="px-5 py-2.5 bg-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-teal-400 transition-colors"
              >
                Call: {BUSINESS_CONFIG.phone}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 text-white font-semibold text-xs rounded-lg hover:bg-emerald-500 transition-colors"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
