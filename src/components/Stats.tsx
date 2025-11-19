const stats = [
  { number: "50+", label: "Projects Launched" },
  { number: "$10M+", label: "Revenue Generated" },
  { number: "500K+", label: "Community Members" },
  { number: "95%", label: "Client Satisfaction" }
];

const Stats = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Muffin in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
