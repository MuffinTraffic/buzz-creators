import { Rocket, Target, TrendingUp, Zap, Globe, Lock, Users, BarChart3, MessageSquare, Video, type LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  badge?: string;
  heroDescription: string;
  benefits: string[];
  process: { step: string; description: string }[];
  cta: string;
}

export const allServices: ServiceData[] = [
  {
    slug: "web3-kols-campaigns",
    icon: Rocket,
    title: "Web3 KOLs Campaigns",
    description: "Connect with top-tier Key Opinion Leaders to amplify your brand's reach and credibility in the Web3 space.",
    details: "We match your project with the right KOLs across Twitter, YouTube, and Telegram to drive authentic awareness and engagement.",
    heroDescription: "We connect your project with the most influential voices in Web3 — handpicked KOLs across Twitter, YouTube, and Telegram who drive authentic reach, trust, and adoption for your brand.",
    benefits: [
      "Access to 500+ vetted Web3 KOLs across all major platforms",
      "Custom-matched influencer selection based on your niche and goals",
      "End-to-end campaign management from briefing to reporting",
      "Real-time performance tracking and transparent analytics",
      "Multi-platform campaigns spanning Twitter, YouTube, and Telegram",
      "Guaranteed deliverables with performance benchmarks"
    ],
    process: [
      { step: "Discovery", description: "We deep-dive into your project, target audience, and goals to build a tailored KOL strategy." },
      { step: "KOL Selection", description: "Our team curates a shortlist of top-performing KOLs that align with your brand and audience." },
      { step: "Campaign Execution", description: "We manage all KOL communications, content approvals, and publishing schedules." },
      { step: "Reporting & Optimization", description: "Real-time dashboards and post-campaign reports with actionable insights." }
    ],
    cta: "Launch Your KOL Campaign"
  },
  {
    slug: "micro-kols-campaign",
    icon: Target,
    title: "Micro-KOLs Campaign",
    description: "Leverage niche influencers for authentic engagement and targeted community growth.",
    details: "Our organic network of 500+ micro-creators delivers up to 250 original posts and 600 retweets monthly with nonstop engagement.",
    badge: "Hot",
    heroDescription: "Tap into our organic network of 500+ micro-creators who deliver grassroots buzz, authentic engagement, and community-driven growth at scale — without the influencer price tag.",
    benefits: [
      "Network of 500+ verified micro-KOLs with real engagement",
      "Up to 250 original posts and 600+ retweets monthly",
      "Nonstop organic engagement that builds algorithmic momentum",
      "Cost-effective alternative to macro-influencer campaigns",
      "Authentic community voices that drive trust and conversions",
      "Flexible packages tailored to campaign scope and budget"
    ],
    process: [
      { step: "Campaign Brief", description: "Define your messaging, target audience, and key deliverables." },
      { step: "Creator Activation", description: "We activate our micro-KOL network with your campaign assets and talking points." },
      { step: "Content Wave", description: "Coordinated posting waves create sustained visibility and trending momentum." },
      { step: "Performance Review", description: "Detailed analytics on reach, engagement, and community growth metrics." }
    ],
    cta: "Start Your Micro-KOL Campaign"
  },
  {
    slug: "socialfi-infofi-growth-campaigns",
    icon: Lock,
    title: "SocialFi & InfoFi Growth Campaigns",
    description: "Our team help you get into Cookie3, Wallchain, MindoAI, Kaito and manage the entire process for you.",
    details: "Full lifecycle management across top Web3 data platforms — from onboarding and integration to performance tracking and optimization.",
    heroDescription: "We manage your presence across the most important SocialFi and InfoFi platforms — Cookie3, Wallchain, MindoAI, and Kaito — handling onboarding, integration, and ongoing optimization so you can focus on building.",
    benefits: [
      "Full onboarding and integration with Cookie3, Wallchain, MindoAI, and Kaito",
      "Ongoing performance tracking and optimization across all platforms",
      "Strategic positioning to maximize your InfoFi score and visibility",
      "Expert management of SocialFi campaigns and reward programs",
      "Data-driven insights to improve your Web3 social presence",
      "Dedicated account manager for platform communications"
    ],
    process: [
      { step: "Platform Audit", description: "We assess your current presence and identify the highest-impact platforms for your project." },
      { step: "Onboarding", description: "Full setup, integration, and verification across selected SocialFi/InfoFi platforms." },
      { step: "Growth Strategy", description: "Custom strategies for each platform to maximize scores, visibility, and engagement." },
      { step: "Ongoing Management", description: "Continuous optimization, reporting, and platform relationship management." }
    ],
    cta: "Grow Your SocialFi Presence"
  },
  {
    slug: "business-development",
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic partnerships and growth initiatives to scale your Web3 project.",
    details: "We identify and secure partnerships with exchanges, launchpads, ecosystems, and complementary protocols to accelerate your growth.",
    heroDescription: "We open doors to strategic partnerships with exchanges, launchpads, ecosystems, and protocols — accelerating your project's growth through high-value relationships and deal flow.",
    benefits: [
      "Access to our extensive network of exchanges, launchpads, and ecosystems",
      "Strategic partnership identification and outreach",
      "Deal structuring and negotiation support",
      "Co-marketing and cross-promotion opportunities",
      "Ecosystem integration and collaboration facilitation",
      "Long-term growth strategy and roadmap development"
    ],
    process: [
      { step: "Needs Assessment", description: "We map your growth goals and identify the partnerships that will have the highest impact." },
      { step: "Outreach & Matching", description: "Leveraging our network to connect you with the right partners and stakeholders." },
      { step: "Deal Facilitation", description: "We support negotiations, structuring, and closing strategic partnerships." },
      { step: "Integration Support", description: "Ongoing support to ensure partnerships deliver measurable value." }
    ],
    cta: "Accelerate Your Growth"
  },
  {
    slug: "social-media-management",
    icon: Globe,
    title: "Social Media Management",
    description: "Professional management of your social presence across all major Web3 platforms.",
    details: "Daily content creation, community engagement, and strategic posting schedules across Twitter, Discord, and Telegram.",
    heroDescription: "We take your social media off your plate — daily content creation, community engagement, and strategic posting across Twitter, Discord, and Telegram to keep your audience growing and engaged.",
    benefits: [
      "Daily content creation tailored to Web3 audiences",
      "Strategic posting schedules optimized for maximum reach",
      "Community engagement and conversation management",
      "Brand voice development and content guidelines",
      "Cross-platform consistency across Twitter, Discord, and Telegram",
      "Monthly content calendars and performance reporting"
    ],
    process: [
      { step: "Brand Immersion", description: "We learn your brand voice, goals, and audience to create authentic content." },
      { step: "Content Planning", description: "Monthly content calendars with themes, key dates, and campaign integration." },
      { step: "Daily Execution", description: "Consistent posting, engagement, and community management across all channels." },
      { step: "Monthly Review", description: "Performance analytics, insights, and strategy adjustments for continuous improvement." }
    ],
    cta: "Level Up Your Social Media"
  },
  {
    slug: "twitter-kol-tweet-boosting",
    icon: Zap,
    title: "Twitter KOL Tweet Boosting",
    description: "Get visibility by driving long-term boosting on top of your tweets from web3 communities.",
    details: "Sustained organic engagement from real Web3 communities that builds algorithmic momentum and lasting visibility.",
    badge: "New",
    heroDescription: "Supercharge your tweets with sustained organic engagement from real Web3 communities — building algorithmic momentum and lasting visibility that keeps your content in the spotlight.",
    benefits: [
      "Sustained organic engagement from real Web3 community members",
      "Algorithmic momentum that extends your content's lifespan",
      "Targeted boosting from communities aligned with your niche",
      "Long-term visibility beyond initial posting window",
      "Complementary strategy that amplifies KOL campaign results",
      "Transparent engagement metrics and reporting"
    ],
    process: [
      { step: "Tweet Selection", description: "We identify your highest-potential tweets for strategic boosting." },
      { step: "Community Activation", description: "Real Web3 communities organically engage with your selected content." },
      { step: "Momentum Building", description: "Sustained engagement waves build algorithmic momentum over time." },
      { step: "Impact Analysis", description: "Tracking reach multipliers, engagement rates, and follower growth from boosted content." }
    ],
    cta: "Boost Your Tweets"
  },
  {
    slug: "community-building",
    icon: Users,
    title: "Community Building",
    description: "Build and nurture engaged Web3 communities across Discord, Telegram, and other platforms.",
    details: "From moderator hiring to event planning, AMAs, and reward programs — we create communities that stick around.",
    heroDescription: "We build and nurture thriving Web3 communities from the ground up — hiring moderators, planning events, hosting AMAs, and running reward programs that keep your community engaged and growing.",
    benefits: [
      "End-to-end community setup across Discord and Telegram",
      "Professional moderator hiring and training",
      "Regular AMAs, events, and engagement activities",
      "Reward and incentive program design and management",
      "Community health monitoring and sentiment analysis",
      "Scalable community infrastructure that grows with your project"
    ],
    process: [
      { step: "Community Design", description: "We design your community structure, channels, roles, and engagement framework." },
      { step: "Team Building", description: "Hiring, training, and onboarding dedicated community moderators." },
      { step: "Activation", description: "Launch events, AMAs, and reward programs to kickstart community engagement." },
      { step: "Growth & Retention", description: "Ongoing strategies to grow membership and keep your community active and healthy." }
    ],
    cta: "Build Your Community"
  },
  {
    slug: "campaign-analytics-reporting",
    icon: BarChart3,
    title: "Campaign Analytics & Reporting",
    description: "Data-driven insights and transparent reporting on all campaign performance metrics.",
    details: "Real-time dashboards tracking reach, engagement, wallet signups, and ROI across every campaign touchpoint.",
    heroDescription: "Get full transparency with real-time dashboards tracking reach, engagement, wallet signups, and ROI across every campaign — so you always know exactly what's working.",
    benefits: [
      "Real-time performance dashboards across all campaigns",
      "Comprehensive metrics: reach, engagement, conversions, and ROI",
      "Wallet signup and on-chain activity tracking",
      "Custom KPI frameworks tailored to your project goals",
      "Weekly and monthly performance reports",
      "Actionable insights and optimization recommendations"
    ],
    process: [
      { step: "KPI Definition", description: "We align on the metrics that matter most for your project's success." },
      { step: "Dashboard Setup", description: "Custom real-time dashboards tracking all campaign touchpoints." },
      { step: "Ongoing Monitoring", description: "Continuous data collection and performance tracking across all channels." },
      { step: "Strategic Reporting", description: "Regular reports with insights, trends, and data-driven optimization recommendations." }
    ],
    cta: "Get Campaign Insights"
  },
  {
    slug: "telegram-discord-marketing",
    icon: MessageSquare,
    title: "Telegram & Discord Marketing",
    description: "Targeted marketing campaigns within Telegram and Discord channels for direct community engagement.",
    details: "AMA hosting, raid coordination, channel growth strategies, and bot-assisted engagement campaigns.",
    heroDescription: "We run targeted marketing campaigns inside Telegram and Discord — AMA hosting, channel growth strategies, and coordinated engagement campaigns that drive direct community interaction.",
    benefits: [
      "Targeted marketing campaigns within active Web3 communities",
      "Professional AMA hosting and event coordination",
      "Channel growth strategies that attract genuine members",
      "Bot-assisted engagement and automation campaigns",
      "Cross-channel promotion between Telegram and Discord",
      "Community sentiment monitoring and feedback collection"
    ],
    process: [
      { step: "Channel Strategy", description: "We develop targeted campaigns for the most relevant Telegram and Discord communities." },
      { step: "Content Creation", description: "Custom messaging, graphics, and campaign materials for each platform." },
      { step: "Campaign Launch", description: "Coordinated campaigns across selected channels with real-time management." },
      { step: "Results Analysis", description: "Post-campaign analytics on member growth, engagement, and conversion metrics." }
    ],
    cta: "Launch Your Community Campaign"
  },
  {
    slug: "video-content-clips",
    icon: Video,
    title: "Video Content & Clips",
    description: "Professional short-form video content tailored for Web3 audiences across platforms.",
    details: "From KOL video reviews to viral clip creation — engaging video content that drives awareness and conversions.",
    badge: "Coming Soon",
    heroDescription: "We produce professional short-form video content — from KOL video reviews to viral clips — designed to capture attention, drive awareness, and convert viewers into community members.",
    benefits: [
      "Professional short-form video production for Web3",
      "KOL video reviews and testimonial content",
      "Viral clip creation optimized for social platforms",
      "Script writing and creative direction",
      "Multi-platform formatting (Twitter, YouTube Shorts, TikTok)",
      "Performance tracking and content optimization"
    ],
    process: [
      { step: "Creative Brief", description: "We define your video strategy, messaging, and target audience." },
      { step: "Production", description: "Professional scripting, filming/editing, and post-production." },
      { step: "Distribution", description: "Multi-platform publishing with optimized formats for each channel." },
      { step: "Performance Review", description: "View counts, engagement rates, and conversion tracking across all platforms." }
    ],
    cta: "Create Video Content"
  }
];

/** Core services shown on homepage (first 6) */
export const coreServices = allServices.slice(0, 6);

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  allServices.find((s) => s.slug === slug);
