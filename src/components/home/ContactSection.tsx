import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Improve Your{" "}
              <span className="text-secondary">Maintenance Program?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Get in touch for service bookings, PPM program setup, or maintenance
              consultancy
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:info@lineplus.co.uk"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    info@lineplus.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a
                    href="tel:+441234567890"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +44 (0) 1234 567 890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Response Time</div>
                  <div className="text-muted-foreground">
                    Within 24 hours for all inquiries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
