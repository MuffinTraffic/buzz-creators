const kols = [
  { name: "KOL 1", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" },
  { name: "KOL 2", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2" },
  { name: "KOL 3", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3" },
  { name: "KOL 4", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4" },
  { name: "KOL 5", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=5" },
  { name: "KOL 6", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=6" },
  { name: "KOL 7", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=7" },
  { name: "KOL 8", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=8" },
  { name: "KOL 9", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=9" },
  { name: "KOL 10", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=10" }
];

const KOLNetwork = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          KOL Network
        </h3>
        
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of KOLs */}
            {kols.map((kol, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-card border-2 border-border shadow-lg">
                  <img 
                    src={kol.image} 
                    alt={kol.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {kols.map((kol, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-card border-2 border-border shadow-lg">
                  <img 
                    src={kol.image} 
                    alt={kol.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KOLNetwork;
