import React from 'react';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SEOHead } from '../components/SEOHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Page Not Found (404) | Ahmedabad Nursing Cares"
        description="The page you requested could not be found. Return to Ahmedabad Nursing Cares homepage or call our coordinator."
        canonicalPath="/404"
      />

      <section className="py-24 bg-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mx-auto text-2xl font-black">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-slate-600">
            The page you are looking for does not exist or may have been relocated. Our home nursing and patient care staffing services in Ahmedabad remain active.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="w-full sm:w-auto px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-800" />
              <span>Call: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
