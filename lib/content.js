export const site = {
  name: "SpatioFos",
  url: "https://spatiofos.com",
  tagline: "Spatial Intelligence. Real Impact.",
  description:
    "AI-assisted roof and asset inspections across South East Queensland. Detect defects, reduce maintenance costs, and receive professional reports with a 24-hour target turnaround.",
  emails: {
    bookings: "bookings@spatiofos.com",
    enterprise: "enterprise@spatiofos.com",
    hello: "hello@spatiofos.com",
  },
};

export const navLinks = [
  { href: "/why-spatiofos", label: "Why SpatioFos" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const trustItems = [
  "RePL-Licensed Pilots",
  "CASA-Aligned Operations",
  "Public Liability Insured",
  "RTK Georeferencing",
  "AI-Assisted Analysis",
];

export const stats = [
  { value: "50", label: "Inspections Completed" },
  { value: "AI", label: "Assisted Defect Analysis" },
  { value: "24hr", label: "Target Report Turnaround" },
  { value: "100%", label: "No Roof Access Required" },
];

export const problems = [
  {
    icon: "⚠",
    title: "Roof access risk",
    description:
      "Falls account for 36% of construction fatalities. Every manual inspection is unnecessary liability — for the inspector and the property owner.",
  },
  {
    icon: "🔍",
    title: "Subjective assessments",
    description:
      "Two inspectors, two different reports. Our AI-assisted analysis helps produce consistent, repeatable documentation — with human review on every report.",
  },
  {
    icon: "⏱",
    title: "Insurance claim delays",
    description:
      "Claim disputes stall when documentation is inconsistent or incomplete. SpatioFos reports are structured for insurance workflows — acceptance depends on your insurer and claim circumstances.",
  },
  {
    icon: "📊",
    title: "No historical tracking",
    description:
      "Without longitudinal data, you cannot predict failures or plan maintenance budgets. Repeat inspections help build asset history over time.",
  },
];

export const workflowSteps = [
  { num: "01", title: "Capture", desc: "RTK drone flight with photogrammetry-grade precision", phase: "current" },
  { num: "02", title: "AI Detection", desc: "AI-assisted defect classification and severity scoring", phase: "current" },
  { num: "03", title: "GIS Analysis", desc: "Spatial mapping and georeferenced defect overlays", phase: "current" },
  { num: "04", title: "Report", desc: "Professional PDF with 24-hour target turnaround from capture", phase: "current" },
  { num: "05", title: "Digital Twin", desc: "3D asset model from point cloud data", phase: "roadmap" },
  { num: "06", title: "Prediction", desc: "Maintenance forecast and lifecycle planning", phase: "roadmap" },
];

export const outcomes = [
  { metric: "Zero", label: "Roof access required on standard drone captures" },
  { metric: "24hr", label: "Target turnaround from flight to PDF report" },
  { metric: "GIS", label: "Georeferenced imagery on every inspection" },
  { metric: "AI", label: "Assisted defect detection with human review" },
  { metric: "SEQ", label: "Brisbane, Gold Coast, Sunshine Coast & surrounds" },
];

export const solutions = [
  {
    slug: "roof-intelligence",
    href: "/solutions/roof-intelligence",
    icon: "🏠",
    title: "Roof Intelligence",
    flagship: true,
    active: true,
    description:
      "AI-assisted residential and commercial roof inspections with 24-hour target turnaround, thermal imaging options, and insurance-structured documentation.",
    tags: ["Condition Assessment", "Storm Damage", "Thermal Imaging", "Solar Suitability", "Insurance Reports"],
  },
  {
    slug: "aviation-intelligence",
    href: "/solutions/aviation-intelligence",
    icon: "✈",
    title: "Aviation Intelligence",
    flagship: false,
    active: false,
    description:
      "OLS assessments, PANS-OPS, airport safeguarding, and obstacle analysis — leveraging deep aviation geospatial expertise.",
    tags: ["OLS Assessments", "PANS-OPS", "Obstacle Analysis", "Development Assessments"],
  },
  {
    slug: "infrastructure-intelligence",
    href: "/solutions/infrastructure-intelligence",
    icon: "🏗",
    title: "Infrastructure Intelligence",
    flagship: false,
    active: false,
    description:
      "Critical asset monitoring at scale for councils, utilities, and infrastructure owners who need reliable longitudinal data.",
    tags: ["Councils", "Utilities", "Portfolio Monitoring", "Condition Rating"],
  },
  {
    slug: "asset-intelligence-platform",
    href: "/asset-intelligence-platform",
    icon: "📡",
    title: "Asset Intelligence Platform",
    flagship: false,
    active: false,
    description:
      "GIS dashboard, digital twin viewer, defect timeline tracking, and predictive maintenance forecasting — all in one enterprise platform.",
    tags: ["GIS Dashboard", "Digital Twin", "Defect Tracking", "AI Reports", "Work Order Integration"],
  },
];

export const comparisonRows = [
  { feature: "No roof access required", traditional: false, drone: true, spatiofos: true },
  { feature: "AI-assisted defect detection", traditional: false, drone: "partial", spatiofos: true },
  { feature: "GIS spatial intelligence", traditional: false, drone: "partial", spatiofos: true },
  { feature: "Digital twin generation", traditional: false, drone: "partial", spatiofos: "partial" },
  { feature: "Historical asset tracking", traditional: false, drone: "partial", spatiofos: "partial" },
  { feature: "Predictive maintenance", traditional: false, drone: false, spatiofos: "partial" },
  { feature: "Insurance-structured reports", traditional: "partial", drone: "partial", spatiofos: true },
  { feature: "Portfolio analytics dashboard", traditional: false, drone: false, spatiofos: "partial" },
];

export const showTestimonials = false;

export const testimonials = [
  {
    quote:
      "The report SpatioFos provided was detailed enough for our insurer to approve the claim without a second inspection. Turned a week-long process into two days.",
    initials: "MR",
    name: "Michael R.",
    role: "Homeowner, Brisbane Northside",
  },
  {
    quote:
      "Managing 14 strata buildings meant roof inspections were a logistical nightmare. SpatioFos handles all of them now. The platform gives us a live view of every asset.",
    initials: "SL",
    name: "Sandra L.",
    role: "Strata Manager, Gold Coast",
  },
  {
    quote:
      "The thermal imaging uncovered a leak we'd been chasing for 18 months. The report pinpointed it exactly. Genuinely impressive technology for a regional operator.",
    initials: "TK",
    name: "Tom K.",
    role: "Commercial Property Owner, Ipswich",
  },
];

export const pricingTiers = [
  {
    id: "essential",
    status: "active",
    tier: "Residential Essential",
    launchPrice: 199,
    standardPrice: 399,
    period: "one-time inspection",
    savings: 200,
    featured: false,
    description:
      "Full drone inspection with AI-assisted defect detection and a professional condition report with 24-hour target turnaround.",
    features: [
      "Full roof capture via drone",
      "AI-assisted defect detection report",
      "24-hour PDF delivery",
      "GIS-referenced imagery",
      "Defect severity classification",
    ],
    cta: "Book Now",
    ctaHref: "/contact",
  },
  {
    id: "premium",
    status: "active",
    tier: "Residential Premium",
    launchPrice: 349,
    standardPrice: 699,
    period: "one-time inspection",
    savings: 350,
    featured: true,
    description:
      "Everything in Essential, plus thermal imaging, solar suitability assessment, and an insurance-structured report.",
    features: [
      "Everything in Essential",
      "Thermal imaging layer",
      "Solar suitability assessment",
      "Insurance-structured report",
      "3D model snapshot (where captured)",
      "Defect history on repeat inspections (when available)",
    ],
    cta: "Book Now — Best Value",
    ctaHref: "/contact",
  },
  {
    id: "commercial",
    status: "coming-soon",
    tier: "Commercial",
    priceLabel: "Custom pricing",
    period: "per site",
    featured: false,
    description:
      "Large-format commercial inspections with full GIS output, asset register, and portfolio-level reporting.",
    features: [
      "Multi-building site coverage",
      "GIS spatial data export",
      "Asset register output",
      "Priority turnaround",
      "Dedicated account manager",
    ],
    cta: "Register Interest",
    ctaHref: "/contact",
  },
  {
    id: "platform",
    status: "coming-soon",
    tier: "Asset Intelligence Platform",
    priceLabel: "Custom pricing",
    period: "per portfolio",
    featured: false,
    description:
      "Ongoing portfolio monitoring via the SaaS platform. Includes quarterly inspections, GIS dashboard, and maintenance forecasting.",
    features: [
      "GIS portfolio dashboard",
      "Digital twin viewer",
      "Quarterly inspections included",
      "Maintenance planner",
      "API access & work order integration",
    ],
    cta: "Register Interest",
    ctaHref: "/contact",
  },
];

export const industries = [
  { icon: "🏡", title: "Residential", description: "Homeowners, landlords, and buyers who need accurate, fast roof assessments — especially following storm events." },
  { icon: "🏢", title: "Commercial & Strata", description: "Property managers and strata committees requiring consistent, portfolio-wide asset data and maintenance planning." },
  { icon: "📋", title: "Insurance", description: "Insurers and loss adjusters needing standardised inspection documentation structured for claim workflows — acceptance varies by provider." },
  { icon: "🏛", title: "Councils & Utilities", description: "Government and infrastructure owners requiring scalable asset condition monitoring with GIS integration." },
  { icon: "✈", title: "Airports & Aviation", description: "OLS assessments, obstacle analysis, and PANS-OPS compliance for airport operators and aviation planners." },
  { icon: "⛏", title: "Mining & Resources", description: "Remote site monitoring and infrastructure condition assessment for mining operators — coming soon." },
];

export const locations = [
  { slug: "brisbane", name: "Brisbane", sub: "Metro & surrounds", keyword: "roof inspection Brisbane" },
  { slug: "gold-coast", name: "Gold Coast", sub: "Coastal inspections", keyword: "roof inspection Gold Coast" },
  { slug: "sunshine-coast", name: "Sunshine Coast", sub: "North of Brisbane", keyword: "roof inspection Sunshine Coast" },
  { slug: "ipswich", name: "Ipswich", sub: "Western corridor", keyword: "roof inspection Ipswich" },
  { slug: "logan", name: "Logan", sub: "Southern Brisbane", keyword: "roof inspection Logan" },
  { slug: "moreton-bay", name: "Moreton Bay", sub: "Northern region", keyword: "roof inspection Moreton Bay" },
];

export const locationDetails = {
  brisbane: {
    name: "Brisbane",
    suburbs: "Chermside, Indooroopilly, Wynnum, Carindale, and greater metro",
    stormNote: "SEQ's highest storm exposure corridor — hail and severe wind events drive recurring inspection demand.",
  },
  "gold-coast": {
    name: "Gold Coast",
    suburbs: "Surfers Paradise, Southport, Robina, Burleigh, and coastal strip",
    stormNote: "Coastal salt exposure and cyclone-season wind loads accelerate roof degradation.",
  },
  "sunshine-coast": {
    name: "Sunshine Coast",
    suburbs: "Maroochydore, Caloundra, Noosa, Nambour, and hinterland",
    stormNote: "High UV and seasonal storm activity make proactive roof monitoring essential.",
  },
  ipswich: {
    name: "Ipswich",
    suburbs: "Springfield, Ripley, Redbank, Goodna, and western growth corridor",
    stormNote: "Rapid new development means growing roof asset inventory requiring baseline inspections.",
  },
  logan: {
    name: "Logan",
    suburbs: "Beenleigh, Loganholme, Springwood, Browns Plains, and southern corridor",
    stormNote: "Mixed housing stock from 1970s–2020s creates varied maintenance and insurance needs.",
  },
  "moreton-bay": {
    name: "Moreton Bay",
    suburbs: "Redcliffe, North Lakes, Caboolture, Morayfield, and northern bayside",
    stormNote: "Northern SEQ growth corridor with expanding residential and strata portfolios.",
  },
};

export const roofServices = [
  { title: "Condition Assessment", description: "AI-assisted roof condition scoring with defect mapping and severity classification." },
  { title: "Storm Damage Documentation", description: "Storm damage reports with georeferenced imagery and damage extent documentation for insurance workflows." },
  { title: "Thermal Imaging", description: "Infrared layer detection for hidden moisture intrusion, insulation gaps, and leak pathways." },
  { title: "Solar Suitability", description: "Roof area analysis, shading assessment, and energy yield estimates for solar installation planning." },
  { title: "Insurance Reports", description: "Structured documentation formatted for insurer workflows — confirm acceptance with your provider." },
  { title: "Maintenance Forecasting", description: "Maintenance recommendations based on observed defect severity and asset age." },
];

export const roofDeliverables = [
  "Drone inspection with RTK georeferencing",
  "AI-assisted defect detection and classification",
  "Risk scoring and severity ratings",
  "Maintenance recommendations",
  "GIS mapping with defect overlays",
  "Professional PDF report — 24-hour target turnaround",
];

export const roofFaq = [
  {
    q: "How long does an inspection take?",
    a: "Most residential roof captures are completed within 45–90 minutes on site. Your professional report has a 24-hour target turnaround from the flight.",
  },
  {
    q: "Do you need to access my roof?",
    a: "No. All inspections are conducted via drone from ground level. No ladders, no roof access, no fall risk.",
  },
  {
    q: "Will my insurer accept the report?",
    a: "Our Premium tier includes insurance-structured reports designed for claim workflows. Many insurers accept drone inspection documentation — check with your provider.",
  },
  {
    q: "What roof types do you inspect?",
    a: "Metal/Colorbond, tile, flat membrane, and asphalt shingle roofs across residential and light commercial properties.",
  },
  {
    q: "Which areas do you service?",
    a: "We operate across South East Queensland including Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan, and Moreton Bay.",
  },
];

export const platformFeatures = [
  { title: "GIS Portfolio Dashboard", description: "Map-based view of all assets with defect overlays, condition scores, and inspection history." },
  { title: "Digital Twin Viewer", description: "3D models built from photogrammetry with annotated defect layers and temporal comparison." },
  { title: "Maintenance Forecasting", description: "AI-assisted maintenance planning with cost estimates and priority scheduling (roadmap)." },
  { title: "Defect Timeline Tracking", description: "Track defect changes over successive inspections (platform roadmap)." },
  { title: "AI Report Generation", description: "Professional reports with consistent formatting and insurance-structured sections." },
  { title: "Work Order Integration", description: "Connect inspection findings directly to maintenance workflows and contractor dispatch." },
];

export const platformOutcomes = [
  { audience: "Operators", outcome: "Faster inspections, consistent documentation, and reduced site risk." },
  { audience: "Managers", outcome: "Portfolio visibility, maintenance budgeting, and compliance tracking." },
  { audience: "Investors", outcome: "Long-term asset data strategy as the platform develops." },
];

export const saasRoadmap = [
  { stage: "Stage 1", title: "Inspection Business", description: "Revenue generation and proprietary dataset creation through field operations." },
  { stage: "Stage 2", title: "Client Portal", description: "Reports library, defect tracking, and asset register for recurring clients." },
  { stage: "Stage 3", title: "Asset Intelligence Platform", description: "GIS dashboard, digital twins, and predictive analytics for enterprise portfolios." },
  { stage: "Stage 4", title: "National SaaS", description: "White label, API monetization, and marketplace for inspection intelligence." },
];

export const editorialCalendar = [
  { month: "Month 1", title: "Brisbane Roof Inspection Guide 2025", keyword: "roof inspection Brisbane" },
  { month: "Month 1", title: "How Drone Roof Inspections Work", keyword: "drone roof inspection" },
  { month: "Month 2", title: "Hail Damage Assessment: What Insurers Look For", keyword: "hail damage roof inspection" },
  { month: "Month 2", title: "Roof Inspection Costs in Queensland", keyword: "roof inspection cost Queensland" },
  { month: "Month 3", title: "How to Make an Insurance Roof Claim in QLD", keyword: "insurance roof claim Queensland" },
  { month: "Month 3", title: "Drone vs Traditional Roof Inspection", keyword: "drone vs traditional roof inspection" },
];

export const roofScoreBenefits = [
  "Register interest for a preliminary condition assessment",
  "Property details reviewed against SEQ inspection workflows",
  "Guidance on inspection type and timing when scoring goes live",
];

export const defectTelemetry = [
  { name: "Ridge cap separation", severity: "critical" },
  { name: "Flashing deterioration", severity: "moderate" },
  { name: "Surface granule loss", severity: "moderate" },
  { name: "Gutter blockage", severity: "low" },
];

export function locationMeta(slug) {
  const loc = locationDetails[slug];
  const base = locations.find((l) => l.slug === slug);
  if (!loc || !base) return null;
  return {
    title: `Roof Inspection ${loc.name} | SpatioFos`,
    description: `Roof inspection in ${loc.name} — AI-assisted drone inspections with 24hr target report turnaround. RePL-licensed pilots · CASA-aligned operations · Public liability insured. Book online or register for Roof Intelligence Score.`,
    keyword: base.keyword,
  };
}

export const sitemapRoutes = [
  "/",
  "/why-spatiofos",
  "/solutions",
  "/solutions/roof-intelligence",
  "/solutions/aviation-intelligence",
  "/solutions/infrastructure-intelligence",
  "/asset-intelligence-platform",
  "/industries",
  "/pricing",
  "/get-roof-score",
  "/about",
  "/contact",
  "/locations/brisbane",
  "/locations/gold-coast",
  "/locations/sunshine-coast",
  "/locations/ipswich",
  "/locations/logan",
  "/locations/moreton-bay",
  "/resources/blog",
  "/resources/case-studies",
  "/resources/sample-reports",
  "/privacy",
  "/terms",
  "/app",
];
