import { AdHookTemplate, AuditQuestion } from '../types';

export const AD_HOOK_TEMPLATES: AdHookTemplate[] = [
  {
    id: "hook-d2c-1",
    industry: "D2C E-Commerce & Retail",
    objective: "Direct Meta / Instagram Reels Scale",
    framework: "Pattern Interrupt + Macro Physics",
    hookHeadline: "The Physical Impossibility Hook",
    visualPrompt: "3D hyper-realistic macro slow-motion render of the product defying gravity in mid-air with volumetric light rays and liquid splash dispersion (Blender / Runway Gen-3).",
    voiceoverScript: "If you're still using standard [Product Category], stop scroll for 5 seconds. What you're looking at is the reason why 40,000 people switched this month alone.",
    captionOverlay: "⚠️ STOP SCROLLING: This breaks every rule in [Industry]",
    ctaText: "Get 25% Off First Batch →",
    estimatedHookRate: "71.4%",
    roasPotential: "5.8x - 7.2x",
    tags: ["3D Physics", "Pattern Interrupt", "D2C Hero"]
  },
  {
    id: "hook-d2c-2",
    industry: "D2C E-Commerce & Retail",
    objective: "Beat Ad Creative Fatigue",
    framework: "Split-Screen AI Micro-Comparison",
    hookHeadline: "The Cheap Alternative vs Pro Engineering",
    visualPrompt: "Split screen vertical 9:16 layout: Left side shows generic competitor product wearing out/failing in grey tone; Right side shows client 4K vibrant exploded view with glowing durability metrics.",
    voiceoverScript: "Most brands won't show you this side-by-side test. Left is what happens after 3 weeks of standard use. Right is our aircraft-grade titanium build.",
    captionOverlay: "Left: ₹499 Generic | Right: Engineered for Lifetime",
    ctaText: "Shop the Difference Today →",
    estimatedHookRate: "68.2%",
    roasPotential: "4.9x - 6.1x",
    tags: ["Comparison", "Advantage+", "Direct Response"]
  },
  {
    id: "hook-saas-1",
    industry: "B2B SaaS & Tech",
    objective: "Free Trial & Demo Signups",
    framework: "The 'Manual Hell' Agitation (PAS)",
    hookHeadline: "The 4-Hour Daily Bottleneck Eraser",
    visualPrompt: "Fast kinetic screen recording of 12 messy browser tabs and spreadsheets flashing frantically in red, transforming with a holographic snap into a sleek single-click dashboard in cyan glow.",
    voiceoverScript: "How many hours did your team spend manually compiling reports this week? Here is how 800+ growth leads automated it completely in under 60 seconds.",
    captionOverlay: "Deleting 4 hours of spreadsheet misery in 1 click ⚡",
    ctaText: "Start 14-Day Free Sandbox →",
    estimatedHookRate: "64.5%",
    roasPotential: "3.9x - 5.2x",
    tags: ["B2B SaaS", "Productivity", "LinkedIn Ads"]
  },
  {
    id: "hook-fintech-1",
    industry: "Fintech & Mobile Apps",
    objective: "App Installs & Funded Accounts",
    framework: "The 'Secret Tax / Hidden Fee' Expose",
    hookHeadline: "The Silent Fee Drain Hook",
    visualPrompt: "Close-up 3D coin stack draining into a digital black hole on a smartphone mockup, followed by a neon green shield locking in zero-fee exchange rates.",
    voiceoverScript: "Your traditional bank charged you ₹3,400 in hidden cross-border fees last quarter and you didn't even get a notification. Let's fix that right now.",
    captionOverlay: "Zero Hidden Remittance Fees. Instant Global Transfers.",
    ctaText: "Claim ₹500 Welcome Credit on Sign-up →",
    estimatedHookRate: "73.8%",
    roasPotential: "4.2x - 5.5x",
    tags: ["Fintech", "CPI Optimization", "Mobile Growth"]
  },
  {
    id: "hook-beauty-1",
    industry: "Ayurveda, Cosmetics & Health",
    objective: "Quiz Funnel & High-Intent Conversion",
    framework: "The Diagnostic Curiosity Gap",
    hookHeadline: "The Skin-Type Diagnosis Anomaly",
    visualPrompt: "Macro skin pore scan graphic with glowing cellular moisture indicators transitioning into pure botanical herbal extraction in 3D fluid simulation.",
    voiceoverScript: "If you have combination skin in Indian weather, 90% of mainstream moisturizers are actually clogging your barrier. Take this 30-second Ayurvedic skin test.",
    captionOverlay: "Why your current skincare isn't working (30s Diagnostic)",
    ctaText: "Discover Your Dosha Formula →",
    estimatedHookRate: "76.1%",
    roasPotential: "5.1x - 6.8x",
    tags: ["Quiz Funnel", "Ayurveda", "High Retention"]
  },
  {
    id: "hook-luxury-1",
    industry: "Luxury, Fashion & Timepieces",
    objective: "High-Ticket Pre-Orders & Crowdfunding",
    framework: "Keynote-Style Spatial Reveal",
    hookHeadline: "The Micro-Mechanical Keynote Reveal",
    visualPrompt: "Black void background with razor-thin cinematic anamorphic blue flares sweeping across hand-polished chamfered sapphire glass and spinning tourbillon escapement.",
    voiceoverScript: "Three years in research. Micro-machined from a single block of Grade 5 titanium. Only 500 numbered pieces will ever be created.",
    captionOverlay: "Numbered Edition 001/500 • Reserve Your Allocation",
    ctaText: "Reserve VIP Priority Queue →",
    estimatedHookRate: "69.4%",
    roasPotential: "7.2x - 9.4x",
    tags: ["Luxury 3D", "Crowdfunding", "High AOV"]
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: "spend-tier",
    title: "1. What is your current monthly ad spend across Meta & Google?",
    subtitle: "Establishes your baseline creative burn rate and attribution sensitivity.",
    category: "Scale & Volume",
    options: [
      { label: "₹25,000 - ₹1,00,000 / month", score: 15, insight: "Testing phase: Creative velocity needs to be highly focused on 4 core angles.", leakRiskINR: 12000 },
      { label: "₹1,00,000 - ₹5,00,000 / month", score: 20, insight: "Scaling phase: Requires at least 8 fresh AI video variations/month to beat fatigue.", leakRiskINR: 45000 },
      { label: "₹5,00,000 - ₹20,00,000 / month", score: 25, insight: "Aggressive Advantage+ scaling: Requires 12-20 fresh hook cuts/month.", leakRiskINR: 120000 },
      { label: "₹20,00,000+ / month (Enterprise)", score: 25, insight: "High-frequency enterprise: Creative testing engine is your primary profit lever.", leakRiskINR: 350000 }
    ]
  },
  {
    id: "tracking-setup",
    title: "2. How is your conversion tracking and attribution configured?",
    subtitle: "Browser pixels lose up to 35% of purchase triggers post-iOS privacy shields.",
    category: "Data & Attribution",
    options: [
      { label: "Standard Browser Meta Pixel only (No CAPI)", score: 5, insight: "CRITICAL LEAK: You are losing 28-35% of conversion signals, raising your CPMs.", leakRiskINR: 65000 },
      { label: "Basic Shopify / Third-Party App CAPI integration", score: 14, insight: "Moderate signal: Event Match Quality is likely 6.5/10. Missing custom deduplication.", leakRiskINR: 28000 },
      { label: "Server-side Cloud Gateway CAPI (EMQ score 9.0+)", score: 25, insight: "Optimal attribution: Full first-party cookie recovery and maximum algorithmic bidding power.", leakRiskINR: 0 },
      { label: "Not sure / Default setup", score: 8, insight: "High risk: Pixel data is likely degraded by ad blockers and browser privacy shields.", leakRiskINR: 50000 }
    ]
  },
  {
    id: "creative-velocity",
    title: "3. How frequently do you launch new video ad angles and visual hooks?",
    subtitle: "Meta algorithms reward accounts that continuously feed novel creative inputs.",
    category: "Creative Velocity",
    options: [
      { label: "Once a month or less (Re-using same static/video ads)", score: 5, insight: "SEVERE FATIGUE: Frequency fatigue decay increases CAC by 40-70% after Day 10.", leakRiskINR: 75000 },
      { label: "Every 2-3 weeks (2-4 simple video variations)", score: 14, insight: "Average velocity: Performance peaks and dips unpredictably.", leakRiskINR: 32000 },
      { label: "Weekly systematic testing (8-12+ AI video hook variations)", score: 25, insight: "Elite velocity: Continuous fresh creative supply prevents ROAS decay completely.", leakRiskINR: 0 }
    ]
  },
  {
    id: "campaign-structure",
    title: "4. What is your Meta Ads campaign and account architecture?",
    subtitle: "Over-fragmented interest targeting dilutes machine learning efficiency.",
    category: "Media Buying Strategy",
    options: [
      { label: "Heavy manual interest targeting & 15+ ad sets", score: 8, insight: "Fragmented budget: Meta's Advantage+ algorithm cannot properly optimize learning phases.", leakRiskINR: 42000 },
      { label: "Broad targeting + Retargeting split", score: 18, insight: "Decent setup, but requires creative-led audience segmentation to scale further.", leakRiskINR: 18000 },
      { label: "Consolidated Advantage+ Shopping (ASC) with dynamic creative testing sets", score: 25, insight: "Modern best practice: Maximizes machine learning liquidity and lower CPMs.", leakRiskINR: 0 }
    ]
  }
];

export const AD_TEARDOWN_COMPARISON = {
  title: "A/B Creative Anatomy Teardown",
  industry: "VoltGlow Performance (E-Commerce)",
  controlAd: {
    type: "Control: Static Stock Product Image",
    roas: "1.42x",
    hookRate: "18.4%",
    ctr: "1.15%",
    cac: "₹2,450",
    flaws: [
      "No pattern interrupt: 81.6% of users scrolled past in under 1.5 seconds",
      "Zero spatial depth: Product looks like a cheap generic template",
      "Wall of text: Unreadable on mobile Instagram / Reels feed",
      "Weak offer: 'Buy Now' with no risk reversal or warranty guarantee"
    ]
  },
  variantAd: {
    type: "Winner: Ali Asif AI 3D Dynamic Commercial Cut",
    roas: "5.42x",
    hookRate: "68.4%",
    ctr: "4.92%",
    cac: "₹1,380",
    strengths: [
      "0-2s Macro 3D Physics anomaly stops scroll trance immediately (>68% retention)",
      "High-contrast kinetic caption typography styled for mobile vertical viewports",
      "Photorealistic fluid simulation highlights proprietary performance ingredients",
      "Clear risk-reversal offer & social proof urgency badge in the final 5 seconds"
    ]
  }
};
