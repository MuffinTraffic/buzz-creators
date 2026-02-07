import { useState } from "react";
import { Menu, X, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import buzzLogo from "@/assets/buzz-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#services", label: "Services", route: "/services" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (link: { href: string; label: string; route?: string }) => {
    if (location.pathname !== "/") {
      // Navigate home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img src={buzzLogo} alt="Buzz Creatorz Logo" className="w-8 h-8 md:w-10 md:h-10" />
            Buzz Creatorz
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
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
                href="https://x.com/buzzcreatorz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Follow Buzz Creatorz on Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <Button
              onClick={() => window.open('https://calendly.com/buzzcreatorz', '_blank')}
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
                    handleNavClick(link);
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
                  href="https://x.com/buzzcreatorz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="Follow Buzz Creatorz on Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <Button
                onClick={() => window.open('https://calendly.com/buzzcreatorz', '_blank')}
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