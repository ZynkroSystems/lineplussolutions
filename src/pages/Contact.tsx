import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Professional Maintenance Support{" "}
              <span className="text-accent">for Your Bakery</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Whether you need emergency repairs, PPM program setup, or audit
              documentation, we're here to help
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground">
                    We respond to all inquiries within 24 hours. For emergency
                    breakdowns affecting production, we offer faster response times.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Email</div>
                      <a
                        href="mailto:info@lineplus.co.uk"
                        className="text-muted-foreground hover:text-secondary transition-colors text-lg"
                      >
                        info@lineplus.co.uk
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Best for general inquiries and consultancy requests
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Phone</div>
                      <a
                        href="tel:+441234567890"
                        className="text-muted-foreground hover:text-secondary transition-colors text-lg"
                      >
                        +44 (0) 1234 567 890
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        For urgent breakdown support and emergency callouts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Response Time</div>
                      <div className="text-muted-foreground text-lg">
                        Within 24 hours
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Emergency breakdown response available outside standard hours for
                        critical production failures
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Service Areas</div>
                      <div className="text-muted-foreground text-lg">
                        United Kingdom
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        We serve industrial bakeries across the UK
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info Box */}
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <h3 className="font-bold text-lg mb-3">What to Include in Your Message</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Type of bakery equipment you operate</li>
                    <li>• Current maintenance challenges or needs</li>
                    <li>• Production schedule and shift patterns</li>
                    <li>• Whether this is an emergency breakdown or planned service</li>
                    <li>• Any upcoming audit requirements</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Ready to Reach Out Yet?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn more about our services, read about our experience, or browse our
              professional maintenance templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                View Our Services
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                About Our Experience
              </a>
              <a
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Browse Templates
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
