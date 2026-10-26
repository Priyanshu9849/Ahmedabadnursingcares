import React, { useState } from 'react';
import { Calculator, Phone, MessageCircle, Check, Info } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

export const CostCalculator: React.FC = () => {
  const [role, setRole] = useState<'attendant' | 'nurse'>('attendant');
  const [shiftType, setShiftType] = useState<'12h_day' | '12h_night' | '24h_livein'>('12h_day');
  const [durationDays, setDurationDays] = useState<number>(30);
  const [acuity, setAcuity] = useState<'standard' | 'high_dependency'>('standard');

  // Realistic Ahmedabad market pricing matrix
  const calculateEstimate = () => {
    let dailyMin = 0;
    let dailyMax = 0;
    let monthlyMin = 0;
    let monthlyMax = 0;

    if (role === 'attendant') {
      if (shiftType === '12h_day') {
        dailyMin = acuity === 'standard' ? 900 : 1100;
        dailyMax = acuity === 'standard' ? 1100 : 1300;
        monthlyMin = dailyMin * 30;
        monthlyMax = dailyMax * 30;
      } else if (shiftType === '12h_night') {
        dailyMin = acuity === 'standard' ? 950 : 1150;
        dailyMax = acuity === 'standard' ? 1150 : 1350;
        monthlyMin = dailyMin * 30;
        monthlyMax = dailyMax * 30;
      } else {
        // 24h live-in attendant
        monthlyMin = acuity === 'standard' ? 20000 : 24000;
        monthlyMax = acuity === 'standard' ? 24000 : 28000;
        dailyMin = Math.round(monthlyMin / 30);
        dailyMax = Math.round(monthlyMax / 30);
      }
    } else {
      // Qualified GNM/B.Sc Nurse
      if (shiftType === '12h_day') {
        dailyMin = acuity === 'standard' ? 1500 : 1800;
        dailyMax = acuity === 'standard' ? 1800 : 2200;
        monthlyMin = dailyMin * 30;
        monthlyMax = dailyMax * 30;
      } else if (shiftType === '12h_night') {
        dailyMin = acuity === 'standard' ? 1600 : 1900;
        dailyMax = acuity === 'standard' ? 1900 : 2300;
        monthlyMin = dailyMin * 30;
        monthlyMax = dailyMax * 30;
      } else {
        // 24h rotating dual nurse rota
        dailyMin = acuity === 'standard' ? 3000 : 3600;
        dailyMax = acuity === 'standard' ? 3600 : 4400;
        monthlyMin = dailyMin * 30;
        monthlyMax = dailyMax * 30;
      }
    }

    const calculatedTotalMin = durationDays === 30 ? monthlyMin : dailyMin * durationDays;
    const calculatedTotalMax = durationDays === 30 ? monthlyMax : dailyMax * durationDays;

    return {
      dailyMin,
      dailyMax,
      totalMin: calculatedTotalMin,
      totalMax: calculatedTotalMax
    };
  };

  const est = calculateEstimate();

  const getWhatsAppEstimateMessage = () => {
    const roleText = role === 'attendant' ? 'Patient Attendant (Non-Clinical)' : 'Qualified Nurse (GNM/B.Sc)';
    const shiftText = shiftType === '12h_day' ? '12-Hour Day' : shiftType === '12h_night' ? '12-Hour Night' : '24-Hour Live-in';
    return `Hello Ahmedabad Nursing Cares, I calculated an estimate on your website for ${roleText} (${shiftText}, ${durationDays} days). Estimated budget: ₹${est.totalMin.toLocaleString('en-IN')} - ₹${est.totalMax.toLocaleString('en-IN')}. Please confirm availability and terms for my area in Ahmedabad.`;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-teal-800" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Ahmedabad Home Care Cost Calculator</h2>
          <p className="text-xs text-slate-500">Transparent pricing guidance based on current Ahmedabad residential rates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          {/* Staff Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              1. Select Care Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('attendant')}
                className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-left border transition-all ${
                  role === 'attendant'
                    ? 'border-teal-700 bg-teal-50 text-teal-900 shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="font-bold">Patient Attendant</div>
                <div className="text-[11px] font-normal text-slate-500">Hygiene, sponge bath, diaper, mobility</div>
              </button>

              <button
                type="button"
                onClick={() => setRole('nurse')}
                className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-left border transition-all ${
                  role === 'nurse'
                    ? 'border-teal-700 bg-teal-50 text-teal-900 shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="font-bold">Qualified Nurse</div>
                <div className="text-[11px] font-normal text-slate-500">Injections, IV drips, dressing, vitals</div>
              </button>
            </div>
          </div>

          {/* Shift Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              2. Select Shift Duration
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setShiftType('12h_day')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center border transition-all ${
                  shiftType === '12h_day'
                    ? 'border-teal-700 bg-teal-50 text-teal-900'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                12-Hr Day
              </button>
              <button
                type="button"
                onClick={() => setShiftType('12h_night')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center border transition-all ${
                  shiftType === '12h_night'
                    ? 'border-teal-700 bg-teal-50 text-teal-900'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                12-Hr Night
              </button>
              <button
                type="button"
                onClick={() => setShiftType('24h_livein')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center border transition-all ${
                  shiftType === '24h_livein'
                    ? 'border-teal-700 bg-teal-50 text-teal-900'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                24-Hr Live-in
              </button>
            </div>
          </div>

          {/* Acuity Level */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              3. Patient Dependency Level
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAcuity('standard')}
                className={`py-2 px-3 rounded-lg text-xs font-medium border text-left ${
                  acuity === 'standard' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 text-slate-600'
                }`}
              >
                Semi-Mobile / Senior
              </button>
              <button
                type="button"
                onClick={() => setAcuity('high_dependency')}
                className={`py-2 px-3 rounded-lg text-xs font-medium border text-left ${
                  acuity === 'high_dependency' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 text-slate-600'
                }`}
              >
                Bedridden / Heavy Support
              </button>
            </div>
          </div>

          {/* Duration Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              4. Duration
            </label>
            <div className="flex items-center gap-2">
              {[7, 15, 30].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDurationDays(d)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md border ${
                    durationDays === d ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {d === 30 ? '1 Month (30d)' : `${d} Days`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between space-y-6">
          <div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">Estimated Care Budget</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              ₹{est.totalMin.toLocaleString('en-IN')} – ₹{est.totalMax.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              For {durationDays} days · Approx ₹{est.dailyMin.toLocaleString('en-IN')} - ₹{est.dailyMax.toLocaleString('en-IN')} per day
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct candidate matching across Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Clear quotation confirmed before deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Replacement assistance if staff takes leave</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>Exact charges are finalized based on the patient's actual medical condition and your society location in Ahmedabad.</span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href={BUSINESS_CONFIG.phoneTelLink}
              className="w-full py-3 px-4 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Confirm Availability: {BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              href={getWhatsAppLink(getWhatsAppEstimateMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Estimate on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
