import { useState } from "react";
import { Menu, X, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import buzzLogo from "@/assets/buzz-logo-green.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#micro-kols", label: "Micro-KOLs" },
    { href: "#performance", label: "Dashboard" },
    { href: "#testimonials", label: "Clients" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={buzzLogo} alt="Buzz Creators Logo" className="w-8 h-8 md:w-10 md:h-10" />
            Buzz Creators
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
              Clipper service coming soon!
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-teal-light text-primary-foreground hover:opacity-90 transition-all"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold w-fit">
                Clipper service coming soon!
              </span>
              <div className="flex items-center gap-4 py-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-primary to-teal-light text-primary-foreground hover:opacity-90 transition-all mt-2"
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;