export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  points: string[];
  tag: string;
  highlightMetric: string;
}

export interface PricingPlan {
  id: string;
  tier: 'starter' | 'popular' | 'pro';
  name: string;
  badge: string;
  priceFormatted: string;
  priceNumeric: number;
  period: string;
  description: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  category: string;
  location: string;
  challenge: string;
  solution: string;
  resultMetric: string;
  resultDescription: string;
  platform: string;
}

export interface Testimonial {
  id: string;
  name: string;
  brand: string;
  city: string;
  text: string;
  rating: number;
  serviceUsed: string;
}

export interface SiteConfig {
  studioName: string;
  studioTagline: string;
  whatsappNumber: string; // e.g. "6281234567890"
  whatsappDefaultMessage: string;
  email: string;
  operatingHours: string;
  location: string;
  heroBadge: string;
  heroHeadline: string;
  heroHeadlineGradient: string;
  heroSubheadline: string;
  stats: {
    marketplaces: string;
    platforms: string;
    focus: string;
    optimization: string;
  };
  services: ServiceItem[];
  pricingPlans: PricingPlan[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
}
