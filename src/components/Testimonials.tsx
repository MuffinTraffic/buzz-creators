import catapultLogo from "@/assets/client-catapult.jpg";
import aLogo from "@/assets/client-a.jpg";
import bunnyLogo from "@/assets/client-bunny.jpg";
import greenLogo from "@/assets/client-green.jpg";
import pinkLogo from "@/assets/client-pink.jpg";
import beerLogo from "@/assets/client-beer.jpg";
import smileyLogo from "@/assets/client-smiley.jpg";
import fhLogo from "@/assets/client-fh.jpg";

const clients = [
  { name: "Catapult", logo: catapultLogo },
  { name: "Client A", logo: aLogo },
  { name: "Bunny", logo: bunnyLogo },
  { name: "Green", logo: greenLogo },
  { name: "Pink", logo: pinkLogo },
  { name: "Beer 2.0", logo: beerLogo },
  { name: "Smiley", logo: smileyLogo },
  { name: "FH", logo: fhLogo },
  { name: "50+ More Clients", isCount: true }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-6">
            {clients.slice(0, 6).map((client, index) => (
              <div 
                key={index}
                className="aspect-square rounded-full overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-110 bg-background"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {clients.slice(6).map((client, index) => (
              <div 
                key={index}
                className={`aspect-square rounded-full ${
                  client.isCount 
                    ? 'bg-background border-2 border-foreground' 
                    : 'overflow-hidden border-2 border-border bg-background'
                } hover:border-primary transition-all duration-300 flex items-center justify-center hover:scale-110 ${
                  client.isCount ? 'flex-col' : ''
                }`}
              >
                {client.isCount ? (
                  <>
                    <span className="text-3xl font-bold text-foreground">50+</span>
                    <span className="text-xs text-muted-foreground mt-1">More Clients</span>
                  </>
                ) : (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
