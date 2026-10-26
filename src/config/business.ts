/**
 * Ahmedabad Nursing Cares - Central Business Configuration
 * ALL contact details, phone numbers, and domain links MUST be referenced from here.
 * NEVER hardcode phone numbers in components.
 */

export const BUSINESS_CONFIG = {
  name: "Ahmedabad Nursing Cares",
  legalName: "Ahmedabad Nursing Cares Staffing Agency",
  tagline: "Home Nursing & Patient Care Staffing in Ahmedabad",
  domain: "https://ahmedabadnursingcares.com",
  siteUrl: "https://ahmedabadnursingcares.com",
  
  // PRIMARY CONTACT NUMBERS
  // Strictly: 9506333650 (No other numbers)
  phone: "9506333650",
  phoneDisplay: "+91 95063 33650",
  phoneTelLink: "tel:+919506333650",
  
  // WHATSAPP
  whatsappNumber: "919506333650",
  whatsappDisplay: "+91 95063 33650",
  defaultWhatsAppMessage: "Hello Ahmedabad Nursing Cares, I need home nursing or patient-care services in Ahmedabad. Please contact me regarding service availability and pricing.",
  
  // LOCATION & MARKET
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  countryCode: "+91",
  currency: "INR",
  currencySymbol: "₹",
  serviceNote: "We arrange door-step patient care and nursing staff across residential areas in Ahmedabad. We operate on a direct home-matching model without public walk-in clinic visits.",
  
  // OPERATING HOURS
  callingHours: "8:00 AM - 10:00 PM (Monday to Sunday)",
  shiftsAvailable: ["12-Hour Day Shift", "12-Hour Night Shift", "24-Hour Live-in Care", "Short Clinical Nursing Visits (1-2 Hours)"],
  
  // GOOGLE ANALYTICS (Optional / Configurable)
  googleAnalyticsId: "", // Set via VITE_GA_ID or Vercel environment variable
  googleSearchConsoleVerification: "",
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || BUSINESS_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
