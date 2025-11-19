import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Founder, CryptoVerse",
    content: "Muffin helped us launch our NFT collection to a sold-out success. Their Web3 expertise and marketing strategies are unmatched.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "CMO, DeFi Protocol",
    content: "The community building strategies they implemented grew our Discord from 500 to 50K members in just 3 months. Incredible results.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, MetaDAO",
    content: "Professional, responsive, and they truly understand the Web3 space. Our token launch exceeded all expectations thanks to their work.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border bg-card backdrop-blur-sm hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
