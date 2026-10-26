# Ahmedabad Nursing Cares — Production Website

**Domain:** [https://ahmedabadnursingcares.com](https://ahmedabadnursingcares.com)  
**Business Model:** Home Nursing & Patient-Care Staffing Agency  
**Target Market:** Ahmedabad, Gujarat, India  
**Business Phone:** `9506333650` (`tel:+919506333650`)  
**WhatsApp Number:** `919506333650` (`https://wa.me/919506333650`)  

---

## 1. Project Overview & Architecture

Ahmedabad Nursing Cares is a modern, high-conversion healthcare staffing web application tailored for Ahmedabad families seeking qualified home nurses and patient-care attendants. Built with React 19, TypeScript, Vite, and Tailwind CSS.

### Centralized Configuration
All business metadata, contact numbers, and domain URLs are defined in:
`src/config/business.ts`
- **Zero hardcoding**: Modifying `src/config/business.ts` updates phone numbers, WhatsApp links, and copy across the entire application instantly.
- **Strict contact integrity**: Only `9506333650` and `+919506333650` are utilized across all call and WhatsApp links.

---

## 2. Implemented Pages & Features

### A. Homepage (`/`)
- **Top Notification Bar**: Direct coordinator hotline display and coverage notice.
- **Hero Section**: 
  - Headline: *"Home Nursing & Patient Care Services in Ahmedabad"*
  - Supporting text: *"Looking for nursing or patient-care support at home? Tell us about your requirements and our team can help you explore suitable care options based on availability."*
  - CTAs: *"Request a Caregiver"*, *"Call Now (9506333650)"*, *"WhatsApp Enquiry"*.
- **Interactive Lead Capture Form**: Validates 10-digit Indian mobile numbers, logs enquiry locally, and offers a 1-tap WhatsApp transfer button.
- **Services Grid**: Categorized into Clinical Nursing, Patient Attendants, and Specialized Care.
- **Interactive Ahmedabad Care Cost Calculator**: Live shift estimator for 12h/24h and attendant vs. qualified nurse.
- **Why Choose Us**: Transparent requirements analysis, appropriate matching, clear quotations.
- **How It Works**: 4-step clear staffing workflow.
- **Service Areas**: Verified residential localities in Ahmedabad (Satellite, Bopal, Bodakdev, SG Highway, Vastrapur, Thaltej, Maninagar, etc.).
- **FAQs**: Accordion answering nurse vs. attendant, shift definitions, pricing.
- **Genuine Reviews / Feedback**: Review submission form and evaluation checklist without fabricated ratings.
- **Final High-Conversion CTA**: Direct call, WhatsApp, and callback request.

### B. Dedicated Service Pages (10 Routes)
Each page has its own unique SEO title, meta description, single H1, clinical scope vs non-clinical boundaries, pricing guidance, and FAQs:
1. `/home-nursing-services-ahmedabad`
2. `/nurse-at-home-ahmedabad`
3. `/patient-care-services-ahmedabad`
4. `/patient-attendant-ahmedabad`
5. `/12-hour-patient-care-ahmedabad`
6. `/24-hour-patient-care-ahmedabad`
7. `/elderly-care-ahmedabad`
8. `/bedridden-patient-care-ahmedabad`
9. `/post-surgery-care-ahmedabad`
10. `/mother-baby-care-ahmedabad`

### C. Supporting Pages
- `/cost-calculator`: Standalone interactive estimation tool.
- `/service-areas`: Comprehensive guide to Ahmedabad localities served.
- `/about`: Transparent agency background and staffing ethics.
- `/contact`: Dedicated coordinator contact page.
- `/faqs`: Searchable FAQ repository.
- `/privacy-policy`: Patient confidentiality standards.
- `/terms`: Staffing service terms and emergency medical disclaimer.
- `/404`: Custom page not found with home & call links.

### D. Conversion Optimization & Mobile Experience
- **Lean Mobile Sticky QuickBar**: Floating Call Now & WhatsApp buttons strictly respecting `<15%` viewport height.
- **Pre-filled WhatsApp Queries**: Encoded with the exact service or budget calculated.

---

## 3. SEO & Google Indexing Setup

- **Dynamic Head Management (`src/components/SEOHead.tsx`)**: Updates document title, description, and canonical tags per route.
- **Structured Data (JSON-LD)**: Schema.org `MedicalBusiness`, `Service`, and `FAQPage` markup with Ahmedabad geo-coordinates.
- **Robots.txt (`public/robots.txt`)**: Allows search engine crawlers and points to the sitemap.
- **XML Sitemap (`public/sitemap.xml`)**: Lists all 18 routes with priority and weekly update frequency.

---

## 4. GitHub & Vercel Deployment Instructions

### Step 1: Push to GitHub
1. Initialize git in your local directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Ahmedabad Nursing Cares production site"
   ```
2. Create a new repository on [GitHub](https://github.com).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ahmedabad-nursing-cares.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Select your `ahmedabad-nursing-cares` GitHub repository.
3. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel will build and deploy the applet in under 1 minute.
5. `vercel.json` is already included to ensure client-side routing rewrites all URLs to `/index.html`.

### Step 3: Connect Custom Domain (`ahmedabadnursingcares.com`)
1. In your Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Enter `ahmedabadnursingcares.com` and `www.ahmedabadnursingcares.com`.
3. In your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.), configure the DNS records:
   - **Type A**: `@` points to `76.76.21.21`
   - **Type CNAME**: `www` points to `cname.vercel-dns.com`
4. Vercel will automatically generate and renew free SSL certificates.

---

## 5. Google Search Console & Launch Checklist

1. **Verify Ownership**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add property `https://ahmedabadnursingcares.com`.
   - Verify using the DNS TXT record or HTML meta tag method.
2. **Submit Sitemap**:
   - In Search Console, click **Sitemaps**.
   - Enter `sitemap.xml` and submit.
3. **Google Analytics 4**:
   - Create a GA4 web stream and obtain your Measurement ID (`G-XXXXXXXXXX`).
   - Add `VITE_GA_ID="G-XXXXXXXXXX"` in your Vercel Environment Variables.
4. **WhatsApp Business SIM Check**:
   - Ensure the mobile number `+91 9506333650` is active and registered on WhatsApp Business app so customers can chat without delivery failures.
