import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const handleWorkWithUs = () => {
    // Replace with your actual Calendly link
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing border frame */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 blur-sm"></div>
          
          {/* Main content card */}
          <div className="relative bg-card/95 backdrop-blur-sm rounded-3xl border border-primary/30 shadow-2xl p-12 md:p-16">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Elevate Your Brand<br />
                in the <span className="text-gradient">Decentralized World?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Web3 growth, without the fluff.
              </p>
              
              <div className="pt-4">
                <Button
                  onClick={handleWorkWithUs}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium group shadow-elegant"
                >
                  Book a call
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
