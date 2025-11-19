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
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to make a W step? Let's talk
          </p>
          
          <div className="pt-4">
            <Button
              onClick={handleWorkWithUs}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium group"
            >
              Work with us
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
