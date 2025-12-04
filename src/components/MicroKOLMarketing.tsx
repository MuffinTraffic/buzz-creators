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
      icon: Target,
      title: "2-3 Posts a week",
      description: "Consistent presence with quality content"
    },
    {
      icon: TrendingUp,
      title: "4-5 Retweets a week",
      description: "Amplify your message across networks"
    },
    {
      icon: Zap,
      title: "Replies on 100% of your tweets",
      description: "Full engagement with your content"
    },
    {
      icon: Users,
      title: "1,000+ avg. views per tweet",
      description: "Guaranteed reach and visibility"
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-gray-light/30">
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
                Real visibility. Genuine engagement. Organic growth. Fully Managed Service: We handle outreach, content, approvals, posting and weekly reports.
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
              <h3 className="text-lg font-semibold">Why Choose Micro-KOLs Campaign?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">4k–15k real followers</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Wallchain X Score ≥70</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">500+ creators with 1.5M+ combined audience</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Niche-relevant, high-engagement accounts</p>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                size="lg"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
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
