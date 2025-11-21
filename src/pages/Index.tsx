import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KOLNetwork from "@/components/KOLNetwork";
import Stats from "@/components/Stats";
import GeoSection from "@/components/GeoSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <KOLNetwork />
      <Stats />
      <GeoSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
