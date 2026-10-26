export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  category: 'clinical' | 'attendant' | 'specialized';
  shifts: string[];
  keyDuties: string[];
  scope: string[];
  limitations: string[];
  idealFor: string[];
  qualifications: string;
  pricingEstimate: string;
  faqs: { question: string; answer: string }[];
}

export interface EnquirySubmission {
  id?: string;
  customerName: string;
  phone: string;
  serviceRequired: string;
  preferredShift: string;
  ahmedabadArea: string;
  expectedStartDate: string;
  careRequirements: string;
  message?: string;
  createdAt?: string;
}

export interface AhmedabadLocality {
  name: string;
  zone: 'West' | 'North' | 'East' | 'South' | 'Central';
  pincodeRange: string;
  commonRequests: string[];
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'staffing';
}
