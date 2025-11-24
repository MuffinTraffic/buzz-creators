import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, Zap } from "lucide-react";

const MicroKOLMarketing = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: Target,
      title: "Targeted Reach",
      description: "Connect with highly engaged niche audiences"
    },
    {
      icon: Users,
      title: "Authentic Engagement",
      description: "Build genuine connections with active communities"
    },
    {
      icon: TrendingUp,
      title: "Higher ROI",
      description: "Better conversion rates at lower costs"
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description: "Fast campaign deployment and measurable impact"
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Micro-KOL Marketing Strategy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
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
                <span className="px-4 py-1.5 bg-orange/10 text-orange rounded-full text-sm font-semibold">
                  Most Popular Service
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Micro-KOL <span className="text-gradient">Marketing</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Leverage the power of niche influencers to create authentic connections and drive meaningful engagement. Our extensive network of micro-KOLs delivers targeted reach with exceptional conversion rates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:border-orange/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-orange" />
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
              <h3 className="text-lg font-semibold">Why Choose Micro-KOL Marketing?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Higher engagement rates (up to 60% more) compared to macro influencers</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">More cost-effective campaigns with better ROI</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Authentic voice that resonates with specific communities</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Scalable approach across multiple niches simultaneously</p>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange to-orange-light text-white hover:opacity-90 transition-all"
                size="lg"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-orange text-orange hover:bg-orange/10"
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
