import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "home-nursing-services-ahmedabad",
    slug: "home-nursing-services-ahmedabad",
    title: "Home Nursing Services in Ahmedabad",
    shortTitle: "Home Nursing",
    tagline: "Professional clinical nursing care arranged directly in the comfort of your home across Ahmedabad.",
    description: "Home Nursing Services in Ahmedabad bridge the gap between hospital discharge and full home recovery. Our staffing agency connects families in Ahmedabad with qualified nursing personnel (GNM / B.Sc Nursing) trained in clinical procedures, vital charting, medication administration, and sterile wound management.",
    metaTitle: "Home Nursing Services in Ahmedabad | Qualified Nurses at Home",
    metaDescription: "Reliable home nursing services in Ahmedabad. Qualified GNM & B.Sc nurses for injections, IV drips, wound dressing, catheter & post-op monitoring. Call 9506333650.",
    category: "clinical",
    shifts: ["12-Hour Day Shift", "12-Hour Night Shift", "24-Hour Residential Care", "Per-Procedure Nursing Visit"],
    keyDuties: [
      "Administration of prescribed intravenous (IV) infusions and intramuscular (IM) injections",
      "Sterile surgical wound dressing and suture inspection",
      "Urinary catheter insertion, bladder wash, and maintenance",
      "Nasogastric (Ryle's) tube feeding and monitoring",
      "Continuous vital signs monitoring (BP, SpO2, blood glucose, temperature)",
      "Tracheostomy care, bronchial suctioning, and nebulization",
      "Detailed clinical charting and reporting updates to family and treating doctors"
    ],
    scope: [
      "Clinical procedures ordered by the patient's registered medical practitioner",
      "Post-operative surgical care and trauma rehabilitation support",
      "Palliative and geriatric clinical symptom management at home"
    ],
    limitations: [
      "Nurses cannot diagnose medical conditions or change doctor-prescribed medication dosages.",
      "Home nursing is not an alternative to an Intensive Care Unit (ICU) during acute medical crises.",
      "Emergency cardiac arrest, acute respiratory failure, or severe instability require immediate hospital emergency transfer."
    ],
    idealFor: [
      "Patients discharged after major surgery requiring wound and drain care",
      "Patients needing daily IV antibiotics or specialized nutritional tube feeding",
      "Chronic cardiovascular, neurological, or cancer patients requiring close clinical supervision"
    ],
    qualifications: "Registered GNM (General Nursing and Midwifery) or B.Sc Nursing professionals with clinical hospital training.",
    pricingEstimate: "Typically ₹1,500 – ₹2,200 per 12-hour shift, or ₹400 – ₹700 per single procedure visit, depending on patient acuity and location in Ahmedabad.",
    faqs: [
      {
        question: "What is the difference between a home nurse and a patient attendant in Ahmedabad?",
        answer: "A home nurse is a formally certified clinical professional (GNM/B.Sc) authorized to give injections, manage IV lines, dress wounds, and monitor medical equipment. A patient attendant is a non-clinical caregiver who assists with mobility, bathing, feeding, and hygiene but cannot administer clinical medications."
      },
      {
        question: "Can the home nurse change prescribed medication without a doctor?",
        answer: "No. Our nursing personnel strictly follow valid prescriptions and discharge summaries written by your treating physician."
      },
      {
        question: "How quickly can you arrange a home nurse in Ahmedabad?",
        answer: "Depending on staff availability and your specific location in Ahmedabad (such as Satellite, Bopal, SG Highway, or Vastrapur), staff matching typically takes between 4 to 24 hours."
      }
    ]
  },
  {
    id: "nurse-at-home-ahmedabad",
    slug: "nurse-at-home-ahmedabad",
    title: "Nurse at Home in Ahmedabad",
    shortTitle: "Nurse at Home",
    tagline: "Dedicated private nurse deployed at your home for personalized medical attention.",
    description: "Hiring a private nurse at home in Ahmedabad provides your loved one with 1-on-1 bedside clinical vigilance. Whether recovering from an acute illness, recovering from cardiac intervention, or managing ongoing oncology therapy, a home nurse ensures all medical doctor orders are accurately executed at home.",
    metaTitle: "Nurse at Home Ahmedabad | Dedicated Private Bedside Nursing",
    metaDescription: "Find a dedicated private nurse at home in Ahmedabad. One-on-one professional bedside clinical assistance, medication management, and daily vitals. Call 9506333650.",
    category: "clinical",
    shifts: ["12-Hour Day (8 AM - 8 PM)", "12-Hour Night (8 PM - 8 AM)", "24-Hour Continuous Rota"],
    keyDuties: [
      "Prescribed medication schedule adherence and documentation",
      "Blood sugar tracking via glucometer and sliding-scale insulin administration",
      "Sterile dressing for diabetic foot ulcers and post-op incisions",
      "Oxygen concentrator, BiPAP, and CPAP assistance and setting verification",
      "Infection control protocols and aseptic barrier maintenance at bedside",
      "Daily communication logbook maintained for family review"
    ],
    scope: [
      "Personalized bedside nursing under existing doctor's treatment protocols",
      "Assistance with safe bed transfers and passive limb movements under clinical supervision",
      "Liaising with family members regarding any critical change in patient vitals"
    ],
    limitations: [
      "Does not replace general household domestic work or cooking.",
      "Cannot independently prescribe off-label drugs or alter oxygen flow without physician guidance."
    ],
    idealFor: [
      "Post-ICU step-down patients requiring continuous clinical observation",
      "Elderly patients requiring regular insulin shots and cardiac rhythm monitoring",
      "Bedbound patients prone to pressure ulcers or pulmonary congestion"
    ],
    qualifications: "Diploma or Degree in Nursing with registered nursing council certification.",
    pricingEstimate: "Rates range from ₹1,400 to ₹2,000 for 12 hours depending on skill tier and medical complexity.",
    faqs: [
      {
        question: "Will the nurse stay awake throughout the 12-hour night shift?",
        answer: "Yes, on a dedicated 12-hour night shift, the nurse remains awake at the bedside to check vitals, manage drips, and assist the patient throughout the night."
      },
      {
        question: "Do you supply both male and female nurses in Ahmedabad?",
        answer: "Yes, we arrange both male and female nurses based on patient comfort, availability, and specific care needs."
      }
    ]
  },
  {
    id: "patient-care-services-ahmedabad",
    slug: "patient-care-services-ahmedabad",
    title: "Patient Care Services in Ahmedabad",
    shortTitle: "Patient Care Services",
    tagline: "Comprehensive home health support encompassing both non-clinical and assisted living care.",
    description: "Our Patient Care Services in Ahmedabad are organized to assist families handling short-term recovery or long-term chronic conditions. We assess the patient's daily dependency level to match appropriate caregivers who handle hygiene, mobility, nutrition, and comfort with empathy.",
    metaTitle: "Patient Care Services in Ahmedabad | Home Health & Caregiver Staffing",
    metaDescription: "Reliable patient care services in Ahmedabad. Assisted daily living, mobility support, personal hygiene, and dedicated home caregivers. Enquire at 9506333650.",
    category: "attendant",
    shifts: ["12-Hour Day", "12-Hour Night", "24-Hour Live-in Care"],
    keyDuties: [
      "Bed bath, sponge bath, or assisted shower support",
      "Oral hygiene, hair grooming, and skin moisturizing to prevent skin tears",
      "Assistance with walker, wheelchair, and safe bed-to-chair transfers",
      "Feeding support (oral meals, pureed diets, or prepared fluid intake)",
      "Timely administration of oral medications as scheduled by the family",
      "Regular repositioning every 2 hours to prevent pressure sores (bedsores)",
      "Prompt adult diaper changes and commode chair assistance"
    ],
    scope: [
      "Assistance with activities of daily living (ADLs)",
      "Fall prevention and safe physical transfers",
      "Maintaining a clean, comfortable, and hygienic patient zone"
    ],
    limitations: [
      "Patient care attendants cannot perform invasive procedures (e.g. inserting catheters or starting IVs).",
      "Attendants are not maid servants; their focus remains dedicated to patient hygiene and safety."
    ],
    idealFor: [
      "Patients recovering from stroke, paralytic conditions, or Parkinson's disease",
      "Frail elderly individuals who need a steady hand to prevent falls",
      "Individuals recovering from orthopedic fractures or hip replacements"
    ],
    qualifications: "Trained healthcare attendants with background in assisted daily living and basic patient ergonomics.",
    pricingEstimate: "Estimated between ₹900 – ₹1,300 per 12 hours, or ₹19,000 – ₹26,000 monthly for 24-hour live-in care.",
    faqs: [
      {
        question: "Can a patient care attendant administer oral tablets?",
        answer: "Yes, attendants assist patients in taking already prescribed oral tablets at scheduled timings as instructed by the family."
      },
      {
        question: "What areas in Ahmedabad do you cover for patient care?",
        answer: "We cover prime residential localities including Satellite, Vastrapur, Bodakdev, Thaltej, Navrangpura, Bopal, Prahlad Nagar, Maninagar, Chandkheda, and Gota."
      }
    ]
  },
  {
    id: "patient-attendant-ahmedabad",
    slug: "patient-attendant-ahmedabad",
    title: "Patient Attendant in Ahmedabad (Ward Boy / Aya)",
    shortTitle: "Patient Attendant",
    tagline: "Reliable home attendants for full physical assistance, diaper changing, and hygiene.",
    description: "A patient attendant (commonly known as a ward boy or aya) provides essential non-clinical physical assistance at home. When family members have office commitments or physical constraints, an attendant ensures the patient is never left unattended for bathroom visits, meals, or bed transfers.",
    metaTitle: "Patient Attendant in Ahmedabad | Trained Ward Boy & Female Aya",
    metaDescription: "Hire verified patient attendants in Ahmedabad. Male ward boys & female ayas for bedridden patients, diaper change, sponge bath & mobility. Call 9506333650.",
    category: "attendant",
    shifts: ["12-Hour Day Shift", "12-Hour Night Shift", "24-Hour Stay-at-Home"],
    keyDuties: [
      "Bedpan, urinal, and commode assistance with complete dignity",
      "Regular diaper changes and peri-care skin cleaning",
      "Full body sponge bath and clothing changes",
      "Assistance with light physiotherapy exercises and walking practice",
      "Accompanying patient during doctor appointments or diagnostic scans",
      "Maintaining a quiet, organized, and clean environment around the patient's bed"
    ],
    scope: [
      "Direct personal hygiene, physical mobility, and basic comfort assistance",
      "Available on 12-hour or full 24-hour residential arrangements"
    ],
    limitations: [
      "Attendants are strictly non-clinical. They do NOT give IV injections, insert catheters, or dress surgical wounds.",
      "Attendants are assigned specifically to the patient and do not perform cooking or household chores for other family members."
    ],
    idealFor: [
      "Semi-mobile or bedridden seniors needing regular personal care",
      "Patients needing physical support after joint surgery or accident trauma",
      "Families needing dependable night-time supervision to prevent falls"
    ],
    qualifications: "Experienced home patient attendants trained in hygiene, lifting mechanics, and patient handling.",
    pricingEstimate: "Typically ₹850 – ₹1,200 per 12-hour shift depending on patient weight and physical dependency.",
    faqs: [
      {
        question: "Can I choose between a male attendant and a female attendant?",
        answer: "Yes. For male patients with high physical weight, male attendants (ward boys) are commonly requested; for female patients, female ayas are preferred for privacy."
      },
      {
        question: "What is required if I opt for 24-hour live-in attendant care?",
        answer: "For 24-hour care, the family provides standard meals and a safe sleeping space for the attendant during rest periods."
      }
    ]
  },
  {
    id: "12-hour-patient-care-ahmedabad",
    slug: "12-hour-patient-care-ahmedabad",
    title: "12-Hour Patient Care in Ahmedabad",
    shortTitle: "12-Hour Care",
    tagline: "Flexible day or night shift support matching your family's daily schedule.",
    description: "12-Hour Patient Care is ideal when family members handle care during part of the day and need dedicated professional support during work hours or through the night. Available as a Day Shift (typically 8:00 AM to 8:00 PM) or Night Shift (8:00 PM to 8:00 AM).",
    metaTitle: "12-Hour Patient Care Ahmedabad | Day & Night Shift Home Care",
    metaDescription: "Reliable 12-hour day and night shift patient care in Ahmedabad. Flexible home nursing and caregiver assistance. Transparent pricing. Call 9506333650.",
    category: "attendant",
    shifts: ["Day Shift (8:00 AM – 8:00 PM)", "Night Shift (8:00 PM – 8:00 AM)", "Customized 12-hr window upon request"],
    keyDuties: [
      "Morning hygiene routine: sponge bath, brushing, and fresh clothes (Day Shift)",
      "Nutritious breakfast, lunch, and hydration assistance (Day Shift)",
      "Supervised mobility, walking aid assistance, and daytime engagement",
      "Night shift vigilance: regular diaper checks, positioning, and bathroom assistance",
      "Assisting patient in and out of bed during midnight awakenings",
      "Timely handover notes to family members at shift start and end"
    ],
    scope: [
      "12 continuous hours of focused bedside attention",
      "Suitable for both non-clinical attendants and qualified clinical nurses"
    ],
    limitations: [
      "Overtime beyond 12 hours must be pre-arranged with the coordinator.",
      "Staff must be relieved on time at the end of their shift."
    ],
    idealFor: [
      "Working professionals who need day-time assistance while at office",
      "Families whose loved ones wander or have sleep disturbances at night",
      "Elderly individuals who need company and assistance during daytime hours"
    ],
    qualifications: "Available with trained Patient Attendants or certified GNM Home Nurses.",
    pricingEstimate: "Attendant: ₹900 – ₹1,200 per 12h. Qualified Nurse: ₹1,500 – ₹2,000 per 12h.",
    faqs: [
      {
        question: "Can we start with a 12-hour day shift and later switch to 24-hour care?",
        answer: "Yes, you can adjust your shift requirement as the patient's recovery progresses, subject to staff availability."
      },
      {
        question: "Does the attendant travel home daily on a 12-hour shift?",
        answer: "Yes, on a 12-hour shift, the attendant commutes daily to and from your home in Ahmedabad."
      }
    ]
  },
  {
    id: "24-hour-patient-care-ahmedabad",
    slug: "24-hour-patient-care-ahmedabad",
    title: "24-Hour Patient Care in Ahmedabad",
    shortTitle: "24-Hour Care",
    tagline: "Round-the-clock stay-at-home caregivers and nurses for continuous patient peace of mind.",
    description: "24-Hour Patient Care provides non-stop bedside support for patients who cannot be left alone at any hour. Depending on patient condition, this is arranged either as a live-in residential attendant or a two-nurse rotating 12-hour shift system for intensive cases.",
    metaTitle: "24-Hour Patient Care in Ahmedabad | Live-in Home Attendants & Nurses",
    metaDescription: "Round-the-clock 24-hour home patient care in Ahmedabad. Dedicated live-in caregivers and nurses for total bedside assistance. Enquire at 9506333650.",
    category: "specialized",
    shifts: ["24-Hour Residential Live-in (Attendant)", "24-Hour Dual Shift Rota (2 x 12h Nurses)"],
    keyDuties: [
      "Uninterrupted 24-hour emergency alertness and immediate assistance",
      "Continuous turn-over schedule (every 2-3 hours) day and night",
      "Complete personal hygiene: morning bath, evening wash, skin checks",
      "Regular feeding, medication reminders, and fluid balance",
      "Immediate assistance if the patient calls out during the night",
      "Companionship, emotional reassurance, and constant presence"
    ],
    scope: [
      "Live-in residential arrangement with a dedicated caregiver residing at the home",
      "Comprehensive daily routine management"
    ],
    limitations: [
      "For a single 24-hour live-in attendant, 6–8 hours of night sleep and meal breaks are mandatory.",
      "If the patient requires active round-the-clock awake clinical intervention (e.g. ICU step-down with suctioning), two separate 12-hour staff members are required."
    ],
    idealFor: [
      "Completely bedridden or dementia patients requiring 24/7 observation",
      "Elderly couples living alone without local family support in Ahmedabad",
      "Terminal or end-stage patients needing compassionate comfort care at home"
    ],
    qualifications: "Experienced live-in caregivers or rotating certified nursing staff.",
    pricingEstimate: "Live-in Attendant: ₹20,000 – ₹28,000 / month. Rotating 24h Dual Nursing: ₹85,000 – ₹1,10,000 / month.",
    faqs: [
      {
        question: "What facilities must be provided for a 24-hour live-in caregiver?",
        answer: "The family provides reasonable sleeping quarters, basic washroom access, and regular meals along with the household."
      },
      {
        question: "What happens if a 24-hour caregiver takes leave?",
        answer: "We assist in coordinating a replacement caregiver with prior notice to avoid interruption in patient care."
      }
    ]
  },
  {
    id: "elderly-care-ahmedabad",
    slug: "elderly-care-ahmedabad",
    title: "Elderly Care Services at Home in Ahmedabad",
    shortTitle: "Elderly Care",
    tagline: "Empathetic senior care assistance promoting independence, dignity, and fall prevention.",
    description: "Aging parents often wish to continue living in the warmth of their own homes. Our Elderly Care staffing service in Ahmedabad supports senior citizens with respectful daily living assistance, mobility support, medication reminders, and warm companionship.",
    metaTitle: "Elderly Care Services in Ahmedabad | Senior Care at Home",
    metaDescription: "Compassionate elder care services at home in Ahmedabad. Help for aging parents: mobility, medication reminders, hygiene & companionship. Call 9506333650.",
    category: "attendant",
    shifts: ["12-Hour Day Shift", "12-Hour Night Shift", "24-Hour Live-in Elder Companion"],
    keyDuties: [
      "Guiding and supporting walking to prevent debilitating slips and falls",
      "Helping with gentle bathing, dressing, and daily grooming",
      "Ensuring timely intake of daily cardiac, diabetic, and thyroid medicines",
      "Preparing light warm beverages, porridge, or serving pre-cooked meals",
      "Engaging in gentle conversations, reading newspapers, and mental stimulation",
      "Escorting seniors on evening garden strolls or temple visits"
    ],
    scope: [
      "Non-clinical daily living assistance and dignified companionship for seniors",
      "Available across all major Ahmedabad residential neighborhoods"
    ],
    limitations: [
      "Caregivers provide physical assistance; they do not diagnose or alter geriatric prescriptions.",
      "Caregivers cannot manage aggressive or violent psychiatric outbursts without medical stabilization."
    ],
    idealFor: [
      "Senior citizens living alone whose children work outside Ahmedabad or abroad",
      "Elderly individuals suffering from arthritis, mild dementia, or osteopenia",
      "Seniors needing a reliable hand while moving about their home"
    ],
    qualifications: "Patient and mature caregivers trained in geriatric sensitivity and respectful communication.",
    pricingEstimate: "Ranges from ₹900 – ₹1,200 per 12 hours, or ₹18,000 – ₹25,000 per month for live-in companionship.",
    faqs: [
      {
        question: "Can the elder caregiver speak Gujarati or Hindi?",
        answer: "Yes, we prioritize staff who can communicate fluently in Gujarati and Hindi to ensure seamless bonding with senior family members."
      },
      {
        question: "Can an attendant assist during routine hospital or doctor checkups in Ahmedabad?",
        answer: "Yes, the attendant can accompany your elder to hospital appointments, handling wheelchair mobility and waiting support."
      }
    ]
  },
  {
    id: "bedridden-patient-care-ahmedabad",
    slug: "bedridden-patient-care-ahmedabad",
    title: "Bedridden Patient Care in Ahmedabad",
    shortTitle: "Bedridden Care",
    tagline: "Specialized total physical care to prevent bedsores, joint stiffness, and infections.",
    description: "Caring for a bedridden patient requires specialized technique. Without strict routine turning and skin care, bedridden patients rapidly develop pressure ulcers, muscle contractures, and chest infections. Our caregivers follow disciplined protocols for skin integrity, hygiene, and safe nutrition.",
    metaTitle: "Bedridden Patient Care Ahmedabad | Bedsore Prevention & Hygiene",
    metaDescription: "Dedicated bedridden patient care at home in Ahmedabad. Bedsore prevention, 2-hourly turning, diaper management, sponge bathing & feeding. Call 9506333650.",
    category: "specialized",
    shifts: ["12-Hour Shift", "24-Hour Residential Care"],
    keyDuties: [
      "Disciplined 2-hour body repositioning with pillows to relieve pressure points",
      "Daily skin assessment over sacrum, heels, and hips with barrier cream application",
      "Thorough sponge baths, linen changes, and moisture-free underpad replacement",
      "Assistance with air mattress pressure calibration and comfort alignment",
      "Passive joint range-of-motion exercises to prevent limb contractures",
      "Assistance with Ryle's tube feeding or slow spoon-feeding with aspiration precautions"
    ],
    scope: [
      "Total nursing or attendant care for non-ambulatory, paralyzed, or comatose patients",
      "Meticulous attention to cleanliness and skin breakdown prevention"
    ],
    limitations: [
      "Stage 3 and Stage 4 deep pressure ulcers require clinical nurse visits for sterile debridement and vacuum dressing.",
      "Unconscious patients on invasive mechanical ventilators require specialized ICU-trained staff."
    ],
    idealFor: [
      "Stroke survivors with hemiplegia or quadriplegia",
      "Advanced Alzheimer's, Parkinson's, or ALS patients",
      "Post-fracture spinal cord injury patients under strict bed rest"
    ],
    qualifications: "Attendants experienced in heavy patient transfers, or GNM nurses for clinical bedridden care.",
    pricingEstimate: "Attendant: ₹1,000 – ₹1,400 per 12h. Qualified Nurse: ₹1,600 – ₹2,200 per 12h.",
    faqs: [
      {
        question: "How do you prevent bedsores in a bedridden patient?",
        answer: "Our caregivers enforce a strict 2-hour turning schedule, use air-ripple mattresses, keep the skin clean and dry, and apply barrier creams over bony prominences."
      },
      {
        question: "Can two family members lift a heavy patient, or do you provide male staff?",
        answer: "For patients above 70 kg, we recommend experienced male attendants skilled in ergonomic lifting techniques to prevent caregiver injury."
      }
    ]
  },
  {
    id: "post-surgery-care-ahmedabad",
    slug: "post-surgery-care-ahmedabad",
    title: "Post-Surgery Care at Home in Ahmedabad",
    shortTitle: "Post-Surgery Care",
    tagline: "Structured post-operative convalescence supporting surgical healing and infection control.",
    description: "The initial 2 to 4 weeks after hospital discharge are critical for surgical recovery. Post-Surgery Care in Ahmedabad provides professional clinical observation and gentle assisted mobility to ensure incision sites heal without infection, deep vein thrombosis is prevented, and full mobility is safely restored.",
    metaTitle: "Post-Surgery Care at Home Ahmedabad | Post-Operative Nursing",
    metaDescription: "Professional post-surgery care at home in Ahmedabad. Surgical wound dressing, pain medication support, drain monitoring & early mobility. Call 9506333650.",
    category: "clinical",
    shifts: ["12-Hour Day / Night", "24-Hour Care", "Visit-based Dressing Service"],
    keyDuties: [
      "Aseptic dressing changes for surgical incisions and laparoscopy port sites",
      "Monitoring drain output (Jackson-Pratt, negative suction) and reporting volumes",
      "Strict administration of post-operative antibiotics and analgesics",
      "Support with early ambulation, incentive spirometry, and deep breathing",
      "Deep vein thrombosis (DVT) prevention support including compression stocking application",
      "Prompt recognition of warning signs (wound erythema, dehiscence, fever, swelling)"
    ],
    scope: [
      "Post-operative recovery under the direction of the operating surgeon's discharge plan",
      "Catheter care, surgical drain maintenance, and clinical record keeping"
    ],
    limitations: [
      "Nurses do not perform surgical revisions or prescribe unlisted painkillers.",
      "Suspected surgical complications (internal bleeding, wound opening) require immediate surgeon consultation."
    ],
    idealFor: [
      "Patients recovering from total knee or hip replacement (orthopedic surgery)",
      "Patients post cardiac bypass (CABG) or valve replacement surgery",
      "Patients recovering from abdominal, oncological, or neurosurgical procedures"
    ],
    qualifications: "Experienced post-operative GNM / B.Sc surgical ward nurses.",
    pricingEstimate: "₹1,500 – ₹2,200 per 12 hours, or ₹500 – ₹800 per sterile surgical dressing visit.",
    faqs: [
      {
        question: "Can your nurse clean and dress a knee replacement surgical wound?",
        answer: "Yes, our certified nurses use sterile dressing packs, betadine/saline solutions, and waterproof dressings as per your orthopedic surgeon's instructions."
      },
      {
        question: "How many days of post-surgery home nursing is usually needed?",
        answer: "Most families book between 7 to 21 days until surgical sutures or staples are removed and the patient regains steady mobility."
      }
    ]
  },
  {
    id: "mother-baby-care-ahmedabad",
    slug: "mother-baby-care-ahmedabad",
    title: "Mother and Baby Care at Home in Ahmedabad (Japa Maid)",
    shortTitle: "Mother & Baby Care",
    tagline: "Nurturing postpartum support for new mothers and tender newborn care at home.",
    description: "Welcoming a newborn is a wonderful time, but post-delivery physical exhaustion and newborn sleep cycles can overwhelm parents. Our Mother and Baby Care staffing service in Ahmedabad connects families with skilled post-natal caregivers who provide baby massage, bathing, mother recovery support, and nighttime reassurance.",
    metaTitle: "Mother and Baby Care Ahmedabad | Postnatal Care & Japa Maid",
    metaDescription: "Dedicated mother and newborn baby care in Ahmedabad. Traditional baby massage, warm bath, mother recovery support, and lactation help. Call 9506333650.",
    category: "specialized",
    shifts: ["12-Hour Day Shift", "12-Hour Night Shift", "24-Hour Live-in Postnatal Care"],
    keyDuties: [
      "Traditional gentle Ayurvedic newborn massage with warm baby oil",
      "Hygienic newborn bath with proper water temperature checks and ear protection",
      "Umbilical cord stump hygiene and diaper rash prevention care",
      "Supporting the mother with comfortable breastfeeding positioning and burping techniques",
      "Sterilization of baby bottles, pump parts, and washing baby clothes",
      "Nighttime soothing, swaddling, and burping so mother can rest and recover",
      "Nutritious post-delivery hydration reminders and comfortable rest for the mother"
    ],
    scope: [
      "Non-clinical postnatal mother comfort and newborn hygienic handling",
      "Hands-on guidance for first-time mothers on soothing and baby routines"
    ],
    limitations: [
      "Caregivers are not pediatricians or medical lactation consultants.",
      "Infant jaundice, high fever, or respiratory distress require immediate pediatrician care.",
      "Mother's surgical c-section stitches must only be dressed by a qualified nurse."
    ],
    idealFor: [
      "First-time mothers needing experienced hands for baby handling",
      "Mothers recovering from Caesarean (C-section) surgery with limited abdominal mobility",
      "Families without elder relatives at home during the initial 40 days (chilla/savva mahino)"
    ],
    qualifications: "Experienced postnatal care attendants (Japa maids) with practical experience in newborn handling.",
    pricingEstimate: "Ranges from ₹1,200 – ₹1,800 per 12 hours, or ₹25,000 – ₹35,000 per month for 24-hour live-in support.",
    faqs: [
      {
        question: "Does the caregiver perform traditional baby oil massage and bath?",
        answer: "Yes, our experienced postnatal caregivers are well-versed in gentle oil massage and traditional warm baths for babies."
      },
      {
        question: "Is night shift available for baby care in Ahmedabad?",
        answer: "Yes, many families opt for a 12-hour night caregiver so the new mother can get undisturbed sleep between feeds."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return SERVICES_DATA.find(s => s.slug === slug || s.id === slug);
};
