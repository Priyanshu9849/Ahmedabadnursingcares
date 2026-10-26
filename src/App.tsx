/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { AreasPage } from './pages/AreasPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CostCalculator } from './components/CostCalculator';
import { Breadcrumbs } from './components/Breadcrumbs';
import { SEOHead } from './components/SEOHead';
import { SERVICES_DATA, getServiceBySlug } from './data/servicesData';
import { BUSINESS_CONFIG } from './config/business';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('/#')) {
      // Anchor link on homepage
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const id = path.replace('/#', '');
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = path.replace('/#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine current active service if any
  const normalizedSlug = currentPath.replace(/^\//, '').replace(/\/$/, '');
  const matchedService = getServiceBySlug(normalizedSlug);

  const renderContent = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Dedicated Service Pages (all 10 verified routes)
    if (matchedService) {
      return <ServicePage service={matchedService} onNavigate={navigate} />;
    }

    // 3. Static & Utility Pages
    if (currentPath === '/about' || currentPath === '/about/') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (currentPath === '/contact' || currentPath === '/contact/') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (currentPath === '/faqs' || currentPath === '/faqs/') {
      return <FaqPage onNavigate={navigate} />;
    }

    if (currentPath === '/service-areas' || currentPath === '/service-areas/') {
      return <AreasPage onNavigate={navigate} />;
    }

    if (currentPath === '/cost-calculator' || currentPath === '/cost-calculator/') {
      return (
        <>
          <SEOHead
            title="Home Care Cost Calculator Ahmedabad | Rates for Nurse & Attendant"
            description="Calculate expected costs for 12-hour and 24-hour home nursing and patient attendants in Ahmedabad. Transparent estimates with no broker commission."
            canonicalPath="/cost-calculator"
          />
          <div className="bg-slate-50 border-b border-slate-200">
            <Breadcrumbs items={[{ label: 'Care Cost Calculator' }]} onNavigate={navigate} />
          </div>
          <div className="py-16 px-4 bg-white">
            <CostCalculator />
          </div>
        </>
      );
    }

    if (currentPath === '/privacy-policy' || currentPath === '/privacy-policy/') {
      return <PrivacyPage onNavigate={navigate} />;
    }

    if (currentPath === '/terms' || currentPath === '/terms/') {
      return <TermsPage onNavigate={navigate} />;
    }

    // 4. Custom 404
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">{renderContent()}</main>
      <Footer onNavigate={navigate} />
      <MobileQuickBar />
    </div>
  );
}
