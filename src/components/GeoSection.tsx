import flagUS from "@/assets/flag-us.png";
import flagEU from "@/assets/flag-eu.png";
import flagChina from "@/assets/flag-china.png";
import flagSouthKorea from "@/assets/flag-southkorea.jpg";
import flagRussia from "@/assets/flag-russia.jpg";
import flagKazakhstan from "@/assets/flag-kazakhstan.jpg";
import flagUkraine from "@/assets/flag-ukraine.png";
import flagPhilippines from "@/assets/flag-philippines.png";
import flagThailand from "@/assets/flag-thailand.jpg";
import flagUAE from "@/assets/flag-uae.png";
import flagBrazil from "@/assets/flag-brazil.png";

const countries = [
  { name: "United States", flag: flagUS },
  { name: "European Union", flag: flagEU },
  { name: "China", flag: flagChina },
  { name: "South Korea", flag: flagSouthKorea },
  { name: "Russia", flag: flagRussia },
  { name: "Kazakhstan", flag: flagKazakhstan },
  { name: "Ukraine", flag: flagUkraine },
  { name: "Philippines", flag: flagPhilippines },
  { name: "Thailand", flag: flagThailand },
  { name: "UAE", flag: flagUAE },
  { name: "Brazil", flag: flagBrazil }
];

const GeoSection = () => {
  return (
    <section id="reach" className="py-16 relative overflow-hidden bg-gray-light/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Global Reach
        </h3>
        
        <div className="relative">
          <div className="flex animate-scroll-right">
            {/* First set of flags */}
            {countries.map((country, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 text-center"
              >
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`}
                  className="w-24 h-16 object-cover rounded-md shadow-md mb-2 mx-auto"
                />
                <p className="text-sm text-muted-foreground">{country.name}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {countries.map((country, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 text-center"
              >
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`}
                  className="w-24 h-16 object-cover rounded-md shadow-md mb-2 mx-auto"
                />
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
