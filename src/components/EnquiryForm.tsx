import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle, AlertCircle, Phone, Lock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SERVICES_DATA } from '../data/servicesData';
import { AHMEDABAD_LOCALITIES } from '../data/areasData';
import { EnquirySubmission } from '../types';

interface EnquiryFormProps {
  initialService?: string;
  sourceTitle?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = '',
  sourceTitle = 'General Enquiry'
}) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    customerName: '',
    phone: '',
    serviceRequired: initialService || SERVICES_DATA[0].title,
    preferredShift: '12-Hour Day Shift',
    ahmedabadArea: 'Satellite & Ramdev Nagar',
    expectedStartDate: 'Immediate / Today',
    careRequirements: 'General assistance with daily living & mobility',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquirySubmission | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      errs.customerName = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    } else if (!/^[6-9]/.test(cleanPhone)) {
      errs.phone = 'Mobile number must start with 6, 7, 8, or 9.';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select the required service.';
    }

    if (!formData.ahmedabadArea) {
      errs.ahmedabadArea = 'Please select your area in Ahmedabad.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const submission: EnquirySubmission = {
      ...formData,
      id: `ANC-${Date.now()}`,
      createdAt: new Date().toISOString()
    };

    // Save to browser local storage so enquiry is genuinely persisted
    try {
      const existingStr = localStorage.getItem('anc_enquiries') || '[]';
      const existing = JSON.parse(existingStr);
      existing.unshift(submission);
      localStorage.setItem('anc_enquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmittedData(submission);
    setSubmitted(true);
  };

  const getWhatsAppForwardUrl = (data: EnquirySubmission): string => {
    const text = `Hello Ahmedabad Nursing Cares,\n\nI have submitted a care requirement from your website:\n*Name:* ${data.customerName}\n*Phone:* ${data.phone}\n*Service:* ${data.serviceRequired}\n*Shift:* ${data.preferredShift}\n*Area in Ahmedabad:* ${data.ahmedabadArea}\n*Start Date:* ${data.expectedStartDate}\n*Details:* ${data.careRequirements || 'None'}\n${data.message ? `*Notes:* ${data.message}` : ''}\n\nPlease confirm staff availability and charges.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  if (submitted && submittedData) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-slate-800 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-lg text-emerald-950">Care Requirement Recorded</h3>
            <p className="text-sm text-emerald-800 mt-1">
              Thank you, <strong>{submittedData.customerName}</strong>. Your enquiry for{' '}
              <strong>{submittedData.serviceRequired}</strong> in <strong>{submittedData.ahmedabadArea}</strong> has been received by our staffing desk.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-emerald-100 text-xs text-slate-600 space-y-1">
          <div className="font-semibold text-slate-800 mb-1">Enquiry Summary (Ref #{submittedData.id}):</div>
          <div><span className="text-slate-500">Mobile:</span> {submittedData.phone}</div>
          <div><span className="text-slate-500">Shift:</span> {submittedData.preferredShift}</div>
          <div><span className="text-slate-500">Timeline:</span> {submittedData.expectedStartDate}</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppForwardUrl(submittedData)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open & Send via WhatsApp</span>
          </a>

          <a
            href={BUSINESS_CONFIG.phoneTelLink}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call Coordinator: {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              customerName: '',
              phone: '',
              serviceRequired: SERVICES_DATA[0].title,
              preferredShift: '12-Hour Day Shift',
              ahmedabadArea: 'Satellite & Ramdev Nagar',
              expectedStartDate: 'Immediate / Today',
              careRequirements: 'General assistance with daily living & mobility',
              message: ''
            });
          }}
          className="text-xs text-slate-500 hover:text-slate-800 underline block text-center pt-2"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 shadow-xs space-y-5">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-slate-900">Check Staff Availability in Ahmedabad</h3>
          <span className="text-xs text-teal-800 font-medium">Takes 30 seconds</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Tell us about the patient's condition to receive matching caregiver profiles and transparent pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            placeholder="e.g. Rajesh Patel"
            className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 ${
              errors.customerName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.customerName && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.customerName}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Mobile Number (India) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-sm text-slate-400 font-medium">+91</span>
            <input
              type="tel"
              required
              maxLength={10}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
              placeholder="98765 43210"
              className={`w-full pl-12 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Service Required */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Shift */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Shift <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.preferredShift}
            onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
          >
            <option value="12-Hour Day Shift (8 AM - 8 PM)">12-Hour Day Shift (8 AM - 8 PM)</option>
            <option value="12-Hour Night Shift (8 PM - 8 AM)">12-Hour Night Shift (8 PM - 8 AM)</option>
            <option value="24-Hour Live-in Care">24-Hour Live-in Care (Residential)</option>
            <option value="Short Clinical Nursing Visit (1-2 Hours)">Short Clinical Nursing Visit (1-2 Hours)</option>
          </select>
        </div>

        {/* Ahmedabad Area */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Locality in Ahmedabad <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.ahmedabadArea}
            onChange={(e) => setFormData({ ...formData, ahmedabadArea: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
          >
            {AHMEDABAD_LOCALITIES.map((area) => (
              <option key={area.name} value={area.name}>
                {area.name} ({area.pincodeRange})
              </option>
            ))}
            <option value="Other Area in Ahmedabad">Other Area in Ahmedabad</option>
          </select>
        </div>

        {/* Expected Start Date */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Expected Start Date
          </label>
          <select
            value={formData.expectedStartDate}
            onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
          >
            <option value="Immediate / Today">Immediate / Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="Within 3 to 5 Days">Within 3 to 5 Days</option>
            <option value="Planning for next week">Planning for next week</option>
          </select>
        </div>
      </div>

      {/* Patient Condition / Needs */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Patient Condition & Care Needs
        </label>
        <select
          value={formData.careRequirements}
          onChange={(e) => setFormData({ ...formData, careRequirements: e.target.value })}
          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white mb-2"
        >
          <option value="General assistance with daily living & mobility">General assistance with daily living & mobility</option>
          <option value="Elderly care & fall prevention">Elderly care & fall prevention</option>
          <option value="Bedridden patient (diaper change, 2-hourly turning, sponge bath)">Bedridden patient (diaper, 2-hr turning, sponge bath)</option>
          <option value="Post-surgery recovery & wound dressing">Post-surgery recovery & wound dressing</option>
          <option value="Clinical nursing (IV drip, catheter, injection, vitals)">Clinical nursing (IV drip, catheter, injection, vitals)</option>
          <option value="Mother & newborn baby care (massage & bath)">Mother & newborn baby care (massage & bath)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Additional Details (Optional)
        </label>
        <textarea
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Patient weight 65kg, recovering from knee surgery, prefer female attendant."
          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
        />
      </div>

      {/* Privacy note */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>Your contact info is used strictly by our care desk to share staff profiles and quotation. No spam.</span>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-99"
      >
        <Send className="w-4 h-4" />
        <span>Check Staff Availability & Pricing</span>
      </button>
    </form>
  );
};
