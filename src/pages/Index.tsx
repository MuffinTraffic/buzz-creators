import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MicroKOLMarketing from "@/components/MicroKOLMarketing";
import KOLNetwork from "@/components/KOLNetwork";
import Stats from "@/components/Stats";
import GeoSection from "@/components/GeoSection";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <MicroKOLMarketing />
      <KOLNetwork />
      <Stats />
      <GeoSection />
      <PerformanceDashboard />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
