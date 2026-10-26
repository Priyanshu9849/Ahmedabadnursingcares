import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'WebSite' | 'MedicalBusiness' | 'Service' | 'FAQPage';
  schemaData?: Record<string, unknown>;
}

export const SEOHead = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'MedicalBusiness',
  schemaData
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | ${BUSINESS_CONFIG.name}`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Canonical link
    const canonicalUrl = `${BUSINESS_CONFIG.domain}${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Structured Data JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": BUSINESS_CONFIG.name,
      "alternateName": "Ahmedabad Nursing Cares",
      "url": BUSINESS_CONFIG.domain,
      "telephone": BUSINESS_CONFIG.phoneDisplay,
      "priceRange": "₹₹",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": BUSINESS_CONFIG.city,
        "addressRegion": BUSINESS_CONFIG.state,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "areaServed": [
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "AdministrativeArea", "name": "Satellite, Ahmedabad" },
        { "@type": "AdministrativeArea", "name": "Bodakdev, Ahmedabad" },
        { "@type": "AdministrativeArea", "name": "Vastrapur, Ahmedabad" },
        { "@type": "AdministrativeArea", "name": "Bopal, Ahmedabad" },
        { "@type": "AdministrativeArea", "name": "SG Highway, Ahmedabad" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "22:00"
        }
      ],
      ...schemaData
    };

    scriptTag.textContent = JSON.stringify(baseSchema);
  }, [title, description, canonicalPath, schemaType, schemaData]);

  return null;
};
