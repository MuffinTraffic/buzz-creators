import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, Zap } from "lucide-react";
import microKolCampaign from "@/assets/micro-kol-campaign.jpg";

const MicroKOLMarketing = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: Users,
      title: "500+ creators",
      description: "Extensive network of organic micro-influencers"
    },
    {
      icon: TrendingUp,
      title: "1.5M+ combined audience",
      description: "Massive reach across Web3 communities"
    },
    {
      icon: Target,
      title: "4k–15k real followers",
      description: "Authentic, engaged audiences"
    },
    {
      icon: Zap,
      title: "Wallchain X Score ≥70",
      description: "High-quality, verified accounts"
    }
  ];

  return (
    <section id="micro-kols" className="py-24 relative bg-gradient-to-b from-background to-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={microKolCampaign}
                alt="Micro-KOLs Campaign Strategy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-navy">500+</p>
                      <p className="text-sm text-gray">Micro-KOLs Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                  Most Popular Service
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Micro-KOLs <span className="text-gradient">Campaign</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real visibility. Genuine engagement. Organic growth.
                <br />
                Fully Managed Service: We handle outreach, content, approvals, posting and weekly reports.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What do you get monthly?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_10px_hsl(130_65%_55%/0.6)]" />
                  <p className="text-muted-foreground">Up to 250 high-quality original posts about the project</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_10px_hsl(130_65%_55%/0.6)]" />
                  <p className="text-muted-foreground">Up to 600 retweets</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_10px_hsl(130_65%_55%/0.6)]" />
                  <p className="text-muted-foreground">Nonstop engagement with your content</p>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => window.open('https://t.me/HeyChild', '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                size="lg"
              >
                Request Sales Deck
              </Button>
              <Button 
                onClick={() => window.open('https://calendly.com/buzzcreatorz', '_blank')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroKOLMarketing;