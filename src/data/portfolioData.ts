import { Project, ServicePackage, Testimonial, BlogPost, CampaignAnalytics, PushNotificationItem, InvoiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "ALI ASIF P S",
  shortName: "Asif P S",
  title: "Digital Marketing Strategist & AI Ad Specialist",
  tagline: "Performance Marketing • Meta & Google Ads • AI Video Creatives",
  bio: "Experienced Digital Marketing Strategist based in Kerala, India, serving global and Indian high-growth brands. Blending data-driven Meta & Google Ads performance marketing with cutting-edge AI video ads and 3D visual storytelling to deliver high ROAS, viral reach, and predictable revenue pipelines.",
  email: "aliasifps@gmail.com",
  phone: "+91 98460 12345",
  location: "Kerala, India (Global Remote Strategist)",
  socials: {
    linkedin: "https://www.linkedin.com/in/aliasifps/",
    twitter: "https://x.com/aliasifps",
    instagram: "https://instagram.com/aliasifps",
    youtube: "https://youtube.com/@aliasifps",
    github: "https://github.com/aliasifps",
    behance: "https://behance.net/aliasifps"
  },
  stats: [
    { label: "Total Ad Spend Managed", value: "₹3.8 Cr+", subtext: "Across Meta, Google & TikTok Ads" },
    { label: "Average Campaign ROAS", value: "4.82x", subtext: "Industry benchmark is 2.1x" },
    { label: "AI Video Commercials", value: "320+", subtext: "High-retention ad creatives" },
    { label: "Organic Social Reach", value: "185M+", subtext: "Viral impressions delivered" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-ad-hypercharge",
    title: "AI 3D Commercial: Cyberpunk Energy Drink Launch",
    client: "VoltGlow Performance",
    industry: "E-Commerce / Beverage",
    category: "ai-ads",
    categoryLabel: "AI Video Ads",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    videoPoster: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "16:9",
    summary: "Generated 12 hyper-realistic AI 3D animated video variations testing visual hooks in Meta Ads, boosting click-through rates by 240% and lowering CAC by 42%.",
    fullCaseStudy: "The client needed a high-octane 3D product commercial without a ₹50,00,000 live production budget. Utilizing custom AI prompt engineering, neural frame interpolation, and 3D fluid simulations, we delivered 12 localized ad cuts within 5 days. Scaled to ₹15,00,000 monthly spend with a sustained 5.4x blended ROAS generating over ₹81,00,000 in monthly revenue.",
    roas: "5.4x",
    views: "3.8M",
    ctr: "4.92%",
    conversionBoost: "+188%",
    tags: ["AI Video Generation", "Meta Ads", "3D Motion", "Hook Testing"],
    toolsUsed: ["Midjourney v6", "Runway Gen-3", "After Effects", "Meta Ads Manager", "Premiere Pro"],
    metrics: [
      { label: "Blended ROAS", value: "5.42x", change: "+145%", isPositive: true },
      { label: "Hook Rate (3s)", value: "68.4%", change: "+31.2%", isPositive: true },
      { label: "Cost Per Acquisition", value: "₹1,380", change: "-42.5%", isPositive: true }
    ],
    featured: true,
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "meta-growth-fintech",
    title: "Omnichannel Meta & TikTok Scaling Engine",
    client: "FinVault Global",
    industry: "Fintech & Mobile App",
    category: "meta-growth",
    categoryLabel: "Meta & Paid Social",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    videoPoster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "9:16",
    summary: "Complete paid funnel redesign combining AI kinetic motion ads and automated Advantage+ audience bidding, acquiring 48,000 funded accounts in 90 days.",
    fullCaseStudy: "Targeted digital professionals and NRI remittance corridors across India, UAE, US, and Singapore. Built dynamic data-driven creative angles highlighting zero-fee cross-border payments. Implemented server-side CAPI tracking to counter iOS signal loss.",
    roas: "4.1x",
    views: "8.2M",
    ctr: "3.85%",
    conversionBoost: "+215%",
    tags: ["Meta Advantage+", "TikTok Spark Ads", "CAPI Server Tracking", "Fintech Scaling"],
    toolsUsed: ["Meta Business Suite", "TikTok Ads", "Figma", "Google Tag Manager", "Triple Whale"],
    metrics: [
      { label: "New Funded Accounts", value: "48,200", change: "+215%", isPositive: true },
      { label: "Cost Per Install (CPI)", value: "₹175", change: "-38%", isPositive: true },
      { label: "LTV to CAC Ratio", value: "6.2:1", change: "+55%", isPositive: true }
    ],
    featured: true,
    accentColor: "from-indigo-500 to-purple-600"
  },
  {
    id: "3d-commercial-luxury-watch",
    title: "Cinematic 3D Watch Reveal & Social Teaser",
    client: "Chronos Haute Horlogerie",
    industry: "Luxury Goods & Watches",
    category: "3d-motion",
    categoryLabel: "3D Motion & Commercials",
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    videoPoster: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "16:9",
    summary: "Full 3D exploded view timepiece animation with realistic lighting and micro-gear mechanics for an exclusive pre-order crowdfunding release.",
    fullCaseStudy: "Crafted 4K CGI renders and micro-mechanical zoom cuts showing titanium escapement movement. Generated ₹98.5 Lakhs in pre-orders within 72 hours of ad launch.",
    roas: "7.8x",
    views: "1.9M",
    ctr: "5.10%",
    conversionBoost: "+320%",
    tags: ["3D CGI Animation", "Luxury Branding", "Kickstarter Launch", "Cinema 4D"],
    toolsUsed: ["Blender 3D", "Octane Render", "DaVinci Resolve", "AI Audio Upscaling"],
    metrics: [
      { label: "Pre-order Sales", value: "₹98.5 Lakhs", change: "+320%", isPositive: true },
      { label: "Average Order Value", value: "₹68,000", change: "+18%", isPositive: true },
      { label: "Ad ROAS", value: "7.8x", change: "+190%", isPositive: true }
    ],
    featured: true,
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: "social-reels-brand-growth",
    title: "Viral AI Reels & Brand Authority System",
    client: "NeuroSync AI",
    industry: "B2B SaaS / Productivity",
    category: "social-reels",
    categoryLabel: "Viral Social Media",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    videoPoster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "9:16",
    summary: "Engineered 45 short-form AI video reels breaking down complex productivity hacks, driving 120,000 newsletter signups and 6.4M organic impressions.",
    fullCaseStudy: "Created a proprietary content pipeline using AI voice synthesis, dynamic captions, kinetic B-roll animations, and sound design. Account grew from 4,000 to 215,000 followers in under 60 days.",
    roas: "N/A (Organic)",
    views: "6.4M",
    ctr: "6.2%",
    conversionBoost: "+440%",
    tags: ["Viral Reels", "Short-Form Video", "B2B Organic", "AI Voiceovers"],
    toolsUsed: ["CapCut Pro", "ElevenLabs", "Midjourney", "Notion Content Engine"],
    metrics: [
      { label: "Organic Impressions", value: "6.4M", change: "+440%", isPositive: true },
      { label: "Follower Growth", value: "215,000", change: "+5,200%", isPositive: true },
      { label: "Direct Newsletter Leads", value: "124,000", change: "+390%", isPositive: true }
    ],
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "seo-funnel-ecommerce",
    title: "High-Intent Search & Funnel Optimization",
    client: "AuraClean Beauty",
    industry: "Clean Cosmetics & Ayurveda",
    category: "seo-funnels",
    categoryLabel: "SEO & High-Intent Funnels",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0a67e557b683?auto=format&fit=crop&w=1000&q=80",
    videoPoster: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "16:9",
    summary: "Built an authoritative programmatic SEO architecture combined with high-converting quiz funnels and Google Performance Max campaigns.",
    fullCaseStudy: "Identified 800+ untapped long-tail commercial keywords. Designed skin-type diagnostic interactive quiz funnel converting cold search traffic at 7.8% directly into recurring subscription buyers.",
    roas: "4.9x",
    views: "1.4M",
    ctr: "4.15%",
    conversionBoost: "+160%",
    tags: ["Programmatic SEO", "Google PMax", "Quiz Funnel", "A/B Testing"],
    toolsUsed: ["Ahrefs", "Google Search Console", "Klaviyo", "Shopify Plus", "VWO"],
    metrics: [
      { label: "Organic Monthly Traffic", value: "310,000", change: "+160%", isPositive: true },
      { label: "Quiz Completion Rate", value: "74.2%", change: "+28%", isPositive: true },
      { label: "Organic Search Revenue", value: "₹34.5L/mo", change: "+195%", isPositive: true }
    ],
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: "ai-saas-explainer",
    title: "3D Spatial AI SaaS Product Launch Promo",
    client: "VoxelFlow Cloud",
    industry: "Developer Tools & Cloud 3D",
    category: "3d-motion",
    categoryLabel: "3D Motion & Commercials",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
    videoPoster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "16:9",
    summary: "Futuristic 3D motion graphics ad demonstrating real-time cloud rendering for engineers, generating 4,200 developer trial starts in week one.",
    fullCaseStudy: "Translated complex spatial computing concepts into sleek, visual metaphors with UI mockups, holographic data flows, and sound design. Ran on LinkedIn Sponsored Video and YouTube In-Stream.",
    roas: "3.9x",
    views: "2.1M",
    ctr: "3.70%",
    conversionBoost: "+130%",
    tags: ["SaaS Explainer", "LinkedIn Video Ads", "Tech Motion", "Sound Design"],
    toolsUsed: ["Cinema 4D", "Redshift", "Premiere Pro", "Soundly"],
    metrics: [
      { label: "Trial Signups", value: "4,200", change: "+130%", isPositive: true },
      { label: "Video Completion Rate", value: "59.2%", change: "+24%", isPositive: true },
      { label: "Cost Per Trial Lead", value: "₹1,950", change: "-34%", isPositive: true }
    ],
    accentColor: "from-cyan-400 to-teal-500"
  }
];

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: "ai-video-ads-suite",
    title: "AI Video Ads & Creative Testing Engine",
    tagline: "High-ROAS Ad Creatives Built to Beat Ad Fatigue",
    price: 34999,
    billingPeriod: "per month",
    popular: true,
    badge: "Most Popular in India & Global",
    description: "End-to-end AI video ad production and rapid creative iteration for Meta (FB/IG), YouTube Shorts, and Reels. We script, generate, animate, voice, and test winning angles weekly.",
    features: [
      "12 Custom High-Resolution AI Video Ads per month",
      "Dynamic Hook Variations & Split-Testing Scripts",
      "Neural 3D Motion, AI Voiceover & SFX Mastering",
      "Vertical (9:16) & Feed (1:1, 16:9) multi-aspect cuts",
      "Weekly Creative Performance Analysis & Angle Iteration",
      "Direct Creative upload to your Meta/Google Ads Manager"
    ],
    deliverables: [
      "12 Ready-to-publish 4K video creatives",
      "36 Hook & Caption copy variations",
      "Full raw assets & Canva/CapCut templates"
    ],
    turnaroundTime: "3-5 Business Days per batch",
    idealFor: "E-commerce & D2C brands spending ₹50k - ₹5L/mo needing non-stop fresh creatives to scale ROAS.",
    accentColor: "border-cyan-500/50 shadow-cyan-500/10 text-cyan-400"
  },
  {
    id: "full-stack-growth",
    title: "Full-Stack Performance Marketing & Scale",
    tagline: "Complete Strategy, Ad Buying & High-Conversion Funnels",
    price: 79999,
    billingPeriod: "per month",
    badge: "Full Scale Retainer",
    description: "Hands-off, dedicated media buying and growth strategy. We handle your entire Meta & Google ad spend, custom AI video creative pipelines, conversion tracking (CAPI), and daily optimization.",
    features: [
      "Full Media Buying on Meta (FB & IG) & Google / YouTube Ads",
      "Unlimited AI Video Ad Creatives & Variations",
      "Server-Side CAPI & Offline Conversion Tracking Setup",
      "Landing Page / Shopify CRO & Offer Architecture",
      "Real-Time Live Analytics Dashboard & Weekly Strategy Calls",
      "Direct 24/7 WhatsApp & Slack Channel with Ali Asif P S"
    ],
    deliverables: [
      "Omnichannel Campaign Management",
      "Custom Live Performance Dashboard",
      "Monthly Growth Roadmap & Competitor Intel"
    ],
    turnaroundTime: "Daily Active Management",
    idealFor: "Established brands and fast-growing businesses ready to scale past ₹5 Lakhs - ₹50 Lakhs/mo profitably.",
    accentColor: "border-purple-500/50 shadow-purple-500/10 text-purple-400"
  },
  {
    id: "3d-commercial-standalone",
    title: "Cinematic 3D Commercial & Product Launch",
    tagline: "Hero-Grade 3D Animation for Product Launches",
    price: 45000,
    billingPeriod: "per project",
    description: "Showstopping 3D product commercial or cinematic brand video. Perfect for brand launches, website hero sections, and prime advertising campaigns.",
    features: [
      "1 Hero 3D Animated Commercial (30-60 seconds, 4K)",
      "3 Short-Form Social Cutdowns (15s Hooks)",
      "Photorealistic Material Texturing & Exploded Views",
      "Studio-Grade Sound Design, Mixing & Custom AI Score",
      "Full Commercial Broadcast Rights Included"
    ],
    deliverables: [
      "4K Ultra-HD Master Files",
      "Transparent Alpha Stills for Website Banners",
      "Social-Ready Formats (9:16, 1:1, 16:9)"
    ],
    turnaroundTime: "7-10 Business Days",
    idealFor: "Product creators, luxury brands, and hardware/SaaS companies making a major launch statement.",
    accentColor: "border-blue-500/50 shadow-blue-500/10 text-blue-400"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "VP of Growth",
    company: "AeroShield Optics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Asif is in a league of his own. His AI video ads delivered a 5.2x ROAS in our very first week, and slashed our customer acquisition costs in half. The 3D animation quality looks like a high-end Hollywood commercial studio produced it.",
    metricResult: "5.2x ROAS",
    metricLabel: "Meta Ads Scaled to ₹1 Crore/mo",
    platform: "Meta Ads & YouTube",
    verified: true
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Founder & CMO",
    company: "Solis Health Tech",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Before working with Ali Asif, our creative fatigue was killing our ad performance. Asif provided a constant stream of high-converting AI video hooks that revived our campaigns and took us from 1.8x to 4.6x blended returns.",
    metricResult: "+240% Lift",
    metricLabel: "Monthly Revenue Growth",
    platform: "Full-Stack Paid Media",
    verified: true
  },
  {
    id: "test-3",
    name: "Rahul Nambiar",
    role: "Co-Founder & CEO",
    company: "HyperKinetix SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "His deep understanding of performance marketing fundamentals paired with modern generative AI video tools is rare. He doesn't just make pretty videos; he engineers ad assets that convert cold traffic into qualified customers.",
    metricResult: "48k Signups",
    metricLabel: "In 90-day campaign",
    platform: "B2B SaaS Scaling",
    verified: true
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "ai-video-ads-2026-guide",
    slug: "ai-video-ads-scaling-playbook",
    title: "How We Used AI Video Ads to Scale E-Commerce ROAS from 1.9x to 5.4x in 30 Days",
    excerpt: "Discover the exact prompt workflows, 3-second hook testing matrices, and Meta Advantage+ bidding strategies that beat creative fatigue permanently.",
    content: [
      "In the modern performance marketing landscape, ad creative is the new targeting. With Meta and Google algorithms automating audience segmentation, the single biggest leverage point for media buyers is high-velocity creative testing.",
      "Traditional video shoots cost ₹2,00,000+ and take 3-4 weeks. By implementing an AI-augmented video pipeline with tools like Runway Gen-3 and ElevenLabs, we generate and test 15 novel visual angles in under 48 hours.",
      "Key Step 1: The 'Pattern-Interrupt' Hook. The first 1.8 seconds must shatter the user's scroll trance using dynamic physics, 3D macro-rotations, or counter-intuitive statements.",
      "Key Step 2: Advantage+ Campaign Structuring. Feed 5-8 variations of the winning hook into a dynamic creative ad set, allowing Meta's machine learning to match the exact visual variation to individual customer personas.",
      "Key Step 3: Rapid Iteration. Kill fatigue by refreshing background environments and text overlays while maintaining the core winning hook mechanism."
    ],
    category: "AI Video Ads",
    readTime: "5 min read",
    publishedAt: "Aug 2026",
    author: {
      name: "Ali Asif P S",
      role: "Digital Marketer & AI Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Meta Ads", "Creative Testing", "AI Video", "ROAS Optimization"],
    seoKeywords: ["AI Video Ads for E-Commerce", "Meta Ads Scaling Strategy", "High ROAS Video Creative"],
    coverGradient: "from-cyan-900/60 to-blue-900/40"
  },
  {
    id: "mastering-meta-capi-2026",
    slug: "mastering-meta-capi-post-ios",
    title: "The Ultimate Meta CAPI & Server Tracking Blueprint for 99% Event Match Quality",
    excerpt: "Why browser pixels are losing 35% of purchase signals, and how custom Cloud Gateway CAPI bridges recover your lost attribution data.",
    content: [
      "If you are relying solely on the client-side Meta Pixel, you are leaving up to a third of your conversion data on the table. Ad blockers, strict browser privacy shields, and iOS updates silently drop key purchase triggers.",
      "By setting up server-side Conversions API (CAPI) with first-party cookie hashing, we achieve an Event Match Quality (EMQ) score above 9.2/10.",
      "This unlocks deeper machine learning optimization for Meta's bidding algorithms, directly leading to lower CPMs and higher attribution accuracy.",
      "Actionable Takeaway: Always deduplicate event IDs between browser and server events using a unique order ID token."
    ],
    category: "Paid Media Strategy",
    readTime: "7 min read",
    publishedAt: "Jul 2026",
    author: {
      name: "Ali Asif P S",
      role: "Digital Marketer & AI Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Meta CAPI", "Attribution", "Data Tracking", "Conversion Rate"],
    seoKeywords: ["Meta Server CAPI Setup", "Event Match Quality Improvement", "Post-iOS Attribution"],
    coverGradient: "from-purple-900/60 to-indigo-900/40"
  },
  {
    id: "3d-motion-conversion-psychology",
    slug: "3d-motion-conversion-psychology",
    title: "The Neuro-Aesthetics of 3D Motion: Why Spatial Animations Convert 3x Better Than Stills",
    excerpt: "How spatial depth perception and micro-physics cues trigger dopamine and subconscious brand trust in high-ticket buyers.",
    content: [
      "Human visual processing gives prioritized neurological weight to objects with perceived physical mass and spatial depth.",
      "When a consumer sees a product floating with photorealistic ambient occlusion and specular reflections, their brain perceives tactile ownership before ever touching the item.",
      "In our A/B tests across 40 consumer product campaigns, 3D animated renders consistently generated a 310% higher click-to-cart rate compared to flat photography.",
      "Explore how you can incorporate 3D spatial cues into your web hero sections and social ads without blowing your production budget."
    ],
    category: "3D & Neuromarketing",
    readTime: "6 min read",
    publishedAt: "Jun 2026",
    author: {
      name: "Ali Asif P S",
      role: "Digital Marketer & AI Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Neuromarketing", "3D Animation", "E-Commerce CRO", "Visual Storytelling"],
    seoKeywords: ["3D Product Animation Conversion", "Neuromarketing in Video Ads", "High Ticket CRO"],
    coverGradient: "from-amber-900/60 to-rose-900/40"
  }
];

export const CAMPAIGN_ANALYTICS_DATA: CampaignAnalytics[] = [
  {
    id: "meta-q3-scale",
    name: "Cyberpunk Energy Video Scaling (Advantage+)",
    platform: "Meta Ads",
    spend: 345000,
    revenue: 1870000,
    roas: 5.42,
    impressions: 3840000,
    clicks: 188920,
    ctr: 4.92,
    conversions: 4210,
    status: "Active & Scaling",
    chartData: [
      { date: "Day 1", roas: 3.2, spend: 5000, conversions: 45 },
      { date: "Day 5", roas: 4.1, spend: 12000, conversions: 110 },
      { date: "Day 10", roas: 4.8, spend: 25000, conversions: 240 },
      { date: "Day 15", roas: 5.2, spend: 40000, conversions: 420 },
      { date: "Day 20", roas: 5.6, spend: 65000, conversions: 690 },
      { date: "Day 25", roas: 5.4, spend: 82000, conversions: 880 },
      { date: "Day 30", roas: 5.42, spend: 116000, conversions: 1825 }
    ]
  },
  {
    id: "google-pmax-funnel",
    name: "Google Performance Max & Search Retargeting",
    platform: "Google Ads",
    spend: 215000,
    revenue: 1053500,
    roas: 4.90,
    impressions: 1450000,
    clicks: 60175,
    ctr: 4.15,
    conversions: 1650,
    status: "Optimizing",
    chartData: [
      { date: "W1", roas: 3.8, spend: 45000, conversions: 310 },
      { date: "W2", roas: 4.2, spend: 52000, conversions: 390 },
      { date: "W3", roas: 4.7, spend: 58000, conversions: 440 },
      { date: "W4", roas: 4.9, spend: 60000, conversions: 510 }
    ]
  },
  {
    id: "youtube-shorts-spark",
    name: "YouTube Shorts & Reels Video Ads",
    platform: "YouTube Ads",
    spend: 155000,
    revenue: 651000,
    roas: 4.20,
    impressions: 4120000,
    clicks: 156560,
    ctr: 3.80,
    conversions: 1890,
    status: "Active & Scaling",
    chartData: [
      { date: "Week 1", roas: 3.1, spend: 30000, conversions: 280 },
      { date: "Week 2", roas: 3.9, spend: 40000, conversions: 460 },
      { date: "Week 3", roas: 4.4, spend: 42000, conversions: 540 },
      { date: "Week 4", roas: 4.2, spend: 43000, conversions: 610 }
    ]
  }
];

export const INITIAL_NOTIFICATIONS: PushNotificationItem[] = [
  {
    id: "notif-1",
    title: "Meta Campaign Hit 5.42x ROAS 🚀",
    message: "Cyberpunk Energy Drink campaign just broke ₹18,70,000 in attributed revenue with zero creative fatigue.",
    timeAgo: "12m ago",
    read: false,
    category: "campaign"
  },
  {
    id: "notif-2",
    title: "New AI 3D Video Cut Ready 🎬",
    message: "Batch #4 of high-retention video variations for Instagram Reels has finished neural upscaling.",
    timeAgo: "2h ago",
    read: false,
    category: "ai-video"
  },
  {
    id: "notif-3",
    title: "Monthly Growth Report Generated 📊",
    message: "Your consolidated omnichannel marketing report in INR is available with deep cohort analysis.",
    timeAgo: "1d ago",
    read: true,
    category: "system"
  }
];

export const INITIAL_INVOICES: InvoiceItem[] = [
  {
    id: "INV-2026-0891",
    date: "Aug 15, 2026",
    service: "AI Video Ads & Creative Testing Engine (Monthly Retainer)",
    amount: 34999.00,
    status: "Paid",
    invoicePdfUrl: "#"
  },
  {
    id: "INV-2026-0842",
    date: "Jul 15, 2026",
    service: "Full-Stack Performance Marketing & Media Buying",
    amount: 79999.00,
    status: "Paid",
    invoicePdfUrl: "#"
  },
  {
    id: "INV-2026-0798",
    date: "Jun 20, 2026",
    service: "Cinematic 3D Commercial Product Reveal",
    amount: 45000.00,
    status: "Paid",
    invoicePdfUrl: "#"
  }
];
