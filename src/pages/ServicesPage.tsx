import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Target, TrendingUp, Zap, Globe, Lock, Users, BarChart3, MessageSquare, Video, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const allServices = [
  {
    icon: Rocket,
    title: "Web3 KOLs Campaigns",
    description: "Connect with top-tier Key Opinion Leaders to amplify your brand's reach and credibility in the Web3 space.",
    details: "We match your project with the right KOLs across Twitter, YouTube, and Telegram to drive authentic awareness and engagement."
  },
  {
    icon: Target,
    title: "Micro-KOLs Campaign",
    description: "Leverage niche influencers for authentic engagement and targeted community growth.",
    details: "Our organic network of 500+ micro-creators delivers up to 250 original posts and 600 retweets monthly with nonstop engagement.",
    badge: "Hot"
  },
  {
    icon: Lock,
    title: "SocialFi & InfoFi Growth Campaigns",
    description: "Our team help you get into Cookie3, Wallchain, MindoAI, Kaito and manage the entire process for you.",
    details: "Full lifecycle management across top Web3 data platforms — from onboarding and integration to performance tracking and optimization."
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic partnerships and growth initiatives to scale your Web3 project.",
    details: "We identify and secure partnerships with exchanges, launchpads, ecosystems, and complementary protocols to accelerate your growth."
  },
  {
    icon: Globe,
    title: "Social Media Management",
    description: "Professional management of your social presence across all major Web3 platforms.",
    details: "Daily content creation, community engagement, and strategic posting schedules across Twitter, Discord, and Telegram."
  },
  {
    icon: Zap,
    title: "Twitter KOL Tweet Boosting",
    description: "Get visibility by driving long-term boosting on top of your tweets from web3 communities.",
    details: "Sustained organic engagement from real Web3 communities that builds algorithmic momentum and lasting visibility.",
    badge: "New"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Build and nurture engaged Web3 communities across Discord, Telegram, and other platforms.",
    details: "From moderator hiring to event planning, AMAs, and reward programs — we create communities that stick around."
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics & Reporting",
    description: "Data-driven insights and transparent reporting on all campaign performance metrics.",
    details: "Real-time dashboards tracking reach, engagement, wallet signups, and ROI across every campaign touchpoint."
  },
  {
    icon: MessageSquare,
    title: "Telegram & Discord Marketing",
    description: "Targeted marketing campaigns within Telegram and Discord channels for direct community engagement.",
    details: "AMA hosting, raid coordination, channel growth strategies, and bot-assisted engagement campaigns."
  },
  {
    icon: Video,
    title: "Video Content & Clips",
    description: "Professional short-form video content tailored for Web3 audiences across platforms.",
    details: "From KOL video reviews to viral clip creation — engaging video content that drives awareness and conversions.",
    badge: "Coming Soon"
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="All Services — Buzz Creatorz | Web3 Marketing Solutions"
        description="End-to-end Web3 marketing: KOL campaigns, micro-KOLs, SocialFi growth, business development, social media management, and Twitter KOL tweet boosting."
        canonical="https://buzzcreatorz.xyz/services"
      />
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              All <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end Web3 marketing solutions tailored to your project's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {allServices.map((service, index) => (
              <Card 
                key={index}
                className="relative border-border bg-card backdrop-blur-sm hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {service.badge && (
                  <Badge 
                    className="absolute -top-2 -right-2 z-10 bg-secondary text-secondary-foreground font-semibold"
                  >
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <p className="text-sm text-foreground/70">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint transition-all duration-300"
                onClick={() => window.open('https://calendly.com/buzzcreatorz', '_blank')}
              >
                Book a Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://t.me/heychild', '_blank')}
              >
                Message on TG
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
