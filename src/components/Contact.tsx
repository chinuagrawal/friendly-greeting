import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210",
      action: "Chat Now",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@kanhalibrary.in",
      href: "mailto:info@kanhalibrary.in",
      action: "Send Email",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border/50 hover-lift group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-card-foreground truncate">{item.value}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  {item.action}
                </Button>
              </a>
            ))}

            {/* Address Card */}
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-semibold text-card-foreground mb-2">Kanha Library</p>
                  <p className="text-muted-foreground text-sm">
                    Near Main Market, City Center<br />
                    Your City, State - 123456
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Operating Hours</p>
                  <p className="font-semibold text-card-foreground mb-2">Open Daily</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Morning: 6:00 AM - 12:00 PM</p>
                    <p>Evening: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0175!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kanha Library Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
