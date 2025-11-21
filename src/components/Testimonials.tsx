const clients = [
  { name: "Client 1", logo: "🐱" },
  { name: "Client 2", logo: "👤" },
  { name: "Client 3", logo: "🐸" },
  { name: "Client 4", logo: "💗" },
  { name: "First Light", logo: "🔥" },
  { name: "Client 6", logo: "📱" },
  { name: "Client 7", logo: "💎" },
  { name: "Client 8", logo: "⚡" },
  { name: "Client 9", logo: "⭕" },
  { name: "200+ More Clients", logo: "200+", isCount: true }
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
                className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border hover:border-primary transition-all duration-300 flex items-center justify-center text-4xl hover:scale-110"
              >
                {client.logo}
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
                    : 'bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border'
                } hover:border-primary transition-all duration-300 flex items-center justify-center hover:scale-110 ${
                  client.isCount ? 'flex-col' : ''
                }`}
              >
                {client.isCount ? (
                  <>
                    <span className="text-3xl font-bold text-foreground">200+</span>
                    <span className="text-xs text-muted-foreground mt-1">More Clients</span>
                  </>
                ) : (
                  <span className="text-4xl">{client.logo}</span>
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
