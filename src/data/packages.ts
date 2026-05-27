// ─── Health Package Data ───────────────────────────────────────────────────────

export interface HealthPackage {
  id: string;
  name: string;
  testCount: number;
  mrp: number;
  offerPrice: number;
  popular?: boolean;
  badge?: string;
  highlights: string[];
}

export const packages: HealthPackage[] = [
  {
    id: 'aayushya-1',
    name: 'Aayushya 1',
    testCount: 68,
    mrp: 1598,
    offerPrice: 799,
    highlights: [
      'Fasting Blood Sugar',
      'Complete Blood Count',
      'Lipid Profile',
      'Liver Function Test',
      'KFT Basic Screen',
      'Thyroid Profile Total',
      'Urine Routine & Microscopy',
    ],
  },
  {
    id: 'aayushya-2',
    name: 'Aayushya 2',
    testCount: 78,
    mrp: 2598,
    offerPrice: 1299,
    highlights: [
      'HbA1c',
      'Complete Blood Count',
      'Lipid Profile',
      'Liver Function Test',
      'KFT Comprehensive',
      'Thyroid Profile Free',
      'Urine Routine',
      'ESR',
      'Calcium',
    ],
  },
  {
    id: 'aayushya-3',
    name: 'Aayushya 3',
    testCount: 77,
    mrp: 3598,
    offerPrice: 1799,
    highlights: [
      'Fasting Blood Sugar',
      'HbA1c',
      'Complete Blood Count',
      'Lipid Profile',
      'Liver Function Test',
      'KFT Comprehensive',
      'Thyroid Profile Total',
      'Vitamin D (25-OH)',
      'Vitamin B12',
    ],
  },
  {
    id: 'aayushya-4',
    name: 'Aayushya 4',
    testCount: 85,
    mrp: 4598,
    offerPrice: 2299,
    popular: true,
    badge: 'Most Popular',
    highlights: [
      'All Diabetes Tests',
      'Complete Heart Profile',
      'Liver & Kidney Complete',
      'Thyroid Free Profile',
      'Vitamins D, B12, Calcium',
      'Iron Studies Basic',
      'High Sensitivity CRP',
    ],
  },
  {
    id: 'aayushya-5',
    name: 'Aayushya 5',
    testCount: 90,
    mrp: 5998,
    offerPrice: 2999,
    badge: 'Best Value',
    highlights: [
      'All Aayushya 4 Tests',
      'Vitamin B9 (Folic Acid)',
      'Iron Studies Complete',
      'Rheumatoid Factor',
      'Phosphorus',
      'Microalbumin Creatinine',
      'PSA (Male)',
    ],
  },
  {
    id: 'aayushya-6',
    name: 'Aayushya 6',
    testCount: 97,
    mrp: 8398,
    offerPrice: 4199,
    badge: 'Comprehensive',
    highlights: [
      'All 97 Tests Included',
      'Full Heart Health Panel',
      'Pancreas: Amylase + Lipase',
      'Iron Studies Comprehensive',
      'Lipoprotein(a)',
      'Apolipoprotein B & A1',
      'Creatine Kinase MB',
    ],
  },
];

// ─── Featured Package (Hero Banner) ────────────────────────────────────────────

export const featuredPackage = {
  name: 'Aayushya Health Screen',
  subtitle: 'Fasting / Non-Fasting',
  testCount: 28,
  price: 399,
  tests: ['Blood Sugar', 'CBC', 'Cholesterol', 'Creatinine', 'SGOT', 'SGPT', 'TSH', 'Uric Acid'],
};

// ─── Comparison Table Data ─────────────────────────────────────────────────────

export interface ComparisonTest {
  category: string;
  test: string;
  packages: [boolean, boolean, boolean, boolean, boolean, boolean]; // [A1..A6]
}

export const comparisonData: ComparisonTest[] = [
  // Diabetes Care
  { category: 'Diabetes Care', test: 'Fasting Blood Sugar', packages: [true, true, true, true, true, true] },
  { category: 'Diabetes Care', test: 'HbA1c (Avg Glucose)', packages: [false, true, true, true, true, true] },
  { category: 'Diabetes Care', test: 'Complete Blood Count', packages: [true, true, true, true, true, true] },
  // Heart Health
  { category: 'Heart Health', test: 'Lipid Profile', packages: [true, true, true, true, true, true] },
  { category: 'Heart Health', test: 'High Sensitivity CRP', packages: [false, false, false, true, true, true] },
  // Liver & Kidney
  { category: 'Liver & Kidney', test: 'Liver Function Test', packages: [true, true, true, true, true, true] },
  { category: 'Liver & Kidney', test: 'KFT Basic Screen', packages: [true, false, false, false, false, false] },
  { category: 'Liver & Kidney', test: 'KFT Comprehensive', packages: [false, true, true, true, true, true] },
  // Thyroid Health
  { category: 'Thyroid Health', test: 'Thyroid Profile Total', packages: [true, false, true, false, true, false] },
  { category: 'Thyroid Health', test: 'Thyroid Profile Free', packages: [false, true, false, true, true, true] },
  // Urine Analysis
  { category: 'Urine Analysis', test: 'Urine Routine & Microscopy', packages: [true, true, true, true, true, true] },
  { category: 'Urine Analysis', test: 'Microalbumin Creatinine Ratio', packages: [false, false, false, false, true, true] },
  { category: 'Urine Analysis', test: 'ESR', packages: [false, true, false, true, true, true] },
  // Vitamins & Minerals
  { category: 'Vitamins & Minerals', test: 'Calcium', packages: [false, true, true, true, true, true] },
  { category: 'Vitamins & Minerals', test: 'Phosphorus', packages: [false, false, false, true, true, true] },
  { category: 'Vitamins & Minerals', test: 'Vitamin D (25-OH)', packages: [false, false, true, true, true, true] },
  { category: 'Vitamins & Minerals', test: 'Vitamin B12', packages: [false, false, true, true, true, true] },
  // Iron Studies
  { category: 'Iron Studies', test: 'Iron Studies Basic', packages: [false, false, false, true, true, false] },
  { category: 'Iron Studies', test: 'Iron Studies Comprehensive', packages: [false, false, false, false, false, true] },
  // Arthritis
  { category: 'Arthritis', test: 'Rheumatoid Factor', packages: [false, false, false, false, true, true] },
  // Pancreas
  { category: 'Pancreas Health', test: 'Amylase', packages: [false, false, false, false, false, true] },
  { category: 'Pancreas Health', test: 'Lipase', packages: [false, false, false, false, false, true] },
  // Advanced Heart
  { category: 'Advanced Heart', test: 'Lipoprotein(a)', packages: [false, false, false, false, false, true] },
  { category: 'Advanced Heart', test: 'Apolipoprotein B & A1', packages: [false, false, false, false, false, true] },
  { category: 'Advanced Heart', test: 'Creatine Kinase MB', packages: [false, false, false, false, false, true] },
];

// ─── Contact Info ──────────────────────────────────────────────────────────────

export const contactInfo = {
  phone: '+917008796745',
  phoneDisplay: '+91 7008796745',
  whatsapp: '917008796745',
  email: 'raghunathdiagnostics46@gmail.com',
  address: 'NEW BEDA STREET, 6th Line, ADARSH NAGAR, Prasad Rao Peta, Jeypore, Odisha 764003',
  mapQuery: 'Raghunath+Diagnostics+Jeypore+Odisha',
};
