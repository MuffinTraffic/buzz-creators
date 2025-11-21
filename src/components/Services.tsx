import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, TrendingUp, Zap, Globe, Lock } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "KOL Marketing",
    description: "Connect with top-tier Key Opinion Leaders to amplify your brand's reach and credibility in the Web3 space."
  },
  {
    icon: Target,
    title: "Micro-KOL Marketing",
    description: "Leverage niche influencers for authentic engagement and targeted community growth.",
    badge: "Hot"
  },
  {
    icon: Lock,
    title: "Go-to-Market Strategy",
    description: "Your team builds the solution. Our team builds the demand."
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic partnerships and growth initiatives to scale your Web3 project."
  },
  {
    icon: Globe,
    title: "Social Media Management",
    description: "Professional management of your social presence across all major Web3 platforms."
  },
  {
    icon: Zap,
    title: "X Organic Boosting",
    description: "Build and nurture engaged communities that drive long-term project success.",
    badge: "New"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Web3 marketing solutions tailored to your project's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="relative border-border bg-card backdrop-blur-sm hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {service.badge && (
                <Badge 
                  className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold"
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
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
