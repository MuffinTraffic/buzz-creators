const stats = [
  { number: "50+", label: "Clients Worldwide" },
  { number: "2000+", label: "KOLs Network" },
  { number: "150+", label: "Campaigns Launched" },
  { number: "10M+", label: "Impressions Generated" },
  { number: "$30M+", label: "Raised by our clients" }
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 relative bg-gray-light/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Buzz Creatorz in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 p-6 rounded-lg bg-card backdrop-blur-sm border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
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
