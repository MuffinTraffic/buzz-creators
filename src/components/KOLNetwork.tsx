import kol1 from "@/assets/kol-1.jpg";
import kol2 from "@/assets/kol-2.jpg";
import kol3 from "@/assets/kol-3.jpg";
import kol4 from "@/assets/kol-4.jpg";
import kol5 from "@/assets/kol-5.jpg";
import kol6 from "@/assets/kol-6.jpg";
import kol7 from "@/assets/kol-7.jpg";
import kol8 from "@/assets/kol-8.jpg";
import kol9 from "@/assets/kol-9.jpg";
import kol10 from "@/assets/kol-10.jpg";
import kol11 from "@/assets/kol-11.jpg";
import kol12 from "@/assets/kol-12.jpg";
import kol13 from "@/assets/kol-13.jpg";

const kols = [
  { name: "KOL 1", image: kol1 },
  { name: "KOL 2", image: kol2 },
  { name: "KOL 3", image: kol3 },
  { name: "KOL 4", image: kol4 },
  { name: "KOL 5", image: kol5 },
  { name: "KOL 6", image: kol6 },
  { name: "KOL 7", image: kol7 },
  { name: "KOL 8", image: kol8 },
  { name: "KOL 9", image: kol9 },
  { name: "KOL 10", image: kol10 },
  { name: "KOL 11", image: kol11 },
  { name: "KOL 12", image: kol12 },
  { name: "KOL 13", image: kol13 }
];

const KOLNetwork = () => {
  return (
    <section id="kol-network" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-primary">1000+</span> Top KOL Network
        </h3>
        
        <div className="relative">
          <div className="flex animate-scroll-right">
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