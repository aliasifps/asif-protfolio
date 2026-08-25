export type CategoryType = 'all' | 'ai-ads' | 'meta-growth' | '3d-motion' | 'social-reels' | 'seo-funnels';

export type PageId = 'home' | 'work' | 'services' | 'calculator' | 'testimonials' | 'insights' | 'contact';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'ai-ads' | 'meta-growth' | '3d-motion' | 'social-reels' | 'seo-funnels';
  categoryLabel: string;
  thumbnail: string;
  videoPoster: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  summary: string;
  fullCaseStudy: string;
  roas: string;
  views: string;
  ctr: string;
  conversionBoost: string;
  tags: string[];
  toolsUsed: string[];
  metrics: ProjectMetric[];
  featured?: boolean;
  accentColor: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  price: number;
  billingPeriod: 'per month' | 'per project' | 'retainer';
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  deliverables: string[];
  turnaroundTime: string;
  idealFor: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metricResult: string;
  metricLabel: string;
  platform: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  seoKeywords: string[];
  coverGradient: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  companyName: string;
  websiteUrl?: string;
  serviceCategory: string;
  monthlyBudget: string;
  projectTimeline: string;
  projectDescription: string;
  targetPlatform: string[];
  preferredMeetingSlot?: string;
}

export interface CampaignAnalytics {
  id: string;
  name: string;
  platform: 'Meta Ads' | 'TikTok' | 'Google Ads' | 'YouTube Shorts' | 'YouTube Ads' | 'LinkedIn' | 'Instagram Reels';
  spend: number;
  revenue: number;
  roas: number;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  status: 'Active & Scaling' | 'Optimizing' | 'Testing' | 'Completed';
  chartData: { date: string; roas: number; spend: number; conversions: number }[];
}

export interface PushNotificationItem {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  read: boolean;
  category: 'campaign' | 'ai-video' | 'billing' | 'system';
  actionUrl?: string;
}

export interface InvoiceItem {
  id: string;
  date: string;
  service: string;
  amount: number;
  status: 'Paid' | 'Processing' | 'Upcoming';
  invoicePdfUrl: string;
}

export interface AdHookTemplate {
  id: string;
  industry: string;
  objective: string;
  framework: string;
  hookHeadline: string;
  visualPrompt: string;
  voiceoverScript: string;
  captionOverlay: string;
  ctaText: string;
  estimatedHookRate: string;
  roasPotential: string;
  tags: string[];
}

export interface AuditQuestionOption {
  label: string;
  score: number;
  insight: string;
  leakRiskINR: number;
}

export interface AuditQuestion {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  options: AuditQuestionOption[];
}

export interface AuditDiagnosticReport {
  score: number;
  grade: 'A+' | 'B' | 'C' | 'Critical Leakage';
  estimatedLeakINR: number;
  recommendations: string[];
  strengths: string[];
  summary: string;
}

