import { Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import buzzLogo from "@/assets/buzz-logo-new.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-lg font-bold text-foreground"
            >
              <img src={buzzLogo} alt="Buzz Creatorz Logo" className="w-8 h-8" />
              Buzz Creatorz
            </a>
            <p className="text-sm text-muted-foreground">
              The Demand Generation KOL Marketing Agency for Web3 projects.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services" onClick={(e) => { e.preventDefault(); navigate("/services"); }} className="hover:text-primary transition-colors">Web3 KOLs Campaigns</a></li>
              <li><a href="/services" onClick={(e) => { e.preventDefault(); navigate("/services"); }} className="hover:text-primary transition-colors">Micro-KOLs Campaign</a></li>
              <li><a href="/services" onClick={(e) => { e.preventDefault(); navigate("/services"); }} className="hover:text-primary transition-colors">SocialFi & InfoFi Growth</a></li>
              <li><a href="/services" onClick={(e) => { e.preventDefault(); navigate("/services"); }} className="hover:text-primary transition-colors">Twitter KOL Tweet Boosting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection("#case-studies"); }} className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection("#blog"); }} className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection("#team"); }} className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }} className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://x.com/buzzcreatorz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Follow Buzz Creatorz on Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="https://t.me/heychild" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Message us on Telegram
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Buzz Creatorz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;