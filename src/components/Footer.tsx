import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Lineplus Solutions Ltd
            </h3>
            <p className="text-sm opacity-90 mb-2">
              Specialist mechanical engineering for industrial bakeries
            </p>
            <p className="text-sm opacity-90">
              Company No: [Registration Number]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <p className="text-sm opacity-90">
              Serving industrial bakeries across the United Kingdom
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <p>© {currentYear} Lineplus Solutions Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-xs opacity-70">
            Website by AutomateFlow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
