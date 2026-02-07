import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { coreServices } from "@/data/services";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No cookie-cutter plays. Just smart, tailored Web3 marketing that fits your vibe and hits the mark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <Card 
              key={index}
              className="relative border-border bg-card backdrop-blur-sm hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
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
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint transition-all duration-300 group"
            onClick={() => navigate('/services')}
          >
            Explore More
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
