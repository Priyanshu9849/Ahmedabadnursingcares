import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, Star, CheckCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ReviewsSection: React.FC = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [area, setArea] = useState('Satellite');
  const [careType, setCareType] = useState('Elderly Care');
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !reviewText.trim()) return;

    try {
      const existingReviews = JSON.parse(localStorage.getItem('anc_client_reviews') || '[]');
      existingReviews.unshift({
        clientName,
        area,
        careType,
        reviewText,
        date: new Date().toLocaleDateString('en-IN')
      });
      localStorage.setItem('anc_client_reviews', JSON.stringify(existingReviews));
    } catch {
      // fallback
    }

    setFeedbackSubmitted(true);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100/60 text-teal-800 rounded-full text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparent Client Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How Ahmedabad Families Evaluate Our Care Staff
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            We operate on complete transparency. We do not publish fabricated ratings or artificial customer testimonials. Here is how we verify quality and invite genuine feedback from families across Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-sm mb-4">
              01
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">Direct Candidate Screening</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Before deploying any nurse or attendant to your home in Ahmedabad, we share candidate experience details, language fluency (Gujarati/Hindi), and prior patient care background.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-sm mb-4">
              02
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">48-Hour Settling Check</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our care coordinator calls the family within 48 hours of service start to ensure the attendant or nurse is adapting well to the patient’s routine, dietary preferences, and timing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-sm mb-4">
              03
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">Replacement Coordination</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If a caregiver’s compatibility or physical handling is not suited to the patient, we facilitate candid coordination and work to provide a suitable replacement staff based on availability.
            </p>
          </div>
        </div>

        {/* Feedback Submission Box */}
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          {feedbackSubmitted ? (
            <div className="text-center py-4 space-y-2">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">Thank You for Your Feedback</h3>
              <p className="text-xs text-slate-600">
                Your genuine experience helps us maintain high standards of patient care staffing across Ahmedabad.
              </p>
              <button
                type="button"
                onClick={() => setFeedbackSubmitted(false)}
                className="text-xs text-teal-800 underline font-semibold mt-2"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-teal-800" />
                <h3 className="font-bold text-base text-slate-900">Share Your Experience with Our Staff</h3>
              </div>
              <p className="text-xs text-slate-500">
                Are you currently receiving care or have completed a shift in Ahmedabad? Share your verified feedback directly with our coordination desk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Client / Family Member Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Parikh Family"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Ahmedabad Locality</label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. Bodakdev, Bopal, Satellite"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Type</label>
                <select
                  value={careType}
                  onChange={(e) => setCareType(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                >
                  <option value="Elderly Care">Elderly Care</option>
                  <option value="12-Hour Patient Attendant">12-Hour Patient Attendant</option>
                  <option value="24-Hour Live-in Care">24-Hour Live-in Care</option>
                  <option value="Home Nurse (GNM/B.Sc)">Home Nurse (GNM/B.Sc)</option>
                  <option value="Post-Surgery Care">Post-Surgery Care</option>
                  <option value="Mother & Baby Care">Mother & Baby Care</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Honest Review & Feedback</label>
                <textarea
                  required
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Tell us about the punctuality, hygiene, patient handling, and communication of the matched staff."
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Submit Genuine Review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
