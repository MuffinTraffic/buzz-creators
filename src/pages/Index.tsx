import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MicroKOLMarketing from "@/components/MicroKOLMarketing";
import KOLNetwork from "@/components/KOLNetwork";
import Stats from "@/components/Stats";
import GeoSection from "@/components/GeoSection";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Buzz Creatorz",
  "url": "https://buzzcreatorz.xyz",
  "logo": "https://buzzcreatorz.xyz/assets/buzz-logo-new.png",
  "description": "BuzzCreatorz is a Web3 influencer marketing and creator growth agency that connects blockchain and crypto projects with trusted KOLs, alpha communities, and data-backed campaigns.",
  "sameAs": ["https://x.com/buzzcreatorz"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://calendly.com/buzzcreatorz"
  },
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web3 KOLs Campaigns" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Micro-KOLs Campaign" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SocialFi & InfoFi Growth Campaigns" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Development" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Twitter KOL Tweet Boosting" } }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Buzz Creatorz — Web3 KOL Marketing Agency"
        description="BuzzCreatorz is a Web3 influencer marketing agency connecting crypto projects with trusted KOLs, alpha communities, and data-backed campaigns to accelerate adoption."
        canonical="https://buzzcreatorz.xyz/"
        jsonLd={homepageJsonLd}
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <MicroKOLMarketing />
        <KOLNetwork />
        <Stats />
        <GeoSection />
        <PerformanceDashboard />
        <Testimonials />
        <CaseStudies />
        <Team />
        <Contact />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
