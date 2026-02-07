import { useState, useRef } from "react";
import { Menu, X, Twitter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import buzzLogo from "@/assets/buzz-logo-new.png";
import { allServices } from "@/data/services";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { href: "#case-studies", label: "Case Studies" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (link: { href: string; label: string }) => {
    if (location.pathname !== "/") {
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
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
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigate("/services")}
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-popover border border-border rounded-lg shadow-lg z-[100] animate-fade-in overflow-hidden">
                  <div className="py-2">
                    <a
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/services");
                        setServicesOpen(false);
                      }}
                      className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors border-b border-border"
                    >
                      All Services
                    </a>
                    {allServices.map((service) => (
                        <a
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/services/${service.slug}`);
                            setServicesOpen(false);
                          }}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {service.title}
                        </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
            <div className="flex flex-col gap-1">
              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1 mb-2">
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/services");
                      setIsOpen(false);
                    }}
                    className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-1.5"
                  >
                    All Services
                  </a>
                  {allServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/services/${service.slug}`);
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors py-1.5"
                      >
                        <Icon size={14} className="text-primary flex-shrink-0" />
                        {service.title}
                      </a>
                    );
                  })}
                </div>
              )}

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
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold w-fit mt-2">
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
