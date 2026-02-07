import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { getServiceBySlug } from "@/data/services";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Service Not Found</h1>
            <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/services")}>View All Services</Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <SEOHead
        title={`${service.title} — Buzz Creatorz`}
        description={service.description}
        canonical={`https://buzzcreatorz.xyz/services/${service.slug}`}
      />
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{service.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              {service.badge && (
                <Badge className="bg-secondary text-secondary-foreground font-semibold">
                  {service.badge}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {service.heroDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              What You <span className="text-gradient">Get</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our <span className="text-gradient">Process</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.process.map((step, i) => (
                <Card
                  key={i}
                  className="border-border bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{step.step}</h3>
                    </div>
                    <p className="text-muted-foreground pl-11">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint transition-all duration-300"
                onClick={() => window.open("https://calendly.com/buzzcreatorz", "_blank")}
              >
                {service.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open("https://t.me/heychild", "_blank")}
              >
                Message on TG
              </Button>
            </div>
            <Button
              variant="ghost"
              className="mt-6 text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/services")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Services
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
