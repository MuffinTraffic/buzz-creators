const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "European Union", flag: "🇪🇺" },
  { name: "China", flag: "🇨🇳" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "Taiwan", flag: "🇹🇼" },
  { name: "Philippines", flag: "🇵🇭" }
];

const GeoSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gray-light/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          GEO we work with
        </h3>
        
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of flags */}
            {countries.map((country, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 text-center"
              >
                <div className="text-6xl mb-2">{country.flag}</div>
                <p className="text-sm text-muted-foreground">{country.name}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {countries.map((country, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 text-center"
              >
                <div className="text-6xl mb-2">{country.flag}</div>
                <p className="text-sm text-muted-foreground">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoSection;
