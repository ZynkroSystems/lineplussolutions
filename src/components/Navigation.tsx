import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const emergencyPhone = "+44 7725 041 270";
  const emergencyTel = "tel:+447725041270";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-md" : "bg-card shadow-sm"
      }`}
    >
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <div className="font-semibold text-center sm:text-left">
              Emergency Breakdown? Rapid response available.
            </div>
            <div className="flex items-center justify-center gap-3 sm:justify-end">
              <span className="hidden sm:inline">Call now for urgent support</span>
              <a
                href={emergencyTel}
                className="inline-flex items-center justify-center rounded-md border border-secondary-foreground/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-secondary-foreground/10 sm:text-sm"
              >
                Call {emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Lineplus Solutions logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
              loading="lazy"
            />
            <div className="font-heading font-bold text-xl md:text-2xl text-primary">
              Lineplus<span className="text-secondary">Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-card border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.path
                    ? "text-secondary bg-muted"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Button asChild variant="default" className="w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Service
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
