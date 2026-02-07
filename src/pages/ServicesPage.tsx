import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { allServices } from "@/data/services";

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
                className="relative border-border bg-card backdrop-blur-sm hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
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
