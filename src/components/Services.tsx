import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, TrendingUp, Zap, Globe, Lock } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "NFT Marketing",
    description: "Launch and promote your NFT collection with targeted campaigns that reach collectors and enthusiasts."
  },
  {
    icon: Target,
    title: "Community Building",
    description: "Build engaged, loyal communities across Discord, Twitter, and Web3 social platforms."
  },
  {
    icon: TrendingUp,
    title: "DeFi Growth",
    description: "Scale your DeFi protocol with data-driven marketing strategies and influencer partnerships."
  },
  {
    icon: Zap,
    title: "Token Launches",
    description: "Execute successful token launches with strategic marketing, PR, and community engagement."
  },
  {
    icon: Globe,
    title: "Web3 Branding",
    description: "Create a distinctive brand identity that resonates with the decentralized community."
  },
  {
    icon: Lock,
    title: "Crypto PR",
    description: "Get featured in top crypto media outlets and build credibility in the space."
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
              className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
            >
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
