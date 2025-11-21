import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Boris",
    role: "Founder, Runner Bot",
    content: "Almost $0 cost marketing, native bd communitcations and performance-focused SMM lead to user subscriptions and obtaining good B2B deals.",
    rating: 5
  },
  {
    name: "Nabrouia",
    role: "Founder, Urban Node",
    content: "Business Development & Collaborations were on high level, we made it possible to monetize the product on the 1st week of our work.",
    rating: 5
  },
  {
    name: "Alex",
    role: "Founder, Catapult",
    content: "Nice job on getting tier1 KOLs onboard, we significantly increased volume on our platform!",
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
